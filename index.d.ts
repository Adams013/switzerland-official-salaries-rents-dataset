export interface OccupationWage {
  isco_code: string;
  isco_major: string;
  occupation_en: string;
  occupation_de: string;
  examples_en: string;
  examples_de: string;
  monthly_p10_chf: number;
  monthly_p25_chf: number;
  monthly_median_chf: number;
  monthly_p75_chf: number;
  monthly_p90_chf: number;
  annual_p25_chf: number;
  annual_median_chf: number;
  annual_p75_chf: number;
  annual_p90_chf: number;
}

export interface CityRent {
  city_en: string;
  city_de: string;
  bfs_commune_id: string;
  advertised_median_all_rooms_chf: number | null;
  advertised_p25_all_rooms_chf: number | null;
  advertised_p75_all_rooms_chf: number | null;
  advertised_median_1_room_chf: number | null;
  advertised_median_2_rooms_chf: number | null;
  advertised_median_3_rooms_chf: number | null;
  advertised_median_4_rooms_chf: number | null;
  bfs_existing_lease_avg_chf: number | null;
}

export interface CityCostOfLiving {
  city_en: string;
  city_de: string;
  canton: string;
  bfs_commune_id: string;
  rent_2_rooms_chf: number;
  health_insurance_kvg_2027_chf: number;
  everyday_spending_chf: number;
  total_monthly_budget_chf: number;
  regional_gross_median_annual_chf: number;
  estimated_net_monthly_pay_chf: number;
  budget_share_of_net_pay_pct: number;
}

export interface CantonHealthPremium2027 {
  canton: string;
  insurers: number;
  cheapest: number;
  cheapestInsurer: string;
  median: number;
  highest: number;
  savingPerYear: number;
  gapPerYear: number;
  floor: number;
  floorInsurer: string;
}

export declare const wages: Record<string, unknown> & { occupations: OccupationWage[] };
export declare const rents: Record<string, unknown> & { cities: CityRent[] };
export declare const costOfLiving: Record<string, unknown> & { cities: CityCostOfLiving[] };
export declare const healthPremiums: Record<string, unknown> & { cantons: CantonHealthPremium2027[] };

export declare function getOccupationWages(iscoCode: string | number): OccupationWage | undefined;
export declare function getCityRent(cityName: string): CityRent | undefined;
export declare function getCityCostOfLiving(cityName: string): CityCostOfLiving | undefined;
export declare function getCantonHealthPremium2027(cantonName: string): CantonHealthPremium2027 | undefined;
