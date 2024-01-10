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
import {
  GetAddress,
  GetCustomer,
  GetCustomerSuccess,
  OpenedCreateInvoicePage
} from './actions';

describe('NgRx - Effects', () => {
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

  it('should start loading customer and address when create page is opened', done => {
    service.createPageOpened
      .pipe(
        take(2),
        reduce((acc, action) => [...acc, action], [] as Action[])
      )
      .subscribe({
        next: actions => {
          expect(actions).toEqual([
            GetCustomer({ customerId: mockCustomer.id }),
            GetAddress({ customerId: mockCustomer.id })
          ]);
        },
        complete: done
      });

    mockActions$.next(OpenedCreateInvoicePage({ customerId: mockCustomer.id }));
  });

  it('should add customer data to the store on success', done => {
    service.getCustomer.pipe(take(1)).subscribe({
      next: action => {
        expect(action).toEqual(GetCustomerSuccess({ customer: mockCustomer }));
      },
      complete: done
    });

    mockActions$.next(GetCustomer({ customerId: mockCustomer.id }));
  });
});
