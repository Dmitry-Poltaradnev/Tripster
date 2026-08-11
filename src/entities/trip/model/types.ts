export type TripCity = {
    id: string
    name: string
    country: string
    countryCode?: string
    lat: number
    lng: number
}

export type Trip = {
    id: string
    title: string
    startDate: string
    endDate: string
    durationDays: number
    cities: TripCity[]
    createdAt: string
}

export type TripStatus = 'upcoming' | 'current' | 'past'
