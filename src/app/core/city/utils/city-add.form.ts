import { FormControl, FormGroup, Validators } from "@angular/forms";

export const getCityAddForm = (): CityAddForm => new FormGroup({
  name: new FormControl('', [Validators.required]),
  postCode: new FormControl('',[Validators.required])
});

export type CityAddForm = FormGroup<{
  name: FormControl<string | null>,
  postCode: FormControl<string | null>
}> | null;
