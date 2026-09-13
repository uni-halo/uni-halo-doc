export const AppConfigs = {
	/**
	 * 获取基础URL
	 * @returns {string} - 返回基础URL
	 */
	getBaseUrl() {
		if (import.meta.env.DEV) {
			return '';
		} else {
			return 'https://uni-halo.925i.cn';
		}
	},
	/**
	 * 获取静态资源的地址
	 * */
	getStaticBaseUrl() {
		if (import.meta.env.DEV) {
			return '';
		}
		return 'https://gcore.jsdelivr.net/gh/ialley-workshop-open/uni-halo-doc/src/public'
	}
};
