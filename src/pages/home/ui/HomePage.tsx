import {LensIcon} from "@/shared/ui/input/icons";
import {Input} from "@/shared/ui/input";
import s from './HomePage.module.scss'
import {RecentTrips} from "@/widgets/recent-trips/ui/RecentTrips.tsx";
import {PopularDestinations} from "@/widgets/popular-destinations/ui/PopularDestinations.tsx";

export const HomePage = () => {
    return (
        <div className={s.homePageBody}>
            <p className={s.homePageSubTitle}>Good morning</p>
            <p className={s.homePageTitle}>Where to next?</p>
            <Input placeholder={'Search countries...'} icon={<LensIcon/>}/>
            <RecentTrips/>
            <PopularDestinations/>
        </div>
    );
};

