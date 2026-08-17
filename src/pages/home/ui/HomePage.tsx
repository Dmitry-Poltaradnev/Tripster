import {Input} from "@/shared/ui/input";
import {RecentTrips} from "@/widgets/recent-trips/ui/RecentTrips.tsx";
import {PopularDestinations} from "@/widgets/popular-destinations/ui/PopularDestinations.tsx";
import {useNavigate} from "react-router-dom";
import {LensIcon} from "@/shared/ui/icons";
import s from './HomePage.module.scss'

export const HomePage = () => {

    const navigate = useNavigate();

    const searchCountry = (val: string) => {
        navigate(`/country/${encodeURIComponent(val)}`);
    }

    return (
        <div className={s.contentInner}>
            <div className={s.homePageBody}>
                <p className={s.homePageSubTitle}>Good morning</p>
                <p className={s.homePageTitle}>Where to next?</p>
                <Input placeholder={'Search countries...'} icon={<LensIcon/>} enterVal={searchCountry}/>
                <RecentTrips/>
                <PopularDestinations/>
            </div>
        </div>
    );
};

