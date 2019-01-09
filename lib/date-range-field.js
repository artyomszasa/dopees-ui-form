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
const view = "<style>:host{display:block}.field{outline:var(--outline);display:block;height:100%}dope-calendar{width:var(--width, 16rem);height:var(--height, 14rem)}\n\n/*# sourceMappingURL=date-range-field.css.map */</style><div class=\"field\" tabindex$=\"[[tabindex]]\" focused$=\"[[focused]]\" empty$=\"[[empty]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" invalid$=\"[[invalid]]\" on-focus=\"onFocus\" on-blur=\"onBlur\"><dope-calendar on-choose=\"onCalendarChoose\" selection=\"[[selection]]\" years=\"[[years]]\" months=\"[[months]]\" focused=\"{{calendarFocused}}\"></dope-calendar></div>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxFLE9BQUEsRSxLQUF1QixDQUF2QixDQUFBOztBQVdBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxTQUFELENBQ1IsQ0FBQSxFLHdCQUFBLEUsZ0JBQUEsRUFJQyxJQUpELENBQUE7O0FBT0EsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLGFBQUQsRUFBZ0IsaUJBQWhCLENBQ1IsQ0FBQSxFLHdCQUFBLEUsZ0JBQUEsRUFHQyxJQUhELENBQUE7O0FBcUJBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxPQUFELENBQ1IsQ0FBQSxFLHdCQUFBLEUsY0FBQSxFQVNDLElBVEQsQ0FBQTs7QUFZQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsV0FBRCxFQUFjLFNBQWQsQ0FDUixDQUFBLEUsd0JBQUEsRSxlQUFBLEVBaUJDLElBakJELENBQUE7O0FBeEZXLGNBQWMsR0FBQSxVQUFBLENBQUEsQ0FEMUIsYUFBYSxDQUFDLHVCQUFELENBQ2EsQ0FBQSxFQUFkLGNBQWMsQ0FBZDtTQUFBLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY2FsZW5kYXInO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudCc7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgb2JzZXJ2ZSwgcXVlcnkgfSBmcm9tICdAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IEZpZWxkTWl4aW4sIFZhbHVlRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7IG1vbnRocyB9IGZyb20gJy4vY2FsZW5kYXInO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdkb3BlZXMtY29yZS9saWIvZGF0ZXRpbWUnO1xuaW1wb3J0IHsgbWtUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGVzJztcbmltcG9ydCB2aWV3IGZyb20gJy4vZGF0ZS1yYW5nZS1maWVsZC9kYXRlLXJhbmdlLWZpZWxkLnB1Zyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVRpbWVSYW5nZSB7XG4gIHN0YXJ0PzogRGF0ZVRpbWU7XG4gIGVuZD86IERhdGVUaW1lO1xufVxuXG5lbnVtIFRhcmdldCB7XG4gIFN0YXJ0ID0gMCxcbiAgRW5kID0gMVxufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1kYXRlLXJhbmdlLWZpZWxkJylcbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VGaWVsZCBleHRlbmRzIEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpIGltcGxlbWVudHMgVmFsdWVGaWVsZDxEYXRlVGltZVJhbmdlPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiBta1RlbXBsYXRlKHZpZXcpOyB9XG5cbiAgcHJpdmF0ZSBfX2JsdXJUaW1lb3V0OiBhbnk7XG5cbiAgcHJpdmF0ZSBfX3ZhbHVlQ2hhbmdpbmcgPSBmYWxzZTtcblxuICBwcml2YXRlIF9fdGFyZ2V0OiBUYXJnZXQgPSBUYXJnZXQuU3RhcnQ7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSlcbiAgeWVhcnM6IG51bWJlcltdID0gQXJyYXkuYXBwbHkobnVsbCwgPGFueT4geyBsZW5ndGg6IDUwIH0pLm1hcCgoXywgaSkgPT4gMTk4MCArIGkpO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gIG1vbnRoczogQXJyYXk8eyB2YWx1ZTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcgfT4gPSBtb250aHM7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWUgfSlcbiAgc3RhcnREYXRlOiBEYXRlVGltZXx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWUgfSlcbiAgZW5kRGF0ZTogRGF0ZVRpbWV8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHRhYmluZGV4PzogbnVtYmVyID0gMDtcblxuICBAcHJvcGVydHkoKVxuICBzZWxlY3Rpb246IChkYXRlOiBEYXRlVGltZSkgPT4gYm9vbGVhbjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogRGF0ZVRpbWVSYW5nZSA9IHt9O1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgY2FsZW5kYXJGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBzZWxmRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBxdWVyeSgnLmZpZWxkJylcbiAgZmllbGQhOiBIVE1MRGl2RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZW1wdHkgPSB0cnVlO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gKCkgPT4gZmFsc2U7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5maWVsZC5mb2N1cygpOyB9XG5cbiAgQG9ic2VydmUoJ2ZvY3VzZWQnKVxuICBmb2N1c2VkQ2hhbmdlZChmb2N1c2VkOiBib29sZWFuKSB7XG4gICAgaWYgKCFmb2N1c2VkKSB7XG4gICAgICB0aGlzLl9fdGFyZ2V0ID0gVGFyZ2V0LlN0YXJ0O1xuICAgIH1cbiAgfVxuXG4gIEBvYnNlcnZlKCdzZWxmRm9jdXNlZCcsICdjYWxlbmRhckZvY3VzZWQnKVxuICBvYnNlcnZlRm9jdXNlZChzZWxmRm9jdXNlZDogYm9vbGVhbiwgY2FsZW5kYXJGb2N1c2VkOiBib29sZWFuKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX19ibHVyVGltZW91dCk7XG4gICAgdGhpcy5fX2JsdXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmZvY3VzZWQgPSBzZWxmRm9jdXNlZCB8fCBjYWxlbmRhckZvY3VzZWQsIDApO1xuICB9XG5cbiAgb25CbHVyKCkgeyB0aGlzLnNlbGZGb2N1c2VkID0gZmFsc2U7IH1cblxuICBvbkZvY3VzKCkgeyB0aGlzLnNlbGZGb2N1c2VkID0gdHJ1ZTsgfVxuXG4gIG9uQ2FsZW5kYXJDaG9vc2UoZTogQ3VzdG9tRXZlbnQ8RGF0ZVRpbWU+KSB7XG4gICAgaWYgKFRhcmdldC5TdGFydCA9PT0gdGhpcy5fX3RhcmdldCkge1xuICAgICAgdGhpcy5zdGFydERhdGUgPSBlLmRldGFpbDtcbiAgICAgIHRoaXMuZW5kRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX190YXJnZXQgPSBUYXJnZXQuRW5kO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuZERhdGUgPSBlLmRldGFpbDtcbiAgICAgIHRoaXMuX190YXJnZXQgPSBUYXJnZXQuU3RhcnQ7XG4gICAgfVxuICB9XG5cbiAgQG9ic2VydmUoJ3ZhbHVlJylcbiAgdmFsdWVDaGFuZ2VkKHZhbHVlOiBEYXRlVGltZVJhbmdlKSB7XG4gICAgdGhpcy5fX3ZhbHVlQ2hhbmdpbmcgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN0YXJ0RGF0ZSA9IHZhbHVlLnN0YXJ0O1xuICAgICAgdGhpcy5lbmREYXRlID0gdmFsdWUuZW5kO1xuICAgICAgdGhpcy5lbXB0eSA9ICF2YWx1ZSB8fCAhKHZhbHVlLnN0YXJ0IHx8IHZhbHVlLmVuZCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX192YWx1ZUNoYW5naW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQG9ic2VydmUoJ3N0YXJ0RGF0ZScsICdlbmREYXRlJylcbiAgdmFsdWVzQ2hhbmdlZChzdGFydDogRGF0ZVRpbWV8dW5kZWZpbmVkLCBlbmQ6IERhdGVUaW1lfHVuZGVmaW5lZCkge1xuICAgIGlmIChzdGFydCkge1xuICAgICAgaWYgKGVuZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IChkYXRlOiBEYXRlVGltZSkgPT4gMCA8PSBkYXRlLmNvbXBhcmVUbyhzdGFydCkgJiYgMCA+PSBkYXRlLmNvbXBhcmVUbyhlbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSAoZGF0ZTogRGF0ZVRpbWUpID0+IGRhdGUuZXF1YWxzVG8oc3RhcnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZW5kKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gKGRhdGU6IERhdGVUaW1lKSA9PiBkYXRlLmVxdWFsc1RvKGVuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9ICgpID0+IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuX192YWx1ZUNoYW5naW5nKSB7XG4gICAgICB0aGlzLnZhbHVlID0geyBzdGFydCwgZW5kIH07XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9