import {useCountriesRegionQuery} from "@/widgets/explore-countries/model/queries/useCountriesRegionQuery.ts";
import {CountryItem} from "@/entities/country/ui/CountryItem.tsx";
import s from './CountriesList.module.scss'
import {getCountryCoordinates} from "@/entities/country/api/coordinatesCountriesApi.ts";
import type {Dispatch, SetStateAction} from "react";
import {useEffect, useMemo} from "react";
import {useQueries} from "@tanstack/react-query";
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

    const coordinateQueries = useQueries({
        queries: countries.map((country) => ({
            queryKey: ['country-coordinate', country.name],
            queryFn: () => getCountryCoordinates(country.name),
            enabled: !!country.name,
        })),
    })

    const isCoordinateLoading = coordinateQueries.some((query) => query.isLoading)
    const isCoordinateError = coordinateQueries.some((query) => query.isError)
    const massCoordinate = useMemo(() => {
        return coordinateQueries
            .filter((query) => query.isSuccess)
            .map((query) => query.data.results?.[0])
            .filter((item) => item != null)
            .map((item) => ({
                latitude: item.latitude,
                longitude: item.longitude,
                name: item.name,
            }))
    }, [coordinateQueries])

    useEffect(() => {
        if (massCoordinate.length > 0) {
            setMass((prevMass: typeof massCoordinate) => {
                const prevSerialized = JSON.stringify(prevMass)
                const nextSerialized = JSON.stringify(massCoordinate)

                return prevSerialized === nextSerialized ? prevMass : massCoordinate
            })
        }
    }, [massCoordinate, setMass])

    if (isCountriesLoading || isCoordinateLoading) return <p>Loading...</p>
    if (isCountriesError || isCoordinateError) return <p>Failed to load countries</p>
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

