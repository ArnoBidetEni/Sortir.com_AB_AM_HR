import { FormControl, FormGroup, Validators } from "@angular/forms";

export const getCampusAddForm = (): CampusAddForm => new FormGroup({
  name: new FormControl('', [Validators.required])
});

export type CampusAddForm = FormGroup<{
  name: FormControl<string | null>
}> | null;
