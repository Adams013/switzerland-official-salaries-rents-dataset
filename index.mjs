import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const pkg = require("./index.js");

export const wages = pkg.wages;
export const rents = pkg.rents;
export const costOfLiving = pkg.costOfLiving;
export const healthPremiums = pkg.healthPremiums;
export const getOccupationWages = pkg.getOccupationWages;
export const getCityRent = pkg.getCityRent;
export const getCityCostOfLiving = pkg.getCityCostOfLiving;
export const getCantonHealthPremium2027 = pkg.getCantonHealthPremium2027;

export default pkg;
