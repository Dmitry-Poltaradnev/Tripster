import s from './CountryDetails.module.scss';
import {CountryInfoCard} from "@/entities/country/ui/CountryInfoCard.tsx";
import type {CountryDetailsData} from "@/entities/country/model/queries/useCountryDetailsQuery.ts";
import {CurrencyIcon, LanguagesIcon, MapPointIcon, PopulationIcon} from "@/entities/country/ui/icons";


type CountryDetailsProps = {
    countryDetails: CountryDetailsData;
}

export const CountryDetails = ({countryDetails}: CountryDetailsProps) => {

    const {country} = countryDetails;

    const formatPopulation = (population: number): string => {
        return `${(population / 1_000_000).toFixed(1)}M`
    }

    return (
        <div className={s.countryDetails}>
            <CountryInfoCard dataTitle={country.capital} title="Capital"
                             icon={<MapPointIcon className={s.purpleIcon}/>}/>
            <CountryInfoCard dataTitle={country.currencies} title="Currency"
                             icon={<CurrencyIcon className={s.purpleIcon}/>}/>
            <CountryInfoCard dataTitle={country.languages} title="Languages"
                             icon={<LanguagesIcon className={s.purpleIcon}/>}/>
            <CountryInfoCard dataTitle={formatPopulation(country.population)} title="Population"
                             icon={<PopulationIcon className={s.purpleIcon}/>}/>
        </div>
    );
};

