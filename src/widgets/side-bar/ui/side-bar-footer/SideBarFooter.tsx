import s from './SideBarFooter.module.scss';
import {Link} from "react-router-dom";

export const SideBarFooter = () => {
    return (
        <div className={s.sideBarFooter}>
            <p className={s.footerTitle}>TRIP IN PROGRESS</p>
            <Link className={s.footerLink} to="/my-trips">See details →</Link>
        </div>
    );
};

