import {useQuery} from "@tanstack/react-query";
import {getDestinationImage} from "@/entities/destination/api/imageApi.ts";
import {getCountryInfo} from "@/entities/country/api/countryApi.ts";
import type {CountryDetailsData} from "@/entities/country/model/types.ts";

export const useCountryDetailsQuery = (countryName: string) => {
    return useQuery<CountryDetailsData>({
        queryKey: ['countryDetails', countryName],
        queryFn: async () => {
            const countryDetails = await getCountryInfo(countryName);
            const imageResp = await getDestinationImage(countryName);

            const country = countryDetails[0];

            return {
                country,
                imageUrl: imageResp.photos?.[0]?.src?.medium,
            }
        },
        staleTime: 5 * 60 * 1000,
    })
}

