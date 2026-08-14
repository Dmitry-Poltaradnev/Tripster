import type {DestinationType} from "@/entities/destination/model/types.ts";

export const getPopularCountries = async () => {
    const response = await fetch(
        `https://countries.dev/random`,
    );

    if (!response.ok) {
        throw new Error('Failed to fetch country');
    }

    const data: DestinationType = await response.json();
    return data;
};