import s from './CreateTripCard.module.scss';
import {PlusIcon} from "@/features/create-trip/ui/icons";

export const CreateTripCard = () => {
    return (
        <div className={s.createTripCardWrapper}>
            <span className={s.plusIconWrapper}>
            <PlusIcon className={s.plusIcon}/>
            </span>
            <p className={s.createTripCardText}>New Trip</p>
        </div>
    );
};

