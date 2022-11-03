import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Campus } from "src/app/shared/interfaces/campus";
export const getParticipantAddForm = (): ParticipantAddForm => new FormGroup({
  participantId: new FormControl<number | null>(null, [Validators.required]),
  login: new FormControl<string | null>('', [Validators.required]),
  lastName: new FormControl<string | null>('', [Validators.required]),
  firstName: new FormControl<string | null>('', [Validators.required]),
  phoneNumber: new FormControl<string | null>('', [Validators.required]),
  mail: new FormControl<string | null>('', [Validators.required]),
  password: new FormControl<string | null>('', [Validators.required]),
  administrator: new FormControl<boolean | null>(false, [Validators.required]),
  active: new FormControl<boolean | null>(true, [Validators.required]),
  campus: new FormControl<Campus | null>(null, [Validators.required])
});

export type ParticipantAddForm = FormGroup<{
  participantId: FormControl<number | null>,
  login: FormControl<string | null>,
  lastName: FormControl<string | null>,
  firstName: FormControl<string | null>,
  phoneNumber: FormControl<string | null>,
  mail: FormControl<string | null>,
  password: FormControl<string | null>,
  administrator: FormControl<boolean | null>,
  active: FormControl<boolean | null>,
  campus: FormControl<Campus | null>,
}> | null;
