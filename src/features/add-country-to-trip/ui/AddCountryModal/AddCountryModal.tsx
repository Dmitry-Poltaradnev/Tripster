import {Button} from "@/shared/ui/button";
import s from './AddCountryModal.module.scss'
import {Input} from "@/shared/ui/input";
import {CloseIcon, LensIcon} from "@/shared/ui/icons";
import {CountryModalList} from "@/features/add-country-to-trip/ui/CountryModalList/CountryModalList.tsx";
import {useState} from "react";
import type {DestinationType} from "@/entities/destination/model/types.ts";
import {DatePicker} from "@/shared/ui/date-picker";
import clsx from "clsx";

type AddCountryModalProps = {
    onClose: () => void
}

export const AddCountryModal = ({onClose}: AddCountryModalProps) => {

    const [selected, setSelected] = useState(false)
    const [country, setCountry] = useState<DestinationType | null>(null)

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const [query, setQuery] = useState("");

    return (
        <div className={s.addCountryModalWrapper}>
            <div className={s.headerModal}>
                <p className={s.modalTitle}>Add Country</p>
                <Button type="button" className={s.closeBtn} aria-label="Close modal" onClick={onClose}>
                    <CloseIcon className={s.closeIcon}/>
                </Button>
            </div>
            <div className={s.contentModal}>
                <Input className={s.addCountryInput}
                       icon={<LensIcon/>}
                       placeholder="Search countries…"
                       value={query}
                       onChangeVal={setQuery}
                />
                <CountryModalList setSelected={setSelected}
                                  setCountry={setCountry}/>
            </div>
            {selected && <DatePicker startPoint={startDate}
                                     endPoint={endDate}
                                     setStartPoint={setStartDate}
                                     setEndPoint={setEndDate}
            />}
            <Button className={clsx(s.addCountryBtn, selected ? s.activeItem : s.nonActiveItem)}>{selected ?
                <>
                    <p>Add</p>
                    <img className={s.itemCountryFlag}
                         src={country?.flags.svg}
                         alt="countryFlag"/>
                    <p>{country?.name}</p>
                </> : <p className={s.disableBtn}>Select a country</p>}
            </Button>
        </div>
    );
};

