import s from './RecentTrips.module.scss';
import {TripCard} from "@/entities/trip-card/TripCard.tsx";
import {CreateTripCard} from "@/features/create-trip/ui/CreateTripCard.tsx";

export const RecentTrips = () => {
    return (
        <>
            <div className={s.recentTripsHeader}>
                <p className={s.recentTripsTitle}>Recent Trips</p>
                <button className={s.recentTripsButton}>See all →</button>
            </div>
            <div className={s.recentTripsList}>
                <TripCard/>
                <CreateTripCard/>
            </div>
        </>
    );
};

