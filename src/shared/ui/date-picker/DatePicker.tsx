import {Button} from "../button";
import s from './DatePicker.module.scss'
import {DateIcon} from "@/features/create-trip/ui/icons";
import {useRef} from "react";

type DatePickerProps = {
    startPoint: string
    endPoint: string
    setStartPoint: (val: string) => void
    setEndPoint: (val: string) => void
}

export const DatePicker = ({startPoint, endPoint, setStartPoint, setEndPoint}: DatePickerProps) => {

    const startDateRef = useRef<HTMLInputElement>(null)
    const endDateRef = useRef<HTMLInputElement>(null)

    return (
        <div className={s.datesFieldsWrap}>
            <div className={s.dateField}>
                <div className={s.inputTitle}>
                    <DateIcon className={s.dateIcon}/>
                    <label className={s.formLabel} htmlFor="startDate">START</label>
                </div>
                <Button
                    className={s.dateBtn}
                    type="button"
                    onClick={() => startDateRef.current?.showPicker()}
                    aria-label="Select start date"
                >
                    <span className={s.dateButtonValue}>{startPoint}</span>
                </Button>
                <input
                    ref={startDateRef}
                    className={s.hiddenDateInput}
                    id="startDate"
                    type="date"
                    value={startPoint}
                    onChange={(e) => setStartPoint(e.target.value)}
                />
            </div>
            <div className={s.dateField}>
                <div className={s.inputTitle}>
                    <DateIcon className={s.dateIcon}/>
                    <label className={s.formLabel} htmlFor="endDate">END</label>
                </div>
                <Button
                    type="button"
                    className={s.dateBtn}
                    onClick={() => endDateRef.current?.showPicker()}
                    aria-label="Select end date"
                >
                    <span className={s.dateButtonValue}>{endPoint}</span>
                </Button>
                <input
                    ref={endDateRef}
                    className={s.hiddenDateInput}
                    id="endDate"
                    type="date"
                    value={endPoint}
                    min={startPoint}
                    onChange={(e) => setEndPoint(e.target.value)}
                />
            </div>
        </div>
    );
};

