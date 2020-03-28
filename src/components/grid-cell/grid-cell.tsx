import { Component, Element, Prop, Host, h } from "@stencil/core";
import { v4 as uuidv4 } from "uuid";

@Component({
  tag: "stone-grid-cell",
  styleUrl: "grid-cell.css",
  shadow: true
})
export class GridCell {
  @Element() el: HTMLElement;
  @Prop() col: string;
  @Prop() row: string;
  @Prop() area: string;
  @Prop() horizontalAlign: string;
  @Prop() verticalAlign: string;
  render() {
    if (this.col !== undefined)
      this.el.style.setProperty(`--stone-grid-cell-col`, this.col);
    if (this.row !== undefined)
      this.el.style.setProperty(`--stone-grid-cell-row`, this.row);
    if (this.area !== undefined) {
      this.el.style.setProperty(`--stone-grid-cell-area`, this.area);
      let gridTemplateAreas = this.el.parentElement.getAttribute(
        "template-areas"
      );
      const gridAreas = gridTemplateAreas.replace(/['".]/gi, "").split(" ");
      let areaNotExist = true;
      for (let i = 0; i < gridAreas.length; i++) {
        if (gridAreas[i].trim() === this.area) {
          areaNotExist = false;
          break;
        }
      }
      if (areaNotExist) this.el.style.display = "none";
    }
    if (
      this.area === undefined &&
      this.col === undefined &&
      this.row === undefined
    ) {
      this.el.style.setProperty(`--stone-grid-cell-area`, uuidv4());
      this.el.style.display = "none";
    }
    if (this.horizontalAlign !== undefined)
      this.el.style.setProperty(
        `--stone-grid-cell-horizontal-alignment`,
        this.horizontalAlign
      );
    if (this.verticalAlign !== undefined)
      this.el.style.setProperty(
        `--stone-grid-cell-vertical-alignment`,
        this.verticalAlign
      );
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
