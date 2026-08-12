import {createBrowserRouter} from "react-router-dom";
import {ExplorePage} from "@/pages/explore";
import {CountryDetailsPage} from "@/pages/country-details";
import {MyTripsPage} from "@/pages/my-trips";
import {AppLayout} from "@/widgets/app-layout";
import {HomePage} from "@/pages/home";
import {ROUTES} from "@/shared/config/routes.ts";
import {MyTrip} from "@/pages/trip";

export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children: [
            {
                path: ROUTES.home,
                element: <HomePage/>
            },
            {
                path: ROUTES.explore,
                element: <ExplorePage/>
            },
            {
                path: ROUTES.country,
                element: <CountryDetailsPage/>
            },
            {
                path: ROUTES.myTrips,
                element: <MyTripsPage/>
            },
            {
                path: ROUTES.trip,
                element: <MyTrip/>
            },
        ]
    }
]);