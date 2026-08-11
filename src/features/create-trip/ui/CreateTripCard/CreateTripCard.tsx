import s from './CreateTripCard.module.scss';
import {PlusIcon} from "@/features/create-trip/ui/icons";
import {useNavigate} from "react-router-dom";
import {Button} from "@/shared/ui/button";

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
        <Button className={s.createTripCardWrapper}
                onClick={openCreateTripForm}>
             <span className={s.plusIconWrapper}>
                 <PlusIcon className={s.plusIcon}/>
             </span>
            <p className={s.createTripCardText}>New Trip</p>
        </Button>
    );
};

