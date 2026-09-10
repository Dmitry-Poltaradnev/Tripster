import s from './SelectedTripSection.module.scss';
import {Button} from "@/shared/ui/button";
import {ThreeDotIcon} from "@/shared/ui/icons/ThreeDotIcon.tsx";
import {useTripStore} from "@/entities/trip/model/store/useTripStore.ts";
import {getTripStatus} from "@/shared/lib/trip-status/getTripStatus.ts";
import clsx from "clsx";
import {formatTripRange} from "@/shared/lib/date/formatTripRange.ts";

type SelectedTripSectionProps = {
    setAddCountryModal: (state: boolean) => void;
};


export const SelectedTripSection = ({setAddCountryModal}: SelectedTripSectionProps) => {

    const selectedTrip = useTripStore(state => state.trips[0]);

    console.log('selectedTrip', selectedTrip);

    const {title, startDate, endDate, durationDays, countries} = selectedTrip

    return (
        <div className={s.selectedTripSection}>
            <div className={s.tripSectionHeader}>
                <p className={s.selectedTripTitle}>{title}</p>
                <div className={clsx(s.tripStatusBlock)}>
                    <p className={clsx(s.tripStatus, s[getTripStatus(startDate, endDate)])}>{getTripStatus(startDate, endDate)}</p>
                    <Button className={s.manageTripBtn}>
                        <ThreeDotIcon className={s.threeDotIcon}/>
                    </Button>
                </div>
            </div>
            <p className={s.tripDates}>{formatTripRange(startDate, endDate)}</p>
            <div className={s.tripInfoBlock}>
                <div className={s.tripInfoList}>
                    <div className={s.tripInfoItem}>
                        <p className={s.tripInfoCounter}>{durationDays}</p>
                        <p className={s.tripInfoText}>days</p>
                    </div>
                    <div className={s.tripInfoItem}>
                        <p className={s.tripInfoCounter}>{countries?.length || 0}</p>
                        <p className={s.tripInfoText}>Countries</p>
                    </div>
                    <div className={s.tripInfoItem}>
                        <p className={s.tripInfoCounter}>12</p>
                        <p className={s.tripInfoText}>Destinations</p>
                    </div>
                </div>

                {/*======*/}
                {!countries ? <p>No countries added</p> : (
                    <ul className={s.countryFlagsList}>
                        {countries.map((country: any, index) => (
                            <li key={index}>{country.title}</li>
                        ))}
                    </ul>
                )}
                {/*======*/}

            </div>
            <div className={s.currentTrip}>
                Card
            </div>
            <Button onClick={() => setAddCountryModal(true)} className={s.addCountryBtn}>
                + Add country
            </Button>
        </div>
    );
};

