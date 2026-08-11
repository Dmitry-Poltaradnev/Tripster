import s from './CountryMetaSection.module.scss';
import type {CountryDetailsData} from "@/entities/country/model/queries/useCountryDetailsQuery.ts";
import {BackArrowIcon} from "@/widgets/country-details/ui/icons/BackArrow.tsx";
import {useNavigate} from "react-router-dom";
import {Button} from "@/shared/ui/button";

type CountryMetaSectionProps = {
    country: CountryDetailsData;
}

export const CountryMetaSection = ({country}: CountryMetaSectionProps) => {
    const navigate = useNavigate();
    const {imageUrl, country: countryDetails} = country;

    return (
        <>
            <div className={s.countryMetaSection} style={imageUrl ? {
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            } : undefined}>
                <Button type="button"
                        className={s.backArrow}
                        onClick={() => navigate(-1)}>
                    <BackArrowIcon/>
                </Button>
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

