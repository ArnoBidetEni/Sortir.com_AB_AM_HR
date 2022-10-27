import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsDisplayComponent } from './excursions-display.component';

describe('ExcursionsDisplayComponent', () => {
  let component: ExcursionsDisplayComponent;
  let fixture: ComponentFixture<ExcursionsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcursionsDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
