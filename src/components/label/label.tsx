import { Component, Prop, Element, Host, h } from "@stencil/core";

@Component({
  tag: "stone-label",
  styleUrl: "label.css",
  shadow: true
})
export class Label {
  @Element() el: HTMLElement;
  @Prop() color: string = "#ff0000";
  render() {
    this.el.style.setProperty(`--stone-label-color`, this.color);
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
