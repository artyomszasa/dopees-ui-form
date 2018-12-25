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
import { mkTemplate } from "../templates.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyx5Q0FBUDtBQUNBLE9BQU8sNkNBQVA7QUFDQSxTQUFTLGNBQVQsUUFBK0IscUNBQS9CO0FBQ0EsU0FBUyxhQUFULEVBQXdCLFFBQXhCLFFBQXdDLHVDQUF4QztBQUNBLFNBQVMsVUFBVCxRQUEyQixpQkFBM0I7TUFDTyxJO0FBVVAsSUFBYSxJQUFJLEdBQUEsTUFBQSxHQUFqQixNQUFhLElBQWIsU0FBMEIsY0FBMUIsQ0FBd0M7QUFEeEMsRUFBQSxXQUFBLEdBQUE7O0FBT0UsU0FBQSxLQUFBLEdBQW9CLEVBQXBCO0FBeUNEOztBQTVDQyxhQUFXLFFBQVgsR0FBbUI7QUFBSyxXQUFPLFVBQVUsQ0FBQyxJQUFELENBQWpCO0FBQTBCOztBQVFsRCxFQUFBLElBQUksQ0FBQyxDQUFELEVBQVMsQ0FBVCxFQUFlO0FBQUksV0FBTyxDQUFDLEtBQUssQ0FBYjtBQUFpQjs7QUFFeEMsRUFBQSxTQUFTLENBQUMsQ0FBRCxFQUFPO0FBQUksV0FBTyxDQUFDLENBQUMsQ0FBVDtBQUFhOztBQUVqQyxFQUFBLE9BQU8sQ0FBQyxDQUFELEVBQU87QUFBSSxXQUFPLENBQUMsQ0FBUjtBQUFZOztBQUU5QixFQUFBLFdBQVcsQ0FBQyxDQUFELEVBQWM7QUFDdkIsUUFBSSxNQUFKOztBQUNBLFFBQUksRUFBRSxDQUFDLENBQUMsTUFBRixZQUFvQixPQUF0QixDQUFKLEVBQW9DO0FBQ2xDO0FBQ0Q7O0FBQ0QsSUFBQSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQVg7QUFDQSxJQUFBLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBUCxDQUFlLE9BQWYsQ0FBVDs7QUFDQSxRQUFJLENBQUMsTUFBTCxFQUFhO0FBQ1g7QUFDRDs7QUFDRCxVQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsWUFBUCxDQUFvQixZQUFwQixDQUFwQjtBQUNBLFVBQU0sS0FBSyxHQUFHLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBRCxFQUFjLEVBQWQsQ0FBWCxHQUErQixJQUF4RDs7QUFDQSxRQUFJLENBQUMsS0FBRCxJQUFVLE1BQU0sS0FBcEIsRUFBMkI7QUFDekI7QUFDRDs7QUFDRCxVQUFNLElBQUksR0FBRyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWI7O0FBQ0EsUUFBSSxDQUFDLElBQUQsSUFBUyxJQUFJLENBQUMsUUFBbEIsRUFBNEI7QUFDMUI7QUFDRDs7QUFDRCxJQUFBLENBQUMsQ0FBQyxlQUFGO0FBQ0EsVUFBTSxFQUFFLEdBQUcsSUFBSSxXQUFKLENBQTBCLE1BQUksQ0FBQyxXQUEvQixFQUE0QztBQUNyRCxNQUFBLE9BQU8sRUFBRSxLQUQ0QztBQUVyRCxNQUFBLFVBQVUsRUFBRSxJQUZ5QztBQUdyRCxNQUFBLE1BQU0sRUFBRSxJQUFJLENBQUM7QUFId0MsS0FBNUMsQ0FBWDtBQUtBLFNBQUssYUFBTCxDQUFtQixFQUFuQjs7QUFDQSxRQUFJLEVBQUUsQ0FBQyxnQkFBUCxFQUF5QjtBQUN2QixNQUFBLENBQUMsQ0FBQyxjQUFGO0FBQ0Q7QUFDRjs7QUE5Q3FDLENBQXhDO0FBQ2tCLElBQUEsQ0FBQSxXQUFBLEdBQWMsUUFBZDs7QUFLaEIsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLGNBQUEsRSxPQUFBLEUsS0FBc0IsQ0FBdEIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCLEVBQUEsTUFBTSxFQUFFO0FBQXpCLENBQUQsQ0FDVCxDQUFBLEUsY0FBQSxFLGVBQUEsRSxLQUF1QixDQUF2QixDQUFBOztBQVRXLElBQUksR0FBQSxNQUFBLEdBQUEsVUFBQSxDQUFBLENBRGhCLGFBQWEsQ0FBQyxXQUFELENBQ0csQ0FBQSxFQUFKLElBQUksQ0FBSjtTQUFBLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2RvbS1pZic7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2RvbS1yZXBlYXQnO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5IH0gZnJvbSBcIkBwb2x5bWVyL2RlY29yYXRvcnMvbGliL2RlY29yYXRvcnNcIjtcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IHZpZXcgZnJvbSAnLi9tZW51LnB1Zyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVudUl0ZW0ge1xuICByZWFkb25seSB0ZXh0OiBzdHJpbmc7XG4gIHJlYWRvbmx5IGRpc2FibGVkPzogYm9vbGVhbjtcbiAgcmVhZG9ubHkgaWNvbj86IHN0cmluZztcbiAgcmVhZG9ubHkgZGF0YTogYW55O1xufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1tZW51JylcbmV4cG9ydCBjbGFzcyBNZW51IGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgcmVhZG9ubHkgY2hvb3NlRXZlbnQgPSAnY2hvb3NlJztcblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gbWtUZW1wbGF0ZSh2aWV3KTsgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gIGl0ZW1zOiBNZW51SXRlbVtdID0gW11cblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBub3RpZnk6IHRydWUgfSlcbiAgc2VsZWN0ZWRJbmRleD86IG51bWJlcjtcblxuICBfX2VxKGE6IGFueSwgYjogYW55KSB7IHJldHVybiBhID09PSBiOyB9XG5cbiAgaXNUaHJ1dGh5KGE6IGFueSkgeyByZXR1cm4gISFhOyB9XG5cbiAgaXNGYWxzeShhOiBhbnkpIHsgcmV0dXJuICFhOyB9XG5cbiAgb25JdGVtQ2xpY2soZTogTW91c2VFdmVudCkge1xuICAgIGxldCB0YXJnZXQ6IEVsZW1lbnR8bnVsbDtcbiAgICBpZiAoIShlLnRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIHRhcmdldCA9IHRhcmdldC5jbG9zZXN0KCcuaXRlbScpO1xuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluZGV4U3RyaW5nID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuICAgIGNvbnN0IGluZGV4ID0gaW5kZXhTdHJpbmcgPyBwYXJzZUludChpbmRleFN0cmluZywgMTApIDogbnVsbDtcbiAgICBpZiAoIWluZGV4ICYmIDAgIT09IGluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW2luZGV4XTtcbiAgICBpZiAoIWl0ZW0gfHwgaXRlbS5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGV4ID0gbmV3IEN1c3RvbUV2ZW50PE1lbnVJdGVtPihNZW51LmNob29zZUV2ZW50LCB7XG4gICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICBkZXRhaWw6IGl0ZW0uZGF0YVxuICAgIH0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChleCk7XG4gICAgaWYgKGV4LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9