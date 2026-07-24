import {TripsterIcon} from "@/widgets/side-bar/icons";
import {Link} from "react-router-dom";
import s from './AppLogo.module.scss';

export const AppLogo = () => {
    return (
        <Link className={s.logoWrapper} to={'/'} aria-label="Go to home page">
            <TripsterIcon/>
            <p className={s.logoTitle}>Tripster</p>
        </Link>
    );
};

