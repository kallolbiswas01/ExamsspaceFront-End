import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectivecourseComponent } from './subjectivecourse.component';

describe('SubjectivecourseComponent', () => {
  let component: SubjectivecourseComponent;
  let fixture: ComponentFixture<SubjectivecourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectivecourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectivecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
