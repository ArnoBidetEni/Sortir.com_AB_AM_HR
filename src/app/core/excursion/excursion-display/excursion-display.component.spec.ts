import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionDisplayComponent } from './excursion-display.component';

describe('ExcursionDisplayComponent', () => {
  let component: ExcursionDisplayComponent;
  let fixture: ComponentFixture<ExcursionDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcursionDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
