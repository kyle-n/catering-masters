import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitButtonsComponent } from './submit-buttons.component';

describe('SubmitButtonsComponent', () => {
  let component: SubmitButtonsComponent;
  let fixture: ComponentFixture<SubmitButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitButtonsComponent]
    });
    fixture = TestBed.createComponent(SubmitButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
