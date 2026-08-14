import {BorderCountryCard} from "@/entities/country/ui/BorderCountryCard.tsx";
import {
    type BorderCountryResponse,
    useCountryBordersQuery
} from "@/entities/country/model/queries/useCountryBordersQuery.ts";
import type {DestinationType} from "@/entities/destination/model/types.ts";
import s from './BorderCountriesSection.module.scss';

type BorderCountriesSectionProps = {
    countryDetails: DestinationType
}

export const BorderCountriesSection = ({countryDetails}: BorderCountriesSectionProps) => {

    const {borders} = countryDetails;

    const {data, isLoading, error} = useCountryBordersQuery(borders);

    if (!borders) {
        return null;
    }

    return (
        <div>
            <p className={s.borderCountriesSectionTitle}>BORDERING COUNTRIES</p>
            <div className={s.borderCountriesList}>
                {error && null}
                {!isLoading && data && data.map((country: BorderCountryResponse) => <BorderCountryCard
                    key={country.name} borderCountry={country}/>)}
            </div>
        </div>
    );
};
