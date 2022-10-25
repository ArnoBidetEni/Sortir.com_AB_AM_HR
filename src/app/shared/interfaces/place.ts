import { City, city0 } from "./city"

export interface Place {
  placeId: number,
  name: string,
  street: string,
  city: City,
  latitude: number,
  longitude: number
}

export const place0: Place = {
  placeId: 0,
  name: "Place Travot",
  street: "Rue national",
  city: city0,
  latitude: 47.061817151582396,
  longitude: -0.8804509535134951
}
export const place1: Place = {
  placeId: 0,
  name: "Eni",
  street: "2a Rue Benjamin Franklin, 44800 Saint-Herblain",
  city: city0,
  latitude: 47.22630836729093,
  longitude: -1.6203953215439333
}
export const place2: Place = {
  placeId: 0,
  name: "Carrefour Saint Herblain",
  street: "D201, 44800 Saint-Herblain",
  city: city0,
  latitude: 47.2226007687568,
  longitude: -1.6050238739218265
}
