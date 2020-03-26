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
  @Prop() colsGap: string;
  @Prop() rowsGap: string;
  @Prop() templateCols: string;
  @Prop() templateRows: string;
  @Prop() templateAreas: string;
  @Prop() horizontalItemsAlign: string;
  @Prop() verticalItemsAlign: string;
  @Prop() horizontalContentAlign: string;
  @Prop() verticalContentAlign: string;

  render() {
    const count = this.el.children.length;
    if (this.horizontalItemsAlign !== undefined)
      this.el.style.setProperty(
        `--stone-grid-horizontal-items-alignment`,
        this.horizontalItemsAlign
      );
    if (this.verticalItemsAlign !== undefined)
      this.el.style.setProperty(
        `--stone-grid-vertical-items-alignment`,
        this.verticalItemsAlign
      );
    if (this.horizontalContentAlign !== undefined)
      this.el.style.setProperty(
        `--stone-grid-horizontal-content-alignment`,
        this.horizontalContentAlign
      );
    if (this.verticalContentAlign !== undefined)
      this.el.style.setProperty(
        `--stone-grid-vertical-content-alignment`,
        this.verticalContentAlign
      );
    if (this.colsGap !== undefined)
      this.el.style.setProperty(`--stone-grid-columns-gap`, this.colsGap);
    if (this.rowsGap !== undefined)
      this.el.style.setProperty(`--stone-grid-rows-gap`, this.rowsGap);
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
    if (this.templateAreas !== undefined)
      this.el.style.setProperty(
        `--stone-grid-template-areas`,
        this.templateAreas
      );
    if (
      this.cols === undefined &&
      this.templateCols === undefined &&
      this.templateAreas === undefined
    )
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
