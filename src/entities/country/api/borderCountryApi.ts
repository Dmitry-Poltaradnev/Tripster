import type {DestinationType} from "@/entities/destination/api/destinationApi.ts";

export const getBorderCountryInfo = async (alfaCodeCountry: string): Promise<DestinationType> => {
    const response = await fetch(`https://countries.dev/alpha/${alfaCodeCountry}?fields=name%2Ccapital%2Cflag&full=true`);

    if (!response.ok) {
        throw new Error('Failed to fetch border country info');
    }
    return response.json();
}