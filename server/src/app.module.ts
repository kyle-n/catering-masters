import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'dist', 'catering-masters'),
      exclude: ['/api/.*']
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
