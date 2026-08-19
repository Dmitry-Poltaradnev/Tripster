import type {DestinationType} from "@/entities/destination/model/types.ts";

const ALL_COUNTRIES_URL = "https://countries.dev/countries";
const REGION_COUNTRIES_URL = "https://countries.dev/region";

export const getCountriesByRegion = async (region: string): Promise<DestinationType[]> => {
    const url =
        region === "All"
            ? ALL_COUNTRIES_URL
            : `${REGION_COUNTRIES_URL}/${region}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch countries");
    }

    return response.json();
};