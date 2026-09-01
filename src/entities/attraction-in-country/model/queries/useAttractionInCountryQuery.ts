import {useQuery} from "@tanstack/react-query";
import {getAttractionsByCountry} from "@/entities/attraction-in-country/api/attractionApi.ts";

export const useAttractionInCountryQuery = (countryTitle: string) => {
    return useQuery({
        queryKey: ['attractions-in-country', countryTitle],
        queryFn: async () => getAttractionsByCountry(countryTitle),
        enabled: Boolean(countryTitle),
    })
};
