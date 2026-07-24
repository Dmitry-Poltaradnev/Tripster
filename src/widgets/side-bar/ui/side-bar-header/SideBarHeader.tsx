import {AppLogo} from "./app-logo";
import {ThemeController} from "./theme-controller";
import {useState} from "react";
import s from './SideBarHeader.module.scss';

export const SideBarHeader = () => {

    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    return (
        <div className={s.sideBarHeaderWrapper}>
            <AppLogo/>
            <ThemeController value={theme} changeTheme={setTheme}/>
        </div>
    );
};

