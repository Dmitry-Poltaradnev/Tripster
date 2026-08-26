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
    "flags": FlagsType,
    "latlng"?: [number, number];
};