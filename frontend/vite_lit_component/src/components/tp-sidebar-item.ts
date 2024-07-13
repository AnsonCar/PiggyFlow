import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("tp-sidebar-item")
export class TPSiderbarItem extends LitElement {
  createRenderRoot() {
    return this; // turn off shadow dom to access external styles
  }

  @property({ type: String })
  title: string = "Title";

  @property({ type: String })
  active: string = "";

  @property({ attribute: false, type: Array })
  item: TTTPSidebar[] = [];

  render() {
    return html`
      
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tp-sidebar-item": TPSiderbarItem;
  }
}
