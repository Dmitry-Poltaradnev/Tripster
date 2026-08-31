import s from './AttractionCardInCountry.module.scss'
import {LincIcon} from "@/entities/attraction-in-country/icons";

export const AttractionCardInCountry = () => {
    return (
        <div className={s.attractionCardWrapper}>
            <div className={s.attractionCardInfoWrapper}>
                <img className={s.attractionCardImage} src="" alt="AttractionImage"/>
                <div className={s.attractionCardDesc}>
                    <p className={s.attractionCardTitle}>Tokyo Skytree</p>
                    <p className={s.attractionCardInfo}>The world's tallest broadcasting tower with two observation
                        decks
                        and 360° city panoramas.</p>
                </div>
            </div>
            <a className={s.linkBtn}> <LincIcon className={s.linkIcon}/> </a>
        </div>
    );
};

