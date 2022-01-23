import { Injectable } from '@nestjs/common';
import { InjectPage } from 'nest-puppeteer';
import { Page } from 'puppeteer';
import tests from './smoke-tests';

@Injectable()
export class AppService {
  constructor(@InjectPage() private readonly page: Page) {}

  async runTests() {
    try {
      for (const t of tests) {
        console.log(`Running ${t.name} case`);
        await this.page.goto(t.url);
        await t.test(this.page);
        console.log('Completed');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
