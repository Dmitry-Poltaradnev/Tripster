import {useQuery} from "@tanstack/react-query";
import {getBorderCountryInfo} from "@/entities/country/api/borderCountryApi.ts";

export const useCountryBordersQuery = (alfaCountryCode: string) => {
    return useQuery<any>({
        queryKey: ['country-borders', alfaCountryCode],
        queryFn: async () => {
            return await getBorderCountryInfo(alfaCountryCode)
        },
        staleTime: 5 * 60 * 1000,
    })
}

