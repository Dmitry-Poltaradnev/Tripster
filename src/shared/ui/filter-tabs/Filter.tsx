import s from './Filter.module.scss'
import clsx from "clsx";
import {useState} from "react";
import {Button} from "@/shared/ui/button";

type FilterPropsType = {
    valueMass: string[],
    onChangeValue: (filterVal: string) => void
    className?: string
}

export const Filter = ({valueMass, onChangeValue, className}: FilterPropsType) => {

    const [trip, setTrip] = useState(valueMass[0])

    const changeFilter = (filterVal: string) => {
        setTrip(filterVal)
        onChangeValue(filterVal)
    }

    return (
        <ul className={clsx(s.myTripsTypeList, className)}>
            {valueMass?.map((filterVal: string, index: number) =>
                <li key={filterVal}>
                    <Button onClick={() => changeFilter(filterVal)}
                            className={clsx(s.myTripsListItem, valueMass[index] === trip && s.activeBtn)}>
                        {filterVal}
                    </Button>
                </li>
            )}
        </ul>
    );
};

