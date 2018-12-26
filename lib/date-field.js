var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import "./calendar.js";
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { customElement, property, observe, query } from "@polymer/decorators/lib/decorators.js";
import { FieldMixin } from "./field.js";
import { months } from "./calendar.js";
import { mkTemplate } from "./templates.js";
const view = "<style>:host{display:block}.field{display:block;height:100%}dope-calendar{width:var(--width, 16rem);height:var(--height, 14rem)}\n\n/*# sourceMappingURL=date-field.css.map */</style><div class=\"field\" tabindex$=\"[[tabindex]]\" focused$=\"[[focused]]\" empty$=\"[[empty]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" invalid$=\"[[invalid]]\" on-focus=\"onFocus\" on-blur=\"onBlur\"><dope-calendar on-choose=\"onCalendarChoose\" selection=\"[[selection]]\" years=\"[[years]]\" months=\"[[months]]\" focused=\"{{calendarFocused}}\"></dope-calendar></div>";
let DateField = class DateField extends FieldMixin(PolymerElement) {
  constructor() {
    super();
    this.years = Array.apply(null, {
      length: 50
    }).map((_, i) => 1980 + i);
    this.months = months;
    this.tabindex = 0;
    this.calendarFocused = false;
    this.selfFocused = false;
    this.empty = true;

    this.selection = () => false;
  }

  static get template() {
    return mkTemplate(view);
  }

  activate() {
    this.field.focus();
  }

  observeFocused(selfFocused, calendarFocused) {
    clearTimeout(this.__blurTimeout);
    this.__blurTimeout = setTimeout(() => this.focused = selfFocused || calendarFocused, 0);
  }

  onBlur() {
    this.selfFocused = false;
  }

  onFocus() {
    this.selfFocused = true;
  }

  onCalendarChoose(e) {
    this.dirty = true;
    this.value = e.detail;
  }

  valueChanged(value) {
    if (value) {
      this.selection = date => value.equalsTo(date);
    } else {
      this.selection = () => false;
    }
  }

};

__decorate([property({
  type: Array
})], DateField.prototype, "years", void 0);

__decorate([property({
  type: Array
})], DateField.prototype, "months", void 0);

__decorate([property({
  type: Object,
  notify: true
})], DateField.prototype, "value", void 0);

__decorate([property()], DateField.prototype, "tabindex", void 0);

__decorate([property()], DateField.prototype, "selection", void 0);

__decorate([property({
  type: Boolean
})], DateField.prototype, "calendarFocused", void 0);

__decorate([property({
  type: Boolean
})], DateField.prototype, "selfFocused", void 0);

__decorate([query('.field')], DateField.prototype, "field", void 0);

__decorate([observe('selfFocused', 'calendarFocused')], DateField.prototype, "observeFocused", null);

__decorate([observe('value')], DateField.prototype, "valueChanged", null);

DateField = __decorate([customElement('dope-date-field')], DateField);
export { DateField };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLEUsbUJBQUEsRSxXQUFBLEUsS0FBdUMsQ0FBdkMsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FDVCxDQUFBLEUsbUJBQUEsRSxpQkFBQSxFLEtBQWlDLENBQWpDLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLG1CQUFBLEUsYUFBQSxFLEtBQTZCLENBQTdCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsS0FBSyxDQUFDLFFBQUQsQ0FDTixDQUFBLEUsbUJBQUEsRSxPQUFBLEUsS0FBdUIsQ0FBdkIsQ0FBQTs7QUFXQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsYUFBRCxFQUFnQixpQkFBaEIsQ0FDUixDQUFBLEUsbUJBQUEsRSxnQkFBQSxFQUdDLElBSEQsQ0FBQTs7QUFlQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsT0FBRCxDQUNSLENBQUEsRSxtQkFBQSxFLGNBQUEsRUFNQyxJQU5ELENBQUE7O0FBckRXLFNBQVMsR0FBQSxVQUFBLENBQUEsQ0FEckIsYUFBYSxDQUFDLGlCQUFELENBQ1EsQ0FBQSxFQUFULFNBQVMsQ0FBVDtTQUFBLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY2FsZW5kYXInO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudCc7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgb2JzZXJ2ZSwgcXVlcnkgfSBmcm9tICdAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnZG9wZWVzLWNvcmUvbGliL2RhdGV0aW1lJztcbmltcG9ydCB7IEZpZWxkTWl4aW4sIFZhbHVlRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7IG1vbnRocyB9IGZyb20gJy4vY2FsZW5kYXInO1xuaW1wb3J0IHsgbWtUZW1wbGF0ZSB9IGZyb20gXCIuL3RlbXBsYXRlc1wiO1xuaW1wb3J0IHZpZXcgZnJvbSAnLi9kYXRlLWZpZWxkL2RhdGUtZmllbGQucHVnJztcblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtZGF0ZS1maWVsZCcpXG5leHBvcnQgY2xhc3MgRGF0ZUZpZWxkIGV4dGVuZHMgRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkgaW1wbGVtZW50cyBWYWx1ZUZpZWxkPERhdGVUaW1lfHVuZGVmaW5lZD4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gbWtUZW1wbGF0ZSh2aWV3KTsgfVxuXG4gIHByaXZhdGUgX19ibHVyVGltZW91dDogYW55O1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gIHllYXJzOiBudW1iZXJbXSA9IEFycmF5LmFwcGx5KG51bGwsIDxhbnk+eyBsZW5ndGg6IDUwIH0pLm1hcCgoXywgaSkgPT4gMTk4MCArIGkpO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gIG1vbnRoczogeyB2YWx1ZTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcgfVtdID0gbW9udGhzO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBEYXRlVGltZXx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KClcbiAgdGFiaW5kZXg/OiBudW1iZXIgPSAwO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHNlbGVjdGlvbjogKGRhdGU6IERhdGVUaW1lKSA9PiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgY2FsZW5kYXJGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBzZWxmRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBxdWVyeSgnLmZpZWxkJylcbiAgZmllbGQhOiBIVE1MRGl2RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZW1wdHkgPSB0cnVlO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gKCkgPT4gZmFsc2U7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5maWVsZC5mb2N1cygpOyB9XG5cbiAgQG9ic2VydmUoJ3NlbGZGb2N1c2VkJywgJ2NhbGVuZGFyRm9jdXNlZCcpXG4gIG9ic2VydmVGb2N1c2VkKHNlbGZGb2N1c2VkOiBib29sZWFuLCBjYWxlbmRhckZvY3VzZWQ6IGJvb2xlYW4pIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fX2JsdXJUaW1lb3V0KTtcbiAgICB0aGlzLl9fYmx1clRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZm9jdXNlZCA9IHNlbGZGb2N1c2VkIHx8IGNhbGVuZGFyRm9jdXNlZCwgMCk7XG4gIH1cblxuICBvbkJsdXIoKSB7IHRoaXMuc2VsZkZvY3VzZWQgPSBmYWxzZTsgfVxuXG4gIG9uRm9jdXMoKSB7IHRoaXMuc2VsZkZvY3VzZWQgPSB0cnVlOyB9XG5cbiAgb25DYWxlbmRhckNob29zZShlOiBDdXN0b21FdmVudDxEYXRlVGltZT4pIHtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLnZhbHVlID0gZS5kZXRhaWw7XG4gIH1cblxuICBAb2JzZXJ2ZSgndmFsdWUnKVxuICB2YWx1ZUNoYW5nZWQodmFsdWU6IERhdGVUaW1lfG51bGwpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gKGRhdGU6IERhdGVUaW1lKSA9PiB2YWx1ZS5lcXVhbHNUbyhkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3Rpb24gPSAoKSA9PiBmYWxzZTtcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9