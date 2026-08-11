import s from './RecentTrips.module.scss';
import {TripCard} from "@/entities/trip-card/ui/TripCard.tsx";
import {CreateTripCard} from "@/features/create-trip/ui/CreateTripCard/CreateTripCard.tsx";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "@/shared/config/routes.ts";
import {Button} from "@/shared/ui/button";

export const RecentTrips = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className={s.recentTripsHeader}>
                <p className={s.recentTripsTitle}>Recent Trips</p>
                <Button onClick={() => navigate(ROUTES.myTrips)} className={s.recentTripsButton}>
                    See all →
                </Button>
            </div>
            <div className={s.recentTripsList}>
                <TripCard/>
                <CreateTripCard/>
            </div>
        </>
    );
};

