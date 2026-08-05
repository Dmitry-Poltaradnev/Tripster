import type {CoordinateDataType, WeatherForecastResponseType} from "@/entities/weather/model/types.ts";

export const getWeatherForecast = async (countryName: string): Promise<WeatherForecastResponseType> => {
    const responseCoordinate = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${countryName}&count=1&language=en&format=json`);

    if (!responseCoordinate.ok) {
        throw new Error('Failed to fetch weather forecast');
    }

    const data: CoordinateDataType = await responseCoordinate.json();

    const {latitude, longitude} = data.results?.[0] || {};

    const responseForecast = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&timezone=auto&forecast_days=7`)

    return responseForecast.json();
}