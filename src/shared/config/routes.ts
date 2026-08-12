export const ROUTES = {
    home: '/',
    explore: '/explore',
    country: '/country/:countryName',
    trips: '/trips',
    myTrips: '/my-trips',
    trip: '/trip/:id'
} as const

export const getTripRoute = (id: string) => `/trip/${id}`
export const getTripCountry = (countryName: string) => `/trip/${countryName}`

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]