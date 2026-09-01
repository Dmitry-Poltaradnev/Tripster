const GEOAPIFY_GEOCODE_URL = "https://api.geoapify.com/v1/geocode/search";
const GEOAPIFY_PLACES_URL = "https://api.geoapify.com/v2/places";

const VITE_GEOAPIFY_API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;

export type GeoapifyGeocodeResponse = {
    results?: Array<{
        place_id?: string;
    }>;
};

const GEOAPIFY_CATEGORIES = [
    "tourism.attraction",
    "tourism.attraction.viewpoint",
    "entertainment.museum",
    "leisure.park",
    "natural",
].join(",");

export const getAttractionsByCountry = async (countryTitle: string, limit = 5) => {
    if (!VITE_GEOAPIFY_API_KEY) {
        throw new Error("Geoapify api key is missing");
    }

    const geocodeParams = new URLSearchParams({
        text: countryTitle,
        type: "country",
        format: "json",
        apiKey: VITE_GEOAPIFY_API_KEY,
    });

    const geocodeResponse = await fetch(`${GEOAPIFY_GEOCODE_URL}?${geocodeParams.toString()}`);
    if (!geocodeResponse.ok) {
        throw new Error("Failed to geocode country");
    }

    const geocodeData: GeoapifyGeocodeResponse = await geocodeResponse.json();
    const placeId = geocodeData.results?.[0]?.place_id;

    if (!placeId) {
        throw new Error("Country place_id not found");
    }

    const placesParams = new URLSearchParams({
        categories: GEOAPIFY_CATEGORIES,
        filter: `place:${placeId}`,
        limit: String(limit),
        lang: "en",
        apiKey: VITE_GEOAPIFY_API_KEY,
    });

    const placesResponse = await fetch(`${GEOAPIFY_PLACES_URL}?${placesParams.toString()}`);
    if (!placesResponse.ok) {
        throw new Error("Failed to fetch attractions");
    }

    return placesResponse.json();
};
