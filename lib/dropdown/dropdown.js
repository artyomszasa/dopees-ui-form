var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { customElement, property, observe } from "@polymer/decorators/lib/decorators.js";
import { mkTemplate } from "../templates.js";
const view = "<style>.dropdown{position:relative;display:flex}.dropdown--value{height:var(--dope-height, 1.75rem);line-height:var(--dope-height, 1.75rem);width:var(--dope-width, 100%);display:var(--dope-display);padding:var(--dope-padding, 0);font-size:inherit;font-family:inherit}.dropdown--value[empty]{color:var(--text-color, #000);opacity:.38}.dropdown--body{position:absolute;display:none;top:var(--dope-height, 1.75rem);left:0;width:auto;max-height:var(--dope-max-height, 16rem);box-shadow:0.125rem 0.125rem 0.25rem rgba(0,0,0,0.54);border-radius:.375rem}.dropdown--body[shown]{display:block}dope-material-icon{width:1rem;height:1rem;margin:.375rem 0 .375rem .375rem}dope-material-icon svg{width:1rem;height:1rem}\n\n/*# sourceMappingURL=dropdown.css.map */</style><div class=\"dropdown\"><div class=\"dropdown--value\" empty$=\"[[__or(empty, forcedEmpty)]]\">[[formatter(value)]]</div><slot class=\"dropdown--body\" name=\"body\" shown$=\"[[opened]]\"></slot></div>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsU0FBUyxjQUFULFFBQStCLHFDQUEvQjtBQUNBLFNBQVMsYUFBVCxFQUF3QixRQUF4QixFQUFrQyxPQUFsQyxRQUFpRCx1Q0FBakQ7QUFDQSxTQUFTLFVBQVQsUUFBMkIsaUJBQTNCO01BQ08sSTtBQUdQLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQWIsU0FBcUMsY0FBckMsQ0FBbUQ7QUFzQmpELEVBQUEsV0FBQSxHQUFBO0FBQ0U7QUFmRixTQUFBLEtBQUEsR0FBaUIsSUFBakI7QUFNQSxTQUFBLE1BQUEsR0FBa0IsS0FBbEI7QUFNQSxTQUFBLFdBQUEsR0FBdUIsS0FBdkI7O0FBSUUsU0FBSyxTQUFMLEdBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQUYsRUFBSCxHQUFtQixLQUFLLFdBQUwsSUFBb0IsRUFBOUQ7QUFDRDs7QUF2QkQsYUFBVyxRQUFYLEdBQW1CO0FBQUssV0FBTyxVQUFVLENBQUMsSUFBRCxDQUFqQjtBQUEwQjs7QUF5QmxELEVBQUEsSUFBSSxDQUFDLEdBQUcsTUFBSixFQUFxQjtBQUFJLFdBQU8sTUFBTSxDQUFDLElBQVAsQ0FBWSxPQUFaLENBQVA7QUFBOEI7O0FBRzNELEVBQUEsWUFBWSxDQUFDLEtBQUQsRUFBbUI7QUFBSSxTQUFLLEtBQUwsR0FBYSxDQUFDLEtBQWQ7QUFBc0I7O0FBRXpELEVBQUEsSUFBSSxHQUFBO0FBQUssU0FBSyxNQUFMLEdBQWMsSUFBZDtBQUFxQjs7QUFFOUIsRUFBQSxLQUFLLEdBQUE7QUFBSyxTQUFLLE1BQUwsR0FBYyxLQUFkO0FBQXNCOztBQWxDaUIsQ0FBbkQ7O0FBS0UsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLHNCQUFBLEUsYUFBQSxFLEtBQXFCLENBQXJCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLHNCQUFBLEUsT0FBQSxFLEtBQXNCLENBQXRCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxFQUNULENBQUEsRSxzQkFBQSxFLFdBQUEsRSxLQUEwQyxDQUExQyxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFLE9BQVI7QUFBaUIsRUFBQSxNQUFNLEVBQUUsSUFBekI7QUFBK0IsRUFBQSxrQkFBa0IsRUFBRTtBQUFuRCxDQUFELENBQ1QsQ0FBQSxFLHNCQUFBLEUsUUFBQSxFLEtBQXdCLENBQXhCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxFQUNULENBQUEsRSxzQkFBQSxFLE9BQUEsRSxLQUFtQixDQUFuQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSxzQkFBQSxFLGFBQUEsRSxLQUE2QixDQUE3QixDQUFBOztBQVVBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxPQUFELENBQ1IsQ0FBQSxFLHNCQUFBLEUsY0FBQSxFQUF5RCxJQUF6RCxDQUFBOztBQTlCVyxZQUFZLEdBQUEsVUFBQSxDQUFBLENBRHhCLGFBQWEsQ0FBQyxnQkFBRCxDQUNXLENBQUEsRUFBWixZQUFZLENBQVo7U0FBQSxZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBvYnNlcnZlIH0gZnJvbSBcIkBwb2x5bWVyL2RlY29yYXRvcnMvbGliL2RlY29yYXRvcnNcIjtcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IHZpZXcgZnJvbSAnLi9kcm9wZG93bi5wdWcnO1xuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1kcm9wLWRvd24nKVxuZXhwb3J0IGNsYXNzIERvcGVEcm9wRG93bjxUPiBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gbWtUZW1wbGF0ZSh2aWV3KTsgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIGVtcHR5OiBib29sZWFuID0gdHJ1ZTtcblxuICBAcHJvcGVydHkoKVxuICBmb3JtYXR0ZXI6ICh2YWx1ZTogVHx1bmRlZmluZWQpID0+IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBub3RpZnk6IHRydWUsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSB9KVxuICBvcGVuZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKVxuICB2YWx1ZTogVHx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBmb3JjZWRFbXB0eTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mb3JtYXR0ZXIgPSB4ID0+IHggPyB4LnRvU3RyaW5nKCkgOiAodGhpcy5wbGFjZWhvbGRlciB8fCAnJyk7XG4gIH1cblxuICBfX29yKC4uLnZhbHVlczogYm9vbGVhbltdKSB7IHJldHVybiB2YWx1ZXMuc29tZShCb29sZWFuKTsgfVxuXG4gIEBvYnNlcnZlKCd2YWx1ZScpXG4gIG9ic2VydmVWYWx1ZSh2YWx1ZTogVHx1bmRlZmluZWQpIHsgdGhpcy5lbXB0eSA9ICF2YWx1ZTsgfVxuXG4gIG9wZW4oKSB7IHRoaXMub3BlbmVkID0gdHJ1ZTsgfVxuXG4gIGNsb3NlKCkgeyB0aGlzLm9wZW5lZCA9IGZhbHNlOyB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==