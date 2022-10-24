import { Campus } from "./campus";
import { Place } from "./place";
import { Participant } from "./participant";
import { Status } from "./status";

export interface Excursion {
    excursionId: number,
    name: string,
    /**
     * Check the real type
     * @deprecated
     */
    startTime: string,
    duration: number,
    limitDateRegistration: Date,
    maxRegistrationNumber: number,
    excursionPlace: Place,
    status: Status,
    organisator: Participant,
    participants: Participant[],
    campus: Campus

}
