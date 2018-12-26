var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ListPicker_1;
import "./list-field.js";
import "./picker.js";
import { customElement, property, observe, query } from "@polymer/decorators/lib/decorators.js";
import { Picker } from "./picker.js";
let ListPicker = ListPicker_1 = class ListPicker extends Picker {
  constructor() {
    super();
    this.items = [];

    this.formatter = x => x ? x.toString() : this.placeholder || '';
  }

  static get template() {
    return Picker.createTemplate(ListPicker_1, {
      implementation: 'dope-list-field',
      arguments: {
        items: '[[items]]',
        formatter: '[[formatter]]',
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
})], ListPicker.prototype, "value", void 0);

__decorate([property()], ListPicker.prototype, "formatter", void 0);

__decorate([property({
  type: Array
})], ListPicker.prototype, "items", void 0);

__decorate([query('dope-list-field')], ListPicker.prototype, "innerField", void 0);

__decorate([observe('value')], ListPicker.prototype, "observeEmpty", null);

ListPicker = ListPicker_1 = __decorate([customElement('dope-list-picker')], ListPicker);
export { ListPicker };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8saUJBQVA7QUFDQSxPQUFPLGFBQVA7QUFDQSxTQUFTLGFBQVQsRUFBd0IsUUFBeEIsRUFBa0MsT0FBbEMsRUFBMkMsS0FBM0MsUUFBd0QsdUNBQXhEO0FBR0EsU0FBUyxNQUFULFFBQXVCLGFBQXZCO0FBU0EsSUFBYSxVQUFVLEdBQUEsWUFBQSxHQUF2QixNQUFhLFVBQWIsU0FBbUMsTUFBbkMsQ0FBNEM7QUF3QjFDLEVBQUEsV0FBQSxHQUFBO0FBQ0U7QUFORixTQUFBLEtBQUEsR0FBNEIsRUFBNUI7O0FBT0UsU0FBSyxTQUFMLEdBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQUYsRUFBSCxHQUFtQixLQUFLLFdBQUwsSUFBb0IsRUFBOUQ7QUFDRDs7QUExQkQsYUFBVyxRQUFYLEdBQW1CO0FBQ2pCLFdBQU8sTUFBTSxDQUFDLGNBQVAsQ0FBc0IsWUFBdEIsRUFBa0M7QUFDdkMsTUFBQSxjQUFjLEVBQUUsaUJBRHVCO0FBRXZDLE1BQUEsU0FBUyxFQUFFO0FBQ1QsUUFBQSxLQUFLLEVBQUUsV0FERTtBQUVULFFBQUEsU0FBUyxFQUFFLGVBRkY7QUFHVCxRQUFBLEtBQUssRUFBRTtBQUhFO0FBRjRCLEtBQWxDLENBQVA7QUFRRDs7QUFtQkQsRUFBQSxRQUFRLEdBQUE7QUFDTixTQUFLLE9BQUwsQ0FBYSxLQUFiO0FBQ0EsU0FBSyxVQUFMLENBQWdCLFFBQWhCO0FBQ0Q7O0FBR0QsRUFBQSxZQUFZLENBQUMsS0FBRCxFQUFtQjtBQUM3QixTQUFLLEtBQUwsR0FBYSxDQUFDLEtBQWQ7QUFDRDs7QUFyQ3lDLENBQTVDOztBQWFFLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0IsRUFBQSxNQUFNLEVBQUU7QUFBeEIsQ0FBRCxDQUNULENBQUEsRSxvQkFBQSxFLE9BQUEsRSxLQUFtQixDQUFuQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsRUFDVCxDQUFBLEUsb0JBQUEsRSxXQUFBLEUsS0FBeUMsQ0FBekMsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FDVCxDQUFBLEUsb0JBQUEsRSxPQUFBLEUsS0FBK0IsQ0FBL0IsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxLQUFLLENBQUMsaUJBQUQsQ0FDTixDQUFBLEUsb0JBQUEsRSxZQUFBLEUsS0FBMEIsQ0FBMUIsQ0FBQTs7QUFhQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsT0FBRCxDQUNSLENBQUEsRSxvQkFBQSxFLGNBQUEsRUFFQyxJQUZELENBQUE7O0FBbkNXLFVBQVUsR0FBQSxZQUFBLEdBQUEsVUFBQSxDQUFBLENBRHRCLGFBQWEsQ0FBQyxrQkFBRCxDQUNTLENBQUEsRUFBVixVQUFVLENBQVY7U0FBQSxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2xpc3QtZmllbGQnO1xuaW1wb3J0ICcuL3BpY2tlcic7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgb2JzZXJ2ZSwgcXVlcnkgfSBmcm9tICdAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IFZhbHVlRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7IExpc3RGaWVsZCB9IGZyb20gJy4vbGlzdC1maWVsZCc7XG5pbXBvcnQgeyBQaWNrZXIgfSBmcm9tICcuL3BpY2tlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdEZpZWxkSXRlbTxUPiB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgaWNvbj86IHN0cmluZztcbiAgZGF0YTogVFxufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1saXN0LXBpY2tlcicpXG5leHBvcnQgY2xhc3MgTGlzdFBpY2tlcjxUPiBleHRlbmRzIFBpY2tlcjxUPiBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8VHx1bmRlZmluZWQ+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gUGlja2VyLmNyZWF0ZVRlbXBsYXRlKExpc3RQaWNrZXIsIHtcbiAgICAgIGltcGxlbWVudGF0aW9uOiAnZG9wZS1saXN0LWZpZWxkJyxcbiAgICAgIGFyZ3VtZW50czoge1xuICAgICAgICBpdGVtczogJ1tbaXRlbXNdXScsXG4gICAgICAgIGZvcm1hdHRlcjogJ1tbZm9ybWF0dGVyXV0nLFxuICAgICAgICB2YWx1ZTogJ3t7dmFsdWV9fSdcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBUfHVuZGVmaW5lZDtcblxuICBAcHJvcGVydHkoKVxuICBmb3JtYXR0ZXI6IChpdGVtOiBUfHVuZGVmaW5lZCkgPT4gc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gIGl0ZW1zOiBMaXN0RmllbGRJdGVtPFQ+W10gPSBbXTtcblxuICBAcXVlcnkoJ2RvcGUtbGlzdC1maWVsZCcpXG4gIGlubmVyRmllbGQhOiBMaXN0RmllbGQ8VD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmZvcm1hdHRlciA9IHggPT4geCA/IHgudG9TdHJpbmcoKSA6ICh0aGlzLnBsYWNlaG9sZGVyIHx8ICcnKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMud3JhcHBlci5mb2N1cygpO1xuICAgIHRoaXMuaW5uZXJGaWVsZC5hY3RpdmF0ZSgpO1xuICB9XG5cbiAgQG9ic2VydmUoJ3ZhbHVlJylcbiAgb2JzZXJ2ZUVtcHR5KHZhbHVlOiBUfHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZW1wdHkgPSAhdmFsdWU7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9