import {HomePageIcon} from "../icons";
import {ExploreIcon} from "../icons";
import {MyTripsIcon} from "../icons";
import {ROUTES} from "@/shared/config/routes.ts";

export const sidebarMenuItems = [
    {
        path: ROUTES.home,
        label: 'Home',
        icon: HomePageIcon,
    },
    {
        path: ROUTES.explore,
        label: 'Explore',
        icon: ExploreIcon,
    },
    {
        path: ROUTES.myTrips,
        label: 'My Trips',
        icon: MyTripsIcon,
    },
] as const