import { newE2EPage } from '@stencil/core/testing';

describe('stone-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stone-label></stone-label>');

    const element = await page.find('stone-label');
    expect(element).toHaveClass('hydrated');
  });
});
