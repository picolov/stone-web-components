import { newE2EPage } from '@stencil/core/testing';

describe('stone-grid-cell', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stone-grid-cell></stone-grid-cell>');

    const element = await page.find('stone-grid-cell');
    expect(element).toHaveClass('hydrated');
  });
});
