import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventexamComponent } from './eventexam.component';

describe('EventexamComponent', () => {
  let component: EventexamComponent;
  let fixture: ComponentFixture<EventexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventexamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
