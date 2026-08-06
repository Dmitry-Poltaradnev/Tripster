import s from './MyTripsPage.module.scss'
import {BackArrowIcon} from "@/widgets/country-details/ui/icons/BackArrow.tsx";
import {TripsList} from "@/widgets/trips-list/ui/TripsList.tsx";

export const MyTripsPage = () => {
    return (
        <>
            <div className={s.myTripsPageHeader}>
                <div className={s.headerFirstSection}>
                    <button className={s.backArrow}>
                        <BackArrowIcon/>
                    </button>
                    <p className={s.myTripsPageTitle}>All Trips</p>
                </div>
                <div className={s.headerSecondSection}>
                    <p className={s.myTripsPageCounter}>6</p>
                </div>
            </div>
            <ul className={s.myTripsTypeList}>
                <li className={s.myTripsListItem}>all</li>
                <li className={s.myTripsListItem}>upcoming</li>
                <li className={s.myTripsListItem}>current</li>
                <li className={s.myTripsListItem}>past</li>
            </ul>
            <button>Plan a new trip</button>
            <TripsList/>
        </>
    );
};

