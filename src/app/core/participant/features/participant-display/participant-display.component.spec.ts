import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantDisplayComponent } from './participant-display.component';

describe('ParticipantDisplayComponent', () => {
  let component: ParticipantDisplayComponent;
  let fixture: ComponentFixture<ParticipantDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
