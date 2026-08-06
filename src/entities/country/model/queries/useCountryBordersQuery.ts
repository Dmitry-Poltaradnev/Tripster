import {useQuery} from "@tanstack/react-query";
import {getBorderCountryInfo} from "@/entities/country/api/borderCountryApi.ts";

type flagsTypes = {
    png: string
    svg: string
}

export interface BorderCountryResponse {
    name: string
    capital: string
    flags: flagsTypes
}

export const useCountryBordersQuery = (borders: string[]) => {
    return useQuery<BorderCountryResponse[]>({
        queryKey: ['country-borders', borders],
        queryFn: async () => {
            return Promise.all(
                borders.map((border) => getBorderCountryInfo(border))
            );
        },
        staleTime: 5 * 60 * 1000,
        enabled: borders.length > 0
    })
}