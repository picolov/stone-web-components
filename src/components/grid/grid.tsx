import { Component, Prop, Element, Host, h } from "@stencil/core";

@Component({
  tag: "stone-grid",
  styleUrl: "grid.css",
  shadow: true
})
export class Grid {
  @Element() el: HTMLElement;
  @Prop() stack: boolean = false;
  @Prop() inline: boolean = false;
  @Prop() cols: number;
  @Prop() rows: number;
  @Prop() templateCols: string;
  @Prop() templateRows: string;

  render() {
    const count = this.el.children.length;
    if (this.cols !== undefined)
      this.el.style.setProperty(
        `--stone-grid-template-columns`,
        `repeat(${this.cols}, 1fr)`
      );
    if (this.rows !== undefined)
      this.el.style.setProperty(
        `--stone-grid-template-rows`,
        `repeat(${this.rows}, 1fr)`
      );
    if (this.templateCols !== undefined)
      this.el.style.setProperty(
        `--stone-grid-template-columns`,
        this.templateCols
      );
    if (this.templateRows !== undefined)
      this.el.style.setProperty(
        `--stone-grid-template-rows`,
        this.templateRows
      );
    if (this.cols === undefined && this.templateCols === undefined)
      this.el.style.setProperty(
        `--stone-grid-template-columns`,
        `repeat(${count}, 1fr)`
      );
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
