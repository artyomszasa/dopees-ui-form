var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import "../calendar/calendar.js";
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { customElement, property, observe, query } from "@polymer/decorators/lib/decorators.js";
import { FieldMixin } from "../field.js";
import { months } from "../calendar/calendar.js";
import { mkTemplate } from "../templates.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXVDLENBQXZDLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLG1CQUFBLEUsaUJBQUEsRSxLQUFpQyxDQUFqQyxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSxtQkFBQSxFLGFBQUEsRSxLQUE2QixDQUE3QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLEtBQUssQ0FBQyxRQUFELENBQ04sQ0FBQSxFLG1CQUFBLEUsT0FBQSxFLEtBQXVCLENBQXZCLENBQUE7O0FBVUEsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLGFBQUQsRUFBZ0IsaUJBQWhCLENBQ1IsQ0FBQSxFLG1CQUFBLEUsZ0JBQUEsRUFHQyxJQUhELENBQUE7O0FBZUEsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLE9BQUQsQ0FDUixDQUFBLEUsbUJBQUEsRSxjQUFBLEVBTUMsSUFORCxDQUFBOztBQXBEVyxTQUFTLEdBQUEsVUFBQSxDQUFBLENBRHJCLGFBQWEsQ0FBQyxpQkFBRCxDQUNRLENBQUEsRUFBVCxTQUFTLENBQVQ7U0FBQSxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9jYWxlbmRhci9jYWxlbmRhcic7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50JztcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBvYnNlcnZlLCBxdWVyeSB9IGZyb20gJ0Bwb2x5bWVyL2RlY29yYXRvcnMvbGliL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdkb3BlZXMtY29yZS9saWIvZGF0ZXRpbWUnO1xuaW1wb3J0IHsgRmllbGRNaXhpbiwgVmFsdWVGaWVsZCB9IGZyb20gJy4uL2ZpZWxkJztcbmltcG9ydCB7IG1vbnRocyB9IGZyb20gJy4uL2NhbGVuZGFyL2NhbGVuZGFyJztcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tIFwiLi4vdGVtcGxhdGVzXCI7XG5pbXBvcnQgdmlldyBmcm9tICcuL2RhdGUtZmllbGQucHVnJztcblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtZGF0ZS1maWVsZCcpXG5leHBvcnQgY2xhc3MgRGF0ZUZpZWxkIGV4dGVuZHMgRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkgaW1wbGVtZW50cyBWYWx1ZUZpZWxkPERhdGVUaW1lfHVuZGVmaW5lZD4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gbWtUZW1wbGF0ZSh2aWV3KTsgfVxuXG4gIHByaXZhdGUgX19ibHVyVGltZW91dDogYW55O1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gIHllYXJzOiBudW1iZXJbXSA9IEFycmF5LmFwcGx5KG51bGwsIDxhbnk+eyBsZW5ndGg6IDUwIH0pLm1hcCgoXywgaSkgPT4gMTk4MCArIGkpO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gIG1vbnRoczogeyB2YWx1ZTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcgfVtdID0gbW9udGhzO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBEYXRlVGltZXx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KClcbiAgdGFiaW5kZXg/OiBudW1iZXIgPSAwO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHNlbGVjdGlvbjogKGRhdGU6IERhdGVUaW1lKSA9PiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgY2FsZW5kYXJGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBzZWxmRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBxdWVyeSgnLmZpZWxkJylcbiAgZmllbGQhOiBIVE1MRGl2RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gKCkgPT4gZmFsc2U7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5maWVsZC5mb2N1cygpOyB9XG5cbiAgQG9ic2VydmUoJ3NlbGZGb2N1c2VkJywgJ2NhbGVuZGFyRm9jdXNlZCcpXG4gIG9ic2VydmVGb2N1c2VkKHNlbGZGb2N1c2VkOiBib29sZWFuLCBjYWxlbmRhckZvY3VzZWQ6IGJvb2xlYW4pIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fX2JsdXJUaW1lb3V0KTtcbiAgICB0aGlzLl9fYmx1clRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZm9jdXNlZCA9IHNlbGZGb2N1c2VkIHx8IGNhbGVuZGFyRm9jdXNlZCwgMCk7XG4gIH1cblxuICBvbkJsdXIoKSB7IHRoaXMuc2VsZkZvY3VzZWQgPSBmYWxzZTsgfVxuXG4gIG9uRm9jdXMoKSB7IHRoaXMuc2VsZkZvY3VzZWQgPSB0cnVlOyB9XG5cbiAgb25DYWxlbmRhckNob29zZShlOiBDdXN0b21FdmVudDxEYXRlVGltZT4pIHtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLnZhbHVlID0gZS5kZXRhaWw7XG4gIH1cblxuICBAb2JzZXJ2ZSgndmFsdWUnKVxuICB2YWx1ZUNoYW5nZWQodmFsdWU6IERhdGVUaW1lfG51bGwpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gKGRhdGU6IERhdGVUaW1lKSA9PiB2YWx1ZS5lcXVhbHNUbyhkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3Rpb24gPSAoKSA9PiBmYWxzZTtcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9