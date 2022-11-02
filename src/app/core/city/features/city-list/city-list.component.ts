import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { startWith, switchMap, tap } from 'rxjs/operators';
import { City } from 'src/app/shared/interfaces/city';

import { CityService } from 'src/app/core/city/data-access/city.service';
import { CityFilterComponent } from '../../ui/city-filter/city-filter.component';
import { CityAddDialogComponent } from '../city-add-dialog/city-add-dialog.component';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  @ViewChild(CityFilterComponent, { static: true }) cityFilterComponent!: CityFilterComponent;
  loadCities$ = new BehaviorSubject<null>(null);
  cities$ = this.loadCities$.pipe(tap(() => console.log("is tapping")), switchMap(() => this.cityService.getCities()))
  filteredList$!: Observable<City[]>;
  constructor(private cityService: CityService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.filteredList$ = combineLatest([
      this.cities$,
      this.cityFilterComponent.form!.valueChanges.pipe(startWith(this.cityFilterComponent.form!.value))
    ]).pipe(
      switchMap(([list, formChange]) =>
        of(list
          .filter(excursion => new RegExp(".*" + (formChange?.search ?? "") + ".*").test(excursion.name))
        )
      )
    )
    this.loadCities$.next(null)
  }
  addOrUpdate(city: City | null) {
    this.dialog.open(CityAddDialogComponent, {
      data: city
    }).afterClosed().subscribe((data) => {
      this.loadCities$.next(null);
    });

  }
  onDeleteClicked(city: City) {
    this.cityService.deleteCity(city.cityId ?? -1).subscribe(() =>
      this.loadCities$.next(null));
  }
}
