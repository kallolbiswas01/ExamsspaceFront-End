import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesresourcesComponent } from './notesresources.component';

describe('NotesresourcesComponent', () => {
  let component: NotesresourcesComponent;
  let fixture: ComponentFixture<NotesresourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesresourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
