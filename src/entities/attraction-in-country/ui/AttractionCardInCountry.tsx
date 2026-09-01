import s from './AttractionCardInCountry.module.scss'
import {LincIcon} from "@/entities/attraction-in-country/icons";
import {getDestinationImage} from "@/entities/destination/api/imageApi.ts";
import {useQuery} from "@tanstack/react-query";
import type {AttractionProperties} from "@/entities/attraction-in-country/model/types.ts";

type AttractionCardInCountryProps = {
    properties: AttractionProperties;
};

const getAttractionTitle = (properties: AttractionProperties) => {
    return (
        properties.name ||
        properties.address_line1 ||
        properties.street ||
        "Attraction"
    );
};

const getAttractionSubtitle = (properties: AttractionProperties) => {
    return [
        properties.city || properties.village,
        properties.state,
        properties.country,
    ]
        .filter(Boolean)
        .join(", ");
};

export const AttractionCardInCountry = ({properties}: AttractionCardInCountryProps) => {

    const title = getAttractionTitle(properties);
    const subtitle = getAttractionSubtitle(properties);
    const imageQuery = [title, subtitle].filter(Boolean).join(" ");

    const {data} = useQuery({
        queryKey: ['attraction-image', imageQuery],
        queryFn: () => getDestinationImage(imageQuery),
        enabled: Boolean(imageQuery),
        staleTime: 1000 * 60 * 60,
    });

    const imageUrl = data?.photos?.[0]?.src?.medium;
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${properties.lat},${properties.lon}`;

    return (
        <div className={s.attractionCardWrapper}>
            <div className={s.attractionCardInfoWrapper}>
                {imageUrl && (
                    <img className={s.attractionCardImage} src={imageUrl} alt={title}/>
                )}
                <div className={s.attractionCardDesc}>
                    <p className={s.attractionCardTitle}>{title}</p>
                    <p className={s.attractionCardInfo}>{subtitle}</p>
                </div>
            </div>
            <a className={s.linkBtn}
               href={mapUrl}
               target="_blank" rel="noopener noreferrer">
                <LincIcon className={s.linkIcon}/>
            </a>
        </div>
    );
};

