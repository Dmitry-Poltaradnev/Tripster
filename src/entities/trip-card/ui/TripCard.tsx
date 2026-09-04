import s from './TripCard.module.scss';
import {ShowIcon} from "@/entities/trip-card/icons/ShowIcon.tsx";
import {Button} from "@/shared/ui/button";
import clsx from "clsx";
import {formatTripRange} from "@/shared/lib/date/formatTripRange.ts";
import {type Trip, useTripStore} from "@/entities/trip/model/store/useTripStore.ts";
import {getTripStatus} from "@/shared/lib/trip-status/getTripStatus.ts";

type TripCardProps = {
    trip: Trip
}

export const TripCard = ({trip}: TripCardProps) => {

    const {removeTrip} = useTripStore()

    if (!trip) return null

    const {title, startDate, endDate, isCountries} = trip

    return (
        <div className={s.tripCardWrapper}>
            <>
                <div className={clsx(s.tripCardInfo, s[getTripStatus(trip.startDate, trip.endDate)])}>
                    <div className={s.tripCardHeader}>
                        <p className={s.tripCardTitle}>{title}</p>
                        <p className={clsx(s.tripStatus, s[getTripStatus(trip.startDate, trip.endDate)])}>{getTripStatus(trip.startDate, trip.endDate)}</p>
                    </div>
                    <div className={s.tripCardInnerInfo}>
                        <p className={s.tripCardDates}>{formatTripRange(startDate, endDate)}</p>
                        <p className={s.tripDuration}>{trip.durationDays}d</p>
                        {isCountries && (
                            <ul className={s.tripFlagsList}>
                                <li>Flags</li>
                                <li>Flags</li>
                                <li>Flags</li>
                            </ul>
                        )}
                    </div>
                </div>
            </>
            <Button onClick={() => console.log(`open trip ${trip.title} `)} className={s.tripCardBtn}>
                <ShowIcon color="var(--color-text-secondary)"/>
            </Button>
            <Button onClick={() => removeTrip(trip.id)}>remove trip</Button>
        </div>
    );
};

