import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusTableComponent } from './campus-table.component';

describe('CampusTableComponent', () => {
  let component: CampusTableComponent;
  let fixture: ComponentFixture<CampusTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
