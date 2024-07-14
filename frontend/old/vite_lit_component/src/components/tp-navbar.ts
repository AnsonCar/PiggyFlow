import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("tp-navbar")
export class TPNavbar extends LitElement {
  createRenderRoot() {
    return this; // turn off shadow dom to access external styles
  }

  @property({ type: String })
  title: string = "Title NavBar";

  render() {
    return html `
    <div class="navbar bg-base-100">
      <div class="flex-none">
        <label class="btn btn-square btn-ghost lg:hidden" for="my-drawer">
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px"
            viewBox="0 -960 960 960" width="24px">
            <path
              d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z" />
          </svg>
        </label>
      </div>
      <div class="flex-1">
        <a class="btn btn-ghost text-xl lg:hidden">${this.title}</a>
      </div>
      <div class="flex-none">
        <slot></slot>
      </div>
    </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tp-navbar": TPNavbar;
  }
}