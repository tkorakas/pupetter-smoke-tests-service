import { Page } from 'puppeteer';
import { SmokeTest } from 'src/smoke-test.dto';
import { getDocument, queries, waitFor } from 'pptr-testing-library';

const { getByText } = queries;

const googleTest: SmokeTest = {
  url: 'https://agileactors.com',
  name: 'Agile Actors',
  description: 'Navigate to AA website and validate the title',
  test: async (page: Page) => {
    const $document = await getDocument(page);

    await waitFor(() =>
      getByText(
        $document,
        'Grow your software and data engineering competencies',
      ),
    );
  },
};

export default googleTest;
