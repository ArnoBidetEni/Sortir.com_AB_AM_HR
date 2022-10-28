import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { City } from 'src/app/shared/interfaces/city';

@Component({
  selector: 'app-city-table[cities]',
  templateUrl: './city-table.component.html',
  styleUrls: ['./city-table.component.scss']
})
export class CityTableComponent implements OnInit {
  dataSource!: MatTableDataSource<City>;

  @Input('cities')
  set cities(cities: City[] | undefined) {
    this.dataSource = new MatTableDataSource<City>(cities);
  };

  @Output('onUpdateClicked') onUpdateClicked : EventEmitter<City> = new EventEmitter<City>();
  @Output('onDeleteClicked') onDeleteClicked : EventEmitter<City> = new EventEmitter<City>();

  displayedColumns: string[] = [
    'name',
    'postCode'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
