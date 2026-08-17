import {Input} from "@/shared/ui/input";
import {Filter} from "@/shared/ui/filter-tabs";
import {type CoordinateItem, CountriesList} from "@/widgets/explore-countries/CountriesList.tsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import s from './ExplorePage.module.scss'
import {SearchMap} from "@/widgets/explore-map/SearchMap.tsx";
import {LensIcon} from "@/shared/ui/icons";

export const partsOfTheWorld = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Polar'
]
export const ExplorePage = () => {

    const [mass, setMass] = useState<CoordinateItem[]>([])

    const navigate = useNavigate()

    const [part, setPart] = useState(partsOfTheWorld[0])

    const searchCountry = (val: string) => {
        navigate(`/country/${encodeURIComponent(val)}`)
    }

    return (
        <div className={s.contentInner}>
            <div className={s.explorePageWrapper}>
                <Input placeholder='Search countries...' icon={<LensIcon/>} enterVal={searchCountry}/>
                <Filter valueMass={partsOfTheWorld} onChangeValue={setPart}/>
                <div className={s.explorePageContent}>
                    <CountriesList region={part} setMass={setMass}/>
                    <SearchMap mass={mass}/>
                </div>
            </div>
        </div>
    );
};

