import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusAddComponent } from './campus-add.component';

describe('CampusAddComponent', () => {
  let component: CampusAddComponent;
  let fixture: ComponentFixture<CampusAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
