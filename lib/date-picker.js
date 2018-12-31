var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DatePicker_1;
import "./date-field.js";
import { customElement, property, query, observe } from "@polymer/decorators/lib/decorators.js";
import { sprintf } from "dopees-core/lib/string.js";
import { Picker } from "./picker.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8saUJBQVA7QUFDQSxTQUFTLGFBQVQsRUFBd0IsUUFBeEIsRUFBa0MsS0FBbEMsRUFBeUMsT0FBekMsUUFBd0QsdUNBQXhEO0FBRUEsU0FBUyxPQUFULFFBQXdCLDJCQUF4QjtBQUVBLFNBQVMsTUFBVCxRQUF1QixhQUF2QjtBQUlBLElBQWEsVUFBVSxHQUFBLFlBQUEsR0FBdkIsTUFBYSxVQUFiLFNBQWdDLE1BQWhDLENBQWdEO0FBeUI5QyxFQUFBLFdBQUEsR0FBQTtBQUNFOztBQU5GLFNBQUEsU0FBQSxHQUF5QyxNQUFNLEtBQS9DOztBQU9FLFNBQUssU0FBTCxHQUFrQixDQUFELElBQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxrQkFBRCxFQUFxQixDQUFDLENBQUMsSUFBdkIsRUFBNkIsQ0FBQyxDQUFDLEtBQS9CLEVBQXNDLENBQUMsQ0FBQyxHQUF4QyxDQUFWLEdBQTBELEtBQUssV0FBTCxJQUFvQixFQUF2RztBQUNEOztBQTNCRCxhQUFXLFFBQVgsR0FBbUI7QUFDakIsV0FBTyxNQUFNLENBQUMsY0FBUCxDQUFzQixZQUF0QixFQUFrQztBQUN2QyxNQUFBLGNBQWMsRUFBRSxpQkFEdUI7QUFFdkMsTUFBQSxTQUFTLEVBQUU7QUFDVCxRQUFBLEtBQUssRUFBRSxXQURFO0FBRVQsUUFBQSxNQUFNLEVBQUUsWUFGQztBQUdULFFBQUEsU0FBUyxFQUFFLGVBSEY7QUFJVCxRQUFBLEtBQUssRUFBRTtBQUpFO0FBRjRCLEtBQWxDLENBQVA7QUFTRDs7QUFtQkQsRUFBQSxRQUFRLEdBQUE7QUFDTixTQUFLLE9BQUwsQ0FBYSxLQUFiO0FBQ0EsU0FBSyxVQUFMLENBQWdCLFFBQWhCO0FBQ0Q7O0FBR0QsRUFBQSxZQUFZLENBQUMsS0FBRCxFQUEwQjtBQUNwQyxTQUFLLEtBQUwsR0FBYSxDQUFDLEtBQWQ7QUFDRDs7QUF0QzZDLENBQWhEOztBQWNFLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0IsRUFBQSxNQUFNLEVBQUU7QUFBeEIsQ0FBRCxDQUNULENBQUEsRSxvQkFBQSxFLE9BQUEsRSxLQUEwQixDQUExQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsRUFDVCxDQUFBLEUsb0JBQUEsRSxXQUFBLEUsS0FBZ0QsQ0FBaEQsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLEVBQ1QsQ0FBQSxFLG9CQUFBLEUsV0FBQSxFLEtBQW9ELENBQXBELENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsS0FBSyxDQUFDLGlCQUFELENBQ04sQ0FBQSxFLG9CQUFBLEUsWUFBQSxFLEtBQXVCLENBQXZCLENBQUE7O0FBYUEsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLE9BQUQsQ0FDUixDQUFBLEUsb0JBQUEsRSxjQUFBLEVBRUMsSUFGRCxDQUFBOztBQXBDVyxVQUFVLEdBQUEsWUFBQSxHQUFBLFVBQUEsQ0FBQSxDQUR0QixhQUFhLENBQUMsa0JBQUQsQ0FDUyxDQUFBLEVBQVYsVUFBVSxDQUFWO1NBQUEsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9kYXRlLWZpZWxkJztcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBxdWVyeSwgb2JzZXJ2ZSB9IGZyb20gJ0Bwb2x5bWVyL2RlY29yYXRvcnMvbGliL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdkb3BlZXMtY29yZS9saWIvZGF0ZXRpbWUnO1xuaW1wb3J0IHsgc3ByaW50ZiB9IGZyb20gJ2RvcGVlcy1jb3JlL2xpYi9zdHJpbmcnO1xuaW1wb3J0IHsgVmFsdWVGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgUGlja2VyIH0gZnJvbSAnLi9waWNrZXInO1xuaW1wb3J0IHsgRGF0ZUZpZWxkIH0gZnJvbSAnLi9kYXRlLWZpZWxkJztcblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtZGF0ZS1waWNrZXInKVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBQaWNrZXI8RGF0ZVRpbWU+IGltcGxlbWVudHMgVmFsdWVGaWVsZDxEYXRlVGltZXx1bmRlZmluZWQ+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gUGlja2VyLmNyZWF0ZVRlbXBsYXRlKERhdGVQaWNrZXIsIHtcbiAgICAgIGltcGxlbWVudGF0aW9uOiAnZG9wZS1kYXRlLWZpZWxkJyxcbiAgICAgIGFyZ3VtZW50czoge1xuICAgICAgICB5ZWFyczogJ1tbeWVhcnNdXScsXG4gICAgICAgIG1vbnRoczogJ1tbbW9udGhzXV0nLFxuICAgICAgICBzZWxlY3Rpb246ICdbW3NlbGVjdGlvbl1dJyxcbiAgICAgICAgdmFsdWU6ICd7e3ZhbHVlfX0nXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogRGF0ZVRpbWV8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIGZvcm1hdHRlcjogKGl0ZW06IERhdGVUaW1lfHVuZGVmaW5lZCkgPT4gc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHNlbGVjdGlvbjogKGRhdGU6IERhdGVUaW1lKSA9PiBib29sZWFuID0gKCkgPT4gZmFsc2VcblxuICBAcXVlcnkoJ2RvcGUtZGF0ZS1maWVsZCcpXG4gIGlubmVyRmllbGQhOiBEYXRlRmllbGQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmZvcm1hdHRlciA9ICh4KSA9PiB4ID8gc3ByaW50ZignJTA0ZC4gJTAyZC4gJTAyZCcsIHgueWVhciwgeC5tb250aCwgeC5kYXkpIDogKHRoaXMucGxhY2Vob2xkZXIgfHwgJycpO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy53cmFwcGVyLmZvY3VzKCk7XG4gICAgdGhpcy5pbm5lckZpZWxkLmFjdGl2YXRlKCk7XG4gIH1cblxuICBAb2JzZXJ2ZSgndmFsdWUnKVxuICBvYnNlcnZlRW1wdHkodmFsdWU6IERhdGVUaW1lfHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZW1wdHkgPSAhdmFsdWU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=