const VITE_REST_IMAGE_API_KEY = import.meta.env.VITE_REST_IMAGE_API_KEY;

export const getDestinationImage = async (query: string) => {
    const response = await fetch(
        `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`,
        {
            headers: {
                Authorization: VITE_REST_IMAGE_API_KEY,
            },
        }
    );

    if (!response.ok) {
        throw new Error('Failed to fetch destination image');
    }

    return response.json();
};