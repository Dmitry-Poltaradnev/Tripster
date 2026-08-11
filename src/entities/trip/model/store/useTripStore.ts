import type {Trip, TripCity, TripStatus} from "@/entities/trip/model/types.ts";
import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'

type CreateTrip = {
    title: string
    startDate: string
    endDate: string
    cities?: TripCity[]
}

type TripStore = {
    trips: Trip[]
    addTrip: (payload: CreateTrip) => void
    removeTrip: (tripId: string, city: TripCity) => void
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

            addTrip: ({title, startDate, endDate, cities = []}) => {
                const newTrip: Trip = {
                    id: crypto.randomUUID(),
                    title: title.trim(),
                    startDate,
                    endDate,
                    durationDays: getDurationDays(startDate, endDate),
                    cities,
                    createdAt: new Date().toISOString()
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
            storage: createJSONStorage(() => localStorage)
        }
    )
)