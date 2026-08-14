import s from './CountryInfoCard.module.scss';
import * as React from "react";
import type {CurrenciesType, LanguagesType} from "@/entities/destination/model/types.ts";

type CountryInfoCardProps = {
    dataTitle: string | CurrenciesType[] | number | LanguagesType[];
    title: string;
    icon: React.ReactNode;
}

export const CountryInfoCard = ({dataTitle, title, icon}: CountryInfoCardProps) => {
    return (
        <div className={s.countryInfoCard}>
            <div className={s.headerCard}>
                <div className={s.icon}>
                    {icon}
                </div>
                <div className={s.title}>
                    {title}
                </div>
            </div>
            {Array.isArray(dataTitle) ? (
                <div className={s.dataTitle}>
                    {dataTitle.map((item: string | CurrenciesType | LanguagesType, index: number) => (
                        <div key={index}>{typeof item === 'string' ? item : item.name}</div>
                    ))}
                </div>
            ) : (
                <div className={s.dataTitle}>
                    {dataTitle}
                </div>
            )}
        </div>
    );
};

