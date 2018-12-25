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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPLHlCQUFQO0FBQ0EsU0FBUyxjQUFULFFBQStCLHFDQUEvQjtBQUNBLFNBQVMsYUFBVCxFQUF3QixRQUF4QixFQUFrQyxPQUFsQyxFQUEyQyxLQUEzQyxRQUF3RCx1Q0FBeEQ7QUFFQSxTQUFTLFVBQVQsUUFBdUMsYUFBdkM7QUFDQSxTQUFTLE1BQVQsUUFBdUIseUJBQXZCO0FBQ0EsU0FBUyxVQUFULFFBQTJCLGlCQUEzQjtNQUNPLEk7QUFHUCxJQUFhLFNBQVMsR0FBdEIsTUFBYSxTQUFiLFNBQStCLFVBQVUsQ0FBQyxjQUFELENBQXpDLENBQXlEO0FBNkJ2RCxFQUFBLFdBQUEsR0FBQTtBQUNFO0FBeEJGLFNBQUEsS0FBQSxHQUFrQixLQUFLLENBQUMsS0FBTixDQUFZLElBQVosRUFBdUI7QUFBRSxNQUFBLE1BQU0sRUFBRTtBQUFWLEtBQXZCLEVBQXVDLEdBQXZDLENBQTJDLENBQUMsQ0FBRCxFQUFJLENBQUosS0FBVSxPQUFPLENBQTVELENBQWxCO0FBR0EsU0FBQSxNQUFBLEdBQTRDLE1BQTVDO0FBTUEsU0FBQSxRQUFBLEdBQW9CLENBQXBCO0FBTUEsU0FBQSxlQUFBLEdBQTJCLEtBQTNCO0FBR0EsU0FBQSxXQUFBLEdBQXVCLEtBQXZCO0FBT0UsU0FBSyxLQUFMLEdBQWEsSUFBYjs7QUFDQSxTQUFLLFNBQUwsR0FBaUIsTUFBTSxLQUF2QjtBQUNEOztBQWhDRCxhQUFXLFFBQVgsR0FBbUI7QUFBSyxXQUFPLFVBQVUsQ0FBQyxJQUFELENBQWpCO0FBQTBCOztBQWtDbEQsRUFBQSxRQUFRLEdBQUE7QUFBSyxTQUFLLEtBQUwsQ0FBVyxLQUFYO0FBQXFCOztBQUdsQyxFQUFBLGNBQWMsQ0FBQyxXQUFELEVBQXVCLGVBQXZCLEVBQStDO0FBQzNELElBQUEsWUFBWSxDQUFDLEtBQUssYUFBTixDQUFaO0FBQ0EsU0FBSyxhQUFMLEdBQXFCLFVBQVUsQ0FBQyxNQUFNLEtBQUssT0FBTCxHQUFlLFdBQVcsSUFBSSxlQUFyQyxFQUFzRCxDQUF0RCxDQUEvQjtBQUNEOztBQUVELEVBQUEsTUFBTSxHQUFBO0FBQUssU0FBSyxXQUFMLEdBQW1CLEtBQW5CO0FBQTJCOztBQUV0QyxFQUFBLE9BQU8sR0FBQTtBQUFLLFNBQUssV0FBTCxHQUFtQixJQUFuQjtBQUEwQjs7QUFFdEMsRUFBQSxnQkFBZ0IsQ0FBQyxDQUFELEVBQXlCO0FBQ3ZDLFNBQUssS0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLLEtBQUwsR0FBYSxDQUFDLENBQUMsTUFBZjtBQUNEOztBQUdELEVBQUEsWUFBWSxDQUFDLEtBQUQsRUFBcUI7QUFDL0IsUUFBSSxLQUFKLEVBQVc7QUFDVCxXQUFLLFNBQUwsR0FBa0IsSUFBRCxJQUFvQixLQUFLLENBQUMsUUFBTixDQUFlLElBQWYsQ0FBckM7QUFDRCxLQUZELE1BRU87QUFDTCxXQUFLLFNBQUwsR0FBaUIsTUFBTSxLQUF2QjtBQUNEO0FBQ0Y7O0FBM0RzRCxDQUF6RDs7QUFNRSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FDVCxDQUFBLEUsbUJBQUEsRSxPQUFBLEUsS0FBaUYsQ0FBakYsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FDVCxDQUFBLEUsbUJBQUEsRSxRQUFBLEUsS0FBbUQsQ0FBbkQsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCLEVBQUEsTUFBTSxFQUFFO0FBQXhCLENBQUQsQ0FDVCxDQUFBLEUsbUJBQUEsRSxPQUFBLEUsS0FBMEIsQ0FBMUIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLEVBQ1QsQ0FBQSxFLG1CQUFBLEUsVUFBQSxFLEtBQXNCLENBQXRCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxFQUNULENBQUEsRSxtQkFBQSxFLFdBQUEsRSxLQUF1QyxDQUF2QyxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSxtQkFBQSxFLGlCQUFBLEUsS0FBaUMsQ0FBakMsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FDVCxDQUFBLEUsbUJBQUEsRSxhQUFBLEUsS0FBNkIsQ0FBN0IsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxLQUFLLENBQUMsUUFBRCxDQUNOLENBQUEsRSxtQkFBQSxFLE9BQUEsRSxLQUF1QixDQUF2QixDQUFBOztBQVdBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxhQUFELEVBQWdCLGlCQUFoQixDQUNSLENBQUEsRSxtQkFBQSxFLGdCQUFBLEVBR0MsSUFIRCxDQUFBOztBQWVBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxPQUFELENBQ1IsQ0FBQSxFLG1CQUFBLEUsY0FBQSxFQU1DLElBTkQsQ0FBQTs7QUFyRFcsU0FBUyxHQUFBLFVBQUEsQ0FBQSxDQURyQixhQUFhLENBQUMsaUJBQUQsQ0FDUSxDQUFBLEVBQVQsU0FBUyxDQUFUO1NBQUEsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vY2FsZW5kYXIvY2FsZW5kYXInO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudCc7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgb2JzZXJ2ZSwgcXVlcnkgfSBmcm9tICdAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnZG9wZWVzLWNvcmUvbGliL2RhdGV0aW1lJztcbmltcG9ydCB7IEZpZWxkTWl4aW4sIFZhbHVlRmllbGQgfSBmcm9tICcuLi9maWVsZCc7XG5pbXBvcnQgeyBtb250aHMgfSBmcm9tICcuLi9jYWxlbmRhci9jYWxlbmRhcic7XG5pbXBvcnQgeyBta1RlbXBsYXRlIH0gZnJvbSBcIi4uL3RlbXBsYXRlc1wiO1xuaW1wb3J0IHZpZXcgZnJvbSAnLi9kYXRlLWZpZWxkLnB1Zyc7XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLWRhdGUtZmllbGQnKVxuZXhwb3J0IGNsYXNzIERhdGVGaWVsZCBleHRlbmRzIEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpIGltcGxlbWVudHMgVmFsdWVGaWVsZDxEYXRlVGltZXx1bmRlZmluZWQ+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUodmlldyk7IH1cblxuICBwcml2YXRlIF9fYmx1clRpbWVvdXQ6IGFueTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICB5ZWFyczogbnVtYmVyW10gPSBBcnJheS5hcHBseShudWxsLCA8YW55PnsgbGVuZ3RoOiA1MCB9KS5tYXAoKF8sIGkpID0+IDE5ODAgKyBpKTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICBtb250aHM6IHsgdmFsdWU6IG51bWJlciwgdGV4dDogc3RyaW5nIH1bXSA9IG1vbnRocztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogRGF0ZVRpbWV8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHRhYmluZGV4PzogbnVtYmVyID0gMDtcblxuICBAcHJvcGVydHkoKVxuICBzZWxlY3Rpb246IChkYXRlOiBEYXRlVGltZSkgPT4gYm9vbGVhbjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIGNhbGVuZGFyRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgc2VsZkZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAcXVlcnkoJy5maWVsZCcpXG4gIGZpZWxkITogSFRNTERpdkVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmVtcHR5ID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9ICgpID0+IGZhbHNlO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7IHRoaXMuZmllbGQuZm9jdXMoKTsgfVxuXG4gIEBvYnNlcnZlKCdzZWxmRm9jdXNlZCcsICdjYWxlbmRhckZvY3VzZWQnKVxuICBvYnNlcnZlRm9jdXNlZChzZWxmRm9jdXNlZDogYm9vbGVhbiwgY2FsZW5kYXJGb2N1c2VkOiBib29sZWFuKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX19ibHVyVGltZW91dCk7XG4gICAgdGhpcy5fX2JsdXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmZvY3VzZWQgPSBzZWxmRm9jdXNlZCB8fCBjYWxlbmRhckZvY3VzZWQsIDApO1xuICB9XG5cbiAgb25CbHVyKCkgeyB0aGlzLnNlbGZGb2N1c2VkID0gZmFsc2U7IH1cblxuICBvbkZvY3VzKCkgeyB0aGlzLnNlbGZGb2N1c2VkID0gdHJ1ZTsgfVxuXG4gIG9uQ2FsZW5kYXJDaG9vc2UoZTogQ3VzdG9tRXZlbnQ8RGF0ZVRpbWU+KSB7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgdGhpcy52YWx1ZSA9IGUuZGV0YWlsO1xuICB9XG5cbiAgQG9ic2VydmUoJ3ZhbHVlJylcbiAgdmFsdWVDaGFuZ2VkKHZhbHVlOiBEYXRlVGltZXxudWxsKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IChkYXRlOiBEYXRlVGltZSkgPT4gdmFsdWUuZXF1YWxzVG8oZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gKCkgPT4gZmFsc2U7XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==