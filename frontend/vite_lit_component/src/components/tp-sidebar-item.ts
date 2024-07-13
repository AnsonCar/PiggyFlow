import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("tp-sidebar")
export class TPSiderbarItem extends LitElement {
  createRenderRoot() {
    return this; // turn off shadow dom to access external styles
  }
  
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