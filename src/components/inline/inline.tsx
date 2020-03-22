import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stone-inline',
  styleUrl: 'inline.css',
  shadow: true
})
export class Inline {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
