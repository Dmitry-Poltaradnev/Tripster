import s from './TripsList.module.scss'
import {TripCard} from "@/entities/trip-card/ui/TripCard.tsx";
import {type Trip} from "@/entities/trip/model/store/useTripStore.ts";
import clsx from "clsx";

type TripsListProps = {
    trips: Trip[];
    variant?: 'column' | 'between';
    className?: string;
};

export const TripsList = ({
                              trips,
                              variant = 'column',
                              className,
                          }: TripsListProps) => {

    return (
        <div className={clsx(s.tripsListWrapper, s[variant], className)}>
            {trips.map((trip: Trip) => (
                <TripCard key={trip.id} trip={trip}/>
            ))}
        </div>
    );
};

