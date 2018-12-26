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
const view = "<style>.menu{padding:.5rem 0;background-color:var(--background-color, #fff)}.item{padding:.5rem;transition:background-color 0.35s cubic-bezier(0, 0, 0.2, 1);min-height:1rem}.item:not([disabled]):hover{background-color:var(--background-hover-color, var(--color-primary-100, rgba(0,0,0,0.1)))}.item[disabled]{opacity:.38}.item[selected]{background-color:var(--color-primary-200, rgba(0,0,0,0.2))}\n\n/*# sourceMappingURL=menu.css.map */</style><div class=\"menu\"><template is=\"dom-repeat\" items=\"[[items]]\"><template is=\"dom-if\" if=\"[[isThruthy(item)]]\"><div class=\"item\" selected$=\"[[__eq(selectedIndex, index)]]\" disabled$=\"[[item.disabled]]\" data-index$=\"[[index]]\" on-click=\"onItemClick\"><template is=\"dom-if\" if=\"[[item.icon]]\"><dope-material-icon class=\"item--icon\" type$=\"[[item.icon]]\"></dope-material-icon></template><div class=\"item--text\">[[item.text]]</div></div></template><template is=\"dom-if\" if=\"[[isFalsy(item)]]\"><div class=\"separator\"></div></template></template></div>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bS1pZic7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2RvbS1yZXBlYXQnO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5IH0gZnJvbSBcIkBwb2x5bWVyL2RlY29yYXRvcnMvbGliL2RlY29yYXRvcnNcIjtcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlcyc7XG5pbXBvcnQgdmlldyBmcm9tICcuL21lbnUvbWVudS5wdWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVJdGVtIHtcbiAgcmVhZG9ubHkgdGV4dDogc3RyaW5nO1xuICByZWFkb25seSBkaXNhYmxlZD86IGJvb2xlYW47XG4gIHJlYWRvbmx5IGljb24/OiBzdHJpbmc7XG4gIHJlYWRvbmx5IGRhdGE6IGFueTtcbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtbWVudScpXG5leHBvcnQgY2xhc3MgTWVudSBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIHJlYWRvbmx5IGNob29zZUV2ZW50ID0gJ2Nob29zZSc7XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUodmlldyk7IH1cblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICBpdGVtczogTWVudUl0ZW1bXSA9IFtdXG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgbm90aWZ5OiB0cnVlIH0pXG4gIHNlbGVjdGVkSW5kZXg/OiBudW1iZXI7XG5cbiAgX19lcShhOiBhbnksIGI6IGFueSkgeyByZXR1cm4gYSA9PT0gYjsgfVxuXG4gIGlzVGhydXRoeShhOiBhbnkpIHsgcmV0dXJuICEhYTsgfVxuXG4gIGlzRmFsc3koYTogYW55KSB7IHJldHVybiAhYTsgfVxuXG4gIG9uSXRlbUNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBsZXQgdGFyZ2V0OiBFbGVtZW50fG51bGw7XG4gICAgaWYgKCEoZS50YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICB0YXJnZXQgPSB0YXJnZXQuY2xvc2VzdCgnLml0ZW0nKTtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbmRleFN0cmluZyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbiAgICBjb25zdCBpbmRleCA9IGluZGV4U3RyaW5nID8gcGFyc2VJbnQoaW5kZXhTdHJpbmcsIDEwKSA6IG51bGw7XG4gICAgaWYgKCFpbmRleCAmJiAwICE9PSBpbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tpbmRleF07XG4gICAgaWYgKCFpdGVtIHx8IGl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBleCA9IG5ldyBDdXN0b21FdmVudDxNZW51SXRlbT4oTWVudS5jaG9vc2VFdmVudCwge1xuICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgZGV0YWlsOiBpdGVtLmRhdGFcbiAgICB9KTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXgpO1xuICAgIGlmIChleC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==