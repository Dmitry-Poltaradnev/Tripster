const API_KEY = import.meta.env.VITE_REST_COUNTRIES_API_KEY;

export const getPopularCountries = async (name: string) => {
    const response = await fetch(
        `/api/countries/countries/v5/names.common/${name}`,
        {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error('Failed to fetch country');
    }

    return response.json();
};