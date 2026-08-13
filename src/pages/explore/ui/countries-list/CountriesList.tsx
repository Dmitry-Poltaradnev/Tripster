import {useCountriesRegionQuery} from "@/pages/explore/ui/countries-list/model/queries/useCountriesRegionQuery.ts";
import {CountryItem} from "@/pages/explore/ui/countries-list/CountryItem.tsx";
import type {DestinationType} from "@/entities/destination/api/destinationApi.ts";
import s from './CountriesList.module.scss'

type CountriesListProps = {
    region: string
}

export const CountriesList = ({region}: CountriesListProps) => {

    const {data: countries = [], isLoading, isError} = useCountriesRegionQuery(region)

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Failed to load countries</p>
    if (countries.length === 0) return <p>Empty country list</p>

    return (
        <>
            <p className={s.countriesCounter}>{countries.length} countries</p>
            <div className={s.countryList}>
                {countries.map((country: DestinationType) => <CountryItem key={country.alpha3Code} {...country}/>)}
            </div>
        </>
    );
};

