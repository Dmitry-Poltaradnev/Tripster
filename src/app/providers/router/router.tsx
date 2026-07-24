import {createBrowserRouter} from "react-router-dom";
import {ExplorePage} from "@/pages/explore";
import {CountryDetailsPage} from "@/pages/country-details";
import {AllTripsPage} from "@/pages/all-trips";
import {MyTripsPage} from "@/pages/my-trips";
import {AppLayout} from "@/widgets/app-layout";
import {HomePage} from "@/pages/home";

export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/explore",
                element: <ExplorePage/>
            },
            {
                path: "/country/:id",
                element: <CountryDetailsPage/>
            },
            {
                path: "/trips",
                element: <AllTripsPage/>
            },
            {
                path: "/my-trips",
                element: <MyTripsPage/>
            }
        ]
    }
]);