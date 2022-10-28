import { Component, OnInit } from '@angular/core';
import { CampusFilterForm, getCampusFilterForm } from '../../utils/campus-filter.form';

@Component({
  selector: 'app-campus-filter',
  templateUrl: './campus-filter.component.html',
  styleUrls: ['./campus-filter.component.scss']
})
export class CampusFilterComponent implements OnInit {
  form: CampusFilterForm = getCampusFilterForm();

  constructor() { }

  ngOnInit(): void {
  }

}
