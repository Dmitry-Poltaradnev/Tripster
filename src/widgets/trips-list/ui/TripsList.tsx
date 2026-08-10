import s from './TripsList.module.scss'
import {TripCard} from "@/entities/trip-card/ui/TripCard.tsx";

export const TripsList = () => {
    return (
        <div className={s.tripsListWrapper}>
            <TripCard/>
        </div>
    );
};

