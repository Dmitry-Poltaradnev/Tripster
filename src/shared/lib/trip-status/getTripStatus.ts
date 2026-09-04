import type {TripStatus} from "@/entities/trip/model/store/useTripStore.ts";

export const getTripStatus = (startDate: string, endDate: string): TripStatus => {
    const today = new Date()
    const start = new Date(startDate)
    const end = new Date(endDate)

    if (today < start) return 'upcoming'
    if (today > end) return 'past'
    return 'current'
}