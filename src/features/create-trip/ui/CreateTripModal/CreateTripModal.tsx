import s from './CreateTripModal.module.scss'
import {CloseIcon} from "@/features/create-trip/ui/icons";
import {TripForm} from "@/features/create-trip/ui/CreateTripForm/CreateTripForm.tsx";

type CreateTripModalProps = {
    onClose: () => void
}

export const CreateTripModal = ({onClose}: CreateTripModalProps) => {
    return (
        <div className={s.tripModalWrapper}>
            <div className={s.headerModal}>
                <p className={s.modalTitle}>New Trip</p>
                <button type="button" className={s.closeBtn} aria-label="Close modal" onClick={onClose}>
                    <CloseIcon className={s.closeIcon}/>
                </button>
            </div>
            <TripForm onClose={onClose}/>
        </div>
    );
};

