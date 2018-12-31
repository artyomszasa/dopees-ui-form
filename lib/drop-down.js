var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { customElement, property, observe } from "@polymer/decorators/lib/decorators.js";
import { mkTemplate } from "./templates.js";
const view = "<style>.dropdown{position:relative;display:flex}.dropdown--value{height:var(--height, 1.75rem);line-height:var(--height, 1.75rem);width:var(--width, 100%);display:var(--display);padding:var(--padding, 0);font-size:inherit;font-family:inherit}.dropdown--value[empty]{color:var(--text-color, #000);opacity:.38}.dropdown--body{position:absolute;display:none;top:var(--height, 1.75rem);left:0;width:auto;max-height:var(--max-height, 16rem);box-shadow:0.125rem 0.125rem 0.25rem rgba(0,0,0,0.54);border-radius:.375rem;color:var(--dropdown-color, #000);--background-color: var(--dropdown-background-color, #fff);--background-hover-color: var(--dropdown-background-hover-color, var(--color-primary-100, rgba(0,0,0,.1)))}.dropdown--body[shown]{display:block}.dropdown--body::slotted(*){border-radius:.375rem;--border-radius: .375rem}dope-material-icon{width:1rem;height:1rem;margin:.375rem 0 .375rem .375rem}dope-material-icon svg{width:1rem;height:1rem}\n\n/*# sourceMappingURL=drop-down.css.map */</style><div class=\"dropdown\"><div class=\"dropdown--value\" empty$=\"[[__or(empty, forcedEmpty)]]\">[[formatter(value)]]</div><slot class=\"dropdown--body\" name=\"body\" shown$=\"[[opened]]\"></slot></div>";
let DopeDropDown = class DopeDropDown extends PolymerElement {
  constructor() {
    super();
    this.empty = true;
    this.opened = false;
    this.forcedEmpty = false;

    this.formatter = x => x ? x.toString() : this.placeholder || '';
  }

  static get template() {
    return mkTemplate(view);
  }

  __or(...values) {
    return values.some(Boolean);
  }

  observeValue(value) {
    this.empty = !value;
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

};

__decorate([property({
  type: String
})], DopeDropDown.prototype, "placeholder", void 0);

__decorate([property({
  type: Boolean
})], DopeDropDown.prototype, "empty", void 0);

__decorate([property()], DopeDropDown.prototype, "formatter", void 0);

__decorate([property({
  type: Boolean,
  notify: true,
  reflectToAttribute: true
})], DopeDropDown.prototype, "opened", void 0);

__decorate([property()], DopeDropDown.prototype, "value", void 0);

__decorate([property({
  type: Boolean
})], DopeDropDown.prototype, "forcedEmpty", void 0);

__decorate([observe('value')], DopeDropDown.prototype, "observeValue", null);

DopeDropDown = __decorate([customElement('dope-drop-down')], DopeDropDown);
export { DopeDropDown };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3AtZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVMsY0FBVCxRQUErQixxQ0FBL0I7QUFDQSxTQUFTLGFBQVQsRUFBd0IsUUFBeEIsRUFBa0MsT0FBbEMsUUFBaUQsdUNBQWpEO0FBQ0EsU0FBUyxVQUFULFFBQTJCLGdCQUEzQjtNQUNPLEk7QUFHUCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFiLFNBQXFDLGNBQXJDLENBQW1EO0FBc0JqRCxFQUFBLFdBQUEsR0FBQTtBQUNFO0FBZkYsU0FBQSxLQUFBLEdBQWlCLElBQWpCO0FBTUEsU0FBQSxNQUFBLEdBQWtCLEtBQWxCO0FBTUEsU0FBQSxXQUFBLEdBQXVCLEtBQXZCOztBQUlFLFNBQUssU0FBTCxHQUFrQixDQUFELElBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFGLEVBQUgsR0FBbUIsS0FBSyxXQUFMLElBQW9CLEVBQWhFO0FBQ0Q7O0FBdkJELGFBQVcsUUFBWCxHQUFtQjtBQUFLLFdBQU8sVUFBVSxDQUFDLElBQUQsQ0FBakI7QUFBMEI7O0FBeUJsRCxFQUFBLElBQUksQ0FBQyxHQUFHLE1BQUosRUFBcUI7QUFBSSxXQUFPLE1BQU0sQ0FBQyxJQUFQLENBQVksT0FBWixDQUFQO0FBQThCOztBQUczRCxFQUFBLFlBQVksQ0FBQyxLQUFELEVBQW1CO0FBQUksU0FBSyxLQUFMLEdBQWEsQ0FBQyxLQUFkO0FBQXNCOztBQUV6RCxFQUFBLElBQUksR0FBQTtBQUFLLFNBQUssTUFBTCxHQUFjLElBQWQ7QUFBcUI7O0FBRTlCLEVBQUEsS0FBSyxHQUFBO0FBQUssU0FBSyxNQUFMLEdBQWMsS0FBZDtBQUFzQjs7QUFsQ2lCLENBQW5EOztBQUtFLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSxzQkFBQSxFLGFBQUEsRSxLQUFxQixDQUFyQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSxzQkFBQSxFLE9BQUEsRSxLQUFzQixDQUF0QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsRUFDVCxDQUFBLEUsc0JBQUEsRSxXQUFBLEUsS0FBMEMsQ0FBMUMsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCLEVBQUEsTUFBTSxFQUFFLElBQXpCO0FBQStCLEVBQUEsa0JBQWtCLEVBQUU7QUFBbkQsQ0FBRCxDQUNULENBQUEsRSxzQkFBQSxFLFFBQUEsRSxLQUF3QixDQUF4QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsRUFDVCxDQUFBLEUsc0JBQUEsRSxPQUFBLEUsS0FBbUIsQ0FBbkIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FDVCxDQUFBLEUsc0JBQUEsRSxhQUFBLEUsS0FBNkIsQ0FBN0IsQ0FBQTs7QUFVQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsT0FBRCxDQUNSLENBQUEsRSxzQkFBQSxFLGNBQUEsRUFBeUQsSUFBekQsQ0FBQTs7QUE5QlcsWUFBWSxHQUFBLFVBQUEsQ0FBQSxDQUR4QixhQUFhLENBQUMsZ0JBQUQsQ0FDVyxDQUFBLEVBQVosWUFBWSxDQUFaO1NBQUEsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQnO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIG9ic2VydmUgfSBmcm9tICdAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlcyc7XG5pbXBvcnQgdmlldyBmcm9tICcuL2Ryb3AtZG93bi9kcm9wLWRvd24ucHVnJztcblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtZHJvcC1kb3duJylcbmV4cG9ydCBjbGFzcyBEb3BlRHJvcERvd248VD4gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUodmlldyk7IH1cblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBlbXB0eTogYm9vbGVhbiA9IHRydWU7XG5cbiAgQHByb3BlcnR5KClcbiAgZm9ybWF0dGVyOiAodmFsdWU6IFR8dW5kZWZpbmVkKSA9PiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgbm90aWZ5OiB0cnVlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUgfSlcbiAgb3BlbmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KClcbiAgdmFsdWU6IFR8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgZm9yY2VkRW1wdHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZm9ybWF0dGVyID0gKHgpID0+IHggPyB4LnRvU3RyaW5nKCkgOiAodGhpcy5wbGFjZWhvbGRlciB8fCAnJyk7XG4gIH1cblxuICBfX29yKC4uLnZhbHVlczogYm9vbGVhbltdKSB7IHJldHVybiB2YWx1ZXMuc29tZShCb29sZWFuKTsgfVxuXG4gIEBvYnNlcnZlKCd2YWx1ZScpXG4gIG9ic2VydmVWYWx1ZSh2YWx1ZTogVHx1bmRlZmluZWQpIHsgdGhpcy5lbXB0eSA9ICF2YWx1ZTsgfVxuXG4gIG9wZW4oKSB7IHRoaXMub3BlbmVkID0gdHJ1ZTsgfVxuXG4gIGNsb3NlKCkgeyB0aGlzLm9wZW5lZCA9IGZhbHNlOyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9