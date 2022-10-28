import { FormControl, FormGroup } from "@angular/forms";
import { Campus, campus } from "src/app/shared/interfaces/campus";

export const getExcursionFilterForm = () : ExcursionFilterForm => new FormGroup({
  campus: new FormControl(campus[0]),
  search: new FormControl(''),
  startDate: new FormControl<Date | null>(null),
  endDate: new FormControl<Date | null>(null),
  excursionOrganisator: new FormControl<boolean>(true),
  excursionSubscribed: new FormControl<boolean>(true),
  excursionNotSubscribed: new FormControl<boolean>(true),
  excursionPassed: new FormControl<boolean>(false)
});

export type ExcursionFilterForm  =FormGroup<{
    campus: FormControl<Campus | null>,
    search: FormControl<string | null>,
    startDate: FormControl<Date | null>,
    endDate: FormControl<Date | null>,
    excursionOrganisator: FormControl<boolean | null>,
    excursionSubscribed: FormControl<boolean | null>,
    excursionNotSubscribed: FormControl<boolean | null>,
    excursionPassed: FormControl<boolean | null>
  } >| null
