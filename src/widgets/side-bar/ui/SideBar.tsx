import {SideBarHeader} from "./side-bar-header";
import {SideBarMenu} from "./side-bar-menu";
import {SideBarFooter} from "@/widgets/side-bar/ui/side-bar-footer";
import s from './SideBar.module.scss';

export const SideBar = () => {
    return (
        <div className={s.sideBarContentWrapper}>
            <div className={s.sideBarTopContent}>
                <SideBarHeader/>
                <SideBarMenu/>
            </div>
            <SideBarFooter/>
        </div>
    );
};

