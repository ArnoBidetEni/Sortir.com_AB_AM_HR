import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortieDisplayComponent } from './sortie-display.component';

describe('SortieDisplayComponent', () => {
  let component: SortieDisplayComponent;
  let fixture: ComponentFixture<SortieDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortieDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortieDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
