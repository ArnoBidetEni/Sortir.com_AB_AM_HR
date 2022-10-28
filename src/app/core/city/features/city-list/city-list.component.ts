import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { combineLatest, Observable, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { City } from 'src/app/shared/interfaces/city';

import { CityService } from 'src/app/shared/services/city.service';
import { CityFilterComponent } from '../../ui/city-filter/city-filter.component';
import { CityAddDialogComponent } from '../city-add-dialog/city-add-dialog.component';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  @ViewChild(CityFilterComponent, { static: true }) cityFilterComponent!: CityFilterComponent;

  filteredList$!: Observable<City[]>;
  constructor(private cityService: CityService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.filteredList$ = combineLatest([
      this.cityService.getCities(),
      this.cityFilterComponent.form!.valueChanges.pipe(startWith(this.cityFilterComponent.form!.value))
    ]).pipe(
      switchMap(([list, formChange]) =>
        of(list
          .filter(excursion => new RegExp(".*" + (formChange?.search ?? "") + ".*").test(excursion.name))
        )
      )
    )
  }
  addOrUpdate(city : City | null){
    this.dialog.open(CityAddDialogComponent, {
      data:city
    });
  }
  onDeleteClicked(city : City){

  }
}
