import {useQuery} from "@tanstack/react-query";
import {getWeatherForecast} from "@/entities/weather/api/weatherApi.ts";

export const useCountryWeatherQuery = (capitalTitle: string) => {
    return useQuery<any>({
        queryKey: ['country-weather', capitalTitle],
        queryFn: async () => {
            return await getWeatherForecast(capitalTitle);
        },
    });
};


