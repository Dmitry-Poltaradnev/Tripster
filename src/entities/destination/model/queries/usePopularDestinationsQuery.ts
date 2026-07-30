import {useQuery} from "@tanstack/react-query";
import {getPopularCountries} from "@/entities/destination/api/destinationApi.ts";

export const usePopularDestinationsQuery = () => {
    return useQuery({
        queryKey: ['popular-destinations'],
        queryFn: async () => {
            const response = await getPopularCountries('Canada');

            console.log('Fetched countries:', response.data);
            if (!response.success || !Array.isArray(response.data)) {
                throw new Error(response.errors?.[0]?.message || 'Failed to fetch countries');
            }
            return response.data.map((country: any) => ({
                id: country.cca3,
                name: country.name?.common,
                flag: country.flags?.svg,
                region: country.region,
            }));
        }
    });
};