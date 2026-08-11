import s from './CreateTripModal.module.scss'
import {CloseIcon} from "@/features/create-trip/ui/icons";
import {TripForm} from "@/features/create-trip/ui/CreateTripForm/CreateTripForm.tsx";
import {Button} from "@/shared/ui/button";

type CreateTripModalProps = {
    onClose: () => void
}

export const CreateTripModal = ({onClose}: CreateTripModalProps) => {
    return (
        <div className={s.tripModalWrapper}>
            <div className={s.headerModal}>
                <p className={s.modalTitle}>New Trip</p>
                <Button type="button" className={s.closeBtn} aria-label="Close modal" onClick={onClose}>
                    <CloseIcon className={s.closeIcon}/>
                </Button>
            </div>
            <TripForm onClose={onClose}/>
        </div>
    );
};

