export const ROUTES = {
    home: '/',
    explore: '/explore',
    country: '/country/:name',
    trips: '/trips',
    myTrips: '/my-trips',
} as const

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]