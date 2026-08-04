import s from './CountryMetaSection.module.scss';
import type {CountryDetailsData} from "@/entities/country/model/queries/useCountryDetailsQuery.ts";
import {BackArrowIcon} from "@/widgets/country-details/ui/icons/BackArrow.tsx";

type CountryMetaSectionProps = {
    country: CountryDetailsData;
}

export const CountryMetaSection = ({country}: CountryMetaSectionProps) => {

    const {imageUrl, country: countryDetails} = country;

    return (
        <>
            <div className={s.countryMetaSection} style={imageUrl ? {
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            } : undefined}>
                <button className={s.backArrow}>
                    <BackArrowIcon/>
                </button>
                <div className={s.countryInfoWrapper}>
                    <div className={s.countryInfo}>
                        <p className={s.countryName}>{countryDetails.name}</p>
                        <p className={s.countryRegion}>{countryDetails.region}</p>
                    </div>
                    <div className={s.countryInfoFlag}>
                        <img src={countryDetails.flags.svg} alt="country-flag"/>
                    </div>
                </div>
            </div>
        </>
    );
};

