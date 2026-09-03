import s from './AllTripsSection.module.scss';
import {Button} from "@/shared/ui/button";
import {LensIcon, PlusIcon} from "@/shared/ui/icons";
import {Input} from "@/shared/ui/input";
import {Filter} from "@/shared/ui/filter-tabs";
import {TripsList} from "@/widgets/trips-list/ui/TripsList.tsx";
import {useState} from "react";

export const tripFilterVal = ['All', 'Upcoming', 'Current', 'Past']

export const AllTripsSection = () => {

    const [inputVal, setInputVal] = useState('')

    const searchTrip = () => {
        console.log(inputVal)
    }

    const changeFilter = (filterVal: string) => {
        console.log(filterVal)
    }

    return (
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
            <TripsList variant="column"/>
        </div>
    );
};

