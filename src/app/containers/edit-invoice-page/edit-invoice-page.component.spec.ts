import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInvoicePageComponent } from './edit-invoice-page.component';

describe('EditInvoicePageComponent', () => {
  let component: EditInvoicePageComponent;
  let fixture: ComponentFixture<EditInvoicePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditInvoicePageComponent]
    });
    fixture = TestBed.createComponent(EditInvoicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
