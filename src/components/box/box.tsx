import { Component, Element, Prop, Host, h } from "@stencil/core";

@Component({
  tag: "stone-box",
  styleUrl: "box.css",
  shadow: true
})
export class Box {
  @Element() el: HTMLElement;
  @Prop() marginAll: string;
  @Prop() marginTop: string;
  @Prop() marginRight: string;
  @Prop() marginBottom: string;
  @Prop() marginLeft: string;
  @Prop() borderAll: string;
  @Prop() borderTop: string;
  @Prop() borderRight: string;
  @Prop() borderBottom: string;
  @Prop() borderLeft: string;
  @Prop() borderRadius: string;
  @Prop() paddingAll: string;
  @Prop() paddingTop: string;
  @Prop() paddingRight: string;
  @Prop() paddingBottom: string;
  @Prop() paddingLeft: string;
  render() {
    if (this.marginAll !== undefined)
      this.el.style.setProperty(`margin`, this.marginAll);
    if (this.marginTop !== undefined)
      this.el.style.setProperty(`--stone-box-margin-top`, this.marginTop);
    if (this.marginRight !== undefined)
      this.el.style.setProperty(`--stone-box-margin-right`, this.marginRight);
    if (this.marginBottom !== undefined)
      this.el.style.setProperty(`--stone-box-margin-bottom`, this.marginBottom);
    if (this.marginLeft !== undefined)
      this.el.style.setProperty(`--stone-box-margin-left`, this.marginLeft);
    if (this.borderAll !== undefined)
      this.el.style.setProperty(`border`, this.borderAll);
    if (this.borderTop !== undefined)
      this.el.style.setProperty(`--stone-box-border-top`, this.borderTop);
    if (this.borderRight !== undefined)
      this.el.style.setProperty(`--stone-box-border-right`, this.borderRight);
    if (this.borderBottom !== undefined)
      this.el.style.setProperty(`--stone-box-border-bottom`, this.borderBottom);
    if (this.borderLeft !== undefined)
      this.el.style.setProperty(`--stone-box-border-left`, this.borderLeft);
    if (this.borderRadius !== undefined)
      this.el.style.setProperty(`--stone-box-border-radius`, this.borderRadius);
    if (this.paddingAll !== undefined)
      this.el.style.setProperty(`padding`, this.paddingAll);
    if (this.paddingTop !== undefined)
      this.el.style.setProperty(`--stone-box-padding-top`, this.paddingTop);
    if (this.paddingRight !== undefined)
      this.el.style.setProperty(`--stone-box-padding-right`, this.paddingRight);
    if (this.paddingBottom !== undefined)
      this.el.style.setProperty(
        `--stone-box-padding-bottom`,
        this.paddingBottom
      );
    if (this.paddingLeft !== undefined)
      this.el.style.setProperty(`--stone-box-padding-left`, this.paddingLeft);
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
