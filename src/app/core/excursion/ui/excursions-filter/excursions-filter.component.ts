import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { campus } from 'src/app/shared/interfaces/campus';
import { FilterForm, getFilterForm } from '../../utils/filter.form';

@Component({
  selector: 'app-excursions-filter',
  templateUrl: './excursions-filter.component.html',
  styleUrls: ['./excursions-filter.component.scss']
})
export class ExcursionsFilterComponent implements OnInit {
  form : FilterForm = getFilterForm();
  campus = campus;
  constructor() { }

  ngOnInit(): void {
  }

}
