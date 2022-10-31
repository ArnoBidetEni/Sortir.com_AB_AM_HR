import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Campus } from "src/app/shared/interfaces/campus";
import { Participant } from "src/app/shared/interfaces/participant";
import { Place } from "src/app/shared/interfaces/place";
import { StatusI } from "src/app/shared/interfaces/status";

export const getExcursionAddForm = (): ExcursionAddForm => new FormGroup({
  name: new FormControl<string | null>(null, [Validators.required]),
  startTime: new FormControl<Date | null>(null, [Validators.required]),
  duration: new FormControl<number | null>(60, [Validators.required]),
  limitDateRegistration: new FormControl<Date | null>(null, [Validators.required]),
  maxRegistrationNumber: new FormControl<number | null>(5, [Validators.required, Validators.min(1)]),
  excursionData: new FormControl<string | null>(null, [Validators.required]),
  excursionPlace: new FormControl<Place | null>(null, [Validators.required]),
  status: new FormControl<StatusI | null>(null, [Validators.required]),
  organisator: new FormControl<Participant | null>(null, [Validators.required]),
  participants: new FormControl<Participant[] | null>([]),
  campus: new FormControl<Campus | null>(null, [Validators.required])
});

export type ExcursionAddForm = FormGroup<{
  name: FormControl<string | null>,
  startTime: FormControl<Date | null>,
  duration: FormControl<number | null>,
  limitDateRegistration: FormControl<Date | null>,
  maxRegistrationNumber: FormControl<number | null>,
  excursionData: FormControl<string | null>,
  excursionPlace: FormControl<Place | null>,
  status: FormControl<StatusI | null>,
  organisator: FormControl<Participant | null>,
  participants: FormControl<Participant[] | null>,
  campus: FormControl<Campus | null>
}> | null;
