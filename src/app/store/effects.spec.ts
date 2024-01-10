import { Action } from '@ngrx/store';
import { Subject, asyncScheduler, observeOn, of, reduce, take } from 'rxjs';
import { CustomerService } from '../services/customer.service';
import { AddressService } from '../services/address.service';
import { InvoiceService } from '../services/invoice.service';
import { ProductService } from '../services/product.service';
import mockCustomer from '../mock-data/customer';
import mockAddress from '../mock-data/address';
import mockProducts from '../mock-data/products';
import mockInvoice from '../mock-data/invoice';
import { TestBed } from '@angular/core/testing';
import { AppEffects } from './effects';
import { Actions } from '@ngrx/effects';
import { GetAddress, GetCustomer, OpenedCreateInvoicePage } from './actions';

fdescribe('NgRx - Effects', () => {
  let service: AppEffects;
  let mockActions$: Subject<Action>;
  let mockCustomerService: jasmine.SpyObj<CustomerService>;
  let mockAddressService: jasmine.SpyObj<AddressService>;
  let mockProductService: jasmine.SpyObj<ProductService>;
  let mockInvoiceService: jasmine.SpyObj<InvoiceService>;

  beforeEach(() => {
    mockActions$ = new Subject<Action>();
    mockCustomerService = jasmine.createSpyObj('CustomerService', {
      getCustomer: of(mockCustomer).pipe(observeOn(asyncScheduler))
    });
    mockAddressService = jasmine.createSpyObj('AddressService', {
      getAddress: of(mockAddress).pipe(observeOn(asyncScheduler))
    });
    mockProductService = jasmine.createSpyObj('ProductService', {
      getProductsAvailableAtAddress: of(mockProducts).pipe(
        observeOn(asyncScheduler)
      ),
      getLineItemsForProducts: of([]).pipe(observeOn(asyncScheduler))
    });
    mockInvoiceService = jasmine.createSpyObj('InvoiceService', {
      getInvoice: of(mockInvoice).pipe(observeOn(asyncScheduler))
    });
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        AppEffects,
        {
          provide: Actions,
          useValue: mockActions$
        },
        {
          provide: CustomerService,
          useValue: mockCustomerService
        },
        {
          provide: AddressService,
          useValue: mockAddressService
        },
        {
          provide: ProductService,
          useValue: mockProductService
        },
        {
          provide: InvoiceService,
          useValue: mockInvoiceService
        }
      ]
    }).compileComponents();

    service = TestBed.inject(AppEffects);
  });

  it('should start loading customer and address when create page is opened', () => {
    service.createPageOpened.pipe(
      take(2),
      reduce((acc, action) => [...acc, action], [] as Action[])
    ).subscribe(actions => {
      expect(actions).toEqual([
        GetCustomer({ customerId: mockCustomer.id }),
        GetAddress({ customerId: mockCustomer.id })
      ]);
    });

    mockActions$.next(OpenedCreateInvoicePage({ customerId: mockCustomer.id }));
  });
});
