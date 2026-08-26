import {useCountriesRegionQuery} from "@/widgets/explore-countries/model/queries/useCountriesRegionQuery.ts";
import {CountryItem} from "@/entities/country/ui/CountryItem.tsx";
import s from './CountriesList.module.scss'
import type {Dispatch, SetStateAction} from "react";
import {useEffect, useMemo} from "react";
import type {DestinationType} from "@/entities/destination/model/types.ts";

export type CoordinateItem = {
    latitude: number
    longitude: number
    name: string
}

type CountriesListProps = {
    region: string
    setMass: Dispatch<SetStateAction<CoordinateItem[]>>
}

export const CountriesList = ({region, setMass}: CountriesListProps) => {
    const {
        data: countries = [],
        isLoading: isCountriesLoading,
        isError: isCountriesError,
    } = useCountriesRegionQuery(region)

    const massCoordinate = useMemo(() => {
        return countries
            .filter((country) => Array.isArray(country.latlng) && country.latlng.length === 2)
            .map((country) => ({
                latitude: country.latlng![0],
                longitude: country.latlng![1],
                name: country.name,
            }))
    }, [countries])

    useEffect(() => {
        setMass(massCoordinate)
    }, [massCoordinate, setMass])

    if (isCountriesLoading) return <p>Loading...</p>
    if (isCountriesError) return <p>Failed to load countries</p>
    if (countries.length === 0) return <p>Empty country list</p>

    return (
        <div className={s.countriesWrap}>
            <p className={s.countriesCounter}>{countries.length} countries</p>
            <div className={s.countryList}>
                {countries.map((country: DestinationType) => (
                    <CountryItem key={country.alpha3Code} {...country} />
                ))}
            </div>
        </div>
    )
}