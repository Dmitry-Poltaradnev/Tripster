export const getWeatherForecast = async (countryName: string): Promise<any> => {
    const responseCoordinate = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${countryName}i&count=1&language=en&format=json`);

    if (!responseCoordinate.ok) {
        throw new Error('Failed to fetch weather forecast');
    }

    // const responseForecast = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=41.69411&longitude=44.83368&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&timezone=auto&forecast_days=7`)

    return responseCoordinate.json();
}