import s from './CreateTripCard.module.scss';
import {PlusIcon} from "@/features/create-trip/ui/icons";
import {useNavigate} from "react-router-dom";

export const CreateTripCard = () => {

    const navigate = useNavigate()

    const openCreateTripForm = () => {
        navigate('/my-trips', {
            state: {
                openCreateTripModal: true,
            }
        });
    }

    return (
        <button onClick={openCreateTripForm} className={s.createTripCardWrapper}>
            <span className={s.plusIconWrapper}>
            <PlusIcon className={s.plusIcon}/>
            </span>
            <p className={s.createTripCardText}>New Trip</p>
        </button>
    );
};

