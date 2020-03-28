import { newE2EPage } from '@stencil/core/testing';

describe('stone-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stone-box></stone-box>');

    const element = await page.find('stone-box');
    expect(element).toHaveClass('hydrated');
  });
});
