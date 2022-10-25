import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortieCreateComponent } from './sortie-create.component';

describe('SortieCreateComponent', () => {
  let component: SortieCreateComponent;
  let fixture: ComponentFixture<SortieCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortieCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortieCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
