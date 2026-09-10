import {useLocation, useNavigate} from "react-router-dom";
import {CreateTripModal} from "@/features/create-trip/ui/CreateTripModal/CreateTripModal.tsx";
import {useEffect, useState} from "react";
import {useTripStore} from "@/entities/trip/model/store/useTripStore.ts";
import {EmptyTripsList} from "@/widgets/empty-trips-list/ui/EmptyTripsList.tsx";
import s from './MyTripsPage.module.scss'
import {SelectedTripSection} from "@/widgets/selected-trip-section/ui/SelectedTripSection.tsx";
import {AllTripsSection} from "@/widgets/all-trips-section/ui/AllTripsSection.tsx";
import {AddCountryModal} from "@/features/add-country-to-trip/ui/AddCountryModal/AddCountryModal.tsx";

export const MyTripsPage = () => {

    const navigate = useNavigate()

    const location = useLocation()

    const [modalState, setModalState] = useState(false)

    // ====
    const [addCountryModal, setAddCountryModal] = useState(false)
    // ====

    useEffect(() => {
        if (location.state?.openCreateTripModal) {
            setModalState(true)

            navigate(location.pathname, {replace: true, state: null})
        }
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setModalState(false)
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [location, navigate])

    const trips = useTripStore((state) => state.trips)

    return (
        <div className={s.contentInner}>
            <div>
                {addCountryModal && (
                    <div className={s.modalOverlay}>
                        <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
                            <AddCountryModal onClose={() => setAddCountryModal(false)}/>
                        </div>
                    </div>
                )}
                {modalState && (
                    <div className={s.modalOverlay}>
                        <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
                            <CreateTripModal onClose={() => setModalState(false)}/>
                        </div>
                    </div>
                )}
                {trips.length === 0 ?
                    <EmptyTripsList openModal={() => setModalState(true)}/> :
                    <div className={s.tripsPageContent}>
                        <AllTripsSection setModalState={setModalState}/>
                        <SelectedTripSection setAddCountryModal={setAddCountryModal}/>
                    </div>
                }
            </div>
        </div>
    );
};

