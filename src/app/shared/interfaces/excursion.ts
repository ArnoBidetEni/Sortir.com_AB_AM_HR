import { Campus, campus0, campus1 } from "./campus";
import { Place, place0, place1 } from "./place";
import { Participant, participant0, participant1, participant2, participant3, participant4 } from "./participant";
import { Status, StatusI } from "./status";

export interface Excursion {
  excursionId?: number,
  name: string,
  startTime: Date,
  duration: number,
  limitDateRegistration: Date,
  maxRegistrationNumber: number,
  excursionData: string,
  excursionPlace: Place,
  status: StatusI,
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
  excursionData: "On va parler de Kant ouech ouech",
  excursionPlace: place0,
  status: Status.PASSED,
  organisator: participant0,
  participants: [participant1, participant3],
  campus: campus0
}

export const excursion1: Excursion = {
  excursionId: 1,
  name: "Origamie",
  startTime: new Date("2018-07-21T20:00:00"),
  duration: 45,
  limitDateRegistration: new Date(2018, 7, 9),
  maxRegistrationNumber: 5,
  excursionData: "Aujourd'hui, pliage de feuille avec les enfants du canton",
  excursionPlace: place1,
  status: Status.CLOSED,
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
  excursionData: "On enfile des perles, avant d'enfiler ta m***",
  excursionPlace: place0,
  status: Status.CLOSED,
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
  excursionData: "Sortie au Hellfest",
  excursionPlace: place0,
  status: Status.CLOSED,
  organisator: participant1,
  participants: [participant4],
  campus: campus1
}
export const excursion4: Excursion = {
  excursionId: 4,
  name: "Jardinage",
  startTime: new Date("2018-07-21T20:30:00"),
  duration: 90,
  limitDateRegistration: new Date(2018, 7, 20),
  maxRegistrationNumber: 8,
  excursionData: "On plante des carottes",
  excursionPlace: place0,
  status: Status.CLOSED,
  organisator: participant1,
  participants: [participant1, participant2, participant4],
  campus: campus1
}
export const excursion5: Excursion = {
  excursionId: 5,
  name: "Cinéma",
  startTime: new Date("2018-08-02T18:30:00"),
  duration: 45,
  limitDateRegistration: new Date(2018, 8, 1),
  maxRegistrationNumber: 5,
  excursionData: "On va voir matrix",
  excursionPlace: place0,
  status: Status.CLOSED,
  organisator: participant1,
  participants: [participant1, participant2, participant4, participant0],
  campus: campus1
}

export const excursion6: Excursion = {
  excursionId: 6,
  name: "Pâte à sel",
  startTime: new Date("2018-08-04T21:00:00"),
  duration: 90,
  limitDateRegistration: new Date(2018, 7, 20),
  maxRegistrationNumber: 10,
  excursionData: "Saucisses, doigts, carottes, aubergines, concombre... le tout en pâte à sel !",
  excursionPlace: place0,
  status: Status.CLOSED,
  organisator: participant4,
  participants: [],
  campus: campus1
}
export const excursion7: Excursion = {
  excursionId: 7,
  name: "Programmation",
  startTime: new Date("2023-08-03T19:30:00"),
  duration: 90,
  limitDateRegistration: new Date(2018, 7, 27),
  maxRegistrationNumber: 5,
  excursionData: "Aujour'hui on apprend WordPr... Non mais rester je promet ça va être bien !",
  excursionPlace: place0,
  status: Status.CLOSED,
  organisator: participant4,
  participants: [participant4, participant1],
  campus: campus1
}

export const excursions: Excursion[] = [
  excursion0,
  excursion1,
  excursion2,
  excursion3,
  excursion4,
  excursion5,
  excursion6,
  excursion7
];
