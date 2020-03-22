import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stone-stack',
  styleUrl: 'stack.css',
  shadow: true
})
export class Stack {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
