import { Component, Input, OnInit } from '@angular/core';
import { Campus } from 'src/app/shared/interfaces/campus';
import { CampusAddForm, getCampusAddForm } from '../../utils/campus-add.form';

@Component({
  selector: 'app-campus-add[campus]',
  templateUrl: './campus-add.component.html',
  styleUrls: ['./campus-add.component.scss']
})
export class CampusAddComponent implements OnInit {

  @Input('campus') campus : Campus | null = null;

  form : CampusAddForm = getCampusAddForm();

  constructor() { }

  ngOnInit(): void {
    this.form?.patchValue({
      name : this.campus?.name
    })
  }
}
