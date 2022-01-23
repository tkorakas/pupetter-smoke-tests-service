import { Page } from 'puppeteer';
import { SmokeTest } from 'src/smoke-test.dto';
import { getDocument, queries, waitFor } from 'pptr-testing-library';

const { getByText } = queries;

const googleTest: SmokeTest = {
  url: 'https://socialnerds.gr',
  name: 'SocialNerds',
  description: 'Navigate to SN website and validate subtitle',
  test: async (page: Page) => {
    const $document = await getDocument(page);

    await waitFor(() => getByText($document, 'We take software seriously'));
  },
};

export default googleTest;
