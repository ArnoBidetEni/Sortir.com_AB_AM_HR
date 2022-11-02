import { Excursion } from "src/app/shared/interfaces/excursion";

export interface ExcursionEvent {
  type: ExcursionEventType,
  data: Excursion
}

export enum ExcursionEventType{
  PUBLISH,
  MODIFY,
  CANCEL,
  DESIST,
  SUBSCRIBE
}
