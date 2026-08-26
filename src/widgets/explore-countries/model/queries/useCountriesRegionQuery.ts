import {useQuery} from "@tanstack/react-query";
import {getCountriesByRegion} from "@/entities/country/api/regionCountriesApi.ts";
import type {DestinationType} from "@/entities/destination/model/types.ts";

export const useCountriesRegionQuery = (region: string) => {
    return useQuery<DestinationType[]>({
        queryKey: ['countriesByRegion', region],
        queryFn: () => getCountriesByRegion(region),
        enabled: Boolean(region),
        staleTime: Infinity,
        gcTime: 1000 * 60 * 60,
    })
}