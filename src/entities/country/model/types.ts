import type {DestinationType} from "@/entities/destination/api/destinationApi.ts";

export type flagsTypes = {
    png: string
    svg: string
}

export type CountryDetailsData = {
    country: DestinationType;
    imageUrl?: string;
};