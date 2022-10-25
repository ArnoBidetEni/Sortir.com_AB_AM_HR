export interface Campus {
  campusId: number,
  name: string
}

export const campus0: Campus = {
  campusId: 0,
  name: 'Saint Herblain'
}
export const campus1: Campus = {
  campusId: 1,
  name: 'Rennes'
}
export const campus2: Campus = {
  campusId: 2,
  name: 'Niort'
}
export const campus3: Campus = {
  campusId: 3,
  name: 'Chartres de Bretagne'
}
export const campus4: Campus = {
  campusId: 4,
  name: 'La Roche sur Yon'
}

export const campus : Campus[] = [
  campus0,campus1,campus2,campus3,campus4
]
