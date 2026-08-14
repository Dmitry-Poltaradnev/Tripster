import s from './ForecastDayCard.module.scss';
import type {DailyForecastType} from "@/entities/weather/model/types.ts";
import {CloudIcon, RainIcon, SunIcon} from "@/entities/weather/ui/icons";

type ForecastDayCardProps = {
    day: DailyForecastType
    index: number
}

export const ForecastDayCard = ({day, index}: ForecastDayCardProps) => {

    const {time, temperature_2m_max, temperature_2m_min, weather_code} = day;

    const weekDay = new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
    }).format(new Date(time[index]))

    const Icon = weather_code[index] === 0 ? SunIcon : weather_code[index] === 1 ? CloudIcon : RainIcon;

    return (
        <div className={s.ForecastDayCard}>
            <p className={s.cardTitle}>{weekDay}</p>
            <Icon className={s.icon}/>
            <p className={s.maxTemp}>{`${String(temperature_2m_max[index]).slice(0, 2)}°`}</p>
            <p className={s.minTemp}>{`${String(temperature_2m_min[index]).slice(0, 2)}°`}</p>
        </div>
    );
};

