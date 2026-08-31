import s from './AttractionsInCountry.module.scss'
import {AttractionCardInCountry} from "@/entities/attraction-in-country/ui/AttractionCardInCountry.tsx";

export const AttractionsInCountrySection = () => {
    return (
        <>
            <p className={s.sectionTitle}>POPULAR DESTINATIONS</p>
            <div className={s.attractionItemsWrapper}>
                <AttractionCardInCountry/>
                <AttractionCardInCountry/>
                <AttractionCardInCountry/>
                <AttractionCardInCountry/>
            </div>
        </>
    );
};

