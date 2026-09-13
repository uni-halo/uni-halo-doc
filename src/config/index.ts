export const AppConfigs = {
	/**
	 * 获取基础URL
	 * @returns {string} - 返回基础URL
	 */
	getBaseUrl() {
		if (import.meta.env.DEV) {
			return '';
		} else {
			return 'https://uni-halo.ialley.cn';
		}
	},
	/**
	 * 获取静态资源的地址（JSON 数据等托管在 uni-halo-static 仓库的 docs 目录）
	 * */
	getStaticBaseUrl() {
		if (import.meta.env.DEV) {
			return '';
		}
		return 'https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static/docs'
	}
};
