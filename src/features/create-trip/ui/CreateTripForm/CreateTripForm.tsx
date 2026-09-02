import s from './CreateTripForm.module.scss'
import {type FormEvent, useRef, useState} from 'react'
import {DateIcon} from '@/features/create-trip/ui/icons'
import clsx from "clsx";
import {useTripStore} from "@/entities/trip/model/store/useTripStore.ts";
import {Button} from "@/shared/ui/button";

type TripFormProps = {
    onClose: () => void
}

export const TripForm = ({onClose}: TripFormProps) => {

    const [title, setTitle] = useState('')

    const [startDate, setStartDate] = useState('')

    const [endDate, setEndDate] = useState('')

    const isFormValid = title.trim() !== '' && startDate !== '' && endDate !== ''

    const startDateRef = useRef<HTMLInputElement>(null)
    const endDateRef = useRef<HTMLInputElement>(null)

    const addTrip = useTripStore((state) => state.addTrip)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const trip = {
            title,
            startDate,
            endDate,
        }

        console.log(trip)
        addTrip(trip)
        onClose()
    }

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.fieldWrap}>
                <label className={s.formLabel} htmlFor="title">TRIP NAME</label>
                <input
                    className={s.inputField}
                    id="title"
                    type="text"
                    placeholder="Enter trip name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

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
                        <span className={s.dateButtonValue}>{startDate}</span>
                    </Button>

                    <input
                        ref={startDateRef}
                        className={s.hiddenDateInput}
                        id="startDate"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
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
                        <span className={s.dateButtonValue}>{endDate}</span>
                    </Button>

                    <input
                        ref={endDateRef}
                        className={s.hiddenDateInput}
                        id="endDate"
                        type="date"
                        value={endDate}
                        min={startDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>

            <p className={s.createTripDesc}>
                You'll be taken to your new trip where you can add destinations from Explore.
            </p>

            <Button
                className={clsx(s.createTripBtn, isFormValid && s.active)}
                type="submit"
                disabled={!isFormValid}
            >
                CREATE TRIP
            </Button>
        </form>
    )
}
