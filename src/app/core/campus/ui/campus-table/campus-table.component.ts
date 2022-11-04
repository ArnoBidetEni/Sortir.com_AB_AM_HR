import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Campus } from 'src/app/shared/interfaces/campus';

@Component({
  selector: 'app-campus-table[cities]',
  templateUrl: './campus-table.component.html',
  styleUrls: ['./campus-table.component.scss']
})
export class CampusTableComponent implements OnInit {
  dataSource!: MatTableDataSource<Campus>;
  isLoading : boolean = false;
  @Input('cities')
  set cities(cities: Campus[] | null) {
    if (cities) {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource<Campus>(cities);
    }else{
      this.isLoading = true;
    }
  };

  @Output('onUpdateClicked') onUpdateClicked: EventEmitter<Campus> = new EventEmitter<Campus>();
  @Output('onDeleteClicked') onDeleteClicked: EventEmitter<Campus> = new EventEmitter<Campus>();

  displayedColumns: string[] = [
    'name',
    'postCode'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
