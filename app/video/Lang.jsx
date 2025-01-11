const Lang = {
	en: () => import("@/app/lang/en.json").then((module) => module.default),
	bn: () => import("@/app/lang/bn.json").then((module) => module.default),
};
export const getLang = async (local) => Lang[local]();
