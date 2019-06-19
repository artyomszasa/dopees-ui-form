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
const view = "<style>:host{display:block}.field{display:block;height:100%}dope-calendar{width:var(--calendar--width, var(--width, 16rem));height:var(--calendar--height, var(--height, 14rem))}\n\n/*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJImZpbGUiOiAiZGF0ZS1maWVsZC5jc3MiLAoJInNvdXJjZXMiOiBbCgkJIi4uLy4uL3NyYy9kYXRlLWZpZWxkL2RhdGUtZmllbGQuc2NzcyIKCV0sCgkic291cmNlc0NvbnRlbnQiOiBbCgkJIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmRvcGUtY2FsZW5kYXIge1xuICB3aWR0aDogdmFyKC0tY2FsZW5kYXItLXdpZHRoLCB2YXIoLS13aWR0aCwgMTZyZW0pKTtcbiAgaGVpZ2h0OiB2YXIoLS1jYWxlbmRhci0taGVpZ2h0LCB2YXIoLS1oZWlnaHQsIDE0cmVtKSk7XG59XG4iCgldLAoJIm5hbWVzIjogW10sCgkibWFwcGluZ3MiOiAiQUFBQSxBQUFBLEtBQUssQUFBQyxDQUNKLE9BQU8sQ0FBRSxLQUFLLENBQ2YsQUFFRCxBQUFBLE1BQU0sQUFBQyxDQUNMLE9BQU8sQ0FBRSxLQUFLLENBQ2QsTUFBTSxDQUFFLElBQUksQ0FDYixBQUVELEFBQUEsYUFBYSxBQUFDLENBQ1osS0FBSyxDQUFFLDJDQUEyQyxDQUNsRCxNQUFNLENBQUUsNkNBQTZDLENBQ3REIgp9 */</style><div class=\"field\" tabindex$=\"[[tabindex]]\" focused$=\"[[focused]]\" empty$=\"[[empty]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" invalid$=\"[[invalid]]\" on-focus=\"onFocus\" on-blur=\"onBlur\"><dope-calendar on-choose=\"onCalendarChoose\" selection=\"[[selection]]\" years=\"[[years]]\" months=\"[[months]]\" focused=\"{{calendarFocused}}\"></dope-calendar></div>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLEUsbUJBQUEsRSxXQUFBLEUsS0FBdUMsQ0FBdkMsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FDVCxDQUFBLEUsbUJBQUEsRSxpQkFBQSxFLEtBQWlDLENBQWpDLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLG1CQUFBLEUsYUFBQSxFLEtBQTZCLENBQTdCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsS0FBSyxDQUFDLFFBQUQsQ0FDTixDQUFBLEUsbUJBQUEsRSxPQUFBLEUsS0FBdUIsQ0FBdkIsQ0FBQTs7QUFXQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsYUFBRCxFQUFnQixpQkFBaEIsQ0FDUixDQUFBLEUsbUJBQUEsRSxnQkFBQSxFQUdDLElBSEQsQ0FBQTs7QUFlQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsT0FBRCxDQUNSLENBQUEsRSxtQkFBQSxFLGNBQUEsRUFNQyxJQU5ELENBQUE7O0FBckRXLFNBQVMsR0FBQSxVQUFBLENBQUEsQ0FEckIsYUFBYSxDQUFDLGlCQUFELENBQ1EsQ0FBQSxFQUFULFNBQVMsQ0FBVDtTQUFBLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY2FsZW5kYXInO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudCc7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgb2JzZXJ2ZSwgcXVlcnkgfSBmcm9tICdAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnZG9wZWVzLWNvcmUvbGliL2RhdGV0aW1lJztcbmltcG9ydCB7IEZpZWxkTWl4aW4sIFZhbHVlRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7IG1vbnRocyB9IGZyb20gJy4vY2FsZW5kYXInO1xuaW1wb3J0IHsgbWtUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGVzJztcbmltcG9ydCB2aWV3IGZyb20gJy4vZGF0ZS1maWVsZC9kYXRlLWZpZWxkLnB1Zyc7XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLWRhdGUtZmllbGQnKVxuZXhwb3J0IGNsYXNzIERhdGVGaWVsZCBleHRlbmRzIEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpIGltcGxlbWVudHMgVmFsdWVGaWVsZDxEYXRlVGltZXx1bmRlZmluZWQ+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUodmlldyk7IH1cblxuICBwcml2YXRlIF9fYmx1clRpbWVvdXQ6IGFueTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICB5ZWFyczogbnVtYmVyW10gPSBBcnJheS5hcHBseShudWxsLCA8YW55PiB7IGxlbmd0aDogNTAgfSkubWFwKChfLCBpKSA9PiAxOTgwICsgaSk7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSlcbiAgbW9udGhzOiBBcnJheTx7IHZhbHVlOiBudW1iZXIsIHRleHQ6IHN0cmluZyB9PiA9IG1vbnRocztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogRGF0ZVRpbWV8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHRhYmluZGV4PzogbnVtYmVyID0gMDtcblxuICBAcHJvcGVydHkoKVxuICBzZWxlY3Rpb246IChkYXRlOiBEYXRlVGltZSkgPT4gYm9vbGVhbjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIGNhbGVuZGFyRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgc2VsZkZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAcXVlcnkoJy5maWVsZCcpXG4gIGZpZWxkITogSFRNTERpdkVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmVtcHR5ID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9ICgpID0+IGZhbHNlO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7IHRoaXMuZmllbGQuZm9jdXMoKTsgfVxuXG4gIEBvYnNlcnZlKCdzZWxmRm9jdXNlZCcsICdjYWxlbmRhckZvY3VzZWQnKVxuICBvYnNlcnZlRm9jdXNlZChzZWxmRm9jdXNlZDogYm9vbGVhbiwgY2FsZW5kYXJGb2N1c2VkOiBib29sZWFuKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX19ibHVyVGltZW91dCk7XG4gICAgdGhpcy5fX2JsdXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmZvY3VzZWQgPSBzZWxmRm9jdXNlZCB8fCBjYWxlbmRhckZvY3VzZWQsIDApO1xuICB9XG5cbiAgb25CbHVyKCkgeyB0aGlzLnNlbGZGb2N1c2VkID0gZmFsc2U7IH1cblxuICBvbkZvY3VzKCkgeyB0aGlzLnNlbGZGb2N1c2VkID0gdHJ1ZTsgfVxuXG4gIG9uQ2FsZW5kYXJDaG9vc2UoZTogQ3VzdG9tRXZlbnQ8RGF0ZVRpbWU+KSB7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgdGhpcy52YWx1ZSA9IGUuZGV0YWlsO1xuICB9XG5cbiAgQG9ic2VydmUoJ3ZhbHVlJylcbiAgdmFsdWVDaGFuZ2VkKHZhbHVlOiBEYXRlVGltZXxudWxsKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IChkYXRlOiBEYXRlVGltZSkgPT4gdmFsdWUuZXF1YWxzVG8oZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gKCkgPT4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9