import { Component, OnInit, Input } from '@angular/core';
import { Excursion } from 'src/app/shared/interfaces/excursion';

@Component({
  selector: 'app-excursion-data[excursion]',
  templateUrl: './excursion-data.component.html',
  styleUrls: ['./excursion-data.component.scss']
})
export class ExcursionDataComponent implements OnInit {
  @Input('excursion') excursion!: Excursion;
  constructor() { }

  ngOnInit(): void {
  }

}
