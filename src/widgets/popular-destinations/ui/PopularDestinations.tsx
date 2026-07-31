import s from './PopularDestinations.module.scss';
import {PopularDestinationCard} from "@/entities/destination/ui/PopularDestinationCard.tsx";
import {usePopularDestinationsQuery} from "@/entities/destination/model/queries/usePopularDestinationsQuery.ts";

export const PopularDestinations = () => {

    const {data, isLoading, isError} = usePopularDestinationsQuery();

    return (
        <div className={s.popularDestinations}>
            <p className={s.title}>Popular Destinations</p>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error loading popular destinations.</p>}
            <div className={s.destinationCardsWrapper}>
                {data?.map((destination: any, index: any) => (
                    <PopularDestinationCard key={index} destination={destination}/>
                ))}
            </div>
        </div>
    );
};

