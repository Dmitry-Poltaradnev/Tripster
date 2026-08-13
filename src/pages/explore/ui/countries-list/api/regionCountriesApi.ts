import type {DestinationType} from "@/entities/destination/api/destinationApi.ts";

export const getCountriesByRegion = async (region: string) => {
    const response = await fetch(`https://countries.dev/region/${region}`)

    if (!response.ok) {
        throw new Error('Failed to fetch countries');
    }

    const data: DestinationType[] = await response.json()
    return data
}