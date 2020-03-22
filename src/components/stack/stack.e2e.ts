import { newE2EPage } from '@stencil/core/testing';

describe('stone-stack', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stone-stack></stone-stack>');

    const element = await page.find('stone-stack');
    expect(element).toHaveClass('hydrated');
  });
});
