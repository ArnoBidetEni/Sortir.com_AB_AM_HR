import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionDataComponent } from './excursion-data.component';

describe('ExcursionDataComponent', () => {
  let component: ExcursionDataComponent;
  let fixture: ComponentFixture<ExcursionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcursionDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
