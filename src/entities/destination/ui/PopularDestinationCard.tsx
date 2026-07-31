import s from './PopularDestinationCard.module.scss';
import type {DestinationType} from "@/entities/destination/api/destinationApi.ts";

type PopularDestination = DestinationType & {
    imageUrl?: string;
};

type PopularDestinationCardProps = {
    destination: PopularDestination;
}

export const PopularDestinationCard = ({destination}: PopularDestinationCardProps) => {

    const {flags, subregion, name, imageUrl} = destination

    return (
        <div className={s.popularDestinationCard} style={imageUrl ? {
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        } : undefined}>
            <span className={s.cardImage}>
                {flags ? <img src={flags.svg} alt={name}/> : <span>Flag</span>}
            </span>
            <div className={s.cardInfo}>
                <p className={s.countryTitle}>{name}</p>
                <p className={s.pathOfTheWorldTitle}>{subregion}</p>
            </div>
        </div>
    );
};

