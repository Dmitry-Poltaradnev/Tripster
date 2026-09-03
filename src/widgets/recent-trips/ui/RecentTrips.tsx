import s from './RecentTrips.module.scss';
import {CreateTripCard} from "@/features/create-trip/ui/CreateTripCard/CreateTripCard.tsx";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "@/shared/config/routes.ts";
import {Button} from "@/shared/ui/button";
import {TripsList} from "@/widgets/trips-list/ui/TripsList.tsx";
import {useTripStore} from "@/entities/trip/model/store/useTripStore.ts";

export const RecentTrips = () => {

    const navigate = useNavigate()

    const trips = useTripStore((state) => state.trips)
    return (
        <>
            <div className={s.recentTripsHeader}>
                <p className={s.recentTripsTitle}>Recent Trips</p>
                <Button onClick={() => navigate(ROUTES.myTrips)} className={s.recentTripsButton}>
                    See all →
                </Button>
            </div>
            <div className={s.recentTripsList}>
                <TripsList trips={trips.slice(-2)} variant="between"/>
                <CreateTripCard/>
            </div>
        </>
    );
};

