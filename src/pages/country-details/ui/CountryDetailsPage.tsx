import s from './CountryDetailsPage.module.scss';
import {CountryMetaSection} from "@/widgets/country-details/ui/CountryMetaSection.tsx";
import {useCountryDetailsQuery} from "@/entities/country/model/queries/useCountryDetailsQuery.ts";
import {CountryDetails} from "@/widgets/country-details/ui/CountryDetails.tsx";
import {CountryForecast} from "@/widgets/country-forecast/ui/CountryForecast.tsx";

export const CountryDetailsPage = () => {

    const {data, isLoading, isError} = useCountryDetailsQuery('Israel');

    return (
        <div className={s.countryDetailsPage}>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error loading country details.</p>}
            {data && (
                <>
                    <CountryMetaSection country={data}/>
                    <CountryDetails countryDetails={data}/>
                    <CountryForecast countryDetails={data}/>
                </>
            )}
        </div>
    );
};

