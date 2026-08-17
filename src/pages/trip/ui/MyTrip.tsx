import {useTripStore} from "@/entities/trip/model/store/useTripStore.ts";
import type {Trip} from "@/entities/trip/model/types.ts";
import {useParams} from "react-router-dom";
import {ShareIcon} from "@/widgets/side-bar/icons";
import {DownloadIcon, SuitcaseIcon} from "@/widgets/empty-trips-list/icons";
import {DestinationList} from "@/widgets/trip-destination-list/ui/DestinationList.tsx";
import s from './MyTrip.module.scss'

export const MyTrip = () => {

    const {id} = useParams()

    const trips: Trip[] = useTripStore((state) => state.trips)

    const trip = trips.find((item: Trip) => item.id === id)

    if (!trip) {
        return (
            <div className={s.contentInner}>
                <div className={s.myTripPage}>
                    <p>We cannot find trip</p>
                </div>
            </div>
        )
    }

    return (
        <div className={s.contentInner}>
            <div className={s.myTripPage}>
                <div className={s.tripPageHeader}>
                    <p>My Trip</p>
                    <div className={s.iconsWrap}>
                        <DownloadIcon/>
                        <ShareIcon/>
                    </div>
                </div>
                <p className={s.title}><SuitcaseIcon/>{trip.title}</p>
                <div className={s.tripInfo}>
                    <div className={s.tripInfoItems}>
                        <div className={s.tripInfoItem}>
                            <p>DaysCounter</p>
                            <p>Days</p>
                        </div>
                        <div className={s.tripInfoItem}>
                            <p>CitiesCounter</p>
                            <p>Cities</p>
                        </div>
                        <div className={s.tripInfoItem}>
                            <p>StopsCounter</p>
                            <p>Stops</p>
                        </div>
                    </div>
                    <div className={s.tripDates}>
                        <p>Apr 28 - May 8</p>
                        <ul className={s.coutriesFlagsList}>
                            <li className={s.coutriesFlag}>
                                <p>CountryTitle</p>
                                <img src="" alt="Flag"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <DestinationList/>
            </div>
        </div>
    )
};
