export type CurrenciesType = {
    "code": string,
    "name": string,
    "symbol": string
}

export type LanguagesType = {
    "iso639_1": string,
    "name": string
}

export type FlagsType = {
    svg: string,
    png: string
}

export type DestinationType = {
    "name": string,
    "alpha2Code": string,
    "alpha3Code": string,
    "capital": string,
    "region": string,
    "subregion": string,
    "population": number,
    "area": number,
    "currencies": CurrenciesType[],
    "languages": LanguagesType[],
    "callingCodes": string[],
    "topLevelDomain": string[],
    "borders": string[],
    "flags": FlagsType
};


export const getPopularCountries = async () => {
    const response = await fetch(
        `https://countries.dev/random`,
    );

    if (!response.ok) {
        throw new Error('Failed to fetch country');
    }

    const data: DestinationType = await response.json();
    return data;
};