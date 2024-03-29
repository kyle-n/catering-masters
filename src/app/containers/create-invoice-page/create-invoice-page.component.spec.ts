import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateInvoicePageComponent } from './create-invoice-page.component';

describe('CreateInvoicePageComponent', () => {
  let component: CreateInvoicePageComponent;
  let fixture: ComponentFixture<CreateInvoicePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateInvoicePageComponent]
    });
    fixture = TestBed.createComponent(CreateInvoicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
