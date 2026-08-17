import {Input} from "@/shared/ui/input";
import {RecentTrips} from "@/widgets/recent-trips/ui/RecentTrips.tsx";
import {PopularDestinations} from "@/widgets/popular-destinations/ui/PopularDestinations.tsx";
import {useNavigate} from "react-router-dom";
import {LensIcon} from "@/shared/ui/icons";
import s from './HomePage.module.scss'
import {useState} from "react";

export const HomePage = () => {

    const navigate = useNavigate();

    const searchCountry = (val: string) => {
        const fixedValue = val.trim().toLowerCase();

        navigate(`/country/${encodeURIComponent(fixedValue)}`);
    }

    const [inputVal, setInputVal] = useState('')

    return (
        <div className={s.contentInner}>
            <div className={s.homePageBody}>
                <p className={s.homePageSubTitle}>Good morning</p>
                <p className={s.homePageTitle}>Where to next?</p>
                <Input
                    placeholder={'Search countries...'}
                    icon={<LensIcon/>}
                    enterVal={searchCountry}
                    value={inputVal}
                    onChangeVal={setInputVal}
                />
                <RecentTrips/>
                <PopularDestinations/>
            </div>
        </div>
    );
};

