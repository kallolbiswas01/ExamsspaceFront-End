import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomquizComponent } from './randomquiz.component';

describe('RandomquizComponent', () => {
  let component: RandomquizComponent;
  let fixture: ComponentFixture<RandomquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
