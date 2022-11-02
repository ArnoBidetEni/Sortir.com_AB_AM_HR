import { Component, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
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
    this.form?.controls.postCode.setValidators(Validators.pattern(/^(([0-8][0-9])|(9[0-5]))[0-9]{3}$/))
    this.form?.patchValue({
      name : this.city?.name,
      postCode : this.city?.postCode
    })
  }
}
