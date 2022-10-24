export interface City {
    cityId: number,
    name: string,
    postCode: string
}

export const citiesTestData: City[] = [
    {
        cityId: 0,
        name: "Cholet",
        postCode: "49300"
    }, {
        cityId: 1,
        name: "Nantes",
        postCode: "44300"
    }, {
        cityId: 2,
        name: "Bouguenais",
        postCode: "44340"
    },
]