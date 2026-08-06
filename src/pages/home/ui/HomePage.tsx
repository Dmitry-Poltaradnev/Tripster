import {LensIcon} from "@/shared/ui/input/icons";
import {Input} from "@/shared/ui/input";
import {RecentTrips} from "@/widgets/recent-trips/ui/RecentTrips.tsx";
import {PopularDestinations} from "@/widgets/popular-destinations/ui/PopularDestinations.tsx";
import s from './HomePage.module.scss'
import {useNavigate} from "react-router-dom";

export const HomePage = () => {

    const navigate = useNavigate();

    const searchCountry = (val: string) => {
        navigate(`/country/${encodeURIComponent(val)}`);
    }

    return (
        <div className={s.homePageBody}>
            <p className={s.homePageSubTitle}>Good morning</p>
            <p className={s.homePageTitle}>Where to next?</p>
            <Input placeholder={'Search countries...'} icon={<LensIcon/>} enterVal={searchCountry}/>
            <RecentTrips/>
            <PopularDestinations/>
        </div>
    );
};

