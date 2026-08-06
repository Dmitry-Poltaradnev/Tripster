import type {BorderCountryResponse} from "@/entities/country/model/queries/useCountryBordersQuery.ts";

export const getBorderCountryInfo = async (alfaCodeCountry: string): Promise<BorderCountryResponse> => {
    const response = await fetch(`https://countries.dev/alpha/${alfaCodeCountry}?fields=name%2Ccapital%2Cflag&full=true`);

    if (!response.ok) {
        throw new Error('Failed to fetch border country info');
    }
    return response.json();
}