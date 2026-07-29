import s from './TripCard.module.scss';
import {ShowIcon} from "@/entities/trip-card/icons/ShowIcon.tsx";

export const TripCard = () => {
    return (
        <div className={s.tripCardWrapper}>
            <p className={s.tripCardTitle}>Golden Week Japan</p>
            <p className={s.tripCardDates}>Apr 28 – May 8</p>
            <button className={s.tripCardFooter}>
                <div className={s.tripCardDescription}>
                    <p className={s.tripCardCities}>3 cities</p>
                    <p className={s.tripCardDays}>11d</p>
                </div>
                <ShowIcon color="var(--color-text-secondary)" />
            </button>
        </div>
    );
};

