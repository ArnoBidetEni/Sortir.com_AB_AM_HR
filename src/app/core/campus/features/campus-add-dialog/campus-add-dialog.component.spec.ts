import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusAddDialogComponent } from './campus-add-dialog.component';

describe('CampusAddDialogComponent', () => {
  let component: CampusAddDialogComponent;
  let fixture: ComponentFixture<CampusAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
