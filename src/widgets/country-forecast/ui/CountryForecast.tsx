import s from './CountryForecast.module.scss';
import {ForecastDayCard} from "@/entities/weather/ui/ForecastDayCard.tsx";
import {useCountryWeatherQuery} from "@/entities/weather/model/queries/useCountryWeatherQuery.ts";
import type {CountryDetailsData} from "@/entities/country/model/types.ts";

type CountryForecastProps = {
    countryDetails: CountryDetailsData
}

export const CountryForecast = ({countryDetails}: CountryForecastProps) => {

    const {country} = countryDetails;

    const res = useCountryWeatherQuery(country.capital);

    const {data, isLoading, isError} = res;

    return (
        <div className={s.countryForecast}>
            <p className={s.countryForecastTitle}>{`7-DAY FORECAST · ${country.name}`}</p>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error loading weather forecast.</p>}
            {data && (
                <div className={s.forecastCardsContainer}>
                    {data.daily.time.map((_: any, index: number) => (
                        <ForecastDayCard key={index} day={data.daily} index={index}/>
                    ))}
                </div>
            )}
        </div>
    );
};

