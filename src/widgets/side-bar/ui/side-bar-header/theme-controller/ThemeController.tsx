import {SunIcon, MoonIcon} from "@/widgets/side-bar/icons"
import s from './ThemeController.module.scss'
import clsx from "clsx";

type Theme = 'light' | 'dark'

type ThemeControllerProps = {
    value: Theme
    changeTheme: (theme: Theme) => void
}

const themeLogger = (theme: Theme) => {
    console.log('Theme changed to:', theme);
}

export const ThemeController = ({
                                    value,
                                    changeTheme,
                                }: ThemeControllerProps) => {
    return (
        <div className={s.themeControllerWrapper} role="group" aria-label="Select theme">
            <button className={clsx(s.themeButton, value === 'light' && s.active)}
                type="button"
                aria-pressed={value === 'light'}
                onClick={() => {
                    changeTheme('light')
                    themeLogger('light')
                }}
            >
                <SunIcon color="#9590be" />
            </button>

            <button className={clsx(s.themeButton, value === 'dark' && s.active)}
                type="button"
                aria-pressed={value === 'dark'}
                onClick={() => {
                    changeTheme('dark')
                    themeLogger('dark')
                }}
            >
                <MoonIcon color="#9590be" />
            </button>
        </div>
    )
}