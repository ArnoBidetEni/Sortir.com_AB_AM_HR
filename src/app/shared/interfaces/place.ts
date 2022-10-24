import { City } from "./city"

export interface Place {
    placeId: number,
    name: string,
    street: string,
    city: City,
    latitude: number,
    longitude: number
}