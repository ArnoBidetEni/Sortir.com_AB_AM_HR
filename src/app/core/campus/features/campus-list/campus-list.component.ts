import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { combineLatest, Observable, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { Campus } from 'src/app/shared/interfaces/campus';

import { CampusService } from 'src/app/shared/services/campus.service';
import { CampusFilterComponent } from '../../ui/campus-filter/campus-filter.component';
import { CampusAddDialogComponent } from '../campus-add-dialog/campus-add-dialog.component';

@Component({
  selector: 'app-campus-list',
  templateUrl: './campus-list.component.html',
  styleUrls: ['./campus-list.component.scss']
})
export class CampusListComponent implements OnInit {
  @ViewChild(CampusFilterComponent, { static: true }) campusFilterComponent!: CampusFilterComponent;

  filteredList$!: Observable<Campus[]>;
  constructor(private campusService : CampusService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.filteredList$ = combineLatest([
      this.campusService.getCities(),
      this.campusFilterComponent.form!.valueChanges.pipe(startWith(this.campusFilterComponent.form!.value))
    ]).pipe(
      switchMap(([list, formChange]) =>
        of(list
          .filter(excursion => new RegExp(".*" + (formChange?.search ?? "") + ".*").test(excursion.name))
        )
      )
    )
  }
  addOrUpdate(campus : Campus | null){
    this.dialog.open(CampusAddDialogComponent, {
      data:campus
    });
  }
  onDeleteClicked(campus : Campus){

  }
}
