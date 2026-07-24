import {LensIcon} from "@/shared/ui/input/icons";
import {Input} from "@/shared/ui/input";
import s from './HomePage.module.scss'

export const HomePage = () => {
    return (
        <div className={s.homePageBody}>
            <p>Where to next?</p>
            <Input placeholder={'Search countries...'} icon={<LensIcon/>}/>
        </div>
    );
};

