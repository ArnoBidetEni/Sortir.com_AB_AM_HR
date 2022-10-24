import { Campus } from "./campus";
import { Etat } from "./etat";
import { Participant } from "./participant";
import { Lieu } from "./lieu";

export interface Sortie{
    idSortie : number,
    nom:string,
    /**
     * Check the real type
     * @deprecated 
     */
    dateHeureDebut : string,
    duree:number,
    dateLimiteInscription : Date,
    nbInscriptionMax : number,
    infosSortie : Lieu,
    etat : Etat,
    organisateur : Participant,
    participans : Participant[],
    campus : Campus

}