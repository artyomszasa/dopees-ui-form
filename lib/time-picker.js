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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZCc7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgcXVlcnksIG9ic2VydmUgfSBmcm9tICdAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IFRpbWVTcGFuIH0gZnJvbSAnZG9wZWVzLWNvcmUvbGliL2RhdGV0aW1lJztcbmltcG9ydCB7IFZhbHVlRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7IFBpY2tlciB9IGZyb20gJy4vcGlja2VyJztcbmltcG9ydCB7IFRpbWVGaWVsZCB9IGZyb20gJy4vdGltZS1maWVsZCc7XG5pbXBvcnQgeyBzcHJpbnRmIH0gZnJvbSAnZG9wZWVzLWNvcmUvbGliL3N0cmluZyc7XG5cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtdGltZS1waWNrZXInKVxuZXhwb3J0IGNsYXNzIFRpbWVQaWNrZXIgZXh0ZW5kcyBQaWNrZXI8VGltZVNwYW4+IGltcGxlbWVudHMgVmFsdWVGaWVsZDxUaW1lU3Bhbnx1bmRlZmluZWQ+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gUGlja2VyLmNyZWF0ZVRlbXBsYXRlKFRpbWVQaWNrZXIsIHtcbiAgICAgIGltcGxlbWVudGF0aW9uOiAnZG9wZS10aW1lLWZpZWxkJyxcbiAgICAgIGNzczogJ2RvcGUtdGltZS1maWVsZHtoZWlnaHQ6dmFyKC0tdGltZS1oZWlnaHQsMTJyZW0pfScsXG4gICAgICBhcmd1bWVudHM6IHtcbiAgICAgICAgJ3N0YXJ0LXRpbWUnOiAnW1tzdGFydFRpbWVdXScsXG4gICAgICAgICdlbmQtdGltZSc6ICdbW2VuZFRpbWVdXScsXG4gICAgICAgIGZvcm1hdHRlcjogJ1tbZm9ybWF0dGVyXV0nLFxuICAgICAgICBzdGVwOiAnW1tzdGVwXV0nLFxuICAgICAgICB2YWx1ZTogJ3t7dmFsdWV9fScsXG4gICAgICAgIGVtcHR5OiAne3tlbXB0eX19J1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2Rlc2VyaWFsaXplVmFsdWUodmFsdWU6IHN0cmluZ3xudWxsLCB0eXBlOiBhbnkpIHtcbiAgICBpZiAoVGltZVNwYW4gPT09IHR5cGUpIHtcbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgVGltZVNwYW4odmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gc3VwZXIuX2Rlc2VyaWFsaXplVmFsdWUodmFsdWUsIHR5cGUpO1xuICB9XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogPGFueT5UaW1lU3Bhbiwgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBUaW1lU3Bhbnx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KClcbiAgZm9ybWF0dGVyOiAoaXRlbTogVGltZVNwYW58dW5kZWZpbmVkKSA9PiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0IH0pXG4gIHN0YXJ0VGltZSE6IFRpbWVTcGFuO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCB9KVxuICBlbmRUaW1lITogVGltZVNwYW47XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0IH0pXG4gIHN0ZXAhOiBUaW1lU3BhbjtcblxuICBAcXVlcnkoJ2RvcGUtdGltZS1maWVsZCcpXG4gIGlubmVyRmllbGQhOiBUaW1lRmllbGQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmVtcHR5ID0gdHJ1ZTtcbiAgICB0aGlzLmZvcm1hdHRlciA9IHggPT4geCA/IHNwcmludGYoJyUwMmQ6JTAyZCcsIHguaG91cnMsIHgubWludXRlcykgOiAnJztcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMud3JhcHBlci5mb2N1cygpO1xuICAgIHRoaXMuaW5uZXJGaWVsZC5hY3RpdmF0ZSgpO1xuICB9XG5cbiAgLy8gQG9ic2VydmUoJ3ZhbHVlJylcbiAgLy8gb2JzZXJ2ZUVtcHR5KHZhbHVlOiBUaW1lU3Bhbnx1bmRlZmluZWQpIHtcbiAgLy8gICB0aGlzLmVtcHR5ID0gIXZhbHVlO1xuICAvLyB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==