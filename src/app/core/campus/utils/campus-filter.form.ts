import { FormControl, FormGroup } from "@angular/forms";

export const getCampusFilterForm = (): CampusFilterForm => new FormGroup({
  search: new FormControl('')
});

export type CampusFilterForm = FormGroup<{
  search: FormControl<string | null>,
}> | null
