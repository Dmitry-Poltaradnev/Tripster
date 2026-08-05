import s from './BorderCountryCard.module.scss';


export const BorderCountryCard = () => {

    // const {name} = borderCountry;

    return (
        <div className={s.borderCountryCard}>
            <span>Flag</span>
            <p className={s.borderCountryCardTitle}>Тест</p>
        </div>
    );
};

