import {useQuery} from "@tanstack/react-query";
import { getPopularCountries} from "@/entities/destination/api/destinationApi.ts";
import {getDestinationImage} from "@/entities/destination/api/imageApi.ts";
import type {DestinationType} from "@/entities/destination/model/types.ts";

export const usePopularDestinationsQuery = () => {
    return useQuery<DestinationType[]>({
        queryKey: ['popular-destinations'],
        queryFn: async () => {
            const countries = await Promise.all([
                getPopularCountries(),
                getPopularCountries(),
                getPopularCountries(),
                getPopularCountries(),
            ]);

            return await Promise.all(
                countries.map(async (country) => {
                    const imageResp = await getDestinationImage(country.name)

                    return {
                        ...country,
                        imageUrl: imageResp.photos?.[0]?.src?.medium,
                    }
                })
            )
        },
    });
};