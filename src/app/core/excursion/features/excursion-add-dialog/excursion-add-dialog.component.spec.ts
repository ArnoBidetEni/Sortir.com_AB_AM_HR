import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionAddDialogComponent } from './excursion-add-dialog.component';

describe('ExcursionAddDialogComponent', () => {
  let component: ExcursionAddDialogComponent;
  let fixture: ComponentFixture<ExcursionAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcursionAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
