import {SideBarHeader} from "./side-bar-header";
import {SideBarMenu} from "./side-bar-menu";
import s from './SideBar.module.scss'

export const SideBar = () => {
    return (
        <div className={s.sideBarBody}>
            <SideBarHeader/>
            <SideBarMenu/>
        </div>
    );
};

