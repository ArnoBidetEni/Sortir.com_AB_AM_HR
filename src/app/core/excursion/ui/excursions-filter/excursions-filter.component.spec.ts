import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsFilterComponent } from './excursions-filter.component';

describe('ExcursionsFilterComponent', () => {
  let component: ExcursionsFilterComponent;
  let fixture: ComponentFixture<ExcursionsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcursionsFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
