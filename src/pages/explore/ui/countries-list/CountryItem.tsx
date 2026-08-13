import type {FlagsType} from "@/entities/destination/api/destinationApi.ts";
import s from './CountryItem.module.scss'
import {Button} from "@/shared/ui/button";
import {BackArrowIcon} from "@/widgets/country-details/ui/icons/BackArrow.tsx";
import {useNavigate} from "react-router-dom";

type CountryItemProps = {
    name: string
    region: string
    population: number
    flags: FlagsType
}

export const CountryItem = ({name, region, population, flags}: CountryItemProps) => {

    const navigate = useNavigate()

    return (
        <div className={s.countryItemWrapper}>
            <div className={s.itemBlockDesc}>
                <img className={s.countryItemFlag} src={flags.svg} alt={`${name} flag`}/>
                <div className={s.countryItemDesc}>
                    <p className={s.countryItemTitle}>{name}</p>
                    <div className={s.itemInfo}>{region} : {`${(population / 1000000).toFixed(1)}M`} </div>
                </div>
            </div>
            <Button onClick={() => navigate(`/country/${encodeURIComponent(name)}`)}>
                <BackArrowIcon className={s.countryItemBackBtn}/>
            </Button>
        </div>
    );
};

