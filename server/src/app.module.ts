import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AddressService } from './services/address.service';
import { CustomerService } from './services/customer.service';
import { InvoiceService } from './services/invoice.service';
import { ProductService } from './services/product.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(
        __dirname,
        '..',
        '..',
        '..',
        '..',
        'dist',
        'catering-masters'
      ),
      exclude: ['/api/.*']
    })
  ],
  controllers: [AppController],
  providers: [AddressService, CustomerService, InvoiceService, ProductService]
})
export class AppModule {}
