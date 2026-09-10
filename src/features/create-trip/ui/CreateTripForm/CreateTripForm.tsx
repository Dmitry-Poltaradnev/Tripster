import {DatePicker} from "@/shared/ui/date-picker";
import {useTripStore} from "@/entities/trip/model/store/useTripStore.ts";
import s from './CreateTripForm.module.scss'
import {type FormEvent, useState} from 'react'
import clsx from "clsx";
import {Button} from "@/shared/ui/button";

type TripFormProps = {
    onClose: () => void
}

export const TripForm = ({onClose}: TripFormProps) => {

    const [title, setTitle] = useState('')

    const [startDate, setStartDate] = useState('')

    const [endDate, setEndDate] = useState('')

    const isFormValid = title.trim() !== '' && startDate !== '' && endDate !== ''

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
                <label className={s.formLabel} htmlFor="title">TRIP TITLE</label>
                <input
                    className={s.inputField}
                    id="title"
                    type="text"
                    placeholder="Enter trip name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <DatePicker endPoint={endDate}
                        setEndPoint={setEndDate}
                        setStartPoint={setStartDate}
                        startPoint={startDate}/>

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
