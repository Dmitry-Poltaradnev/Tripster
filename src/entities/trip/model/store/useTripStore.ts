import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'
import {getTripStatus} from "@/shared/lib/trip-status/getTripStatus.ts";

type TripPlace = {
    id: string
    placeTitle: string
}

type TripCountry = {
    id: string
    flagUrl: string
    countryTitle: string
    startDate: string
    endDate: string
    places: TripPlace[]
}

export type Trip = {
    id: string
    title: string
    startDate: string
    endDate: string
    createdAt: string
    durationDays: number
    isCountries: boolean
    countries?: TripCountry[]
    tripStatus: TripStatus
}

type CreateTrip = {
    title: string
    startDate: string
    endDate: string
}

// type AddCountryToTripInput = {
//     tripId: string
//     countryName: string
//     startDate: string
//     endDate: string
// }

export type TripStatus = 'upcoming' | 'current' | 'past'

type TripStore = {
    trips: Trip[]
    addTrip: (payload: CreateTrip) => void
    removeTrip: (tripId: string) => void
    getTripStatus?: (status: TripStatus | 'all') => Trip[]
}

const MS_IN_DAY = 1000 * 60 * 60 * 24

const getDurationDays = (startDate: string, endDate: string) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    return Math.floor((end.getTime() - start.getTime()) / MS_IN_DAY) + 1
}

export const useTripStore = create<TripStore>()(
    persist(
        (set) => ({
            trips: [],
            addTrip: ({
                          title, startDate, endDate
                      }) => {
                const newTrip: Trip = {
                    id: crypto.randomUUID(),
                    title: title.trim(),
                    startDate,
                    endDate,
                    tripStatus: getTripStatus(startDate, endDate),
                    durationDays: getDurationDays(startDate, endDate),
                    createdAt: new Date().toISOString(),
                    isCountries: false,
                }
                set((state) => ({
                    trips: [newTrip, ...state.trips]
                }))
            },
            removeTrip: (tripId) => {
                set((state) => ({
                    trips: state.trips.filter((trip) => trip.id !== tripId)
                }))
            },
        }),
        {
            name: 'tripster-trips',
            storage:
                createJSONStorage(() => localStorage)
        }
    )
)