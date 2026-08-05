type CoordinateDataResultType = {
    id: number,
    name: string,
    latitude: number,
    longitude: number,
    elevation: number,
    feature_code: string,
    country_code: string,
    admin1_id: number,
    timezone: string,
    population?: number,
    country_id: number,
    country: string,
    admin1: string
}

export type CoordinateDataType = {
    results?: CoordinateDataResultType[],
    generationtime_ms: number
}

export type DailyUnitsType = {
    time: string,
    weather_code: string,
    temperature_2m_max: string,
    temperature_2m_min: string,
    precipitation_probability_max: string,
    wind_speed_10m_max: string
}

export type DailyForecastType = {
    time: string[],
    weather_code: number[],
    temperature_2m_max: number[],
    temperature_2m_min: number[],
    precipitation_probability_max: number[],
    wind_speed_10m_max: number[]
}

export type WeatherForecastResponseType = {
    latitude: number,
    longitude: number,
    generationtime_ms: number,
    utc_offset_seconds: number,
    timezone: string,
    timezone_abbreviation: string,
    elevation: number,
    daily_units: DailyUnitsType,
    daily: DailyForecastType
}

