
/**
 * 检查window对象中是否存在某个属性。
 * @param {any} propertyName - 要检查的属性名称。
 * @returns {boolean} - 如果属性存在于window对象中，则返回true；否则返回false。
 * */
export const checkPropertyInWindow = (propertyName: any) => {
	return Object.hasOwn(window, propertyName);
};
