import { TripsterIcon } from "@/widgets/side-bar/icons";
import {Link} from "react-router-dom";

export const AppLogo = () => {
    return (
        <Link to={'/'} aria-label="Go to home page">
            <TripsterIcon/>
            <p>Tripster</p>
        </Link>
    );
};

