import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestauthComponent } from './testauth.component';

describe('TestauthComponent', () => {
  let component: TestauthComponent;
  let fixture: ComponentFixture<TestauthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestauthComponent]
    });
    fixture = TestBed.createComponent(TestauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
