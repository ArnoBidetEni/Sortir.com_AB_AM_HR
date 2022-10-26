import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionCreateComponent } from './excursion-create.component';

describe('ExcursionCreateComponent', () => {
  let component: ExcursionCreateComponent;
  let fixture: ComponentFixture<ExcursionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcursionCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
