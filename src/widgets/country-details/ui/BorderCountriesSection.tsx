import {BorderCountryCard} from "@/entities/country/ui/BorderCountryCard.tsx";
import type {DestinationType} from "@/entities/destination/model/types.ts";
import s from './BorderCountriesSection.module.scss';
import type {BorderCountryResponse} from "@/entities/country/model/types.ts";
import {useCountryBordersQuery} from "@/entities/country/model/queries/useCountryBordersQuery.ts";

type BorderCountriesSectionProps = {
    countryDetails: DestinationType
}

export const BorderCountriesSection = ({countryDetails}: BorderCountriesSectionProps) => {

    const borders = countryDetails.borders ?? [];

    const {data, isLoading, error} = useCountryBordersQuery(borders);

    if (!borders.length) {
        return <div className={s.issueDesc}>No data on bordering countries</div>
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
