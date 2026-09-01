import s from './AttractionsInCountry.module.scss'
import {AttractionCardInCountry} from "@/entities/attraction-in-country/ui/AttractionCardInCountry.tsx";
import {
    useAttractionInCountryQuery
} from "@/entities/attraction-in-country/model/queries/useAttractionInCountryQuery.ts";

type AttractionsInCountrySectionProps = {
    countryTitle: string;
}

export const AttractionsInCountrySection = ({countryTitle}: AttractionsInCountrySectionProps) => {

    const {data, isLoading, isError} = useAttractionInCountryQuery(countryTitle);

    if (isLoading) {
        return <p>Loading attractions...</p>;
    }

    if (isError) {
        return <p>Error loading attractions.</p>;
    }

    if (!data?.features?.length) {
        return <p>No attractions found.</p>;
    }

    return (
        <>
            <p className={s.sectionTitle}>POPULAR DESTINATIONS</p>
            <div className={s.attractionItemsWrapper}>
                {data?.features.map((attraction: any) => <AttractionCardInCountry
                    key={attraction.properties.place_id} properties={attraction.properties}/>)}
            </div>
        </>
    );
};

