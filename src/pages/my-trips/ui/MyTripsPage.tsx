import {BackArrowIcon} from "@/shared/ui/icons/BackArrowIcon.tsx";
import {TripsList} from "@/widgets/trips-list/ui/TripsList.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {Filter} from "@/shared/ui/filter-tabs/Filter.tsx";
import {CreateTripModal} from "@/features/create-trip/ui/CreateTripModal/CreateTripModal.tsx";
import {useEffect, useState} from "react";
import {useTripStore} from "@/entities/trip/model/store/useTripStore.ts";
import {EmptyTripsList} from "@/widgets/empty-trips-list/ui/EmptyTripsList.tsx";
import {Button} from "@/shared/ui/button";
import s from './MyTripsPage.module.scss'

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

    const trips = useTripStore((state) => state.trips)

    return (
        <div className={s.contentInner}>
            <>
                {modalState && (
                    <div className={s.modalOverlay}>
                        <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
                            <CreateTripModal onClose={() => setModalState(false)}/>
                        </div>
                    </div>
                )}
                {trips.length === 0 ?
                    <EmptyTripsList openModal={() => setModalState(true)}/> :
                    <div>
                        <div className={s.myTripsPageHeader}>
                            <div className={s.headerFirstSection}>
                                <button onClick={() => navigate(-1)} className={s.backArrow}>
                                    <BackArrowIcon/>
                                </button>
                                <p className={s.myTripsPageTitle}>All Trips</p>
                            </div>
                            <div className={s.headerSecondSection}>
                                <p className={s.myTripsPageCounter}>{trips.length}</p>
                            </div>
                        </div>
                        <Filter valueMass={tripFilterVal} onChangeValue={changeFilter}/>
                        <Button onClick={() => setModalState(true)} className={s.createNewTripBtn}>
                            + Plan a new trip
                        </Button>
                        <TripsList/>
                    </div>
                }
            </>
        </div>
    );
};

