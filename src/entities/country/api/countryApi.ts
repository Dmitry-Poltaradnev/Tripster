import type {DestinationType} from "@/entities/destination/api/destinationApi.ts";

export const getCountryInfo = async (countryName: string): Promise<DestinationType[]> => {
    const response = await fetch(`https://countries.dev/name/${countryName}`);

    if (!response.ok) {
        throw new Error('Failed to fetch destination image');
    }
    return response.json();
}