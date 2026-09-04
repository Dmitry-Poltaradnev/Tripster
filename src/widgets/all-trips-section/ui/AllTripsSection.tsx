import s from './AllTripsSection.module.scss';
import {Button} from "@/shared/ui/button";
import {LensIcon, PlusIcon} from "@/shared/ui/icons";
import {Input} from "@/shared/ui/input";
import {Filter} from "@/shared/ui/filter-tabs";
import {TripsList} from "@/widgets/trips-list/ui/TripsList.tsx";
import {useMemo, useState} from "react";
import {type TripStatus, useTripStore} from "@/entities/trip/model/store/useTripStore.ts";
import {getTripStatus} from "@/shared/lib/trip-status/getTripStatus.ts";

type AllTripsSectionProps = {
    setModalState: (state: boolean) => void;
};

export const tripFilterVal = ['all', 'upcoming', 'current', 'past']

export const AllTripsSection = ({setModalState}: AllTripsSectionProps) => {

    const storeTrips = useTripStore((state) => state.trips);

    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");

    const suggestions = useMemo(() => {
        const value = query.trim().toLowerCase();
        if (!value) return [];

        return storeTrips
            .filter((trip) => trip.title.toLowerCase().includes(value))
            .slice(0, 5);
    }, [storeTrips, query]);

    const [filterVal, setFilterVal] = useState<TripStatus | 'all'>('all')

    const changeFilter = (filterVal: string) => {
        if (
            filterVal === 'all' ||
            filterVal === 'upcoming' ||
            filterVal === 'current' ||
            filterVal === 'past'
        ) {
            setFilterVal(filterVal)
            setQuery("")
        }
    }

    const filteredTrips = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        return storeTrips.filter((trip) => {
            const matchesStatus =
                filterVal === 'all' ||
                getTripStatus(trip.startDate, trip.endDate) === filterVal;

            const matchesQuery =
                normalizedQuery === '' ||
                trip.title.toLowerCase().includes(normalizedQuery);

            return matchesStatus && matchesQuery;
        });
    }, [filterVal, query, storeTrips]);

    return (
        <div className={s.allTripsSection}>
            <div className={s.headerFirstSection}>
                <p className={s.myTripsPageTitle}>My Trips</p>
                <Button className={s.addTripBtn} onClick={() => setModalState(true)}>
                    <PlusIcon className={s.plusIcon}/>
                </Button>
            </div>

            <Input
                placeholder="Search trips..."
                role="combobox"
                aria-expanded={isOpen}
                aria-autocomplete="list"
                aria-controls="trips-suggestions"
                icon={<LensIcon/>}
                enterVal={() => setIsOpen(false)}
                value={query}
                onChangeVal={(value) => {
                    setQuery(value);
                    setIsOpen(true);
                }}
                onFocus={() => {
                    if (suggestions.length > 0) setIsOpen(true);
                }}
                onClose={() => setIsOpen(false)}
            />

            <Filter valueMass={tripFilterVal} onChangeValue={changeFilter} className={s.filter}/>
            <TripsList trips={filteredTrips} variant="column"/>
        </div>
    );
};

