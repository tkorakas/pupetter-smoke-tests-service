import { Page } from 'puppeteer';

export interface SmokeTest {
  url: string;
  name: string;
  description: string;
  test: (page: Page) => Promise<void>;
}
