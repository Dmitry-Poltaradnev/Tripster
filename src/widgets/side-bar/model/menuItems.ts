import {HomePageIcon} from "../icons";
import {ExploreIcon} from "../icons";
import {MyTripsIcon} from "../icons";

export const sidebarMenuItems = [
    {path: '/', label: 'Home', icon: HomePageIcon},
    {path: '/explore', label: 'Explore', icon: ExploreIcon},
    {path: '/my-trips', label: 'My Trips', icon: MyTripsIcon},
] as const