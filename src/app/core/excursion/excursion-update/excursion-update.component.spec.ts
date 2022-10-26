import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExcursionUpdateComponent } from './excursion-update.component';

describe('ExcursionUpdateComponent', () => {
  let component: ExcursionUpdateComponent;
  let fixture: ComponentFixture<ExcursionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcursionUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
