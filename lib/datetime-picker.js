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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGV0aW1lLXBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLHFCQUFQO0FBQ0EsU0FBUyxhQUFULEVBQXdCLFFBQXhCLEVBQWtDLEtBQWxDLFFBQXdELHVDQUF4RDtBQUNBLFNBQVMsUUFBVCxRQUF5Qiw2QkFBekI7QUFFQSxTQUFTLE1BQVQsUUFBdUIsYUFBdkI7QUFFQSxTQUFTLE9BQVQsUUFBd0IsMkJBQXhCO0FBSUEsSUFBYSxjQUFjLEdBQUEsZ0JBQUEsR0FBM0IsTUFBYSxjQUFiLFNBQW9DLE1BQXBDLENBQW9EO0FBZ0NsRCxFQUFBLFdBQUEsR0FBQTtBQUNFO0FBQ0EsU0FBSyxLQUFMLEdBQWEsSUFBYjs7QUFDQSxTQUFLLFNBQUwsR0FBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsNEJBQUQsRUFBK0IsQ0FBQyxDQUFDLElBQWpDLEVBQXVDLENBQUMsQ0FBQyxLQUF6QyxFQUFnRCxDQUFDLENBQUMsR0FBbEQsRUFBdUQsQ0FBQyxDQUFDLEtBQXpELEVBQWdFLENBQUMsQ0FBQyxPQUFsRSxDQUFWLEdBQXVGLEVBQTlHO0FBQ0Q7O0FBbkNELGFBQVcsUUFBWCxHQUFtQjtBQUNqQixXQUFPLE1BQU0sQ0FBQyxjQUFQLENBQXNCLGdCQUF0QixFQUFzQztBQUMzQyxNQUFBLGNBQWMsRUFBRSxxQkFEMkI7QUFFM0MsTUFBQSxHQUFHLEVBQUUsc0RBRnNDO0FBRzNDLE1BQUEsU0FBUyxFQUFFO0FBQ1QsUUFBQSxTQUFTLEVBQUUsZUFERjtBQUVULFFBQUEsS0FBSyxFQUFFLFdBRkU7QUFHVCxRQUFBLEtBQUssRUFBRTtBQUhFO0FBSGdDLEtBQXRDLENBQVA7QUFTRDs7QUFFRCxFQUFBLGlCQUFpQixDQUFDLEtBQUQsRUFBcUIsSUFBckIsRUFBOEI7QUFDN0MsUUFBSSxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDckIsVUFBSSxDQUFDLEtBQUwsRUFBWTtBQUNWLGVBQU8sU0FBUDtBQUNEOztBQUNELGFBQU8sSUFBSSxRQUFKLENBQWEsS0FBYixDQUFQO0FBQ0Q7O0FBQ0QsV0FBTyxNQUFNLGlCQUFOLENBQXdCLEtBQXhCLEVBQStCLElBQS9CLENBQVA7QUFDRDs7QUFpQkQsRUFBQSxRQUFRLEdBQUE7QUFDTixTQUFLLE9BQUwsQ0FBYSxLQUFiO0FBQ0EsU0FBSyxVQUFMLENBQWdCLFFBQWhCO0FBQ0Q7O0FBekNpRCxDQUFwRDs7QUF3QkUsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQU8sUUFBYjtBQUF1QixFQUFBLE1BQU0sRUFBRTtBQUEvQixDQUFELENBQ1QsQ0FBQSxFLHdCQUFBLEUsT0FBQSxFLEtBQTBCLENBQTFCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxFQUNULENBQUEsRSx3QkFBQSxFLFdBQUEsRSxLQUFnRCxDQUFoRCxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLEtBQUssQ0FBQyxxQkFBRCxDQUNOLENBQUEsRSx3QkFBQSxFLFlBQUEsRSxLQUEyQixDQUEzQixDQUFBOztBQTlCVyxjQUFjLEdBQUEsZ0JBQUEsR0FBQSxVQUFBLENBQUEsQ0FEMUIsYUFBYSxDQUFDLHNCQUFELENBQ2EsQ0FBQSxFQUFkLGNBQWMsQ0FBZDtTQUFBLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vZGF0ZXRpbWUtZmllbGQnO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIHF1ZXJ5LCBvYnNlcnZlIH0gZnJvbSAnQHBvbHltZXIvZGVjb3JhdG9ycy9saWIvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2RvcGVlcy1jb3JlL2xpYi9kYXRldGltZSc7XG5pbXBvcnQgeyBWYWx1ZUZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQgeyBQaWNrZXIgfSBmcm9tICcuL3BpY2tlcic7XG5pbXBvcnQgeyBEYXRlVGltZUZpZWxkIH0gZnJvbSAnLi9kYXRldGltZS1maWVsZCc7XG5pbXBvcnQgeyBzcHJpbnRmIH0gZnJvbSAnZG9wZWVzLWNvcmUvbGliL3N0cmluZyc7XG5cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtZGF0ZXRpbWUtcGlja2VyJylcbmV4cG9ydCBjbGFzcyBEYXRlVGltZVBpY2tlciBleHRlbmRzIFBpY2tlcjxEYXRlVGltZT4gaW1wbGVtZW50cyBWYWx1ZUZpZWxkPERhdGVUaW1lfHVuZGVmaW5lZD4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBQaWNrZXIuY3JlYXRlVGVtcGxhdGUoRGF0ZVRpbWVQaWNrZXIsIHtcbiAgICAgIGltcGxlbWVudGF0aW9uOiAnZG9wZS1kYXRldGltZS1maWVsZCcsXG4gICAgICBjc3M6ICdkb3BlLWRhdGV0aW1lLWZpZWxke2hlaWdodDp2YXIoLS10aW1lLWhlaWdodCwxNHJlbSl9JyxcbiAgICAgIGFyZ3VtZW50czoge1xuICAgICAgICBmb3JtYXR0ZXI6ICdbW2Zvcm1hdHRlcl1dJyxcbiAgICAgICAgZW1wdHk6ICd7e2VtcHR5fX0nLFxuICAgICAgICB2YWx1ZTogJ3t7dmFsdWV9fSdcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9kZXNlcmlhbGl6ZVZhbHVlKHZhbHVlOiBzdHJpbmd8bnVsbCwgdHlwZTogYW55KSB7XG4gICAgaWYgKERhdGVUaW1lID09PSB0eXBlKSB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLl9kZXNlcmlhbGl6ZVZhbHVlKHZhbHVlLCB0eXBlKTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IDxhbnk+RGF0ZVRpbWUsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogRGF0ZVRpbWV8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIGZvcm1hdHRlcjogKGl0ZW06IERhdGVUaW1lfHVuZGVmaW5lZCkgPT4gc3RyaW5nO1xuXG4gIEBxdWVyeSgnZG9wZS1kYXRldGltZS1maWVsZCcpXG4gIGlubmVyRmllbGQhOiBEYXRlVGltZUZpZWxkO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5lbXB0eSA9IHRydWU7XG4gICAgdGhpcy5mb3JtYXR0ZXIgPSB4ID0+IHggPyBzcHJpbnRmKCclMDRkLiAlMDJkLiAlMDJkICUwMmQ6JTAyZCcsIHgueWVhciwgeC5tb250aCwgeC5kYXksIHguaG91cnMsIHgubWludXRlcykgOiAnJztcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMud3JhcHBlci5mb2N1cygpO1xuICAgIHRoaXMuaW5uZXJGaWVsZC5hY3RpdmF0ZSgpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==