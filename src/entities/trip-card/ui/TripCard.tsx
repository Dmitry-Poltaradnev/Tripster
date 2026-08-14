import s from './TripCard.module.scss';
import {ShowIcon} from "@/entities/trip-card/icons/ShowIcon.tsx";
import type {Trip} from "@/entities/trip/model/types.ts";
import {Button} from "@/shared/ui/button";
import {getTripRoute} from "@/shared/config/routes.ts";
import {useNavigate} from "react-router-dom";
import clsx from "clsx";

type TripCardProps = {
    trip: Trip
}

export const TripCard = ({trip}: TripCardProps) => {

    const navigate = useNavigate()

    if (!trip) return null

    const {title, startDate, endDate, id} = trip

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
                    <p className={s.tripCardTitle}>{title}</p>
                    <p className={s.tripCardDates}>{startDate} – {endDate}</p>
                </div>
            </div>
            <Button onClick={() => navigate(getTripRoute(id))} className={s.tripCardFooter}>
                <div className={s.tripCardDescription}>
                    <p className={s.tripCardCities}>3 cities</p>
                    <p className={s.tripCardDays}>11d</p>
                </div>
                <ShowIcon color="var(--color-text-secondary)"/>
            </Button>
        </div>
    );
};

