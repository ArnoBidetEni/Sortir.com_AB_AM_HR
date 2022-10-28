import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CityFilterForm, getCityFilterForm } from '../../utils/city-filter.form';

@Component({
  selector: 'app-city-filter',
  templateUrl: './city-filter.component.html',
  styleUrls: ['./city-filter.component.scss']
})
export class CityFilterComponent implements OnInit {
  form: CityFilterForm = getCityFilterForm();

  constructor() { }

  ngOnInit(): void {
  }

}
