import s from './PopularDestinationCard.module.scss';

// export type PopularDestinationCardProps = {
//     country?: string;
//     pathOfTheWorld?: string;
//     imageUrl?: string;
// }

export const PopularDestinationCard = ({country, pathOfTheWorld, imageUrl}: any) => {
    return (
        <div className={s.popularDestinationCard}>
            <div className={s.cardImage}>
                {imageUrl ? <img src={imageUrl} alt={country}/> : <span>Image</span>}
            </div>
            <div className={s.cardInfo}>
                <p className={s.countryTitle}>{country}</p>
                <p className={s.pathOfTheWorldTitle}>{pathOfTheWorld}</p>
            </div>
        </div>
    );
};

