import s from './RecentTrips.module.scss';
import {TripCard} from "@/entities/trip-card/TripCard.tsx";

export const RecentTrips = () => {
    return (
        <>
            <div className={s.recentTripsHeader}>
                <p className={s.recentTripsTitle}>Recent Trips</p>
                <button className={s.recentTripsButton}>See all →</button>
            </div>
            <TripCard/>
        </>
    );
};

