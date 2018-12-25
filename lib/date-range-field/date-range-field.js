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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtcmFuZ2UtZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPLHlCQUFQO0FBQ0EsU0FBUyxjQUFULFFBQStCLHFDQUEvQjtBQUNBLFNBQVMsYUFBVCxFQUF3QixRQUF4QixFQUFrQyxPQUFsQyxFQUEyQyxLQUEzQyxRQUF3RCx1Q0FBeEQ7QUFDQSxTQUFTLFVBQVQsUUFBdUMsYUFBdkM7QUFDQSxTQUFTLE1BQVQsUUFBdUIseUJBQXZCO0FBRUEsU0FBUyxVQUFULFFBQTJCLGlCQUEzQjtNQUNPLEk7QUFPUCxJQUFLLE1BQUw7O0FBQUEsQ0FBQSxVQUFLLE1BQUwsRUFBVztBQUNULEVBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxPQUFBO0FBQ0EsRUFBQSxNQUFBLENBQUEsTUFBQSxDQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLEtBQUE7QUFDRCxDQUhELEVBQUssTUFBTSxLQUFOLE1BQU0sR0FBQSxFQUFBLENBQVg7O0FBTUEsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYixTQUFvQyxVQUFVLENBQUMsY0FBRCxDQUE5QyxDQUE4RDtBQXVDNUQsRUFBQSxXQUFBLEdBQUE7QUFDRTtBQW5DTSxTQUFBLGVBQUEsR0FBa0IsS0FBbEI7QUFFQSxTQUFBLFFBQUEsR0FBbUIsTUFBTSxDQUFDLEtBQTFCO0FBR1IsU0FBQSxLQUFBLEdBQWtCLEtBQUssQ0FBQyxLQUFOLENBQVksSUFBWixFQUF1QjtBQUFFLE1BQUEsTUFBTSxFQUFFO0FBQVYsS0FBdkIsRUFBdUMsR0FBdkMsQ0FBMkMsQ0FBQyxDQUFELEVBQUksQ0FBSixLQUFVLE9BQU8sQ0FBNUQsQ0FBbEI7QUFHQSxTQUFBLE1BQUEsR0FBNEMsTUFBNUM7QUFTQSxTQUFBLFFBQUEsR0FBb0IsQ0FBcEI7QUFNQSxTQUFBLEtBQUEsR0FBdUIsRUFBdkI7QUFHQSxTQUFBLGVBQUEsR0FBMkIsS0FBM0I7QUFHQSxTQUFBLFdBQUEsR0FBdUIsS0FBdkI7QUFPRSxTQUFLLEtBQUwsR0FBYSxJQUFiOztBQUNBLFNBQUssU0FBTCxHQUFpQixNQUFNLEtBQXZCO0FBQ0Q7O0FBMUNELGFBQVcsUUFBWCxHQUFtQjtBQUFLLFdBQU8sVUFBVSxDQUFDLElBQUQsQ0FBakI7QUFBMEI7O0FBNENsRCxFQUFBLFFBQVEsR0FBQTtBQUFLLFNBQUssS0FBTCxDQUFXLEtBQVg7QUFBcUI7O0FBR2xDLEVBQUEsY0FBYyxDQUFDLE9BQUQsRUFBaUI7QUFDN0IsUUFBSSxDQUFDLE9BQUwsRUFBYztBQUNaLFdBQUssUUFBTCxHQUFnQixNQUFNLENBQUMsS0FBdkI7QUFDRDtBQUNGOztBQUdELEVBQUEsY0FBYyxDQUFDLFdBQUQsRUFBdUIsZUFBdkIsRUFBK0M7QUFDM0QsSUFBQSxZQUFZLENBQUMsS0FBSyxhQUFOLENBQVo7QUFDQSxTQUFLLGFBQUwsR0FBcUIsVUFBVSxDQUFDLE1BQU0sS0FBSyxPQUFMLEdBQWUsV0FBVyxJQUFJLGVBQXJDLEVBQXNELENBQXRELENBQS9CO0FBQ0Q7O0FBRUQsRUFBQSxNQUFNLEdBQUE7QUFBSyxTQUFLLFdBQUwsR0FBbUIsS0FBbkI7QUFBMkI7O0FBRXRDLEVBQUEsT0FBTyxHQUFBO0FBQUssU0FBSyxXQUFMLEdBQW1CLElBQW5CO0FBQTBCOztBQUV0QyxFQUFBLGdCQUFnQixDQUFDLENBQUQsRUFBeUI7QUFDdkMsUUFBSSxNQUFNLENBQUMsS0FBUCxLQUFpQixLQUFLLFFBQTFCLEVBQW9DO0FBQ2xDLFdBQUssU0FBTCxHQUFpQixDQUFDLENBQUMsTUFBbkI7QUFDQSxXQUFLLE9BQUwsR0FBZSxTQUFmO0FBQ0EsV0FBSyxRQUFMLEdBQWdCLE1BQU0sQ0FBQyxHQUF2QjtBQUNELEtBSkQsTUFJTztBQUNMLFdBQUssT0FBTCxHQUFlLENBQUMsQ0FBQyxNQUFqQjtBQUNBLFdBQUssUUFBTCxHQUFnQixNQUFNLENBQUMsS0FBdkI7QUFDRDtBQUNGOztBQUdELEVBQUEsWUFBWSxDQUFDLEtBQUQsRUFBcUI7QUFDL0IsU0FBSyxlQUFMLEdBQXVCLElBQXZCOztBQUNBLFFBQUk7QUFDRixXQUFLLFNBQUwsR0FBaUIsS0FBSyxDQUFDLEtBQXZCO0FBQ0EsV0FBSyxPQUFMLEdBQWUsS0FBSyxDQUFDLEdBQXJCO0FBQ0EsV0FBSyxLQUFMLEdBQWEsQ0FBQyxLQUFELElBQVUsRUFBRSxLQUFLLENBQUMsS0FBTixJQUFlLEtBQUssQ0FBQyxHQUF2QixDQUF2QjtBQUNELEtBSkQsU0FJVTtBQUNSLFdBQUssZUFBTCxHQUF1QixLQUF2QjtBQUNEO0FBQ0Y7O0FBR0QsRUFBQSxhQUFhLENBQUMsS0FBRCxFQUE0QixHQUE1QixFQUFtRDtBQUM5RCxRQUFJLEtBQUosRUFBVztBQUNULFVBQUksR0FBSixFQUFTO0FBQ1AsYUFBSyxTQUFMLEdBQWtCLElBQUQsSUFBb0IsS0FBSyxJQUFJLENBQUMsU0FBTCxDQUFlLEtBQWYsQ0FBTCxJQUE4QixLQUFLLElBQUksQ0FBQyxTQUFMLENBQWUsR0FBZixDQUF4RTtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUssU0FBTCxHQUFrQixJQUFELElBQW9CLElBQUksQ0FBQyxRQUFMLENBQWMsS0FBZCxDQUFyQztBQUNEO0FBQ0YsS0FORCxNQU1PO0FBQ0wsVUFBSSxHQUFKLEVBQVM7QUFDUCxhQUFLLFNBQUwsR0FBa0IsSUFBRCxJQUFvQixJQUFJLENBQUMsUUFBTCxDQUFjLEdBQWQsQ0FBckM7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLLFNBQUwsR0FBaUIsTUFBTSxLQUF2QjtBQUNEO0FBQ0Y7O0FBQ0QsUUFBSSxDQUFDLEtBQUssZUFBVixFQUEyQjtBQUN6QixXQUFLLEtBQUwsR0FBYTtBQUFFLFFBQUEsS0FBRjtBQUFTLFFBQUE7QUFBVCxPQUFiO0FBQ0Q7QUFDRjs7QUF6RzJELENBQTlEOztBQVVFLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSx3QkFBQSxFLE9BQUEsRSxLQUFpRixDQUFqRixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSx3QkFBQSxFLFFBQUEsRSxLQUFtRCxDQUFuRCxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0IsRUFBQSxNQUFNLEVBQUU7QUFBeEIsQ0FBRCxDQUNULENBQUEsRSx3QkFBQSxFLFdBQUEsRSxLQUE4QixDQUE5QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0IsRUFBQSxNQUFNLEVBQUU7QUFBeEIsQ0FBRCxDQUNULENBQUEsRSx3QkFBQSxFLFNBQUEsRSxLQUE0QixDQUE1QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsRUFDVCxDQUFBLEUsd0JBQUEsRSxVQUFBLEUsS0FBc0IsQ0FBdEIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLEVBQ1QsQ0FBQSxFLHdCQUFBLEUsV0FBQSxFLEtBQXVDLENBQXZDLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQixFQUFBLE1BQU0sRUFBRTtBQUF4QixDQUFELENBQ1QsQ0FBQSxFLHdCQUFBLEUsT0FBQSxFLEtBQTBCLENBQTFCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLHdCQUFBLEUsaUJBQUEsRSxLQUFpQyxDQUFqQyxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSx3QkFBQSxFLGFBQUEsRSxLQUE2QixDQUE3QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLEtBQUssQ0FBQyxRQUFELENBQ04sQ0FBQSxFLHdCQUFBLEUsT0FBQSxFLEtBQXVCLENBQXZCLENBQUE7O0FBV0EsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLFNBQUQsQ0FDUixDQUFBLEUsd0JBQUEsRSxnQkFBQSxFQUlDLElBSkQsQ0FBQTs7QUFPQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsYUFBRCxFQUFnQixpQkFBaEIsQ0FDUixDQUFBLEUsd0JBQUEsRSxnQkFBQSxFQUdDLElBSEQsQ0FBQTs7QUFxQkEsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLE9BQUQsQ0FDUixDQUFBLEUsd0JBQUEsRSxjQUFBLEVBU0MsSUFURCxDQUFBOztBQVlBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxXQUFELEVBQWMsU0FBZCxDQUNSLENBQUEsRSx3QkFBQSxFLGVBQUEsRUFpQkMsSUFqQkQsQ0FBQTs7QUF4RlcsY0FBYyxHQUFBLFVBQUEsQ0FBQSxDQUQxQixhQUFhLENBQUMsdUJBQUQsQ0FDYSxDQUFBLEVBQWQsY0FBYyxDQUFkO1NBQUEsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vY2FsZW5kYXIvY2FsZW5kYXInO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBvYnNlcnZlLCBxdWVyeSB9IGZyb20gXCJAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzXCI7XG5pbXBvcnQgeyBGaWVsZE1peGluLCBWYWx1ZUZpZWxkIH0gZnJvbSBcIi4uL2ZpZWxkXCI7XG5pbXBvcnQgeyBtb250aHMgfSBmcm9tIFwiLi4vY2FsZW5kYXIvY2FsZW5kYXJcIjtcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSBcImRvcGVlcy1jb3JlL2xpYi9kYXRldGltZVwiO1xuaW1wb3J0IHsgbWtUZW1wbGF0ZSB9IGZyb20gXCIuLi90ZW1wbGF0ZXNcIjtcbmltcG9ydCB2aWV3IGZyb20gJy4vZGF0ZS1yYW5nZS1maWVsZC5wdWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVUaW1lUmFuZ2Uge1xuICBzdGFydD86IERhdGVUaW1lXG4gIGVuZD86IERhdGVUaW1lXG59XG5cbmVudW0gVGFyZ2V0IHtcbiAgU3RhcnQgPSAwLFxuICBFbmQgPSAxXG59XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLWRhdGUtcmFuZ2UtZmllbGQnKVxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZUZpZWxkIGV4dGVuZHMgRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkgaW1wbGVtZW50cyBWYWx1ZUZpZWxkPERhdGVUaW1lUmFuZ2U+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUodmlldyk7IH1cblxuICBwcml2YXRlIF9fYmx1clRpbWVvdXQ6IGFueTtcblxuICBwcml2YXRlIF9fdmFsdWVDaGFuZ2luZyA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX190YXJnZXQ6IFRhcmdldCA9IFRhcmdldC5TdGFydDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICB5ZWFyczogbnVtYmVyW10gPSBBcnJheS5hcHBseShudWxsLCA8YW55PnsgbGVuZ3RoOiA1MCB9KS5tYXAoKF8sIGkpID0+IDE5ODAgKyBpKTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICBtb250aHM6IHsgdmFsdWU6IG51bWJlciwgdGV4dDogc3RyaW5nIH1bXSA9IG1vbnRocztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICBzdGFydERhdGU6IERhdGVUaW1lfHVuZGVmaW5lZDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICBlbmREYXRlOiBEYXRlVGltZXx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KClcbiAgdGFiaW5kZXg/OiBudW1iZXIgPSAwO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHNlbGVjdGlvbjogKGRhdGU6IERhdGVUaW1lKSA9PiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBEYXRlVGltZVJhbmdlID0ge307XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBjYWxlbmRhckZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIHNlbGZGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQHF1ZXJ5KCcuZmllbGQnKVxuICBmaWVsZCE6IEhUTUxEaXZFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5lbXB0eSA9IHRydWU7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSAoKSA9PiBmYWxzZTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkgeyB0aGlzLmZpZWxkLmZvY3VzKCk7IH1cblxuICBAb2JzZXJ2ZSgnZm9jdXNlZCcpXG4gIGZvY3VzZWRDaGFuZ2VkKGZvY3VzZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoIWZvY3VzZWQpIHtcbiAgICAgIHRoaXMuX190YXJnZXQgPSBUYXJnZXQuU3RhcnQ7XG4gICAgfVxuICB9XG5cbiAgQG9ic2VydmUoJ3NlbGZGb2N1c2VkJywgJ2NhbGVuZGFyRm9jdXNlZCcpXG4gIG9ic2VydmVGb2N1c2VkKHNlbGZGb2N1c2VkOiBib29sZWFuLCBjYWxlbmRhckZvY3VzZWQ6IGJvb2xlYW4pIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fX2JsdXJUaW1lb3V0KTtcbiAgICB0aGlzLl9fYmx1clRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZm9jdXNlZCA9IHNlbGZGb2N1c2VkIHx8IGNhbGVuZGFyRm9jdXNlZCwgMCk7XG4gIH1cblxuICBvbkJsdXIoKSB7IHRoaXMuc2VsZkZvY3VzZWQgPSBmYWxzZTsgfVxuXG4gIG9uRm9jdXMoKSB7IHRoaXMuc2VsZkZvY3VzZWQgPSB0cnVlOyB9XG5cbiAgb25DYWxlbmRhckNob29zZShlOiBDdXN0b21FdmVudDxEYXRlVGltZT4pIHtcbiAgICBpZiAoVGFyZ2V0LlN0YXJ0ID09PSB0aGlzLl9fdGFyZ2V0KSB7XG4gICAgICB0aGlzLnN0YXJ0RGF0ZSA9IGUuZGV0YWlsO1xuICAgICAgdGhpcy5lbmREYXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fX3RhcmdldCA9IFRhcmdldC5FbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5kRGF0ZSA9IGUuZGV0YWlsO1xuICAgICAgdGhpcy5fX3RhcmdldCA9IFRhcmdldC5TdGFydDtcbiAgICB9XG4gIH1cblxuICBAb2JzZXJ2ZSgndmFsdWUnKVxuICB2YWx1ZUNoYW5nZWQodmFsdWU6IERhdGVUaW1lUmFuZ2UpIHtcbiAgICB0aGlzLl9fdmFsdWVDaGFuZ2luZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc3RhcnREYXRlID0gdmFsdWUuc3RhcnQ7XG4gICAgICB0aGlzLmVuZERhdGUgPSB2YWx1ZS5lbmQ7XG4gICAgICB0aGlzLmVtcHR5ID0gIXZhbHVlIHx8ICEodmFsdWUuc3RhcnQgfHwgdmFsdWUuZW5kKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fX3ZhbHVlQ2hhbmdpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAb2JzZXJ2ZSgnc3RhcnREYXRlJywgJ2VuZERhdGUnKVxuICB2YWx1ZXNDaGFuZ2VkKHN0YXJ0OiBEYXRlVGltZXx1bmRlZmluZWQsIGVuZDogRGF0ZVRpbWV8dW5kZWZpbmVkKSB7XG4gICAgaWYgKHN0YXJ0KSB7XG4gICAgICBpZiAoZW5kKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gKGRhdGU6IERhdGVUaW1lKSA9PiAwIDw9IGRhdGUuY29tcGFyZVRvKHN0YXJ0KSAmJiAwID49IGRhdGUuY29tcGFyZVRvKGVuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IChkYXRlOiBEYXRlVGltZSkgPT4gZGF0ZS5lcXVhbHNUbyhzdGFydCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbmQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSAoZGF0ZTogRGF0ZVRpbWUpID0+IGRhdGUuZXF1YWxzVG8oZW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gKCkgPT4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdGhpcy5fX3ZhbHVlQ2hhbmdpbmcpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB7IHN0YXJ0LCBlbmQgfTtcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9