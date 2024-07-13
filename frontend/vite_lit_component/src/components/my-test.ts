import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "/src/index.css";

@customElement("my-test")
export class MyTest extends LitElement {
  createRenderRoot() {
    return this; // turn off shadow dom to access external styles
  }

  @property()
  name = "Somebody";

  @property({ type: Array })
  test: string[] = ["asd","asd"];

  render() {
    return html`<h1>1234</h1>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-test": MyTest;
  }
}
