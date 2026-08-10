import s from './MyTripsPage.module.scss'
import {BackArrowIcon} from "@/widgets/country-details/ui/icons/BackArrow.tsx";
import {TripsList} from "@/widgets/trips-list/ui/TripsList.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {Filter} from "@/shared/ui/filter-tabs/Filter.tsx";
import {CreateTripModal} from "@/features/create-trip/ui/CreateTripModal/CreateTripModal.tsx";
import {useEffect, useState} from "react";

export const tripFilterVal = ['All', 'Upcoming', 'Current', 'Past']

export const MyTripsPage = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const changeFilter = (filterVal: string) => {
        console.log(filterVal)
    }

    const [modalState, setModalState] = useState(false)

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


    return (
        <>
            <div className={s.myTripsPageHeader}>
                <div className={s.headerFirstSection}>
                    <button onClick={() => navigate(-1)} className={s.backArrow}>
                        <BackArrowIcon/>
                    </button>
                    <p className={s.myTripsPageTitle}>All Trips</p>
                </div>
                <div className={s.headerSecondSection}>
                    <p className={s.myTripsPageCounter}>6</p>
                </div>
            </div>
            <Filter valueMass={tripFilterVal} onChangeValue={changeFilter}/>
            <button onClick={() => setModalState(true)} className={s.createNewTripBtn}>+ Plan a new trip</button>
            <TripsList/>
            {modalState && (
                <div className={s.modalOverlay}>
                    <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
                        <CreateTripModal onClose={() => setModalState(false)}/>
                    </div>
                </div>
            )}
        </>
    );
};

