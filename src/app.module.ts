import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PuppeteerModule } from 'nest-puppeteer';

@Module({
  imports: [
    PuppeteerModule.forRoot({
      handleSIGTERM: false,
      args: [
        '--no-sandbox',
        '--allow-insecure-localhost',
        '--allow-http-screen-capture',
        '--no-zygote',
      ],
    } as any),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
