import { newE2EPage } from '@stencil/core/testing';

describe('stone-inline', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stone-inline></stone-inline>');

    const element = await page.find('stone-inline');
    expect(element).toHaveClass('hydrated');
  });
});
