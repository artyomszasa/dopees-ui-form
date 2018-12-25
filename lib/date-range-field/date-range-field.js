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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBT0EsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLGFBQUQsRUFBZ0IsaUJBQWhCLENBQ1IsQ0FBQSxFLHdCQUFBLEUsZ0JBQUEsRUFHQyxJQUhELENBQUE7O0FBcUJBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxPQUFELENBQ1IsQ0FBQSxFLHdCQUFBLEUsY0FBQSxFQVFDLElBUkQsQ0FBQTs7QUFXQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsV0FBRCxFQUFjLFNBQWQsQ0FDUixDQUFBLEUsd0JBQUEsRSxlQUFBLEVBaUJDLElBakJELENBQUE7O0FBdEZXLGNBQWMsR0FBQSxVQUFBLENBQUEsQ0FEMUIsYUFBYSxDQUFDLHVCQUFELENBQ2EsQ0FBQSxFQUFkLGNBQWMsQ0FBZDtTQUFBLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2NhbGVuZGFyL2NhbGVuZGFyJztcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgb2JzZXJ2ZSwgcXVlcnkgfSBmcm9tIFwiQHBvbHltZXIvZGVjb3JhdG9ycy9saWIvZGVjb3JhdG9yc1wiO1xuaW1wb3J0IHsgRmllbGRNaXhpbiwgVmFsdWVGaWVsZCB9IGZyb20gXCIuLi9maWVsZFwiO1xuaW1wb3J0IHsgbW9udGhzIH0gZnJvbSBcIi4uL2NhbGVuZGFyL2NhbGVuZGFyXCI7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gXCJkb3BlZXMtY29yZS9saWIvZGF0ZXRpbWVcIjtcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tIFwiLi4vdGVtcGxhdGVzXCI7XG5pbXBvcnQgdmlldyBmcm9tICcuL2RhdGUtcmFuZ2UtZmllbGQucHVnJztcblxuZXhwb3J0IGludGVyZmFjZSBEYXRlVGltZVJhbmdlIHtcbiAgc3RhcnQ/OiBEYXRlVGltZVxuICBlbmQ/OiBEYXRlVGltZVxufVxuXG5lbnVtIFRhcmdldCB7XG4gIFN0YXJ0ID0gMCxcbiAgRW5kID0gMVxufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1kYXRlLXJhbmdlLWZpZWxkJylcbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VGaWVsZCBleHRlbmRzIEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpIGltcGxlbWVudHMgVmFsdWVGaWVsZDxEYXRlVGltZVJhbmdlPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiBta1RlbXBsYXRlKHZpZXcpOyB9XG5cbiAgcHJpdmF0ZSBfX2JsdXJUaW1lb3V0OiBhbnk7XG5cbiAgcHJpdmF0ZSBfX3ZhbHVlQ2hhbmdpbmcgPSBmYWxzZTtcblxuICBwcml2YXRlIF9fdGFyZ2V0OiBUYXJnZXQgPSBUYXJnZXQuU3RhcnQ7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSlcbiAgeWVhcnM6IG51bWJlcltdID0gQXJyYXkuYXBwbHkobnVsbCwgPGFueT57IGxlbmd0aDogNTAgfSkubWFwKChfLCBpKSA9PiAxOTgwICsgaSk7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSlcbiAgbW9udGhzOiB7IHZhbHVlOiBudW1iZXIsIHRleHQ6IHN0cmluZyB9W10gPSBtb250aHM7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWUgfSlcbiAgc3RhcnREYXRlOiBEYXRlVGltZXx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWUgfSlcbiAgZW5kRGF0ZTogRGF0ZVRpbWV8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHRhYmluZGV4PzogbnVtYmVyID0gMDtcblxuICBAcHJvcGVydHkoKVxuICBzZWxlY3Rpb246IChkYXRlOiBEYXRlVGltZSkgPT4gYm9vbGVhbjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogRGF0ZVRpbWVSYW5nZSA9IHt9O1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgY2FsZW5kYXJGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBzZWxmRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBxdWVyeSgnLmZpZWxkJylcbiAgZmllbGQhOiBIVE1MRGl2RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gKCkgPT4gZmFsc2U7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5maWVsZC5mb2N1cygpOyB9XG5cbiAgQG9ic2VydmUoJ2ZvY3VzZWQnKVxuICBmb2N1c2VkQ2hhbmdlZChmb2N1c2VkOiBib29sZWFuKSB7XG4gICAgaWYgKCFmb2N1c2VkKSB7XG4gICAgICB0aGlzLl9fdGFyZ2V0ID0gVGFyZ2V0LlN0YXJ0O1xuICAgIH1cbiAgfVxuXG4gIEBvYnNlcnZlKCdzZWxmRm9jdXNlZCcsICdjYWxlbmRhckZvY3VzZWQnKVxuICBvYnNlcnZlRm9jdXNlZChzZWxmRm9jdXNlZDogYm9vbGVhbiwgY2FsZW5kYXJGb2N1c2VkOiBib29sZWFuKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX19ibHVyVGltZW91dCk7XG4gICAgdGhpcy5fX2JsdXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmZvY3VzZWQgPSBzZWxmRm9jdXNlZCB8fCBjYWxlbmRhckZvY3VzZWQsIDApO1xuICB9XG5cbiAgb25CbHVyKCkgeyB0aGlzLnNlbGZGb2N1c2VkID0gZmFsc2U7IH1cblxuICBvbkZvY3VzKCkgeyB0aGlzLnNlbGZGb2N1c2VkID0gdHJ1ZTsgfVxuXG4gIG9uQ2FsZW5kYXJDaG9vc2UoZTogQ3VzdG9tRXZlbnQ8RGF0ZVRpbWU+KSB7XG4gICAgaWYgKFRhcmdldC5TdGFydCA9PT0gdGhpcy5fX3RhcmdldCkge1xuICAgICAgdGhpcy5zdGFydERhdGUgPSBlLmRldGFpbDtcbiAgICAgIHRoaXMuZW5kRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX190YXJnZXQgPSBUYXJnZXQuRW5kO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuZERhdGUgPSBlLmRldGFpbDtcbiAgICAgIHRoaXMuX190YXJnZXQgPSBUYXJnZXQuU3RhcnQ7XG4gICAgfVxuICB9XG5cbiAgQG9ic2VydmUoJ3ZhbHVlJylcbiAgdmFsdWVDaGFuZ2VkKHZhbHVlOiBEYXRlVGltZVJhbmdlKSB7XG4gICAgdGhpcy5fX3ZhbHVlQ2hhbmdpbmcgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN0YXJ0RGF0ZSA9IHZhbHVlLnN0YXJ0O1xuICAgICAgdGhpcy5lbmREYXRlID0gdmFsdWUuZW5kO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9fdmFsdWVDaGFuZ2luZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBvYnNlcnZlKCdzdGFydERhdGUnLCAnZW5kRGF0ZScpXG4gIHZhbHVlc0NoYW5nZWQoc3RhcnQ6IERhdGVUaW1lfHVuZGVmaW5lZCwgZW5kOiBEYXRlVGltZXx1bmRlZmluZWQpIHtcbiAgICBpZiAoc3RhcnQpIHtcbiAgICAgIGlmIChlbmQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSAoZGF0ZTogRGF0ZVRpbWUpID0+IDAgPD0gZGF0ZS5jb21wYXJlVG8oc3RhcnQpICYmIDAgPj0gZGF0ZS5jb21wYXJlVG8oZW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gKGRhdGU6IERhdGVUaW1lKSA9PiBkYXRlLmVxdWFsc1RvKHN0YXJ0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVuZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IChkYXRlOiBEYXRlVGltZSkgPT4gZGF0ZS5lcXVhbHNUbyhlbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSAoKSA9PiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLl9fdmFsdWVDaGFuZ2luZykge1xuICAgICAgdGhpcy52YWx1ZSA9IHsgc3RhcnQsIGVuZCB9O1xuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=