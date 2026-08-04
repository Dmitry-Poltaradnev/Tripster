import {useQuery} from "@tanstack/react-query";
import type {DestinationType} from "@/entities/destination/api/destinationApi.ts";
import {getDestinationImage} from "@/entities/destination/api/imageApi.ts";
import {getCountryInfo} from "@/entities/country/api/countryApi.ts";

export type CountryDetailsData = {
    country: DestinationType;
    imageUrl?: string;
};

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

