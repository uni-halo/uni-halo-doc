# 移动端登录 · 接口文档（App 端对接）

> 面向 **App / 小程序端开发者**。站点管理员请先看 [《移动端登录 · 使用与配置文档》](./mobile-login.md)。
>
> 适用插件版本：**uni-halo v3.0.0+**，Halo：**2.26.0+**

---

## 一、概述

插件为移动端提供一套**匿名可调用**的登录接口，支持：

- 账号密码登录（Halo 账号体系）
- 微信小程序一键登录（`code2Session`）
- 已登录状态下绑定微信

登录成功后返回一个 **Halo 原生个人访问令牌（PAT，`pat_` 前缀）**。该令牌与 Halo 后台「个人中心 → 个人令牌」创建的令牌完全同构，可直接访问 Halo 原生 API 与本插件的全部接口，无需再做一次 token 兑换。

同时返回：用户摘要、角色集合、以及由角色展开的 RBAC 规则列表，供 App 端做菜单/按钮级显隐控制。

### 设计要点

| 要点 | 说明 |
|---|---|
| 无状态 | 服务端不维护会话，令牌自带全部信息 |
| 权限可控 | 令牌权限由站点管理员在插件设置页配置，上限不超过用户在 Halo 已有的角色（不会提权） |
| 自动过期 | 令牌带 `exp` 声明，到期自动失效；过期令牌由插件定时清理 |
| 登录入口可发现 | App 端应先拉 `getConfigs` 决定展示哪些登录入口，避免硬编码 |

---

## 二、接入准备

### 2.1 Base URL

```
https://<你的站点域名>/apis/api.unihalo.ialley.cn/v1alpha1/plugins/uni-halo
```

下文所有路径均相对此 Base URL，简记为 `{base}`。

例如登录接口完整地址为：

```
POST https://example.com/apis/api.unihalo.ialley.cn/v1alpha1/plugins/uni-halo/auth/login
```

### 2.2 请求头

| 场景 | Header |
|---|---|
| 登录类接口（匿名） | `Content-Type: application/json` |
| 已登录接口 | 追加 `Authorization: Bearer <token>` |
| 文件上传 | `Content-Type: multipart/form-data` |

> **注意**：`Authorization` 的值就是登录返回的 `token` 原样拼接，前缀 `Bearer ` 后有一个空格。

### 2.3 通用响应

成功时直接返回业务对象（HTTP 200）。

失败时返回以下状态码之一，响应体固定为 `{ code, message }`：

| 状态码 | 含义 | 客户端应做什么 |
|---|---|---|
| **401** | 凭据/身份类问题（未登录、密码错、账号禁用…） | **不要**自动重试，按 `code` 提示用户 |
| **429** | 登录尝试过于频繁（限流） | **应当**退避后再试，提示用户等待 |

```json
{
  "code": "BAD_CREDENTIALS",
  "message": "用户名或密码错误"
}
```

> 其余状态码（400/404/500）属于 Halo 框架层错误，App 端按网络异常处理即可。

---

## 三、接口清单

| 方法 | 路径 | 说明 | 需要登录 |
|---|---|---|:---:|
| GET | `{base}/getConfigs` | 获取全部公开配置（含登录开关） | ❌ |
| GET | `{base}/getConfigs/loginConfig` | 只获取登录配置分组 | ❌ |
| POST | `{base}/auth/login` | 账号密码登录 | ❌ |
| POST | `{base}/auth/login/wechat` | 微信小程序一键登录 | ❌ |
| POST | `{base}/auth/bind/wechat` | 绑定微信（当前登录账号） | ✅ |
| GET | `{base}/auth/profile` | 获取当前登录用户与权限 | ✅ |
| POST | `{base}/auth/logout` | 登出（吊销当前令牌） | ✅ |

---

## 四、接口详解

### 4.1 获取登录配置

```
GET {base}/getConfigs/loginConfig
```

**响应示例**

```json
{
  "loginConfig": {
    "enabled": true,
    "passwordLoginEnabled": true,
    "wechatLoginEnabled": true
  }
}
```

**字段说明**

| 字段 | 类型 | 说明 |
|---|---|---|
| `enabled` | boolean | 登录能力总开关。为 `false` 时不要展示任何登录入口 |
| `passwordLoginEnabled` | boolean | 是否开放账号密码登录 |
| `wechatLoginEnabled` | boolean | 是否开放微信一键登录 |

> **安全提示**：该接口只下发这三个开关。`appId`、`appSecret`、权限策略、默认角色、令牌有效期等属于服务端决策，**不会下发到客户端**。App 端也绝不应向服务端索取这些值。

**App 端建议行为**

```js
const { enabled, passwordLoginEnabled, wechatLoginEnabled } = loginConfig;
if (!enabled) return showVisitorMode();
showPasswordTab = passwordLoginEnabled;
showWechatButton = wechatLoginEnabled;
```

---

### 4.2 账号密码登录

```
POST {base}/auth/login
Content-Type: application/json
```

**请求体**

| 字段 | 类型 | 必填 | 说明 |
|---|---|:---:|---|
| `username` | string | ✅ | Halo 用户名（`metadata.name`，非显示昵称） |
| `password` | string | ✅ | 明文密码，走 HTTPS 传输 |

```json
{ "username": "zhangsan", "password": "your-password" }
```

**响应示例**

```json
{
  "token": "pat_eyJhbGciOiJSUzI1NiJ9...",
  "tokenType": "Bearer",
  "expiresAt": "2026-10-14T09:00:00Z",
  "patName": "pat-zhangsan-a1b2c3d4",
  "user": {
    "name": "zhangsan",
    "displayName": "张三",
    "avatar": "https://example.com/upload/avatar.png",
    "email": "zhang@example.com"
  },
  "roles": ["authenticated", "role-template-post-contributor"],
  "permissions": [
    {
      "apiGroups": ["api.content.halo.run"],
      "resources": ["posts"],
      "verbs": ["get", "list"]
    }
  ]
}
```

**响应字段**

| 字段 | 类型 | 说明 |
|---|---|---|
| `token` | string | 访问令牌，客户端需持久化保存 |
| `tokenType` | string | 固定 `Bearer` |
| `expiresAt` | string | ISO-8601 过期时间（UTC），**客户端应据此提前续登** |
| `patName` | string | 令牌在 Halo 中的资源名，登出时服务端使用；客户端无需关心 |
| `user.name` | string | 用户名（唯一标识，不可改） |
| `user.displayName` | string | 显示昵称 |
| `user.avatar` | string \| null | 头像地址，**可能为 `null`，需本地兜底占位图** |
| `user.email` | string \| null | 邮箱 |
| `roles` | string[] | 本次令牌实际持有的角色 |
| `permissions` | object[] | RBAC 规则展开结果，用于前端鉴权显隐 |

**错误码**

| code | HTTP | 含义 | 建议处理 |
|---|---|:---:|---|
| `LOGIN_DISABLED` | 401 | 站点未开启登录能力 | 进入游客模式 |
| `PASSWORD_LOGIN_DISABLED` | 401 | 未开放密码登录 | 隐藏密码登录入口 |
| `BAD_REQUEST` | 401 | 缺少请求体 | 检查请求 |
| `BAD_CREDENTIALS` | 401 | 用户名或密码错误 | 提示用户重试 |
| `USER_DISABLED` | 401 | 账号已被禁用 | 提示联系管理员 |
| `TWO_FACTOR_REQUIRED` | 401 | 该账号开启二次验证 | 提示改用微信登录或在网页端登录 |
| `TOO_MANY_ATTEMPTS` | **429** | 失败次数过多，账号或 IP 被临时锁定 | **退避重试**，提示等待；不要立刻重发 |

> **限流规则**：同一用户名连续失败 **5 次**，或同一来源 IP 累计失败 **20 次**，锁定 **15 分钟**。
> 用户名维度在登录成功后立即清零。App 端收到 429 后请直接提示用户等待，不要自动重试 ——
> 继续重发只会延长锁定。

---

### 4.3 微信小程序一键登录

```
POST {base}/auth/login/wechat
Content-Type: application/json
```

**请求体**

| 字段 | 类型 | 必填 | 说明 |
|---|---|:---:|---|
| `code` | string | ✅ | `wx.login()` 获取的临时登录凭证，5 分钟有效、一次性 |

```json
{ "code": "0e3Xx000abc..." }
```

**响应**：与 4.2 完全相同。

**服务端流程**

```
1. code + appId + appSecret → 微信 code2Session → openid / unionid
2. 查 UserConnection 绑定关系（先 unionid，未命中回落 openid）
   ├─ 已绑定 → 校验账号未被禁用 → 签发令牌
   └─ 未绑定 → 自动创建 Halo 用户 → 建立绑定 → 签发令牌
```

> **微信登录与密码登录是两条独立的能力**，互不为前提。微信一键登录没有「请先注册」的中间态：
> 首次登录即自动建号。自动注册的账号特征：
>
> - 用户名 = 站点配置的前缀 + 两位递增序号（如 `unihalo01`、`unihalo02`），**Halo 用户名不可修改**
> - 昵称 = `微信用户` + 同序号（如 `微信用户01`）
> - 初始密码为**随机强密码**，不对外下发 —— 这类账号通过微信登录使用

**错误码**

| code | 含义 | 建议处理 |
|---|---|---|
| `LOGIN_DISABLED` | 未开启登录能力 | 游客模式 |
| `WECHAT_LOGIN_DISABLED` | 未开放微信登录 | 隐藏微信按钮 |
| `WECHAT_LOGIN_FAILED` | code 无效/过期或密钥未配置 | 提示重试；持续失败则联系站长检查密钥 |
| `REGISTER_FAILED` | 自动注册失败（序号连续被占用等极端情况） | 提示稍后重试 |
| `USER_DISABLED` | 该账号已被站点禁用 | 提示联系管理员 |

**小程序端示例**

```js
uni.login({
  provider: 'weixin',
  success: async ({ code }) => {
    const res = await request.post('/auth/login/wechat', { code });
    saveToken(res.token, res.expiresAt);
  }
});
```

---

### 4.4 绑定微信

将当前登录账号与微信身份关联，之后即可一键登录。

```
POST {base}/auth/bind/wechat
Authorization: Bearer <token>
Content-Type: application/json
```

**请求体**

```json
{ "code": "0e3Xx000abc..." }
```

**响应**

```json
{ "success": true }
```

**错误码**：`UNAUTHENTICATED`（未登录）、`WECHAT_LOGIN_DISABLED`、`WECHAT_LOGIN_FAILED`、`LOGIN_DISABLED`

> 若该微信已绑定其他账号，服务端会把绑定关系**改挂到当前账号**下（以当前登录者为准）。

---

### 4.5 获取当前用户

```
GET {base}/auth/profile
Authorization: Bearer <token>
```

**响应示例**

```json
{
  "user": {
    "name": "zhangsan",
    "displayName": "张三",
    "avatar": "https://example.com/upload/avatar.png",
    "email": "zhang@example.com"
  },
  "roles": ["authenticated", "role-template-post-contributor"],
  "permissions": [
    { "apiGroups": ["api.content.halo.run"], "resources": ["posts"], "verbs": ["get", "list"] }
  ]
}
```

> **注意**：该接口**不返回 `token`**，是只读的。令牌只在登录接口一次性下发，客户端自行缓存到过期。
> 这样设计是为了避免「调用一次资料接口就多出一枚令牌」，也让重新登录成为收口旧令牌的唯一路径。

用法：启动时用本地缓存的令牌调一次，校验会话是否仍然有效（并刷新用户资料与权限），
**不要**用它做轮询。

**错误码**：`UNAUTHENTICATED`（未登录或令牌已失效）、`USER_DISABLED`（账号已被禁用）、`LOGIN_DISABLED`

---

### 4.6 登出

吊销当前使用的令牌。

```
POST {base}/auth/logout
Authorization: Bearer <token>
```

**响应**

```json
{ "success": true }
```

**错误码**：`UNAUTHENTICATED`

> 登出是**吊销**语义：令牌被标记 `revoked` 后立即失效。客户端仍需同步清除本地缓存。
> 已吊销的令牌会在 7 天后被定时清理任务物理删除。

---

### 4.7 扫码绑定微信（PC 端 UC 场景，小程序侧对接）

PC 浏览器用户在 UC「个人资料 → 微信绑定」点「扫码绑定」会得到一张二维码，
**二维码内容即 `qrContent` 字符串本身**（不是 URL）：

```
uh-bindwx-{ticket}
```

**二维码前缀约定**：`uh-bindwx-` 标识「绑定微信」业务（`uh-` 站点前缀 + `bindwx` 业务）。
小程序端扫码后按前缀分发：**只有以该前缀开头的内容才进入绑定确认流程**，
其余提示「不支持的二维码」；`-` 后面的部分即 `ticket`。

小程序端需要做两件事：

1. **扫码识别**：`uni.scanCode` / wx.scanCode 拿到字符串，校验 `uh-bindwx-` 前缀，截取 ticket；
2. **确认绑定**：跳转确认页（展示站点信息），用户点「确认绑定」后调 confirm 接口。

**确认绑定接口（匿名，无需登录）**：

```
POST {base}/auth/bind/wechat/qr/tickets/{ticket}/confirm
Content-Type: application/json
```

**请求体**（`wx.login()` 取得的 code，服务端用它换取微信身份）：

```json
{ "code": "0e3Xx000abc..." }
```

**响应**

```json
{ "success": true }
```

**错误码**：

| code | HTTP | 含义 |
|---|---|---|
| `BIND_TICKET_INVALID` | 400 | 票据不存在 / 已使用 / 已过期（提示用户重新生成二维码） |
| `WECHAT_LOGIN_DISABLED` | 401 | 站点未开启微信登录 |
| `WECHAT_LOGIN_FAILED` | 401 | code 无效（重试一次 `wx.login()`）或密钥未配置 |

> **绑定语义**：绑定目标是**生成二维码时登录的那个 UC 账号**（服务端在签发票据时已锁定，
> confirm 不接受指定用户名）。若该微信已绑定其他账号，绑定关系会改挂到目标账号（以票
> 据为准）。票据 5 分钟过期、单次有效。

---

## 五、令牌生命周期

### 5.1 存储

- 建议存入小程序 `uni.setStorageSync` / App 安全存储
- **不要**写入 `url`、`log`、埋点上报

### 5.2 过期判断

```js
function isExpired(expiresAt) {
  // 提前 5 分钟视为过期，留出网络耗时
  return Date.parse(expiresAt) - Date.now() < 5 * 60 * 1000;
}
```

令牌有效期由站点管理员配置（默认 30 天）。过期后的表现为：任何需要登录的接口返回 401 `UNAUTHENTICATED`。

### 5.3 自动清理

插件每 6 小时执行一次清理：

- 删除带 `unihalo.ialley.cn/managed-by=uni-halo` 标签且已过期的令牌
- 删除该标签下已吊销超过 7 天的令牌
- **不会**碰用户在 Halo 后台手动创建的任何令牌

> 这意味着清理是安全的，但客户端**不能**依赖「服务端会帮我清」，仍需自行管理本地缓存。

---

## 六、权限模型

### 6.1 角色决定权限

令牌权限 = 站点管理员配置的**权限策略** + **用户自身在 Halo 的角色**，两者共同决定，遵循「**只减不增**」原则：

| 策略 | 行为 |
|---|---|
| `inherit` 继承 | 令牌权限 = 该用户在 Halo 的全部角色权限 |
| `intersect` 裁剪 | 令牌权限 = 配置角色 ∩ 用户已有角色 |

**关键点：无论哪种策略，令牌权限都不会超过用户本人在 Halo 已有的权限。** 给一个「投稿者」配置管理员角色是无效的。

### 6.2 前端如何使用 permissions

`permissions` 是由角色模板递归展开的 RBAC 规则，形如：

```json
{ "apiGroups": ["api.content.halo.run"], "resources": ["posts"], "verbs": ["create"] }
```

App 端可用于粗粒度显隐：

```js
const canCreatePost = permissions.some(p =>
  p.apiGroups.includes('api.content.halo.run') &&
  p.resources.includes('posts') &&
  p.verbs.includes('create')
);
```

> ⚠️ `permissions` **仅供 UI 显隐参考，不能作为安全边界**。真正的鉴权在服务端完成。App 端隐藏按钮不代表接口不可调用，也不代表接口一定可调用（服务端可能因其他原因拒绝）。**始终以接口实际返回的 401/403 为准。**

### 6.3 无权限的表现

若令牌最终没有任何角色，`permissions` 为空数组 `[]`。此时只能调用匿名接口，App 端应降级为游客态。

---

## 七、推荐接入时序

```
App 启动
  │
  ├─ 本地有 token 且未过期 ─────────────► 直接使用
  │
  └─ 无 token / 已过期
        │
        ▼
  GET /getConfigs/loginConfig
        │
        ├─ enabled=false ──────────────► 游客模式
        │
        └─ 展示可用登录入口
              │
              ├─ 微信按钮 ──► wx.login() ──► POST /auth/login/wechat
              │                              （未绑定会自动建号，无中间态）
              │
              └─ 密码表单 ──► POST /auth/login
                                   │
                                   ▼
                        保存 token / expiresAt / user
                                   │
                                   ▼
                        Authorization: Bearer <token> 访问业务接口
```

**会话恢复**：启动时若无本地缓存或已过期，重新走一遍登录；**不要**用 `/auth/profile` 轮询（见 4.5 的已知问题）。

---

## 八、完整示例（uni-app）

```ts
// utils/auth.ts
const BASE = 'https://example.com/apis/api.unihalo.ialley.cn/v1alpha1/plugins/uni-halo';
const KEY = 'uh_token';

interface Session {
  token: string;
  expiresAt: string;
  user: { name: string; displayName: string; avatar: string | null; email: string | null };
  roles: string[];
  permissions: { apiGroups: string[]; resources: string[]; verbs: string[] }[];
}

export const auth = {
  get(): Session | null {
    const s = uni.getStorageSync(KEY);
    if (!s) return null;
    if (Date.parse(s.expiresAt) - Date.now() < 5 * 60 * 1000) {
      uni.removeStorageSync(KEY);
      return null;
    }
    return s;
  },

  save(res: Session) {
    uni.setStorageSync(KEY, res);
  },

  async loginByPassword(username: string, password: string) {
    const [, data] = await uni.request({
      url: `${BASE}/auth/login`,
      method: 'POST',
      header: { 'Content-Type': 'application/json' },
      data: { username, password }
    });
    if ((data as any).code) throw new Error((data as any).message);
    auth.save(data as Session);
    return data as Session;
  },

  async loginByWechat() {
    const [, loginRes] = await uni.login({ provider: 'weixin' });
    const code = (loginRes as any).code;
    const [, data] = await uni.request({
      url: `${BASE}/auth/login/wechat`,
      method: 'POST',
      header: { 'Content-Type': 'application/json' },
      data: { code }
    });
    if ((data as any).code === 'NEED_BIND') return { needBind: true };
    auth.save(data as Session);
    return data as Session;
  },

  async logout() {
    const s = auth.get();
    if (s) {
      await uni.request({
        url: `${BASE}/auth/logout`,
        method: 'POST',
        header: { Authorization: `Bearer ${s.token}` }
      }).catch(() => {});
    }
    uni.removeStorageSync(KEY);
  }
};
```

---

## 九、注意事项

1. **必须用 HTTPS**。令牌以明文 Bearer 传输，HTTP 下等同公开密码。
2. **`code` 一次性**。`wx.login()` 的 code 只能用一次，失败后必须重新调用 `wx.login()`。
3. **头像可能为 `null`**。Halo 的机制是：用户未上传头像附件时，`spec.avatar` 会被强制清空。App 端必须准备本地占位图。
4. **用户名 ≠ 昵称**。密码登录用的是 `name`（Halo 用户名），展示用 `displayName`。微信自动注册的用户名形如 `unihalo01`（前缀由站点配置），**Halo 用户名不可修改**。
5. **2FA 账号不能用密码登录**。开启二次验证的账号会返回 `TWO_FACTOR_REQUIRED`，需引导改用微信登录。
6. **别硬编码登录入口**。站点可能只开放其中一种方式，务必先读 `getConfigs`。
7. **登录失败会限流**。收到 429 `TOO_MANY_ATTEMPTS` 时应当退避，不要自动重发 —— 继续重发只会延长锁定。

---

## 十、错误码速查

| code | HTTP | 出现接口 | 含义 |
|---|---|---|---|
| `TOO_MANY_ATTEMPTS` | **429** | login | 失败次数过多，账号或 IP 被临时锁定 |
| `BAD_REQUEST` | 401 | 全部 POST | 缺少请求体 |
| `UNAUTHENTICATED` | 401 | bind / profile / logout | 未登录或令牌失效 |
| `LOGIN_DISABLED` | 401 | 全部 | 登录能力未开启 |
| `PASSWORD_LOGIN_DISABLED` | 401 | login | 密码登录未开启 |
| `WECHAT_LOGIN_DISABLED` | 401 | login/wechat, bind/wechat | 微信登录未开启 |
| `WECHAT_LOGIN_FAILED` | 401 | login/wechat, bind/wechat | code 无效或密钥未配置 |
| `REGISTER_FAILED` | 401 | login/wechat | 自动注册失败，需重试 |
| `BAD_CREDENTIALS` | 401 | login | 用户名或密码错误 |
| `USER_DISABLED` | 401 | login, login/wechat | 账号被禁用 |
| `TWO_FACTOR_REQUIRED` | 401 | login | 账号开启二次验证 |

---

## 附：待优化项（影响对接，请关注）

| 项 | 现状 | 影响 | 计划 |
|---|---|---|---|
| 资料更新接口缺失 | 微信登录无法改昵称头像 | 用户资料停留在默认值 | 见配置文档「路线图」 |
| 令牌续期 | 到期必须重新登录 | 用户需重新走一次登录 | 计划支持临近过期无感刷新 |

> **已修复**：`/auth/profile` 不再重复签发令牌（改为只读）；登录接口已加入失败限流（429）。

对接过程中遇到上述限制，请联系插件维护者确认最新版本。
