import s from './MyTripsPage.module.scss'
import {BackArrowIcon} from "@/widgets/country-details/ui/icons/BackArrow.tsx";
import {TripsList} from "@/widgets/trips-list/ui/TripsList.tsx";
import clsx from "clsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const tripFilterVal = ['All', 'Upcoming', 'Current', 'Past'] as const

export type TripFilter = typeof tripFilterVal[number]

export const MyTripsPage = () => {

    const navigate = useNavigate()

    const [trip, setTrip] = useState<TripFilter>(tripFilterVal[0])

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
            <ul className={s.myTripsTypeList}>
                {tripFilterVal.map((filterVal: TripFilter, index) =>
                    <li key={filterVal}>
                        <button onClick={() => setTrip(filterVal)}
                                className={clsx(s.myTripsListItem, tripFilterVal[index] === trip && s.activeBtn)}>
                            {filterVal}
                        </button>
                    </li>
                )}
            </ul>
            <button className={s.createNewTripBtn}>+ Plan a new trip</button>
            <TripsList/>
        </>
    );
};

