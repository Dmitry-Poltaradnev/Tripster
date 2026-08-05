import s from './BorderCountriesSection.module.scss';
import {BorderCountryCard} from "@/entities/country/ui/BorderCountryCard.tsx";
import type {CountryDetailsData} from "@/entities/country/model/queries/useCountryDetailsQuery.ts";
import {useCountryBordersQuery} from "@/entities/country/model/queries/useCountryBordersQuery.ts";


type BorderCountriesSectionProps = {
    countryDetails: CountryDetailsData
}


export const BorderCountriesSection = ({countryDetails}: BorderCountriesSectionProps) => {

    const {country} = countryDetails;

    console.log(`prop ${country.borders}`)

    const {data}  = useCountryBordersQuery(country.borders[0])

    console.log(`с хука ${data.name}`)

    return (
        <div>
            <p className={s.borderCountriesSectionTitle}>BORDERING COUNTRIES</p>
            <div className={s.borderCountriesList}>
                <BorderCountryCard borderCountry={data}/>
            </div>
        </div>
    );
};

