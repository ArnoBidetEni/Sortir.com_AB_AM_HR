import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAddDialogComponent } from './city-add-dialog.component';

describe('CityAddDialogComponent', () => {
  let component: CityAddDialogComponent;
  let fixture: ComponentFixture<CityAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
