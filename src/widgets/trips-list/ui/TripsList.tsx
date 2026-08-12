import s from './TripsList.module.scss'
import {TripCard} from "@/entities/trip-card/ui/TripCard.tsx";
import {useTripStore} from "@/entities/trip/model/store/useTripStore.ts";
import type {Trip} from "@/entities/trip/model/types.ts";
import {useLocation} from "react-router-dom";

export const TripsList = () => {
    const {pathname} = useLocation()
    const trips = useTripStore((state) => state.trips)

    const visibleTrips = pathname === '/' ? trips.slice(-2) : trips

    return (
        <div className={s.tripsListWrapper}>
            {visibleTrips.map((trip: Trip) => (
                <TripCard key={trip.id} trip={trip}/>
            ))}
        </div>
    )
}

