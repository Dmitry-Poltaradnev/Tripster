export const ROUTES = {
    home: '/',
    explore: '/explore',
    country: '/country/:countryName',
    trips: '/trips',
    myTrips: '/my-trips',
} as const

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]