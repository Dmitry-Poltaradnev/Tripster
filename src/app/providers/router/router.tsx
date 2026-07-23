import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../../../pages/home";
import {ExplorePage} from "../../../pages/explore";
import {CountryDetailsPage} from "../../../pages/country-details";
import {AllTripsPage} from "../../../pages/all-trips";
import {MyTripsPage} from "../../../pages/my-trips";
import {AppLayout} from "../../../widgets/app-layout/ui/AppLayout.tsx";
import {ExploreIcon} from "../../../widgets/side-bar/icons/ExploreIcon.tsx";
import {HomePageIcon} from "../../../widgets/side-bar/icons/HomePageIcon.tsx";
import {MyTripsIcon} from "../../../widgets/side-bar/icons/MyTripsIcon.tsx";

export const sidebarMenuItems = [
    {path: '/', label: 'Home', icon: HomePageIcon},
    {path: '/explore', label: 'Explore', icon: ExploreIcon},
    {path: '/my-trips', label: 'My Trips', icon: MyTripsIcon},
] as const

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