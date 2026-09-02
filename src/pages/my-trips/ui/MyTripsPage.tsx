import {TripsList} from "@/widgets/trips-list/ui/TripsList.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {Filter} from "@/shared/ui/filter-tabs/Filter.tsx";
import {CreateTripModal} from "@/features/create-trip/ui/CreateTripModal/CreateTripModal.tsx";
import {useEffect, useState} from "react";
import {useTripStore} from "@/entities/trip/model/store/useTripStore.ts";
import {EmptyTripsList} from "@/widgets/empty-trips-list/ui/EmptyTripsList.tsx";
import {Button} from "@/shared/ui/button";
import s from './MyTripsPage.module.scss'
import {Input} from "@/shared/ui/input";
import {LensIcon, PlusIcon} from "@/shared/ui/icons";
import {SelectedTripSection} from "@/widgets/selected-trip-section/ui/SelectedTripSection.tsx";

export const tripFilterVal = ['All', 'Upcoming', 'Current', 'Past']

export const MyTripsPage = () => {

    const navigate = useNavigate()

    const location = useLocation()

    const [modalState, setModalState] = useState(false)

    const [inputVal, setInputVal] = useState('')

    const searchTrip = () => {
        console.log(inputVal)
    }

    const changeFilter = (filterVal: string) => {
        console.log(filterVal)
    }

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
                        <div className={s.allTripsSection}>
                            <div className={s.headerFirstSection}>
                                <p className={s.myTripsPageTitle}>My Trips</p>
                                <Button className={s.addTripBtn}>
                                    <PlusIcon className={s.plusIcon}/>
                                </Button>
                            </div>
                            <Input placeholder="Search trips..."
                                   icon={<LensIcon/>}
                                   enterVal={searchTrip}
                                   value={inputVal}
                                   onChangeVal={setInputVal}/>
                            <Filter valueMass={tripFilterVal} onChangeValue={changeFilter} className={s.filter}/>
                            <TripsList/>
                        </div>
                        <SelectedTripSection setModalState={setModalState}/>
                    </div>
                }
            </div>
        </div>
    );
};

