import {Input} from "@/shared/ui/input";
import {Filter} from "@/shared/ui/filter-tabs";
import {LensIcon} from "@/shared/ui/input/icons";
import {CountriesList} from "@/pages/explore/ui/countries-list/CountriesList.tsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import s from './ExplorePage.module.scss'
import {SearchMap} from "@/pages/explore/ui/countries-list/SearchMap.tsx";

export const partsOfTheWorld = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Polar'
]
export const ExplorePage = () => {

    const navigate = useNavigate()

    const [part, setPart] = useState(partsOfTheWorld[0])

    const changeWorldPart = (value: string) => {
        setPart(value)
        return partsOfTheWorld.map(item => item === value)
    }

    const searchCountry = (val: string) => {
        navigate(`/country/${encodeURIComponent(val)}`)
    }

    return (
        <div className={s.explorePageWrapper}>
            <Input placeholder='Search countries...' icon={<LensIcon/>} enterVal={searchCountry}/>
            <Filter valueMass={partsOfTheWorld} onChangeValue={changeWorldPart}/>
            <CountriesList region={part}/>
            <SearchMap/>
        </div>
    );
};

