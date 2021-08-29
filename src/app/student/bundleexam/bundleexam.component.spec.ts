import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleexamComponent } from './bundleexam.component';

describe('BundleexamComponent', () => {
  let component: BundleexamComponent;
  let fixture: ComponentFixture<BundleexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BundleexamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BundleexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
