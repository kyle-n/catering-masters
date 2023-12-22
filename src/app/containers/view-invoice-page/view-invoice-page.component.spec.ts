import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInvoicePageComponent } from './view-invoice-page.component';

describe('ViewInvoicePageComponent', () => {
  let component: ViewInvoicePageComponent;
  let fixture: ComponentFixture<ViewInvoicePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewInvoicePageComponent]
    });
    fixture = TestBed.createComponent(ViewInvoicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
