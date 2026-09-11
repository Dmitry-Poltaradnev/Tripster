import s from './BorderCountryCard.module.scss';
import type {BorderCountryResponse} from "@/entities/country/model/types.ts";

type BorderCountryCardProps = {
    borderCountry: BorderCountryResponse;
}

export const BorderCountryCard = ({borderCountry}: BorderCountryCardProps) => {
    const {name, flags} = borderCountry;

    return (
        <div className={s.borderCountryCard}>
            <img src={flags.svg} alt={`${name} flag`} className={s.borderCountryCardFlag}/>
            <p className={s.borderCountryCardTitle}>{name}</p>
        </div>
    );
};

