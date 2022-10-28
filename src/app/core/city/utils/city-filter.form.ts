import { FormControl, FormGroup } from "@angular/forms";

export const getCityFilterForm = (): CityFilterForm => new FormGroup({
  search: new FormControl('')
});

export type CityFilterForm = FormGroup<{
  search: FormControl<string | null>,
}> | null
