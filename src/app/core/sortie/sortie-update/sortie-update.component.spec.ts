import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortieUpdateComponent } from './sortie-update.component';

describe('SortieUpdateComponent', () => {
  let component: SortieUpdateComponent;
  let fixture: ComponentFixture<SortieUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortieUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortieUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
