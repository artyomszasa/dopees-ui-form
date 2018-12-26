var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { customElement, property, observe, query } from "@polymer/decorators/lib/decorators.js";
import { mkTemplate } from "./templates.js";
import { FieldMixin } from "./field.js";
const template = "<style>input{height:var(--dope-height, 1.75rem);line-height:var(--dope-height, 1.75rem);width:var(--dope-width, 100%);display:var(--dope-display);padding:var(--dope-padding, 0);margin:0;border:none;outline:none;box-shadow:none;font-size:inherit;font-family:inherit;background:transparent;text-align:var(--dope-text-align, left);color:var(--text-color, #000)}\n\n/*# sourceMappingURL=text-field.css.map */</style><input id=\"input\" type$=\"[[type]]\" placeholder$=\"[[placeholder]]\" minlength$=\"[[minlength]]\" maxlength$=\"[[maxlength]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" name$=\"[[name]]\" on-keydown=\"onKeydown\" on-input=\"onChange\" on-change=\"onChange\" on-focus=\"onFocus\" on-blur=\"onBlur\"/>";
import { wrapEvent } from "./helpers.js";
let TextField = class TextField extends FieldMixin(PolymerElement) {
  constructor() {
    super(...arguments);
    this.value = '';
  }

  static get template() {
    return mkTemplate(template);
  }

  activate() {
    this.native.focus();
  }

  onKeydown(e) {
    const ew = wrapEvent(e, 'dope');
    this.dispatchEvent(ew);

    if (ew.defaultPrevented) {
      e.preventDefault();
    }
  }

  onChange(e) {
    const ew = wrapEvent(e, 'dope');
    this.dispatchEvent(ew);
    this.dirty = true;
    this.value = this.native.value;
  }

  onBlur() {
    this.focused = false;
  }

  onFocus() {
    this.focused = true;
  }

  valueChanged(value) {
    this.native.value = value;
    this.empty = !value;
  }

};

__decorate([property({
  type: String
})], TextField.prototype, "type", void 0);

__decorate([property({
  type: String
})], TextField.prototype, "placeholder", void 0);

__decorate([property({
  type: Number,
  reflectToAttribute: true
})], TextField.prototype, "minlength", void 0);

__decorate([property({
  type: Number,
  reflectToAttribute: true
})], TextField.prototype, "maxlength", void 0);

__decorate([property({
  type: String
})], TextField.prototype, "name", void 0);

__decorate([property({
  type: String,
  notify: true
})], TextField.prototype, "value", void 0);

__decorate([query('input')], TextField.prototype, "native", void 0);

__decorate([observe('value')], TextField.prototype, "valueChanged", null);

TextField = __decorate([customElement('dope-text-field')], TextField);
export { TextField };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QURDLEtBQUssQ0FBQyxPQUFELENBQ04sQ0FBQSxFLG1CQUFBLEUsUUFBQSxFLEtBQTBCLENBQTFCLENBQUE7O0FBd0JBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxPQUFELENBQ1IsQ0FBQSxFLG1CQUFBLEUsY0FBQSxFQUdDLElBSEQsQ0FBQTs7QUE5Q1csU0FBUyxHQUFBLFVBQUEsQ0FBQSxDQURyQixhQUFhLENBQUMsaUJBQUQsQ0FDUSxDQUFBLEVBQVQsU0FBUyxDQUFUO1NBQUEsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQnO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIG9ic2VydmUsIHF1ZXJ5IH0gZnJvbSAnQHBvbHltZXIvZGVjb3JhdG9ycy9saWIvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBta1RlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IHsgRmllbGRNaXhpbiwgVmFsdWVGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGV4dC1maWVsZC90ZXh0LWZpZWxkLnB1Zyc7XG5pbXBvcnQgeyB3cmFwRXZlbnQgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS10ZXh0LWZpZWxkJylcbmV4cG9ydCBjbGFzcyBUZXh0RmllbGQgZXh0ZW5kcyBGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8c3RyaW5nPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiBta1RlbXBsYXRlKHRlbXBsYXRlKTsgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICB0eXBlPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSB9KVxuICBtaW5sZW5ndGg/OiBudW1iZXI7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUgfSlcbiAgbWF4bGVuZ3RoPzogbnVtYmVyO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZywgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBzdHJpbmcgPSAnJztcblxuICBAcXVlcnkoJ2lucHV0JylcbiAgbmF0aXZlITogSFRNTElucHV0RWxlbWVudDtcblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5uYXRpdmUuZm9jdXMoKTsgfVxuXG4gIG9uS2V5ZG93bihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgY29uc3QgZXcgPSB3cmFwRXZlbnQoZSwgJ2RvcGUnKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXcpO1xuICAgIGlmIChldy5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UoZTogRXZlbnQpIHtcbiAgICBjb25zdCBldyA9IHdyYXBFdmVudChlLCAnZG9wZScpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldyk7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMubmF0aXZlLnZhbHVlO1xuICB9XG5cbiAgb25CbHVyKCkgeyB0aGlzLmZvY3VzZWQgPSBmYWxzZTsgfVxuXG4gIG9uRm9jdXMoKSB7IHRoaXMuZm9jdXNlZCA9IHRydWU7IH1cblxuICBAb2JzZXJ2ZSgndmFsdWUnKVxuICB2YWx1ZUNoYW5nZWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMubmF0aXZlLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5lbXB0eSA9ICF2YWx1ZTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=