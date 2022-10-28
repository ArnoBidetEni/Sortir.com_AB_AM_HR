import { Component, OnInit } from '@angular/core';
import { campus } from 'src/app/shared/interfaces/campus';
import { ExcursionFilterForm, getExcursionFilterForm } from '../../utils/excursion-filter.form';

@Component({
  selector: 'app-excursions-filter',
  templateUrl: './excursions-filter.component.html',
  styles: ['']
})
export class ExcursionsFilterComponent implements OnInit {
  form: ExcursionFilterForm = getExcursionFilterForm();
  campus = campus;
  constructor() { }

  ngOnInit(): void {
  }

}
