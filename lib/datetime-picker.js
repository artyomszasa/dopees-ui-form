var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateTimePicker_1;
import "./datetime-field.js";
import { customElement, property, query } from "@polymer/decorators/lib/decorators.js";
import { DateTime } from "dopees-core/lib/datetime.js";
import { Picker } from "./picker/picker.js";
import { sprintf } from "dopees-core/lib/string.js";
let DateTimePicker = DateTimePicker_1 = class DateTimePicker extends Picker {
  constructor() {
    super();
    this.empty = true;

    this.formatter = x => x ? sprintf('%04d. %02d. %02d %02d:%02d', x.year, x.month, x.day, x.hours, x.minutes) : '';
  }

  static get template() {
    return Picker.createTemplate(DateTimePicker_1, {
      implementation: 'dope-datetime-field',
      css: 'dope-datetime-field{height:var(--time-height,14rem)}',
      arguments: {
        formatter: '[[formatter]]',
        empty: '{{empty}}',
        value: '{{value}}'
      }
    });
  }

  _deserializeValue(value, type) {
    if (DateTime === type) {
      if (!value) {
        return undefined;
      }

      return new DateTime(value);
    }

    return super._deserializeValue(value, type);
  }

  activate() {
    this.wrapper.focus();
    this.innerField.activate();
  }

};

__decorate([property({
  type: DateTime,
  notify: true
})], DateTimePicker.prototype, "value", void 0);

__decorate([property()], DateTimePicker.prototype, "formatter", void 0);

__decorate([query('dope-datetime-field')], DateTimePicker.prototype, "innerField", void 0);

DateTimePicker = DateTimePicker_1 = __decorate([customElement('dope-datetime-picker')], DateTimePicker);
export { DateTimePicker };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGV0aW1lLXBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLHFCQUFQO0FBQ0EsU0FBUyxhQUFULEVBQXdCLFFBQXhCLEVBQWtDLEtBQWxDLFFBQXdELHVDQUF4RDtBQUNBLFNBQVMsUUFBVCxRQUF5Qiw2QkFBekI7QUFFQSxTQUFTLE1BQVQsUUFBdUIsb0JBQXZCO0FBRUEsU0FBUyxPQUFULFFBQXdCLDJCQUF4QjtBQUlBLElBQWEsY0FBYyxHQUFBLGdCQUFBLEdBQTNCLE1BQWEsY0FBYixTQUFvQyxNQUFwQyxDQUFvRDtBQWdDbEQsRUFBQSxXQUFBLEdBQUE7QUFDRTtBQUNBLFNBQUssS0FBTCxHQUFhLElBQWI7O0FBQ0EsU0FBSyxTQUFMLEdBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLDRCQUFELEVBQStCLENBQUMsQ0FBQyxJQUFqQyxFQUF1QyxDQUFDLENBQUMsS0FBekMsRUFBZ0QsQ0FBQyxDQUFDLEdBQWxELEVBQXVELENBQUMsQ0FBQyxLQUF6RCxFQUFnRSxDQUFDLENBQUMsT0FBbEUsQ0FBVixHQUF1RixFQUE5RztBQUNEOztBQW5DRCxhQUFXLFFBQVgsR0FBbUI7QUFDakIsV0FBTyxNQUFNLENBQUMsY0FBUCxDQUFzQixnQkFBdEIsRUFBc0M7QUFDM0MsTUFBQSxjQUFjLEVBQUUscUJBRDJCO0FBRTNDLE1BQUEsR0FBRyxFQUFFLHNEQUZzQztBQUczQyxNQUFBLFNBQVMsRUFBRTtBQUNULFFBQUEsU0FBUyxFQUFFLGVBREY7QUFFVCxRQUFBLEtBQUssRUFBRSxXQUZFO0FBR1QsUUFBQSxLQUFLLEVBQUU7QUFIRTtBQUhnQyxLQUF0QyxDQUFQO0FBU0Q7O0FBRUQsRUFBQSxpQkFBaUIsQ0FBQyxLQUFELEVBQXFCLElBQXJCLEVBQThCO0FBQzdDLFFBQUksUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ3JCLFVBQUksQ0FBQyxLQUFMLEVBQVk7QUFDVixlQUFPLFNBQVA7QUFDRDs7QUFDRCxhQUFPLElBQUksUUFBSixDQUFhLEtBQWIsQ0FBUDtBQUNEOztBQUNELFdBQU8sTUFBTSxpQkFBTixDQUF3QixLQUF4QixFQUErQixJQUEvQixDQUFQO0FBQ0Q7O0FBaUJELEVBQUEsUUFBUSxHQUFBO0FBQ04sU0FBSyxPQUFMLENBQWEsS0FBYjtBQUNBLFNBQUssVUFBTCxDQUFnQixRQUFoQjtBQUNEOztBQXpDaUQsQ0FBcEQ7O0FBd0JFLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFPLFFBQWI7QUFBdUIsRUFBQSxNQUFNLEVBQUU7QUFBL0IsQ0FBRCxDQUNULENBQUEsRSx3QkFBQSxFLE9BQUEsRSxLQUEwQixDQUExQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsRUFDVCxDQUFBLEUsd0JBQUEsRSxXQUFBLEUsS0FBZ0QsQ0FBaEQsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxLQUFLLENBQUMscUJBQUQsQ0FDTixDQUFBLEUsd0JBQUEsRSxZQUFBLEUsS0FBMkIsQ0FBM0IsQ0FBQTs7QUE5QlcsY0FBYyxHQUFBLGdCQUFBLEdBQUEsVUFBQSxDQUFBLENBRDFCLGFBQWEsQ0FBQyxzQkFBRCxDQUNhLENBQUEsRUFBZCxjQUFjLENBQWQ7U0FBQSxjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2RhdGV0aW1lLWZpZWxkJztcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBxdWVyeSwgb2JzZXJ2ZSB9IGZyb20gJ0Bwb2x5bWVyL2RlY29yYXRvcnMvbGliL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdkb3BlZXMtY29yZS9saWIvZGF0ZXRpbWUnO1xuaW1wb3J0IHsgVmFsdWVGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgUGlja2VyIH0gZnJvbSAnLi9waWNrZXIvcGlja2VyJztcbmltcG9ydCB7IERhdGVUaW1lRmllbGQgfSBmcm9tICcuL2RhdGV0aW1lLWZpZWxkJztcbmltcG9ydCB7IHNwcmludGYgfSBmcm9tICdkb3BlZXMtY29yZS9saWIvc3RyaW5nJztcblxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1kYXRldGltZS1waWNrZXInKVxuZXhwb3J0IGNsYXNzIERhdGVUaW1lUGlja2VyIGV4dGVuZHMgUGlja2VyPERhdGVUaW1lPiBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8RGF0ZVRpbWV8dW5kZWZpbmVkPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIFBpY2tlci5jcmVhdGVUZW1wbGF0ZShEYXRlVGltZVBpY2tlciwge1xuICAgICAgaW1wbGVtZW50YXRpb246ICdkb3BlLWRhdGV0aW1lLWZpZWxkJyxcbiAgICAgIGNzczogJ2RvcGUtZGF0ZXRpbWUtZmllbGR7aGVpZ2h0OnZhcigtLXRpbWUtaGVpZ2h0LDE0cmVtKX0nLFxuICAgICAgYXJndW1lbnRzOiB7XG4gICAgICAgIGZvcm1hdHRlcjogJ1tbZm9ybWF0dGVyXV0nLFxuICAgICAgICBlbXB0eTogJ3t7ZW1wdHl9fScsXG4gICAgICAgIHZhbHVlOiAne3t2YWx1ZX19J1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2Rlc2VyaWFsaXplVmFsdWUodmFsdWU6IHN0cmluZ3xudWxsLCB0eXBlOiBhbnkpIHtcbiAgICBpZiAoRGF0ZVRpbWUgPT09IHR5cGUpIHtcbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gc3VwZXIuX2Rlc2VyaWFsaXplVmFsdWUodmFsdWUsIHR5cGUpO1xuICB9XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogPGFueT5EYXRlVGltZSwgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBEYXRlVGltZXx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KClcbiAgZm9ybWF0dGVyOiAoaXRlbTogRGF0ZVRpbWV8dW5kZWZpbmVkKSA9PiBzdHJpbmc7XG5cbiAgQHF1ZXJ5KCdkb3BlLWRhdGV0aW1lLWZpZWxkJylcbiAgaW5uZXJGaWVsZCE6IERhdGVUaW1lRmllbGQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmVtcHR5ID0gdHJ1ZTtcbiAgICB0aGlzLmZvcm1hdHRlciA9IHggPT4geCA/IHNwcmludGYoJyUwNGQuICUwMmQuICUwMmQgJTAyZDolMDJkJywgeC55ZWFyLCB4Lm1vbnRoLCB4LmRheSwgeC5ob3VycywgeC5taW51dGVzKSA6ICcnO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy53cmFwcGVyLmZvY3VzKCk7XG4gICAgdGhpcy5pbm5lckZpZWxkLmFjdGl2YXRlKCk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9