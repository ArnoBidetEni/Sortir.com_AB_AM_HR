import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/shared/interfaces/city';
import { CityAddForm, getCityAddForm } from '../../utils/city-add.form';

@Component({
  selector: 'app-city-add[city]',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.scss']
})
export class CityAddComponent implements OnInit {

  @Input('city') city : City | null = null;

  form : CityAddForm = getCityAddForm();

  constructor() { }

  ngOnInit(): void {
    this.form?.patchValue({
      name : this.city?.name,
      postCode : this.city?.postCode
    })
  }
}
