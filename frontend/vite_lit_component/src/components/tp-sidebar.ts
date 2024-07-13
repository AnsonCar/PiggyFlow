import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import './tp-sidebar-item';

@customElement("tp-sidebar")
export class TPSiderbar extends LitElement {
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
      <!-- <div class="drawer size-full"> -->
        <div class="drawer lg:drawer-open size-full">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content h-[100vh] px-4 py-2">
          <!-- Nav -->
          <div class="navbar bg-base-100 px-0">
            <div class="flex-none">
              <label class="btn btn-square btn-ghost lg:hidden" for="my-drawer">
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                >
                  <path
                    d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"
                  />
                </svg>
              </label>
            </div>
            <div class="flex-1">
              <a class="btn btn-ghost text-xl px-2">${this.title}</a>
            </div>
            <div class="flex-none">
              <slot name="navfucntion"></slot>
              <!-- <div id="logoutBtn" class="btn btn-square btn-ghost">
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                >
                  <path
                    d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"
                  />
                </svg>
              </div> -->
            </div>
          </div>
          <!-- Main -->
          <slot></slot>
        </div>
        <div class="drawer-side">
          <label
            for="my-drawer"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <ul
            class="menu bg-base-200 text-base-content text-md min-h-full w-64 p-4"
          >
            <!-- Sidebar content here -->
            ${this.item.map(
              (e) => html`
                ${e.text
                  ? html`
                      <li>
                        <details open>
                          <summary>${e.text}</summary>
                          <ul>
                            ${e.items.map(
                              (item: TTPSidebarItem) =>
                                html`<li>
                                  <a href="${item.link}">${item.text}</a>
                                </li>`
                            )}
                          </ul>
                        </details>
                      </li>
                    `
                  : html`
                      ${e.items.map(
                        (item: TTPSidebarItem) =>
                          html`<li><a href="${item.link}">${item.text}</a></li>`
                      )}
                    `}
              `
            )}

            <li class="mt-auto">
              <div id="logoutBtn">
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                >
                  <path
                    d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"
                  />
                </svg>
                Logout
              </div>
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tp-sidebar": TPSiderbar;
  }
}
