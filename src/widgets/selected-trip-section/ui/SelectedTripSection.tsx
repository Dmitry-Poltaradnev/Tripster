import s from './SelectedTripSection.module.scss';
import {Button} from "@/shared/ui/button";
import {ThreeDotIcon} from "@/shared/ui/icons/ThreeDotIcon.tsx";

type SelectedTripSectionProps = {
    setModalState: (state: boolean) => void;
};

export const SelectedTripSection = ({setModalState}: SelectedTripSectionProps) => {
    return (
        <div className={s.selectedTripSection}>
            <div className={s.tripSectionHeader}>
                <p className={s.selectedTripTitle}>TripTitle</p>
                <div className={s.tripStatusBlock}>
                    {/*====*/}
                    <p className={`${s.tripStatus} ${s.tripStatusCurrent}`}>TripStatus</p>
                    {/*====*/}
                    <Button className={s.manageTripBtn}>
                        <ThreeDotIcon className={s.threeDotIcon}/>
                    </Button>
                </div>
            </div>
            <p className={s.tripDates}>Apr 28 – May 8</p>
            <div className={s.tripInfoBlock}>
                <div className={s.tripInfoList}>
                    <div className={s.tripInfoItem}>
                        <p className={s.tripInfoCounter}>15</p>
                        <p className={s.tripInfoText}>days</p>
                    </div>
                    <div className={s.tripInfoItem}>
                        <p className={s.tripInfoCounter}>5</p>
                        <p className={s.tripInfoText}>Countries</p>
                    </div>
                    <div className={s.tripInfoItem}>
                        <p className={s.tripInfoCounter}>12</p>
                        <p className={s.tripInfoText}>Destinations</p>
                    </div>
                </div>
                <ul className={s.countryFlagsList}>
                    <li>Flag</li>
                    <li>Flag</li>
                    <li>Flag</li>
                </ul>
            </div>
            <div className={s.currentTrip}>
                Card
            </div>
            <Button onClick={() => setModalState(true)} className={s.addCountryBtn}>
                + Add country
            </Button>
        </div>
    );
};

