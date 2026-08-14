import type {DestinationType} from "@/entities/destination/model/types.ts";

export type flagsTypes = {
    png: string
    svg: string
}

export type CountryDetailsData = {
    country: DestinationType;
    imageUrl?: string;
};