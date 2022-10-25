export interface Status {
    statusId: number,
    name: string
}

export const creee = {
  statusId:0,
  name : "Créee"
}
export const ouverte = {
  statusId:1,
  name : "Ouverte"
}
export const cloturee = {
  statusId:2,
  name : "Clôturée"
}
export const enCours = {
  statusId:3,
  name : "Activité en cours"
}
export const passee = {
  statusId:4,
  name : "Passée"
}
export const annulee = {
  statusId:5,
  name : "Annulée"
}
export const status = [
  creee,
  ouverte,
  cloturee,
  enCours,
  passee,
  annulee
]
