import s from './CountryForecast.module.scss';
import {ForecastDayCard} from "@/entities/weather/ui/ForecastDayCard.tsx";
import type {CountryDetailsData} from "@/entities/country/model/queries/useCountryDetailsQuery.ts";
import {getWeatherForecast} from "@/entities/weather/api/weatherApi.ts";

type CountryForecastProps = {
    countryDetails: CountryDetailsData
}

export const CountryForecast = ({countryDetails}: CountryForecastProps) => {

    const {country} = countryDetails;

    const res = getWeatherForecast(country.name);
    console.log(res)

    return (
        <div className={s.countryForecast}>
            <p className={s.countryForecastTitle}>{`7-DAY FORECAST · ${country.name}`}</p>
            <ForecastDayCard/>
        </div>
    );
};

