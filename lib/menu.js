var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Menu_1;
import "@polymer/polymer/lib/elements/dom-if.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { customElement, property } from "@polymer/decorators/lib/decorators.js";
import { mkTemplate } from "./templates.js";
const view = "<style>.menu{background-color:var(--background-color, #fff);padding:.5rem 0;-webkit-overflow-scrolling:touch;overflow-y:auto}.item{transition:background-color 350ms cubic-bezier(0, 0, 0.2, 1);padding:var(--g2xs, 0.5rem);min-height:1rem}.item:not([disabled]):hover{background-color:var(--background-hover-color, var(--color-primary-100, rgba(0,0,0,0.1)))}.item[disabled]{opacity:.38}.item[selected]{background-color:var(--background-selected-color, var(--color-primary-200, rgba(0,0,0,0.2)))}\n\n/*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJImZpbGUiOiAibWVudS5jc3MiLAoJInNvdXJjZXMiOiBbCgkJIi4uLy4uL3NyYy9tZW51L21lbnUuc2NzcyIKCV0sCgkic291cmNlc0NvbnRlbnQiOiBbCgkJIi8vLyBEZWZhdWx0IGJhY2tncm91bmQgY29sb3Jcbi8vLyBAdHlwZSBDb2xvclxuJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuLm1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLCAkZGVmYXVsdC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgcGFkZGluZzogLjVyZW0gMDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyAvLyBzYXNzLWxpbnQ6ZGlzYWJsZS1saW5lIG5vLXZlbmRvci1wcmVmaXhlc1xuICBvdmVyZmxvdy15OiBhdXRvOyAvLyBvbiBpT1MgaGFzIHRvIGJlIHNjcm9sbCwgbm90IGF1dG9cbn1cblxuLml0ZW0ge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDM1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICBwYWRkaW5nOiB2YXIoLS1nMnhzLCAwLjVyZW0pO1xuICBtaW4taGVpZ2h0OiAxcmVtO1xuXG4gICY6bm90KFtkaXNhYmxlZF0pOmhvdmVyIHsgLy8gc2Fzcy1saW50OmRpc2FibGUtbGluZSBmb3JjZS1wc2V1ZG8tbmVzdGluZ1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtaG92ZXItY29sb3IsIHZhcigtLWNvbG9yLXByaW1hcnktMTAwLCByZ2JhKDAsIDAsIDAsIDAuMSkpKTtcbiAgfVxuXG4gICZbZGlzYWJsZWRdIHtcbiAgICBvcGFjaXR5OiAuMzg7XG4gIH1cblxuICAmW3NlbGVjdGVkXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWxlY3RlZC1jb2xvciwgdmFyKC0tY29sb3ItcHJpbWFyeS0yMDAsIHJnYmEoMCwgMCwgMCwgMC4yKSkpO1xuICB9XG59XG4iCgldLAoJIm5hbWVzIjogW10sCgkibWFwcGluZ3MiOiAiQUFJQSxBQUFBLEtBQUssQUFBQyxDQUNKLGdCQUFnQixDQUFFLDZCQUFrRCxDQUNwRSxPQUFPLENBQUUsT0FBTyxDQUNoQiwwQkFBMEIsQ0FBRSxLQUFLLENBQ2pDLFVBQVUsQ0FBRSxJQUFJLENBQ2pCLEFBRUQsQUFBQSxLQUFLLEFBQUMsQ0FDSixVQUFVLENBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUM3RCxPQUFPLENBQUUsbUJBQW1CLENBQzVCLFVBQVUsQ0FBRSxJQUFJLENBYWpCLEFBaEJELEFBS0UsS0FMRyxBQUtGLElBQUssRUFBQSxBQUFBLFFBQUMsQUFBQSxFQUFVLE1BQU0sQUFBQyxDQUN0QixnQkFBZ0IsQ0FBRSx3RUFBMkUsQ0FDOUYsQUFQSCxBQVNFLEtBVEcsQ0FTRixBQUFBLFFBQUMsQUFBQSxDQUFVLENBQ1YsT0FBTyxDQUFFLEdBQUcsQ0FDYixBQVhILEFBYUUsS0FiRyxDQWFGLEFBQUEsUUFBQyxBQUFBLENBQVUsQ0FDVixnQkFBZ0IsQ0FBRSwyRUFBOEUsQ0FDakciCn0= */</style><div class=\"menu\"><template is=\"dom-repeat\" items=\"[[items]]\"><template is=\"dom-if\" if=\"[[isThruthy(item)]]\"><div class=\"item\" selected$=\"[[__eq(selectedIndex, index)]]\" disabled$=\"[[item.disabled]]\" data-index$=\"[[index]]\" on-click=\"onItemClick\"><template is=\"dom-if\" if=\"[[item.icon]]\"><dope-material-icon class=\"item--icon\" type$=\"[[item.icon]]\"></dope-material-icon></template><div class=\"item--text\">[[item.text]]</div></div></template><template is=\"dom-if\" if=\"[[isFalsy(item)]]\"><div class=\"separator\"></div></template></template></div>";
let Menu = Menu_1 = class Menu extends PolymerElement {
  constructor() {
    super(...arguments);
    this.items = [];
  }

  static get template() {
    return mkTemplate(view);
  }

  __eq(a, b) {
    return a === b;
  }

  isThruthy(a) {
    return !!a;
  }

  isFalsy(a) {
    return !a;
  }

  onItemClick(e) {
    let target;

    if (!(e.target instanceof Element)) {
      return;
    }

    target = e.target;
    target = target.closest('.item');

    if (!target) {
      return;
    }

    const indexString = target.getAttribute('data-index');
    const index = indexString ? parseInt(indexString, 10) : null;

    if (!index && 0 !== index) {
      return;
    }

    const item = this.items[index];

    if (!item || item.disabled) {
      return;
    }

    e.stopPropagation();
    const ex = new CustomEvent(Menu_1.chooseEvent, {
      bubbles: false,
      cancelable: true,
      detail: item.data
    });
    this.dispatchEvent(ex);

    if (ex.defaultPrevented) {
      e.preventDefault();
    }
  }

};
Menu.chooseEvent = 'choose';

__decorate([property({
  type: Array
})], Menu.prototype, "items", void 0);

__decorate([property({
  type: Boolean,
  notify: true
})], Menu.prototype, "selectedIndex", void 0);

Menu = Menu_1 = __decorate([customElement('dope-menu')], Menu);
export { Menu };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bS1pZic7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2RvbS1yZXBlYXQnO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudCc7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJ0Bwb2x5bWVyL2RlY29yYXRvcnMvbGliL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgbWtUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGVzJztcbmltcG9ydCB2aWV3IGZyb20gJy4vbWVudS9tZW51LnB1Zyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVudUl0ZW0ge1xuICByZWFkb25seSB0ZXh0OiBzdHJpbmc7XG4gIHJlYWRvbmx5IGRpc2FibGVkPzogYm9vbGVhbjtcbiAgcmVhZG9ubHkgaWNvbj86IHN0cmluZztcbiAgcmVhZG9ubHkgZGF0YTogYW55O1xufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1tZW51JylcbmV4cG9ydCBjbGFzcyBNZW51IGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgcmVhZG9ubHkgY2hvb3NlRXZlbnQgPSAnY2hvb3NlJztcblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gbWtUZW1wbGF0ZSh2aWV3KTsgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gIGl0ZW1zOiBNZW51SXRlbVtdID0gW107XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgbm90aWZ5OiB0cnVlIH0pXG4gIHNlbGVjdGVkSW5kZXg/OiBudW1iZXI7XG5cbiAgX19lcShhOiBhbnksIGI6IGFueSkgeyByZXR1cm4gYSA9PT0gYjsgfVxuXG4gIGlzVGhydXRoeShhOiBhbnkpIHsgcmV0dXJuICEhYTsgfVxuXG4gIGlzRmFsc3koYTogYW55KSB7IHJldHVybiAhYTsgfVxuXG4gIG9uSXRlbUNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBsZXQgdGFyZ2V0OiBFbGVtZW50fG51bGw7XG4gICAgaWYgKCEoZS50YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICB0YXJnZXQgPSB0YXJnZXQuY2xvc2VzdCgnLml0ZW0nKTtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbmRleFN0cmluZyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbiAgICBjb25zdCBpbmRleCA9IGluZGV4U3RyaW5nID8gcGFyc2VJbnQoaW5kZXhTdHJpbmcsIDEwKSA6IG51bGw7XG4gICAgaWYgKCFpbmRleCAmJiAwICE9PSBpbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tpbmRleF07XG4gICAgaWYgKCFpdGVtIHx8IGl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBleCA9IG5ldyBDdXN0b21FdmVudDxNZW51SXRlbT4oTWVudS5jaG9vc2VFdmVudCwge1xuICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgZGV0YWlsOiBpdGVtLmRhdGFcbiAgICB9KTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXgpO1xuICAgIGlmIChleC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9