import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Excursion } from 'src/app/shared/interfaces/excursion';
import { ExcursionService } from '../../data-access/excursion.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-excursion-display',
  templateUrl: './excursion-display.component.html',
  styleUrls: ['./excursion-display.component.scss']
})
export class ExcursionDisplayComponent implements OnInit {

  excursionId$: BehaviorSubject<number> = new BehaviorSubject<number>(-1);
  excursion$: Observable<Excursion | undefined> = this.excursionId$.pipe(
    switchMap(id => this.excursionService.getExcursion(id))
  );
  constructor(private excursionService: ExcursionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.excursionId$.next(parseInt(this.route.snapshot.paramMap.get('excursionId') ?? "-1"));
  }
}
