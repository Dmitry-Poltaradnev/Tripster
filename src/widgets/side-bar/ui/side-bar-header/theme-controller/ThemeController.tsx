import {SunIcon, MoonIcon} from "@/widgets/side-bar/icons"

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
        <div role="group" aria-label="Select theme">
            <button
                type="button"
                aria-pressed={value === 'light'}
                onClick={() => {
                    changeTheme('light')
                    themeLogger('light')
                }}
            >
                <SunIcon/>
            </button>

            <button
                type="button"
                aria-pressed={value === 'dark'}
                onClick={() => {
                    changeTheme('dark')
                    themeLogger('dark')
                }}
            >
                <MoonIcon/>
            </button>
        </div>
    )
}