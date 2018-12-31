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
import { Picker } from "./picker.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZCc7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgcXVlcnksIG9ic2VydmUgfSBmcm9tICdAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IFRpbWVTcGFuIH0gZnJvbSAnZG9wZWVzLWNvcmUvbGliL2RhdGV0aW1lJztcbmltcG9ydCB7IFZhbHVlRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7IFBpY2tlciB9IGZyb20gJy4vcGlja2VyJztcbmltcG9ydCB7IFRpbWVGaWVsZCB9IGZyb20gJy4vdGltZS1maWVsZCc7XG5pbXBvcnQgeyBzcHJpbnRmIH0gZnJvbSAnZG9wZWVzLWNvcmUvbGliL3N0cmluZyc7XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLXRpbWUtcGlja2VyJylcbmV4cG9ydCBjbGFzcyBUaW1lUGlja2VyIGV4dGVuZHMgUGlja2VyPFRpbWVTcGFuPiBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8VGltZVNwYW58dW5kZWZpbmVkPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIFBpY2tlci5jcmVhdGVUZW1wbGF0ZShUaW1lUGlja2VyLCB7XG4gICAgICBpbXBsZW1lbnRhdGlvbjogJ2RvcGUtdGltZS1maWVsZCcsXG4gICAgICBjc3M6ICdkb3BlLXRpbWUtZmllbGR7aGVpZ2h0OnZhcigtLXRpbWUtaGVpZ2h0LDEycmVtKX0nLFxuICAgICAgYXJndW1lbnRzOiB7XG4gICAgICAgICdzdGFydC10aW1lJzogJ1tbc3RhcnRUaW1lXV0nLFxuICAgICAgICAnZW5kLXRpbWUnOiAnW1tlbmRUaW1lXV0nLFxuICAgICAgICBmb3JtYXR0ZXI6ICdbW2Zvcm1hdHRlcl1dJyxcbiAgICAgICAgc3RlcDogJ1tbc3RlcF1dJyxcbiAgICAgICAgdmFsdWU6ICd7e3ZhbHVlfX0nLFxuICAgICAgICBlbXB0eTogJ3t7ZW1wdHl9fSdcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9kZXNlcmlhbGl6ZVZhbHVlKHZhbHVlOiBzdHJpbmd8bnVsbCwgdHlwZTogYW55KSB7XG4gICAgaWYgKFRpbWVTcGFuID09PSB0eXBlKSB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLl9kZXNlcmlhbGl6ZVZhbHVlKHZhbHVlLCB0eXBlKTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IDxhbnk+IFRpbWVTcGFuLCBub3RpZnk6IHRydWUgfSlcbiAgdmFsdWU6IFRpbWVTcGFufHVuZGVmaW5lZDtcblxuICBAcHJvcGVydHkoKVxuICBmb3JtYXR0ZXI6IChpdGVtOiBUaW1lU3Bhbnx1bmRlZmluZWQpID0+IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QgfSlcbiAgc3RhcnRUaW1lITogVGltZVNwYW47XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0IH0pXG4gIGVuZFRpbWUhOiBUaW1lU3BhbjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QgfSlcbiAgc3RlcCE6IFRpbWVTcGFuO1xuXG4gIEBxdWVyeSgnZG9wZS10aW1lLWZpZWxkJylcbiAgaW5uZXJGaWVsZCE6IFRpbWVGaWVsZDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZW1wdHkgPSB0cnVlO1xuICAgIHRoaXMuZm9ybWF0dGVyID0gKHgpID0+IHggPyBzcHJpbnRmKCclMDJkOiUwMmQnLCB4LmhvdXJzLCB4Lm1pbnV0ZXMpIDogJyc7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLndyYXBwZXIuZm9jdXMoKTtcbiAgICB0aGlzLmlubmVyRmllbGQuYWN0aXZhdGUoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==