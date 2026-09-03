import s from './TripCard.module.scss';
import {ShowIcon} from "@/entities/trip-card/icons/ShowIcon.tsx";
import type {Trip} from "@/entities/trip/model/types.ts";
import {Button} from "@/shared/ui/button";
import {ROUTES} from "@/shared/config/routes.ts";
import {useNavigate} from "react-router-dom";
import clsx from "clsx";
import {formatTripRange} from "@/shared/lib/date/formatTripRange.ts";

type TripCardProps = {
    trip: Trip
}

export const TripCard = ({trip}: TripCardProps) => {

    const navigate = useNavigate()

    if (!trip) return null

    const {title, startDate, endDate} = trip

    return (
        <div className={s.tripCardWrapper}>
            <>
                <div className={s.tripCardInfo}>
                    <div className={s.tripCardHeader}>
                        <p className={s.tripCardTitle}>{title}</p>
                        <p className={clsx(s.tripStatus, s.current)}>CURRENT</p>
                    </div>
                    <div className={s.tripCardInnerInfo}>
                        <p className={s.tripCardDates}>{formatTripRange(startDate, endDate)}</p>
                        <p className={s.tripDuration}>{trip.durationDays}d</p>
                        <ul className={s.tripFlagsList}>
                            <li>Flags</li>
                            <li>Flags</li>
                            <li>Flags</li>
                        </ul>
                    </div>
                </div>
            </>
            <Button onClick={() => navigate(ROUTES.myTrips)} className={s.tripCardBtn}>
                <ShowIcon color="var(--color-text-secondary)"/>
            </Button>
        </div>
    );
};

