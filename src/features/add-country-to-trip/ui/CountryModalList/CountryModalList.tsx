import s from './CountryModalList.module.scss'
import {useCountriesRegionQuery} from "@/widgets/explore-countries/model/queries/useCountriesRegionQuery.ts";
import type {DestinationType} from "@/entities/destination/model/types.ts";
import {useState} from "react";
import clsx from "clsx";
import {TickIcon} from "@/features/add-country-to-trip/icons";

type CountryModalListProps = {
    setSelected: (val: boolean) => void
    setCountry: (country: DestinationType) => void
}

export const CountryModalList = ({setSelected, setCountry}: CountryModalListProps) => {

    const {data, isLoading, isError} = useCountriesRegionQuery('All')

    const [activeItem, setActiveItem] = useState('')

    // const filteredCountry = () => {
    //     const standartValues =
    // }


    const setCountryHandler = (country: DestinationType) => {
        console.log(country)
        setSelected(true)
        setCountry(country)
        setActiveItem(country.name)
    }

    return (
        <div className={s.countriesListWrapper}>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Failed to load countries</p>}
            {!data ? <p>Empty state</p> : <ul className={s.countriesList}>
                {data.map((country: DestinationType) => (
                    <li className={clsx(s.countryListItem, activeItem === country.name && s.activeListItem)}
                        onClick={() => setCountryHandler(country)}
                        key={country.name}>
                        <img className={s.countryItemFlag} src={country.flags.svg} alt="countryFlag"/>
                        <p>{country.name}</p>
                        <span className={s.activeTick}>{activeItem === country.name && <TickIcon/>}</span>
                    </li>
                ))}
            </ul>
            }
        </div>
    );
}



