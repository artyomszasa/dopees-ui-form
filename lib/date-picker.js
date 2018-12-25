var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DatePicker_1;
import "./date-field/date-field.js";
import { customElement, property, query, observe } from "@polymer/decorators/lib/decorators.js";
import { sprintf } from "dopees-core/lib/string.js";
import { Picker } from "./picker/picker.js";
let DatePicker = DatePicker_1 = class DatePicker extends Picker {
  constructor() {
    super();

    this.selection = () => false;

    this.formatter = x => x ? sprintf('%04d. %02d. %02d', x.year, x.month, x.day) : this.placeholder || '';
  }

  static get template() {
    return Picker.createTemplate(DatePicker_1, {
      implementation: 'dope-date-field',
      arguments: {
        years: '[[years]]',
        months: '[[months]]',
        selection: '[[selection]]',
        value: '{{value}}'
      }
    });
  }

  activate() {
    this.wrapper.focus();
    this.innerField.activate();
  }

  observeEmpty(value) {
    this.empty = !value;
  }

};

__decorate([property({
  type: Object,
  notify: true
})], DatePicker.prototype, "value", void 0);

__decorate([property()], DatePicker.prototype, "formatter", void 0);

__decorate([property()], DatePicker.prototype, "selection", void 0);

__decorate([query('dope-date-field')], DatePicker.prototype, "innerField", void 0);

__decorate([observe('value')], DatePicker.prototype, "observeEmpty", null);

DatePicker = DatePicker_1 = __decorate([customElement('dope-date-picker')], DatePicker);
export { DatePicker };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sNEJBQVA7QUFDQSxTQUFTLGFBQVQsRUFBd0IsUUFBeEIsRUFBa0MsS0FBbEMsRUFBeUMsT0FBekMsUUFBd0QsdUNBQXhEO0FBRUEsU0FBUyxPQUFULFFBQXdCLDJCQUF4QjtBQUVBLFNBQVMsTUFBVCxRQUF1QixvQkFBdkI7QUFLQSxJQUFhLFVBQVUsR0FBQSxZQUFBLEdBQXZCLE1BQWEsVUFBYixTQUFnQyxNQUFoQyxDQUFnRDtBQXlCOUMsRUFBQSxXQUFBLEdBQUE7QUFDRTs7QUFORixTQUFBLFNBQUEsR0FBeUMsTUFBTSxLQUEvQzs7QUFPRSxTQUFLLFNBQUwsR0FBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsa0JBQUQsRUFBcUIsQ0FBQyxDQUFDLElBQXZCLEVBQTZCLENBQUMsQ0FBQyxLQUEvQixFQUFzQyxDQUFDLENBQUMsR0FBeEMsQ0FBVixHQUEwRCxLQUFLLFdBQUwsSUFBb0IsRUFBckc7QUFDRDs7QUEzQkQsYUFBVyxRQUFYLEdBQW1CO0FBQ2pCLFdBQU8sTUFBTSxDQUFDLGNBQVAsQ0FBc0IsWUFBdEIsRUFBa0M7QUFDdkMsTUFBQSxjQUFjLEVBQUUsaUJBRHVCO0FBRXZDLE1BQUEsU0FBUyxFQUFFO0FBQ1QsUUFBQSxLQUFLLEVBQUUsV0FERTtBQUVULFFBQUEsTUFBTSxFQUFFLFlBRkM7QUFHVCxRQUFBLFNBQVMsRUFBRSxlQUhGO0FBSVQsUUFBQSxLQUFLLEVBQUU7QUFKRTtBQUY0QixLQUFsQyxDQUFQO0FBU0Q7O0FBbUJELEVBQUEsUUFBUSxHQUFBO0FBQ04sU0FBSyxPQUFMLENBQWEsS0FBYjtBQUNBLFNBQUssVUFBTCxDQUFnQixRQUFoQjtBQUNEOztBQUdELEVBQUEsWUFBWSxDQUFDLEtBQUQsRUFBMEI7QUFDcEMsU0FBSyxLQUFMLEdBQWEsQ0FBQyxLQUFkO0FBQ0Q7O0FBdEM2QyxDQUFoRDs7QUFjRSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCLEVBQUEsTUFBTSxFQUFFO0FBQXhCLENBQUQsQ0FDVCxDQUFBLEUsb0JBQUEsRSxPQUFBLEUsS0FBMEIsQ0FBMUIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLEVBQ1QsQ0FBQSxFLG9CQUFBLEUsV0FBQSxFLEtBQWdELENBQWhELENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxFQUNULENBQUEsRSxvQkFBQSxFLFdBQUEsRSxLQUFxRCxDQUFyRCxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLEtBQUssQ0FBQyxpQkFBRCxDQUNOLENBQUEsRSxvQkFBQSxFLFlBQUEsRSxLQUF1QixDQUF2QixDQUFBOztBQWFBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxPQUFELENBQ1IsQ0FBQSxFLG9CQUFBLEUsY0FBQSxFQUVDLElBRkQsQ0FBQTs7QUFwQ1csVUFBVSxHQUFBLFlBQUEsR0FBQSxVQUFBLENBQUEsQ0FEdEIsYUFBYSxDQUFDLGtCQUFELENBQ1MsQ0FBQSxFQUFWLFVBQVUsQ0FBVjtTQUFBLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vZGF0ZS1maWVsZC9kYXRlLWZpZWxkJztcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBxdWVyeSwgb2JzZXJ2ZSB9IGZyb20gJ0Bwb2x5bWVyL2RlY29yYXRvcnMvbGliL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdkb3BlZXMtY29yZS9saWIvZGF0ZXRpbWUnO1xuaW1wb3J0IHsgc3ByaW50ZiB9IGZyb20gJ2RvcGVlcy1jb3JlL2xpYi9zdHJpbmcnO1xuaW1wb3J0IHsgVmFsdWVGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgUGlja2VyIH0gZnJvbSAnLi9waWNrZXIvcGlja2VyJztcbmltcG9ydCB7IERhdGVGaWVsZCB9IGZyb20gJy4vZGF0ZS1maWVsZC9kYXRlLWZpZWxkJztcblxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1kYXRlLXBpY2tlcicpXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlciBleHRlbmRzIFBpY2tlcjxEYXRlVGltZT4gaW1wbGVtZW50cyBWYWx1ZUZpZWxkPERhdGVUaW1lfHVuZGVmaW5lZD4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBQaWNrZXIuY3JlYXRlVGVtcGxhdGUoRGF0ZVBpY2tlciwge1xuICAgICAgaW1wbGVtZW50YXRpb246ICdkb3BlLWRhdGUtZmllbGQnLFxuICAgICAgYXJndW1lbnRzOiB7XG4gICAgICAgIHllYXJzOiAnW1t5ZWFyc11dJyxcbiAgICAgICAgbW9udGhzOiAnW1ttb250aHNdXScsXG4gICAgICAgIHNlbGVjdGlvbjogJ1tbc2VsZWN0aW9uXV0nLFxuICAgICAgICB2YWx1ZTogJ3t7dmFsdWV9fSdcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBEYXRlVGltZXx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KClcbiAgZm9ybWF0dGVyOiAoaXRlbTogRGF0ZVRpbWV8dW5kZWZpbmVkKSA9PiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KClcbiAgc2VsZWN0aW9uOiAoZGF0ZTogRGF0ZVRpbWUpID0+IGJvb2xlYW4gPSAoKSA9PiBmYWxzZTtcblxuICBAcXVlcnkoJ2RvcGUtZGF0ZS1maWVsZCcpXG4gIGlubmVyRmllbGQhOiBEYXRlRmllbGQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmZvcm1hdHRlciA9IHggPT4geCA/IHNwcmludGYoJyUwNGQuICUwMmQuICUwMmQnLCB4LnllYXIsIHgubW9udGgsIHguZGF5KSA6ICh0aGlzLnBsYWNlaG9sZGVyIHx8ICcnKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMud3JhcHBlci5mb2N1cygpO1xuICAgIHRoaXMuaW5uZXJGaWVsZC5hY3RpdmF0ZSgpO1xuICB9XG5cbiAgQG9ic2VydmUoJ3ZhbHVlJylcbiAgb2JzZXJ2ZUVtcHR5KHZhbHVlOiBEYXRlVGltZXx1bmRlZmluZWQpIHtcbiAgICB0aGlzLmVtcHR5ID0gIXZhbHVlO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==