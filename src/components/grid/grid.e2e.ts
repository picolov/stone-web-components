import { newE2EPage } from '@stencil/core/testing';

describe('stone-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stone-grid></stone-grid>');

    const element = await page.find('stone-grid');
    expect(element).toHaveClass('hydrated');
  });
});
