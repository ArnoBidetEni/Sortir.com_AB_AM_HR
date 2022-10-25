export interface Participant {
  participantId: number,
  login: string,
  lastName: string,
  firstName: string,
  phoneNumber: string,
  mail: string,
  password: string,
  administrator: boolean,
  active: boolean
}


export const participant0 = {
  participantId: 0,
  login:"bspinoza",
  lastName: "Spinoza",
  firstName: "Baruch",
  phoneNumber: "0508080808",
  mail: "spinoza@gmail.com",
  password: "zekfnrjfrerrfoi",
  administrator: true,
  active: true
}
export const participant1 = {
  participantId: 1,
  login:"rsansamis",
  lastName: "Sansamis",
  firstName: "Rémy",
  phoneNumber: "0508080809",
  mail: "remy@gmail.com",
  password: "jfrpfhqioafz",
  administrator: false,
  active: true
}
export const participant2 = {
  participantId: 2,
  login:"jjoestar",
  lastName: "Jojo",
  firstName: "Joestar",
  phoneNumber: "0508080810",
  mail: "remy@gmail.com",
  password: "jfrpfhqioafz",
  administrator: false,
  active: true
}
export const participant3 = {
  participantId: 3,
  login:"bdertre",
  lastName: "Dertre",
  firstName: "Bertrand",
  phoneNumber: "0508080811",
  mail: "bertrand@gmail.com",
  password: "4435434q4fz",
  administrator: false,
  active: true
}
export const participant4 = {
  participantId: 4,
  login:"jlafarge",
  lastName: "Lafarge",
  firstName: "Jeanine",
  phoneNumber: "0508080812",
  mail: "lafarge@gmail.com",
  password: "jzifziofseifso",
  administrator: false,
  active: true
}

export const participantTestData: Participant[] = [
  participant0,
  participant1,
  participant2,
  participant3,
  participant4
]

