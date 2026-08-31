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

    const today = new Date()

    const actualDay = [
        today.getFullYear(),
        String(today.getMonth() + 1).padStart(2, '0'),
        String(today.getDate()).padStart(2, '0'),
    ].join('-');

    return (
        <div className={s.countryForecast}>
            <p className={s.countryForecastTitle}>{`7-DAY FORECAST · ${country.name}`}</p>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error loading weather forecast.</p>}
            {data && (
                <div className={s.forecastCardsContainer}>
                    {data.daily.time.map((date: any, index: number) => (
                        <ForecastDayCard key={date} day={data.daily} index={index} active={date === actualDay}/>
                    ))}
                </div>
            )}
        </div>
    );
};

