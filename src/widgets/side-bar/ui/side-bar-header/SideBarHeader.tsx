import {AppLogo} from "./app-logo/AppLogo.tsx";
import {ThemeController} from "./theme-controller/ThemeController.tsx";
import {useState} from "react";

export const SideBarHeader = () => {

    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    return (
        <div>
            <AppLogo/>
            <ThemeController value={theme} changeTheme={setTheme}/>
        </div>
    );
};

