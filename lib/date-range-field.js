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
const view = "<style>:host{display:block}.field{display:block;height:100%}dope-calendar{width:var(--width, 16rem);height:var(--height, 14rem)}\n\n/*# sourceMappingURL=date-range-field.css.map */</style><div class=\"field\" tabindex$=\"[[tabindex]]\" focused$=\"[[focused]]\" empty$=\"[[empty]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" invalid$=\"[[invalid]]\" on-focus=\"onFocus\" on-blur=\"onBlur\"><dope-calendar on-choose=\"onCalendarChoose\" selection=\"[[selection]]\" years=\"[[years]]\" months=\"[[months]]\" focused=\"{{calendarFocused}}\"></dope-calendar></div>";
var Target;

(function (Target) {
  Target[Target["Start"] = 0] = "Start";
  Target[Target["End"] = 1] = "End";
})(Target || (Target = {}));

let DateRangeField = class DateRangeField extends FieldMixin(PolymerElement) {
  constructor() {
    super();
    this.__valueChanging = false;
    this.__target = Target.Start;
    this.years = Array.apply(null, {
      length: 50
    }).map((_, i) => 1980 + i);
    this.months = months;
    this.tabindex = 0;
    this.value = {};
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

  focusedChanged(focused) {
    if (!focused) {
      this.__target = Target.Start;
    }
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
    if (Target.Start === this.__target) {
      this.startDate = e.detail;
      this.endDate = undefined;
      this.__target = Target.End;
    } else {
      this.endDate = e.detail;
      this.__target = Target.Start;
    }
  }

  valueChanged(value) {
    this.__valueChanging = true;

    try {
      this.startDate = value.start;
      this.endDate = value.end;
      this.empty = !value || !(value.start || value.end);
    } finally {
      this.__valueChanging = false;
    }
  }

  valuesChanged(start, end) {
    if (start) {
      if (end) {
        this.selection = date => 0 <= date.compareTo(start) && 0 >= date.compareTo(end);
      } else {
        this.selection = date => date.equalsTo(start);
      }
    } else {
      if (end) {
        this.selection = date => date.equalsTo(end);
      } else {
        this.selection = () => false;
      }
    }

    if (!this.__valueChanging) {
      this.value = {
        start,
        end
      };
    }
  }

};

__decorate([property({
  type: Array
})], DateRangeField.prototype, "years", void 0);

__decorate([property({
  type: Array
})], DateRangeField.prototype, "months", void 0);

__decorate([property({
  type: Object,
  notify: true
})], DateRangeField.prototype, "startDate", void 0);

__decorate([property({
  type: Object,
  notify: true
})], DateRangeField.prototype, "endDate", void 0);

__decorate([property()], DateRangeField.prototype, "tabindex", void 0);

__decorate([property()], DateRangeField.prototype, "selection", void 0);

__decorate([property({
  type: Object,
  notify: true
})], DateRangeField.prototype, "value", void 0);

__decorate([property({
  type: Boolean
})], DateRangeField.prototype, "calendarFocused", void 0);

__decorate([property({
  type: Boolean
})], DateRangeField.prototype, "selfFocused", void 0);

__decorate([query('.field')], DateRangeField.prototype, "field", void 0);

__decorate([observe('focused')], DateRangeField.prototype, "focusedChanged", null);

__decorate([observe('selfFocused', 'calendarFocused')], DateRangeField.prototype, "observeFocused", null);

__decorate([observe('value')], DateRangeField.prototype, "valueChanged", null);

__decorate([observe('startDate', 'endDate')], DateRangeField.prototype, "valuesChanged", null);

DateRangeField = __decorate([customElement('dope-date-range-field')], DateRangeField);
export { DateRangeField };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxFLE9BQUEsRSxLQUF1QixDQUF2QixDQUFBOztBQVdBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxTQUFELENBQ1IsQ0FBQSxFLHdCQUFBLEUsZ0JBQUEsRUFJQyxJQUpELENBQUE7O0FBT0EsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLGFBQUQsRUFBZ0IsaUJBQWhCLENBQ1IsQ0FBQSxFLHdCQUFBLEUsZ0JBQUEsRUFHQyxJQUhELENBQUE7O0FBcUJBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxPQUFELENBQ1IsQ0FBQSxFLHdCQUFBLEUsY0FBQSxFQVNDLElBVEQsQ0FBQTs7QUFZQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsV0FBRCxFQUFjLFNBQWQsQ0FDUixDQUFBLEUsd0JBQUEsRSxlQUFBLEVBaUJDLElBakJELENBQUE7O0FBeEZXLGNBQWMsR0FBQSxVQUFBLENBQUEsQ0FEMUIsYUFBYSxDQUFDLHVCQUFELENBQ2EsQ0FBQSxFQUFkLGNBQWMsQ0FBZDtTQUFBLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY2FsZW5kYXInO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBvYnNlcnZlLCBxdWVyeSB9IGZyb20gXCJAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzXCI7XG5pbXBvcnQgeyBGaWVsZE1peGluLCBWYWx1ZUZpZWxkIH0gZnJvbSBcIi4vZmllbGRcIjtcbmltcG9ydCB7IG1vbnRocyB9IGZyb20gXCIuL2NhbGVuZGFyXCI7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gXCJkb3BlZXMtY29yZS9saWIvZGF0ZXRpbWVcIjtcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tIFwiLi90ZW1wbGF0ZXNcIjtcbmltcG9ydCB2aWV3IGZyb20gJy4vZGF0ZS1yYW5nZS1maWVsZC9kYXRlLXJhbmdlLWZpZWxkLnB1Zyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVRpbWVSYW5nZSB7XG4gIHN0YXJ0PzogRGF0ZVRpbWVcbiAgZW5kPzogRGF0ZVRpbWVcbn1cblxuZW51bSBUYXJnZXQge1xuICBTdGFydCA9IDAsXG4gIEVuZCA9IDFcbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtZGF0ZS1yYW5nZS1maWVsZCcpXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlRmllbGQgZXh0ZW5kcyBGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8RGF0ZVRpbWVSYW5nZT4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gbWtUZW1wbGF0ZSh2aWV3KTsgfVxuXG4gIHByaXZhdGUgX19ibHVyVGltZW91dDogYW55O1xuXG4gIHByaXZhdGUgX192YWx1ZUNoYW5naW5nID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfX3RhcmdldDogVGFyZ2V0ID0gVGFyZ2V0LlN0YXJ0O1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gIHllYXJzOiBudW1iZXJbXSA9IEFycmF5LmFwcGx5KG51bGwsIDxhbnk+eyBsZW5ndGg6IDUwIH0pLm1hcCgoXywgaSkgPT4gMTk4MCArIGkpO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gIG1vbnRoczogeyB2YWx1ZTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcgfVtdID0gbW9udGhzO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIHN0YXJ0RGF0ZTogRGF0ZVRpbWV8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIGVuZERhdGU6IERhdGVUaW1lfHVuZGVmaW5lZDtcblxuICBAcHJvcGVydHkoKVxuICB0YWJpbmRleD86IG51bWJlciA9IDA7XG5cbiAgQHByb3BlcnR5KClcbiAgc2VsZWN0aW9uOiAoZGF0ZTogRGF0ZVRpbWUpID0+IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWUgfSlcbiAgdmFsdWU6IERhdGVUaW1lUmFuZ2UgPSB7fTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIGNhbGVuZGFyRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgc2VsZkZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAcXVlcnkoJy5maWVsZCcpXG4gIGZpZWxkITogSFRNTERpdkVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmVtcHR5ID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9ICgpID0+IGZhbHNlO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7IHRoaXMuZmllbGQuZm9jdXMoKTsgfVxuXG4gIEBvYnNlcnZlKCdmb2N1c2VkJylcbiAgZm9jdXNlZENoYW5nZWQoZm9jdXNlZDogYm9vbGVhbikge1xuICAgIGlmICghZm9jdXNlZCkge1xuICAgICAgdGhpcy5fX3RhcmdldCA9IFRhcmdldC5TdGFydDtcbiAgICB9XG4gIH1cblxuICBAb2JzZXJ2ZSgnc2VsZkZvY3VzZWQnLCAnY2FsZW5kYXJGb2N1c2VkJylcbiAgb2JzZXJ2ZUZvY3VzZWQoc2VsZkZvY3VzZWQ6IGJvb2xlYW4sIGNhbGVuZGFyRm9jdXNlZDogYm9vbGVhbikge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9fYmx1clRpbWVvdXQpO1xuICAgIHRoaXMuX19ibHVyVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5mb2N1c2VkID0gc2VsZkZvY3VzZWQgfHwgY2FsZW5kYXJGb2N1c2VkLCAwKTtcbiAgfVxuXG4gIG9uQmx1cigpIHsgdGhpcy5zZWxmRm9jdXNlZCA9IGZhbHNlOyB9XG5cbiAgb25Gb2N1cygpIHsgdGhpcy5zZWxmRm9jdXNlZCA9IHRydWU7IH1cblxuICBvbkNhbGVuZGFyQ2hvb3NlKGU6IEN1c3RvbUV2ZW50PERhdGVUaW1lPikge1xuICAgIGlmIChUYXJnZXQuU3RhcnQgPT09IHRoaXMuX190YXJnZXQpIHtcbiAgICAgIHRoaXMuc3RhcnREYXRlID0gZS5kZXRhaWw7XG4gICAgICB0aGlzLmVuZERhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9fdGFyZ2V0ID0gVGFyZ2V0LkVuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmREYXRlID0gZS5kZXRhaWw7XG4gICAgICB0aGlzLl9fdGFyZ2V0ID0gVGFyZ2V0LlN0YXJ0O1xuICAgIH1cbiAgfVxuXG4gIEBvYnNlcnZlKCd2YWx1ZScpXG4gIHZhbHVlQ2hhbmdlZCh2YWx1ZTogRGF0ZVRpbWVSYW5nZSkge1xuICAgIHRoaXMuX192YWx1ZUNoYW5naW5nID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zdGFydERhdGUgPSB2YWx1ZS5zdGFydDtcbiAgICAgIHRoaXMuZW5kRGF0ZSA9IHZhbHVlLmVuZDtcbiAgICAgIHRoaXMuZW1wdHkgPSAhdmFsdWUgfHwgISh2YWx1ZS5zdGFydCB8fCB2YWx1ZS5lbmQpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9fdmFsdWVDaGFuZ2luZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBvYnNlcnZlKCdzdGFydERhdGUnLCAnZW5kRGF0ZScpXG4gIHZhbHVlc0NoYW5nZWQoc3RhcnQ6IERhdGVUaW1lfHVuZGVmaW5lZCwgZW5kOiBEYXRlVGltZXx1bmRlZmluZWQpIHtcbiAgICBpZiAoc3RhcnQpIHtcbiAgICAgIGlmIChlbmQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSAoZGF0ZTogRGF0ZVRpbWUpID0+IDAgPD0gZGF0ZS5jb21wYXJlVG8oc3RhcnQpICYmIDAgPj0gZGF0ZS5jb21wYXJlVG8oZW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gKGRhdGU6IERhdGVUaW1lKSA9PiBkYXRlLmVxdWFsc1RvKHN0YXJ0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVuZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IChkYXRlOiBEYXRlVGltZSkgPT4gZGF0ZS5lcXVhbHNUbyhlbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSAoKSA9PiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLl9fdmFsdWVDaGFuZ2luZykge1xuICAgICAgdGhpcy52YWx1ZSA9IHsgc3RhcnQsIGVuZCB9O1xuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=