var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimePicker_1;
import "./time-field.js";
import { customElement, property, query } from "@polymer/decorators/lib/decorators.js";
import { TimeSpan } from "dopees-core/lib/datetime.js";
import { Picker } from "./picker/picker.js";
import { sprintf } from "dopees-core/lib/string.js";
let TimePicker = TimePicker_1 = class TimePicker extends Picker {
  constructor() {
    super();
    this.empty = true;

    this.formatter = x => x ? sprintf('%02d:%02d', x.hours, x.minutes) : '';
  }

  static get template() {
    return Picker.createTemplate(TimePicker_1, {
      implementation: 'dope-time-field',
      css: 'dope-time-field{height:var(--time-height,12rem)}',
      arguments: {
        'start-time': '[[startTime]]',
        'end-time': '[[endTime]]',
        formatter: '[[formatter]]',
        step: '[[step]]',
        value: '{{value}}',
        empty: '{{empty}}'
      }
    });
  }

  _deserializeValue(value, type) {
    if (TimeSpan === type) {
      if (!value) {
        return undefined;
      }

      return new TimeSpan(value);
    }

    return super._deserializeValue(value, type);
  }

  activate() {
    this.wrapper.focus();
    this.innerField.activate();
  }

};

__decorate([property({
  type: TimeSpan,
  notify: true
})], TimePicker.prototype, "value", void 0);

__decorate([property()], TimePicker.prototype, "formatter", void 0);

__decorate([property({
  type: Object
})], TimePicker.prototype, "startTime", void 0);

__decorate([property({
  type: Object
})], TimePicker.prototype, "endTime", void 0);

__decorate([property({
  type: Object
})], TimePicker.prototype, "step", void 0);

__decorate([query('dope-time-field')], TimePicker.prototype, "innerField", void 0);

TimePicker = TimePicker_1 = __decorate([customElement('dope-time-picker')], TimePicker);
export { TimePicker };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bGQnO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIHF1ZXJ5LCBvYnNlcnZlIH0gZnJvbSAnQHBvbHltZXIvZGVjb3JhdG9ycy9saWIvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBUaW1lU3BhbiB9IGZyb20gJ2RvcGVlcy1jb3JlL2xpYi9kYXRldGltZSc7XG5pbXBvcnQgeyBWYWx1ZUZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQgeyBQaWNrZXIgfSBmcm9tICcuL3BpY2tlci9waWNrZXInO1xuaW1wb3J0IHsgVGltZUZpZWxkIH0gZnJvbSAnLi90aW1lLWZpZWxkJztcbmltcG9ydCB7IHNwcmludGYgfSBmcm9tICdkb3BlZXMtY29yZS9saWIvc3RyaW5nJztcblxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS10aW1lLXBpY2tlcicpXG5leHBvcnQgY2xhc3MgVGltZVBpY2tlciBleHRlbmRzIFBpY2tlcjxUaW1lU3Bhbj4gaW1wbGVtZW50cyBWYWx1ZUZpZWxkPFRpbWVTcGFufHVuZGVmaW5lZD4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBQaWNrZXIuY3JlYXRlVGVtcGxhdGUoVGltZVBpY2tlciwge1xuICAgICAgaW1wbGVtZW50YXRpb246ICdkb3BlLXRpbWUtZmllbGQnLFxuICAgICAgY3NzOiAnZG9wZS10aW1lLWZpZWxke2hlaWdodDp2YXIoLS10aW1lLWhlaWdodCwxMnJlbSl9JyxcbiAgICAgIGFyZ3VtZW50czoge1xuICAgICAgICAnc3RhcnQtdGltZSc6ICdbW3N0YXJ0VGltZV1dJyxcbiAgICAgICAgJ2VuZC10aW1lJzogJ1tbZW5kVGltZV1dJyxcbiAgICAgICAgZm9ybWF0dGVyOiAnW1tmb3JtYXR0ZXJdXScsXG4gICAgICAgIHN0ZXA6ICdbW3N0ZXBdXScsXG4gICAgICAgIHZhbHVlOiAne3t2YWx1ZX19JyxcbiAgICAgICAgZW1wdHk6ICd7e2VtcHR5fX0nXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfZGVzZXJpYWxpemVWYWx1ZSh2YWx1ZTogc3RyaW5nfG51bGwsIHR5cGU6IGFueSkge1xuICAgIGlmIChUaW1lU3BhbiA9PT0gdHlwZSkge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5fZGVzZXJpYWxpemVWYWx1ZSh2YWx1ZSwgdHlwZSk7XG4gIH1cblxuICBAcHJvcGVydHkoeyB0eXBlOiA8YW55PlRpbWVTcGFuLCBub3RpZnk6IHRydWUgfSlcbiAgdmFsdWU6IFRpbWVTcGFufHVuZGVmaW5lZDtcblxuICBAcHJvcGVydHkoKVxuICBmb3JtYXR0ZXI6IChpdGVtOiBUaW1lU3Bhbnx1bmRlZmluZWQpID0+IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QgfSlcbiAgc3RhcnRUaW1lITogVGltZVNwYW47XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0IH0pXG4gIGVuZFRpbWUhOiBUaW1lU3BhbjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QgfSlcbiAgc3RlcCE6IFRpbWVTcGFuO1xuXG4gIEBxdWVyeSgnZG9wZS10aW1lLWZpZWxkJylcbiAgaW5uZXJGaWVsZCE6IFRpbWVGaWVsZDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZW1wdHkgPSB0cnVlO1xuICAgIHRoaXMuZm9ybWF0dGVyID0geCA9PiB4ID8gc3ByaW50ZignJTAyZDolMDJkJywgeC5ob3VycywgeC5taW51dGVzKSA6ICcnO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy53cmFwcGVyLmZvY3VzKCk7XG4gICAgdGhpcy5pbm5lckZpZWxkLmFjdGl2YXRlKCk7XG4gIH1cblxuICAvLyBAb2JzZXJ2ZSgndmFsdWUnKVxuICAvLyBvYnNlcnZlRW1wdHkodmFsdWU6IFRpbWVTcGFufHVuZGVmaW5lZCkge1xuICAvLyAgIHRoaXMuZW1wdHkgPSAhdmFsdWU7XG4gIC8vIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9