import s from './MyTripsPage.module.scss'
import {BackArrowIcon} from "@/widgets/country-details/ui/icons/BackArrow.tsx";
import {TripsList} from "@/widgets/trips-list/ui/TripsList.tsx";
import {useNavigate} from "react-router-dom";
import {Filter} from "@/shared/ui/filter-tabs/Filter.tsx";

export const tripFilterVal = ['All', 'Upcoming', 'Current', 'Past']

export const MyTripsPage = () => {

    const navigate = useNavigate()

    const changeFilter = (filterVal: string) => {
        console.log(filterVal)
    }

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
            <button className={s.createNewTripBtn}>+ Plan a new trip</button>
            <TripsList/>
        </>
    );
};

