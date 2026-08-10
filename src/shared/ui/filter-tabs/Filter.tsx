import s from './Filter.module.scss'
import clsx from "clsx";
import {useState} from "react";

type FilterPropsType = {
    valueMass: string[],
    onChangeValue: (filterVal: string) => void
}

export const Filter = ({valueMass, onChangeValue}: FilterPropsType) => {

    const [trip, setTrip] = useState(valueMass[0])

    const changeFilter = (filterVal: string) => {
        setTrip(filterVal)
        onChangeValue(filterVal)
    }

    return (
        <ul className={s.myTripsTypeList}>
            {valueMass?.map((filterVal: string, index: number) =>
                <li key={filterVal}>
                    <button onClick={() => changeFilter(filterVal)}
                            className={clsx(s.myTripsListItem, valueMass[index] === trip && s.activeBtn)}>
                        {filterVal}
                    </button>
                </li>
            )}
        </ul>
    );
};

