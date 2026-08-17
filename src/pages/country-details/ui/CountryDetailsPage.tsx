import s from './CountryDetailsPage.module.scss';
import {CountryMetaSection} from "@/widgets/country-details/ui/CountryMetaSection.tsx";
import {useCountryDetailsQuery} from "@/entities/country/model/queries/useCountryDetailsQuery.ts";
import {CountryDetails} from "@/widgets/country-details/ui/CountryDetails.tsx";
import {CountryForecast} from "@/widgets/country-forecast/ui/CountryForecast.tsx";
import {BorderCountriesSection} from "@/widgets/country-details/ui/BorderCountriesSection.tsx";
import {useParams} from "react-router-dom";

export const CountryDetailsPage = () => {

    const {countryName} = useParams();

    const {data, isLoading, isError} = useCountryDetailsQuery(countryName || '');

    return (
        <div className={s.countryDetailsPage}>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error loading country details.</p>}
            {data && (
                <>
                    <CountryMetaSection country={data}/>
                    <div className={s.contentInner}>
                        <div className={s.countryInfoWrapper}>
                            <CountryDetails countryDetails={data}/>
                            <CountryForecast countryDetails={data}/>
                            <BorderCountriesSection countryDetails={data.country}/>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

