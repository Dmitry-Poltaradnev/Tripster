import type {CoordinateDataType} from "@/entities/weather/model/types.ts";

export const getCountryCoordinates = async (name: string): Promise<CoordinateDataType> => {
    const responseCoordinate = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=1&language=en&format=json`);

    if (!responseCoordinate.ok) {
        throw new Error('Failed to fetch weather forecast');
    }

    return responseCoordinate.json();
}
