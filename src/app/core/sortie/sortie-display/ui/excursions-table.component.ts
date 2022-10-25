import { Component, OnInit, Input } from '@angular/core';
import { Excursion } from 'src/app/shared/interfaces/excursion';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-excursions-table[excursions]',
  templateUrl: './excursions-table.component.html',
  styles: []
})
export class ExcursionsTableComponent implements OnInit {

  dataSource!: MatTableDataSource<Excursion>;

  @Input('excursions')
  set excursions(excursions: Excursion[] | undefined) {
    this.dataSource = new MatTableDataSource<Excursion>(excursions);
  };

  displayedColumns: string[] = [
    'name',
    'startTime',
    'limitDateRegistration',
    'subscribed',
    'status',
    'organisator',
    'actions'
  ];

  constructor() { }

  ngOnInit(): void { }

}
