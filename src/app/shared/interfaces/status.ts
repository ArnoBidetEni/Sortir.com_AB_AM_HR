export interface StatusI {
  statusId: number,
  name: string
}

export class Status {
  static readonly CREATED: StatusI = { statusId: 1, name: "Créée" };
  static readonly OPEN: StatusI = { statusId: 2, name: "Ouverte" };
  static readonly CLOSED: StatusI = { statusId: 3, name: "Clôturée" };
  static readonly ON_GOING: StatusI = { statusId: 4, name: "Activitée en cours" };
  static readonly PASSED: StatusI = { statusId: 5, name: "Passée" };
  static readonly ANNULEE: StatusI = { statusId: 6, name: "Annulée" };
  static readonly IN_CREATION: StatusI = { statusId: 7, name: "Création en cours" };
}

export const status = [
  Status.CREATED,
  Status.OPEN,
  Status.CLOSED,
  Status.ON_GOING,
  Status.PASSED,
  Status.ANNULEE,
  Status.IN_CREATION
]
