export interface City {
    cityId?: number,
    name: string,
    postCode: string
}

export const city0 : City = {
  cityId: 0,
  name: "Cholet",
  postCode: "49300"
}
export const city1 : City = {
  cityId: 1,
  name: "Nantes",
  postCode: "44300"
}
export const city2 : City = {
  cityId: 2,
  name: "Bouguenais",
  postCode: "44340"
}
export const citiesTestData: City[] = [
  city0,
  city1,
  city2
]


