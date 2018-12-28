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
const view = "<style>.dropdown{position:relative;display:flex}.dropdown--value{height:var(--height, 1.75rem);line-height:var(--height, 1.75rem);width:var(--width, 100%);display:var(--display);padding:var(--padding, 0);font-size:inherit;font-family:inherit}.dropdown--value[empty]{color:var(--text-color, #000);opacity:.38}.dropdown--body{position:absolute;display:none;top:var(--height, 1.75rem);left:0;width:auto;max-height:var(--max-height, 16rem);box-shadow:0.125rem 0.125rem 0.25rem rgba(0,0,0,0.54);border-radius:.375rem;color:var(--dropdown-color, #000);--background-color: var(--dropdown-background-color, #fff);--background-hover-color: var(--dropdown-background-hover-color, var(--color-primary-100, rgba(0,0,0,.1)))}.dropdown--body[shown]{display:block}dope-material-icon{width:1rem;height:1rem;margin:.375rem 0 .375rem .375rem}dope-material-icon svg{width:1rem;height:1rem}\n\n/*# sourceMappingURL=drop-down.css.map */</style><div class=\"dropdown\"><div class=\"dropdown--value\" empty$=\"[[__or(empty, forcedEmpty)]]\">[[formatter(value)]]</div><slot class=\"dropdown--body\" name=\"body\" shown$=\"[[opened]]\"></slot></div>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3AtZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVMsY0FBVCxRQUErQixxQ0FBL0I7QUFDQSxTQUFTLGFBQVQsRUFBd0IsUUFBeEIsRUFBa0MsT0FBbEMsUUFBaUQsdUNBQWpEO0FBQ0EsU0FBUyxVQUFULFFBQTJCLGdCQUEzQjtNQUNPLEk7QUFHUCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFiLFNBQXFDLGNBQXJDLENBQW1EO0FBc0JqRCxFQUFBLFdBQUEsR0FBQTtBQUNFO0FBZkYsU0FBQSxLQUFBLEdBQWlCLElBQWpCO0FBTUEsU0FBQSxNQUFBLEdBQWtCLEtBQWxCO0FBTUEsU0FBQSxXQUFBLEdBQXVCLEtBQXZCOztBQUlFLFNBQUssU0FBTCxHQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFGLEVBQUgsR0FBbUIsS0FBSyxXQUFMLElBQW9CLEVBQTlEO0FBQ0Q7O0FBdkJELGFBQVcsUUFBWCxHQUFtQjtBQUFLLFdBQU8sVUFBVSxDQUFDLElBQUQsQ0FBakI7QUFBMEI7O0FBeUJsRCxFQUFBLElBQUksQ0FBQyxHQUFHLE1BQUosRUFBcUI7QUFBSSxXQUFPLE1BQU0sQ0FBQyxJQUFQLENBQVksT0FBWixDQUFQO0FBQThCOztBQUczRCxFQUFBLFlBQVksQ0FBQyxLQUFELEVBQW1CO0FBQUksU0FBSyxLQUFMLEdBQWEsQ0FBQyxLQUFkO0FBQXNCOztBQUV6RCxFQUFBLElBQUksR0FBQTtBQUFLLFNBQUssTUFBTCxHQUFjLElBQWQ7QUFBcUI7O0FBRTlCLEVBQUEsS0FBSyxHQUFBO0FBQUssU0FBSyxNQUFMLEdBQWMsS0FBZDtBQUFzQjs7QUFsQ2lCLENBQW5EOztBQUtFLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSxzQkFBQSxFLGFBQUEsRSxLQUFxQixDQUFyQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSxzQkFBQSxFLE9BQUEsRSxLQUFzQixDQUF0QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsRUFDVCxDQUFBLEUsc0JBQUEsRSxXQUFBLEUsS0FBMEMsQ0FBMUMsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCLEVBQUEsTUFBTSxFQUFFLElBQXpCO0FBQStCLEVBQUEsa0JBQWtCLEVBQUU7QUFBbkQsQ0FBRCxDQUNULENBQUEsRSxzQkFBQSxFLFFBQUEsRSxLQUF3QixDQUF4QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsRUFDVCxDQUFBLEUsc0JBQUEsRSxPQUFBLEUsS0FBbUIsQ0FBbkIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FDVCxDQUFBLEUsc0JBQUEsRSxhQUFBLEUsS0FBNkIsQ0FBN0IsQ0FBQTs7QUFVQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsT0FBRCxDQUNSLENBQUEsRSxzQkFBQSxFLGNBQUEsRUFBeUQsSUFBekQsQ0FBQTs7QUE5QlcsWUFBWSxHQUFBLFVBQUEsQ0FBQSxDQUR4QixhQUFhLENBQUMsZ0JBQUQsQ0FDVyxDQUFBLEVBQVosWUFBWSxDQUFaO1NBQUEsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgb2JzZXJ2ZSB9IGZyb20gXCJAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzXCI7XG5pbXBvcnQgeyBta1RlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IHZpZXcgZnJvbSAnLi9kcm9wLWRvd24vZHJvcC1kb3duLnB1Zyc7XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLWRyb3AtZG93bicpXG5leHBvcnQgY2xhc3MgRG9wZURyb3BEb3duPFQ+IGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiBta1RlbXBsYXRlKHZpZXcpOyB9XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgZW1wdHk6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIGZvcm1hdHRlcjogKHZhbHVlOiBUfHVuZGVmaW5lZCkgPT4gc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIG5vdGlmeTogdHJ1ZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlIH0pXG4gIG9wZW5lZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHZhbHVlOiBUfHVuZGVmaW5lZDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIGZvcmNlZEVtcHR5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmZvcm1hdHRlciA9IHggPT4geCA/IHgudG9TdHJpbmcoKSA6ICh0aGlzLnBsYWNlaG9sZGVyIHx8ICcnKTtcbiAgfVxuXG4gIF9fb3IoLi4udmFsdWVzOiBib29sZWFuW10pIHsgcmV0dXJuIHZhbHVlcy5zb21lKEJvb2xlYW4pOyB9XG5cbiAgQG9ic2VydmUoJ3ZhbHVlJylcbiAgb2JzZXJ2ZVZhbHVlKHZhbHVlOiBUfHVuZGVmaW5lZCkgeyB0aGlzLmVtcHR5ID0gIXZhbHVlOyB9XG5cbiAgb3BlbigpIHsgdGhpcy5vcGVuZWQgPSB0cnVlOyB9XG5cbiAgY2xvc2UoKSB7IHRoaXMub3BlbmVkID0gZmFsc2U7IH1cbn0iXSwic291cmNlUm9vdCI6IiJ9