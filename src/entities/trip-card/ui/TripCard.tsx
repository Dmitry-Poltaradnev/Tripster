import s from './TripCard.module.scss';
import {ShowIcon} from "@/entities/trip-card/icons/ShowIcon.tsx";
import clsx from "clsx";

type CityType = {
    cityTitle: string,
    countryFlag: string
}

type TripCardProps = {
    tripTitle?: string,
    dates?: string[],
    cities?: CityType[],
    tripDuration?: number,
    tripStatus?: string[]
}

export const TripCard = ({tripTitle, dates, cities, tripDuration}: TripCardProps) => {

    return (
        <div className={s.tripCardWrapper}>
            <div className={s.tripCardInfo}>
                <div className={s.tripCardHeader}>
                    <p className={clsx(s.tripStatus, s.current)}>CURRENT</p>
                    <ul>
                        <li>Flags</li>
                    </ul>
                </div>
                <div className={s.tripCardInnerInfo}>
                    <p className={s.tripCardTitle}>Golden Week Japan</p>
                    <p className={s.tripCardDates}>Apr 28 – May 8</p>
                </div>
            </div>
            <button className={s.tripCardFooter}>
                <div className={s.tripCardDescription}>
                    <p className={s.tripCardCities}>3 cities</p>
                    <p className={s.tripCardDays}>11d</p>
                </div>
                <ShowIcon color="var(--color-text-secondary)"/>
            </button>
        </div>
    );
};

