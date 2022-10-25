import { Campus, campus0, campus1 } from "./campus";
import { Place, place0, place1 } from "./place";
import { Participant, participant0, participant1, participant2, participant3, participant4 } from "./participant";
import { cloturee, passee, Status } from "./status";

export interface Excursion {
  excursionId: number,
  name: string,
  /**
   * Check the real type
   * @deprecated
   */
  startTime: Date,
  duration: number,
  limitDateRegistration: Date,
  maxRegistrationNumber: number,
  excursionPlace: Place,
  status: Status,
  organisator: Participant,
  participants: Participant[],
  campus: Campus
}

export const excursion0: Excursion = {
  excursionId: 0,
  name: "Philo",
  startTime: new Date("2018-07-19T23:45:00"),
  duration: 60,
  limitDateRegistration: new Date(2018, 7, 10),
  maxRegistrationNumber: 8,
  excursionPlace: place0,
  status: passee,
  organisator: participant0,
  participants: [participant3],
  campus: campus0
}


export const excursion1: Excursion = {
  excursionId: 1,
  name: "Origamie",
  startTime: new Date("2018-07-21T20:00:00"),
  duration: 45,
  limitDateRegistration: new Date(2018, 7, 9),
  maxRegistrationNumber: 5,
  excursionPlace: place1,
  status: cloturee,
  organisator: participant1,
  participants: [participant2, participant4],
  campus: campus0
}

export const excursion2: Excursion = {
  excursionId: 2,
  name: "Perles",
  startTime: new Date("2018-07-21T20:00:00"),
  duration: 60,
  limitDateRegistration: new Date(2018, 7, 10),
  maxRegistrationNumber: 12,
  excursionPlace: place0,
  status: cloturee,
  organisator: participant2,
  participants: [participant3],
  campus: campus1
}
export const excursion3: Excursion = {
  excursionId: 3,
  name: "Concert metal",
  startTime: new Date("2018-07-21T20:30:00"),
  duration: 90,
  limitDateRegistration: new Date(2018, 7, 20),
  maxRegistrationNumber: 8,
  excursionPlace: place0,
  status: cloturee,
  organisator: participant1,
  participants: [participant4],
  campus: campus1
}
export const excursion4: Excursion = {
  excursionId: 4,
  name: "Concert metal",
  startTime: new Date("2018-07-21T20:30:00"),
  duration: 90,
  limitDateRegistration: new Date(2018, 7, 20),
  maxRegistrationNumber: 8,
  excursionPlace: place0,
  status: cloturee,
  organisator: participant1,
  participants: [participant2, participant4],
  campus: campus1
}
export const excursion5: Excursion = {
  excursionId: 5,
  name: "Jardinage",
  startTime: new Date("2018-08-02T18:30:00"),
  duration: 45,
  limitDateRegistration: new Date(2018, 8, 1),
  maxRegistrationNumber: 5,
  excursionPlace: place0,
  status: cloturee,
  organisator: participant1,
  participants: [participant2, participant4, participant0],
  campus: campus1
}

export const excursion6: Excursion = {
  excursionId: 6,
  name: "Cinéma",
  startTime: new Date("2018-08-04T21:00:00"),
  duration: 90,
  limitDateRegistration: new Date(2018, 7, 20),
  maxRegistrationNumber: 10,
  excursionPlace: place0,
  status: cloturee,
  organisator: participant4,
  participants: [],
  campus: campus1
}
export const excursion7: Excursion = {
  excursionId: 7,
  name: "Pâte à sel",
  startTime: new Date("2018-08-03T19:30:00"),
  duration: 90,
  limitDateRegistration: new Date(2018, 7, 27),
  maxRegistrationNumber: 5,
  excursionPlace: place0,
  status: cloturee,
  organisator: participant4,
  participants: [],
  campus: campus1
}

export const excursions: Excursion[] = [
  excursion1,
  excursion2,
  excursion3,
  excursion4,
  excursion5,
  excursion6
];
