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
const view = "<style>:host{display:block}.field{display:block;outline:var(--outline);height:100%}dope-calendar{width:var(--width, 16rem);height:var(--height, 14rem)}\n\n/*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJImZpbGUiOiAiZGF0ZS1yYW5nZS1maWVsZC5jc3MiLAoJInNvdXJjZXMiOiBbCgkJIi4uLy4uL3NyYy9kYXRlLXJhbmdlLWZpZWxkL2RhdGUtcmFuZ2UtZmllbGQuc2NzcyIKCV0sCgkic291cmNlc0NvbnRlbnQiOiBbCgkJIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdXRsaW5lOiB2YXIoLS1vdXRsaW5lKTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5kb3BlLWNhbGVuZGFyIHtcbiAgd2lkdGg6IHZhcigtLXdpZHRoLCAxNnJlbSk7XG4gIGhlaWdodDogdmFyKC0taGVpZ2h0LCAxNHJlbSk7XG59XG4iCgldLAoJIm5hbWVzIjogW10sCgkibWFwcGluZ3MiOiAiQUFBQSxBQUFBLEtBQUssQUFBQyxDQUNKLE9BQU8sQ0FBRSxLQUFLLENBQ2YsQUFFRCxBQUFBLE1BQU0sQUFBQyxDQUNMLE9BQU8sQ0FBRSxLQUFLLENBQ2QsT0FBTyxDQUFFLGNBQWMsQ0FDdkIsTUFBTSxDQUFFLElBQUksQ0FDYixBQUVELEFBQUEsYUFBYSxBQUFDLENBQ1osS0FBSyxDQUFFLG1CQUFtQixDQUMxQixNQUFNLENBQUUsb0JBQW9CLENBQzdCIgp9 */</style><div class=\"field\" tabindex$=\"[[tabindex]]\" focused$=\"[[focused]]\" empty$=\"[[empty]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" invalid$=\"[[invalid]]\" on-focus=\"onFocus\" on-blur=\"onBlur\"><dope-calendar on-choose=\"onCalendarChoose\" selection=\"[[selection]]\" years=\"[[years]]\" months=\"[[months]]\" focused=\"{{calendarFocused}}\"></dope-calendar></div>";
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
      this.startDate = value.start || null; // null needed to propagate null-value, as undefined does not work..

      this.endDate = value.end || null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtcmFuZ2UtZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPLGVBQVA7QUFDQSxTQUFTLGNBQVQsUUFBK0IscUNBQS9CO0FBQ0EsU0FBUyxhQUFULEVBQXdCLFFBQXhCLEVBQWtDLE9BQWxDLEVBQTJDLEtBQTNDLFFBQXdELHVDQUF4RDtBQUNBLFNBQVMsVUFBVCxRQUF1QyxZQUF2QztBQUNBLFNBQVMsTUFBVCxRQUF1QixlQUF2QjtBQUVBLFNBQVMsVUFBVCxRQUEyQixnQkFBM0I7TUFDTyxJO0FBT1AsSUFBSyxNQUFMOztBQUFBLENBQUEsVUFBSyxNQUFMLEVBQVc7QUFDVCxFQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQTtBQUNBLEVBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxLQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxLQUFBO0FBQ0QsQ0FIRCxFQUFLLE1BQU0sS0FBTixNQUFNLEdBQUEsRUFBQSxDQUFYOztBQU1BLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWIsU0FBb0MsVUFBVSxDQUFDLGNBQUQsQ0FBOUMsQ0FBOEQ7QUF1QzVELEVBQUEsV0FBQSxHQUFBO0FBQ0U7QUFuQ00sU0FBQSxlQUFBLEdBQWtCLEtBQWxCO0FBRUEsU0FBQSxRQUFBLEdBQW1CLE1BQU0sQ0FBQyxLQUExQjtBQUdSLFNBQUEsS0FBQSxHQUFrQixLQUFLLENBQUMsS0FBTixDQUFZLElBQVosRUFBd0I7QUFBRSxNQUFBLE1BQU0sRUFBRTtBQUFWLEtBQXhCLEVBQXdDLEdBQXhDLENBQTRDLENBQUMsQ0FBRCxFQUFJLENBQUosS0FBVSxPQUFPLENBQTdELENBQWxCO0FBR0EsU0FBQSxNQUFBLEdBQWlELE1BQWpEO0FBU0EsU0FBQSxRQUFBLEdBQW9CLENBQXBCO0FBTUEsU0FBQSxLQUFBLEdBQXVCLEVBQXZCO0FBR0EsU0FBQSxlQUFBLEdBQTJCLEtBQTNCO0FBR0EsU0FBQSxXQUFBLEdBQXVCLEtBQXZCO0FBT0UsU0FBSyxLQUFMLEdBQWEsSUFBYjs7QUFDQSxTQUFLLFNBQUwsR0FBaUIsTUFBTSxLQUF2QjtBQUNEOztBQTFDRCxhQUFXLFFBQVgsR0FBbUI7QUFBSyxXQUFPLFVBQVUsQ0FBQyxJQUFELENBQWpCO0FBQTBCOztBQTRDbEQsRUFBQSxRQUFRLEdBQUE7QUFBSyxTQUFLLEtBQUwsQ0FBVyxLQUFYO0FBQXFCOztBQUdsQyxFQUFBLGNBQWMsQ0FBQyxPQUFELEVBQWlCO0FBQzdCLFFBQUksQ0FBQyxPQUFMLEVBQWM7QUFDWixXQUFLLFFBQUwsR0FBZ0IsTUFBTSxDQUFDLEtBQXZCO0FBQ0Q7QUFDRjs7QUFHRCxFQUFBLGNBQWMsQ0FBQyxXQUFELEVBQXVCLGVBQXZCLEVBQStDO0FBQzNELElBQUEsWUFBWSxDQUFDLEtBQUssYUFBTixDQUFaO0FBQ0EsU0FBSyxhQUFMLEdBQXFCLFVBQVUsQ0FBQyxNQUFNLEtBQUssT0FBTCxHQUFlLFdBQVcsSUFBSSxlQUFyQyxFQUFzRCxDQUF0RCxDQUEvQjtBQUNEOztBQUVELEVBQUEsTUFBTSxHQUFBO0FBQUssU0FBSyxXQUFMLEdBQW1CLEtBQW5CO0FBQTJCOztBQUV0QyxFQUFBLE9BQU8sR0FBQTtBQUFLLFNBQUssV0FBTCxHQUFtQixJQUFuQjtBQUEwQjs7QUFFdEMsRUFBQSxnQkFBZ0IsQ0FBQyxDQUFELEVBQXlCO0FBQ3ZDLFFBQUksTUFBTSxDQUFDLEtBQVAsS0FBaUIsS0FBSyxRQUExQixFQUFvQztBQUNsQyxXQUFLLFNBQUwsR0FBaUIsQ0FBQyxDQUFDLE1BQW5CO0FBQ0EsV0FBSyxPQUFMLEdBQWUsU0FBZjtBQUNBLFdBQUssUUFBTCxHQUFnQixNQUFNLENBQUMsR0FBdkI7QUFDRCxLQUpELE1BSU87QUFDTCxXQUFLLE9BQUwsR0FBZSxDQUFDLENBQUMsTUFBakI7QUFDQSxXQUFLLFFBQUwsR0FBZ0IsTUFBTSxDQUFDLEtBQXZCO0FBQ0Q7QUFDRjs7QUFHRCxFQUFBLFlBQVksQ0FBQyxLQUFELEVBQXFCO0FBQy9CLFNBQUssZUFBTCxHQUF1QixJQUF2Qjs7QUFDQSxRQUFJO0FBQ0YsV0FBSyxTQUFMLEdBQXdCLEtBQUssQ0FBQyxLQUFOLElBQWUsSUFBdkMsQ0FERSxDQUM0Qzs7QUFDOUMsV0FBSyxPQUFMLEdBQXNCLEtBQUssQ0FBQyxHQUFOLElBQWEsSUFBbkM7QUFDQSxXQUFLLEtBQUwsR0FBYSxDQUFDLEtBQUQsSUFBVSxFQUFFLEtBQUssQ0FBQyxLQUFOLElBQWUsS0FBSyxDQUFDLEdBQXZCLENBQXZCO0FBQ0QsS0FKRCxTQUlVO0FBQ1IsV0FBSyxlQUFMLEdBQXVCLEtBQXZCO0FBQ0Q7QUFDRjs7QUFHRCxFQUFBLGFBQWEsQ0FBQyxLQUFELEVBQTRCLEdBQTVCLEVBQW1EO0FBQzlELFFBQUksS0FBSixFQUFXO0FBQ1QsVUFBSSxHQUFKLEVBQVM7QUFDUCxhQUFLLFNBQUwsR0FBa0IsSUFBRCxJQUFvQixLQUFLLElBQUksQ0FBQyxTQUFMLENBQWUsS0FBZixDQUFMLElBQThCLEtBQUssSUFBSSxDQUFDLFNBQUwsQ0FBZSxHQUFmLENBQXhFO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBSyxTQUFMLEdBQWtCLElBQUQsSUFBb0IsSUFBSSxDQUFDLFFBQUwsQ0FBYyxLQUFkLENBQXJDO0FBQ0Q7QUFDRixLQU5ELE1BTU87QUFDTCxVQUFJLEdBQUosRUFBUztBQUNQLGFBQUssU0FBTCxHQUFrQixJQUFELElBQW9CLElBQUksQ0FBQyxRQUFMLENBQWMsR0FBZCxDQUFyQztBQUNELE9BRkQsTUFFTztBQUNMLGFBQUssU0FBTCxHQUFpQixNQUFNLEtBQXZCO0FBQ0Q7QUFDRjs7QUFDRCxRQUFJLENBQUMsS0FBSyxlQUFWLEVBQTJCO0FBQ3pCLFdBQUssS0FBTCxHQUFhO0FBQUUsUUFBQSxLQUFGO0FBQVMsUUFBQTtBQUFULE9BQWI7QUFDRDtBQUNGOztBQXpHMkQsQ0FBOUQ7O0FBVUUsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLHdCQUFBLEUsT0FBQSxFLEtBQWtGLENBQWxGLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLHdCQUFBLEUsUUFBQSxFLEtBQXdELENBQXhELENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQixFQUFBLE1BQU0sRUFBRTtBQUF4QixDQUFELENBQ1QsQ0FBQSxFLHdCQUFBLEUsV0FBQSxFLEtBQThCLENBQTlCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQixFQUFBLE1BQU0sRUFBRTtBQUF4QixDQUFELENBQ1QsQ0FBQSxFLHdCQUFBLEUsU0FBQSxFLEtBQTRCLENBQTVCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxFQUNULENBQUEsRSx3QkFBQSxFLFVBQUEsRSxLQUFzQixDQUF0QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsRUFDVCxDQUFBLEUsd0JBQUEsRSxXQUFBLEUsS0FBdUMsQ0FBdkMsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCLEVBQUEsTUFBTSxFQUFFO0FBQXhCLENBQUQsQ0FDVCxDQUFBLEUsd0JBQUEsRSxPQUFBLEUsS0FBMEIsQ0FBMUIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FDVCxDQUFBLEUsd0JBQUEsRSxpQkFBQSxFLEtBQWlDLENBQWpDLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLHdCQUFBLEUsYUFBQSxFLEtBQTZCLENBQTdCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsS0FBSyxDQUFDLFFBQUQsQ0FDTixDQUFBLEUsd0JBQUEsRSxPQUFBLEUsS0FBdUIsQ0FBdkIsQ0FBQTs7QUFXQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsU0FBRCxDQUNSLENBQUEsRSx3QkFBQSxFLGdCQUFBLEVBSUMsSUFKRCxDQUFBOztBQU9BLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxhQUFELEVBQWdCLGlCQUFoQixDQUNSLENBQUEsRSx3QkFBQSxFLGdCQUFBLEVBR0MsSUFIRCxDQUFBOztBQXFCQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsT0FBRCxDQUNSLENBQUEsRSx3QkFBQSxFLGNBQUEsRUFTQyxJQVRELENBQUE7O0FBWUEsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLFdBQUQsRUFBYyxTQUFkLENBQ1IsQ0FBQSxFLHdCQUFBLEUsZUFBQSxFQWlCQyxJQWpCRCxDQUFBOztBQXhGVyxjQUFjLEdBQUEsVUFBQSxDQUFBLENBRDFCLGFBQWEsQ0FBQyx1QkFBRCxDQUNhLENBQUEsRUFBZCxjQUFjLENBQWQ7U0FBQSxjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2NhbGVuZGFyJztcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQnO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIG9ic2VydmUsIHF1ZXJ5IH0gZnJvbSAnQHBvbHltZXIvZGVjb3JhdG9ycy9saWIvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBGaWVsZE1peGluLCBWYWx1ZUZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQgeyBtb250aHMgfSBmcm9tICcuL2NhbGVuZGFyJztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnZG9wZWVzLWNvcmUvbGliL2RhdGV0aW1lJztcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlcyc7XG5pbXBvcnQgdmlldyBmcm9tICcuL2RhdGUtcmFuZ2UtZmllbGQvZGF0ZS1yYW5nZS1maWVsZC5wdWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVUaW1lUmFuZ2Uge1xuICBzdGFydD86IERhdGVUaW1lO1xuICBlbmQ/OiBEYXRlVGltZTtcbn1cblxuZW51bSBUYXJnZXQge1xuICBTdGFydCA9IDAsXG4gIEVuZCA9IDFcbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtZGF0ZS1yYW5nZS1maWVsZCcpXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlRmllbGQgZXh0ZW5kcyBGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8RGF0ZVRpbWVSYW5nZT4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gbWtUZW1wbGF0ZSh2aWV3KTsgfVxuXG4gIHByaXZhdGUgX19ibHVyVGltZW91dDogYW55O1xuXG4gIHByaXZhdGUgX192YWx1ZUNoYW5naW5nID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfX3RhcmdldDogVGFyZ2V0ID0gVGFyZ2V0LlN0YXJ0O1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gIHllYXJzOiBudW1iZXJbXSA9IEFycmF5LmFwcGx5KG51bGwsIDxhbnk+IHsgbGVuZ3RoOiA1MCB9KS5tYXAoKF8sIGkpID0+IDE5ODAgKyBpKTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICBtb250aHM6IEFycmF5PHsgdmFsdWU6IG51bWJlciwgdGV4dDogc3RyaW5nIH0+ID0gbW9udGhzO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIHN0YXJ0RGF0ZTogRGF0ZVRpbWV8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIGVuZERhdGU6IERhdGVUaW1lfHVuZGVmaW5lZDtcblxuICBAcHJvcGVydHkoKVxuICB0YWJpbmRleD86IG51bWJlciA9IDA7XG5cbiAgQHByb3BlcnR5KClcbiAgc2VsZWN0aW9uOiAoZGF0ZTogRGF0ZVRpbWUpID0+IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWUgfSlcbiAgdmFsdWU6IERhdGVUaW1lUmFuZ2UgPSB7fTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIGNhbGVuZGFyRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgc2VsZkZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAcXVlcnkoJy5maWVsZCcpXG4gIGZpZWxkITogSFRNTERpdkVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmVtcHR5ID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9ICgpID0+IGZhbHNlO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7IHRoaXMuZmllbGQuZm9jdXMoKTsgfVxuXG4gIEBvYnNlcnZlKCdmb2N1c2VkJylcbiAgZm9jdXNlZENoYW5nZWQoZm9jdXNlZDogYm9vbGVhbikge1xuICAgIGlmICghZm9jdXNlZCkge1xuICAgICAgdGhpcy5fX3RhcmdldCA9IFRhcmdldC5TdGFydDtcbiAgICB9XG4gIH1cblxuICBAb2JzZXJ2ZSgnc2VsZkZvY3VzZWQnLCAnY2FsZW5kYXJGb2N1c2VkJylcbiAgb2JzZXJ2ZUZvY3VzZWQoc2VsZkZvY3VzZWQ6IGJvb2xlYW4sIGNhbGVuZGFyRm9jdXNlZDogYm9vbGVhbikge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9fYmx1clRpbWVvdXQpO1xuICAgIHRoaXMuX19ibHVyVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5mb2N1c2VkID0gc2VsZkZvY3VzZWQgfHwgY2FsZW5kYXJGb2N1c2VkLCAwKTtcbiAgfVxuXG4gIG9uQmx1cigpIHsgdGhpcy5zZWxmRm9jdXNlZCA9IGZhbHNlOyB9XG5cbiAgb25Gb2N1cygpIHsgdGhpcy5zZWxmRm9jdXNlZCA9IHRydWU7IH1cblxuICBvbkNhbGVuZGFyQ2hvb3NlKGU6IEN1c3RvbUV2ZW50PERhdGVUaW1lPikge1xuICAgIGlmIChUYXJnZXQuU3RhcnQgPT09IHRoaXMuX190YXJnZXQpIHtcbiAgICAgIHRoaXMuc3RhcnREYXRlID0gZS5kZXRhaWw7XG4gICAgICB0aGlzLmVuZERhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9fdGFyZ2V0ID0gVGFyZ2V0LkVuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmREYXRlID0gZS5kZXRhaWw7XG4gICAgICB0aGlzLl9fdGFyZ2V0ID0gVGFyZ2V0LlN0YXJ0O1xuICAgIH1cbiAgfVxuXG4gIEBvYnNlcnZlKCd2YWx1ZScpXG4gIHZhbHVlQ2hhbmdlZCh2YWx1ZTogRGF0ZVRpbWVSYW5nZSkge1xuICAgIHRoaXMuX192YWx1ZUNoYW5naW5nID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zdGFydERhdGUgPSA8YW55PiAodmFsdWUuc3RhcnQgfHwgbnVsbCk7IC8vIG51bGwgbmVlZGVkIHRvIHByb3BhZ2F0ZSBudWxsLXZhbHVlLCBhcyB1bmRlZmluZWQgZG9lcyBub3Qgd29yay4uXG4gICAgICB0aGlzLmVuZERhdGUgPSA8YW55PiAodmFsdWUuZW5kIHx8IG51bGwpO1xuICAgICAgdGhpcy5lbXB0eSA9ICF2YWx1ZSB8fCAhKHZhbHVlLnN0YXJ0IHx8IHZhbHVlLmVuZCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX192YWx1ZUNoYW5naW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQG9ic2VydmUoJ3N0YXJ0RGF0ZScsICdlbmREYXRlJylcbiAgdmFsdWVzQ2hhbmdlZChzdGFydDogRGF0ZVRpbWV8dW5kZWZpbmVkLCBlbmQ6IERhdGVUaW1lfHVuZGVmaW5lZCkge1xuICAgIGlmIChzdGFydCkge1xuICAgICAgaWYgKGVuZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IChkYXRlOiBEYXRlVGltZSkgPT4gMCA8PSBkYXRlLmNvbXBhcmVUbyhzdGFydCkgJiYgMCA+PSBkYXRlLmNvbXBhcmVUbyhlbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSAoZGF0ZTogRGF0ZVRpbWUpID0+IGRhdGUuZXF1YWxzVG8oc3RhcnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZW5kKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gKGRhdGU6IERhdGVUaW1lKSA9PiBkYXRlLmVxdWFsc1RvKGVuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9ICgpID0+IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuX192YWx1ZUNoYW5naW5nKSB7XG4gICAgICB0aGlzLnZhbHVlID0geyBzdGFydCwgZW5kIH07XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9