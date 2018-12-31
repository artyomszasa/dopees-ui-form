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
import { Picker } from "./picker.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGV0aW1lLXBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLHFCQUFQO0FBQ0EsU0FBUyxhQUFULEVBQXdCLFFBQXhCLEVBQWtDLEtBQWxDLFFBQStDLHVDQUEvQztBQUNBLFNBQVMsUUFBVCxRQUF5Qiw2QkFBekI7QUFFQSxTQUFTLE1BQVQsUUFBdUIsYUFBdkI7QUFFQSxTQUFTLE9BQVQsUUFBd0IsMkJBQXhCO0FBR0EsSUFBYSxjQUFjLEdBQUEsZ0JBQUEsR0FBM0IsTUFBYSxjQUFiLFNBQW9DLE1BQXBDLENBQW9EO0FBZ0NsRCxFQUFBLFdBQUEsR0FBQTtBQUNFO0FBQ0EsU0FBSyxLQUFMLEdBQWEsSUFBYjs7QUFDQSxTQUFLLFNBQUwsR0FBa0IsQ0FBRCxJQUFPLENBQUMsR0FBRyxPQUFPLENBQUMsNEJBQUQsRUFBK0IsQ0FBQyxDQUFDLElBQWpDLEVBQXVDLENBQUMsQ0FBQyxLQUF6QyxFQUFnRCxDQUFDLENBQUMsR0FBbEQsRUFBdUQsQ0FBQyxDQUFDLEtBQXpELEVBQWdFLENBQUMsQ0FBQyxPQUFsRSxDQUFWLEdBQXVGLEVBQWhIO0FBQ0Q7O0FBbkNELGFBQVcsUUFBWCxHQUFtQjtBQUNqQixXQUFPLE1BQU0sQ0FBQyxjQUFQLENBQXNCLGdCQUF0QixFQUFzQztBQUMzQyxNQUFBLGNBQWMsRUFBRSxxQkFEMkI7QUFFM0MsTUFBQSxHQUFHLEVBQUUsc0RBRnNDO0FBRzNDLE1BQUEsU0FBUyxFQUFFO0FBQ1QsUUFBQSxTQUFTLEVBQUUsZUFERjtBQUVULFFBQUEsS0FBSyxFQUFFLFdBRkU7QUFHVCxRQUFBLEtBQUssRUFBRTtBQUhFO0FBSGdDLEtBQXRDLENBQVA7QUFTRDs7QUFFRCxFQUFBLGlCQUFpQixDQUFDLEtBQUQsRUFBcUIsSUFBckIsRUFBOEI7QUFDN0MsUUFBSSxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDckIsVUFBSSxDQUFDLEtBQUwsRUFBWTtBQUNWLGVBQU8sU0FBUDtBQUNEOztBQUNELGFBQU8sSUFBSSxRQUFKLENBQWEsS0FBYixDQUFQO0FBQ0Q7O0FBQ0QsV0FBTyxNQUFNLGlCQUFOLENBQXdCLEtBQXhCLEVBQStCLElBQS9CLENBQVA7QUFDRDs7QUFpQkQsRUFBQSxRQUFRLEdBQUE7QUFDTixTQUFLLE9BQUwsQ0FBYSxLQUFiO0FBQ0EsU0FBSyxVQUFMLENBQWdCLFFBQWhCO0FBQ0Q7O0FBekNpRCxDQUFwRDs7QUF3QkUsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQVEsUUFBZDtBQUF3QixFQUFBLE1BQU0sRUFBRTtBQUFoQyxDQUFELENBQ1QsQ0FBQSxFLHdCQUFBLEUsT0FBQSxFLEtBQTBCLENBQTFCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxFQUNULENBQUEsRSx3QkFBQSxFLFdBQUEsRSxLQUFnRCxDQUFoRCxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLEtBQUssQ0FBQyxxQkFBRCxDQUNOLENBQUEsRSx3QkFBQSxFLFlBQUEsRSxLQUEyQixDQUEzQixDQUFBOztBQTlCVyxjQUFjLEdBQUEsZ0JBQUEsR0FBQSxVQUFBLENBQUEsQ0FEMUIsYUFBYSxDQUFDLHNCQUFELENBQ2EsQ0FBQSxFQUFkLGNBQWMsQ0FBZDtTQUFBLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vZGF0ZXRpbWUtZmllbGQnO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIHF1ZXJ5IH0gZnJvbSAnQHBvbHltZXIvZGVjb3JhdG9ycy9saWIvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2RvcGVlcy1jb3JlL2xpYi9kYXRldGltZSc7XG5pbXBvcnQgeyBWYWx1ZUZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQgeyBQaWNrZXIgfSBmcm9tICcuL3BpY2tlcic7XG5pbXBvcnQgeyBEYXRlVGltZUZpZWxkIH0gZnJvbSAnLi9kYXRldGltZS1maWVsZCc7XG5pbXBvcnQgeyBzcHJpbnRmIH0gZnJvbSAnZG9wZWVzLWNvcmUvbGliL3N0cmluZyc7XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLWRhdGV0aW1lLXBpY2tlcicpXG5leHBvcnQgY2xhc3MgRGF0ZVRpbWVQaWNrZXIgZXh0ZW5kcyBQaWNrZXI8RGF0ZVRpbWU+IGltcGxlbWVudHMgVmFsdWVGaWVsZDxEYXRlVGltZXx1bmRlZmluZWQ+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gUGlja2VyLmNyZWF0ZVRlbXBsYXRlKERhdGVUaW1lUGlja2VyLCB7XG4gICAgICBpbXBsZW1lbnRhdGlvbjogJ2RvcGUtZGF0ZXRpbWUtZmllbGQnLFxuICAgICAgY3NzOiAnZG9wZS1kYXRldGltZS1maWVsZHtoZWlnaHQ6dmFyKC0tdGltZS1oZWlnaHQsMTRyZW0pfScsXG4gICAgICBhcmd1bWVudHM6IHtcbiAgICAgICAgZm9ybWF0dGVyOiAnW1tmb3JtYXR0ZXJdXScsXG4gICAgICAgIGVtcHR5OiAne3tlbXB0eX19JyxcbiAgICAgICAgdmFsdWU6ICd7e3ZhbHVlfX0nXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfZGVzZXJpYWxpemVWYWx1ZSh2YWx1ZTogc3RyaW5nfG51bGwsIHR5cGU6IGFueSkge1xuICAgIGlmIChEYXRlVGltZSA9PT0gdHlwZSkge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5fZGVzZXJpYWxpemVWYWx1ZSh2YWx1ZSwgdHlwZSk7XG4gIH1cblxuICBAcHJvcGVydHkoeyB0eXBlOiA8YW55PiBEYXRlVGltZSwgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBEYXRlVGltZXx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KClcbiAgZm9ybWF0dGVyOiAoaXRlbTogRGF0ZVRpbWV8dW5kZWZpbmVkKSA9PiBzdHJpbmc7XG5cbiAgQHF1ZXJ5KCdkb3BlLWRhdGV0aW1lLWZpZWxkJylcbiAgaW5uZXJGaWVsZCE6IERhdGVUaW1lRmllbGQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmVtcHR5ID0gdHJ1ZTtcbiAgICB0aGlzLmZvcm1hdHRlciA9ICh4KSA9PiB4ID8gc3ByaW50ZignJTA0ZC4gJTAyZC4gJTAyZCAlMDJkOiUwMmQnLCB4LnllYXIsIHgubW9udGgsIHguZGF5LCB4LmhvdXJzLCB4Lm1pbnV0ZXMpIDogJyc7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLndyYXBwZXIuZm9jdXMoKTtcbiAgICB0aGlzLmlubmVyRmllbGQuYWN0aXZhdGUoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==