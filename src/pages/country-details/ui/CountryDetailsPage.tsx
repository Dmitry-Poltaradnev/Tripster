import s from './CountryDetailsPage.module.scss';
import {CountryMetaSection} from "@/widgets/country-details/ui/CountryMetaSection.tsx";
import {useCountryDetailsQuery} from "@/entities/country/model/queries/useCountryDetailsQuery.ts";
import {CountryDetails} from "@/widgets/country-details/ui/CountryDetails.tsx";
import {CountryForecast} from "@/widgets/country-forecast/ui/CountryForecast.tsx";
import {BorderCountriesSection} from "@/widgets/country-details/ui/BorderCountriesSection.tsx";
import {useParams} from "react-router-dom";
import {SearchMap} from "@/widgets/explore-map/SearchMap.tsx";

export const CountryDetailsPage = () => {

    const {countryName} = useParams();

    const {data, isLoading, isError} = useCountryDetailsQuery(countryName || '');
    const country = data?.country;
    console.log(country)

    const countryMapInfo =
        country?.latlng && country.latlng.length === 2
            ? [
                {
                    latitude: country.latlng[0],
                    longitude: country.latlng[1],
                    name: country.name,
                },
            ]
            : [];


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
                            <SearchMap mass={countryMapInfo} zoomMap={6}
                                       classNames={[s.countryDetailMapWrap, s.countryDetailMap]}/>
                            <CountryForecast countryDetails={data}/>
                            <BorderCountriesSection countryDetails={data.country}/>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

