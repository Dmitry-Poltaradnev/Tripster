import {useQuery} from "@tanstack/react-query";
import type {DestinationType} from "@/entities/destination/api/destinationApi.ts";
import {getCountriesByRegion} from "@/entities/country/api/regionCountriesApi.ts";

export const useCountriesRegionQuery = (region: string) => {
    return useQuery<DestinationType[]>({
        queryKey: ['countriesByRegion', region],
        queryFn: () => getCountriesByRegion(region),
        enabled: Boolean(region),
    })
}