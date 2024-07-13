import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import * as style from './styles'
import './tp-navbar'

style

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
  items: TTTPSidebar[] = [];

  render() {
    return html`
        <div class="drawer lg:drawer-open size-full">
          <input id="my-drawer" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content h-[100vh]">
            <!-- Nav -->
            <tp-navbar title='${this.title}'></tp-navbar>
            <main class="px-4 py-2 h-[calc(100%-64px)]">
              <!-- Main -->
            </main>
          </div>
          <div class="drawer-side">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu bg-base-200 text-base-content text-md min-h-full w-64 p-4">
              <!-- Sidebar content here -->
              <li class="mt-auto">
                <div id="logoutBtn">
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                    width="24px">
                    <path
                      d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
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


// ${this.items.map(
//   (e) =>
//     html`
//         ${this.itemList(e)}
//             ${e.text
//         ? html`
//                   <li>
//                     <details open>
//                       <summary>${e.text}</summary>
//                       <ul>
//                         ${e.items.map(
//           (item: TTPSidebarItem) =>
//             html`<li>
//                               <a href="${item.link}">${item.text}</a>
//                             </li>`
//         )}
//                       </ul>
//                     </details>
//                   </li>
//                 `
//         : html`
//                   ${e.items.map(
//           (item: TTPSidebarItem) =>
//             html`<li><a href="${item.link}">${item.text}</a></li>`
//         )}
//                 `}
//           `
// )}