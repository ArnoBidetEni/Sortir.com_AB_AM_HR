import { Ville } from "./ville"

export interface Lieu{
    idLieu : number,
    nom:string,
    rue : string,
    ville : Ville,
    latitude : number,
    longitude : number
}