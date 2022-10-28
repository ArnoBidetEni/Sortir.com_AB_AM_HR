import { Component, OnInit } from '@angular/core';
import { campus } from 'src/app/shared/interfaces/campus';
import { ExcursionFilterForm, getExcursionFilterForm } from '../../utils/excursion-filter.form';

@Component({
  selector: 'app-excursion-filter',
  templateUrl: './excursion-filter.component.html',
  styles: ['']
})
export class ExcursionFilterComponent implements OnInit {
  form: ExcursionFilterForm = getExcursionFilterForm();
  campus = campus;
  constructor() { }

  ngOnInit(): void {
  }

}
