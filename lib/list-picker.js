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

    this.equality = (a, b) => a === b;

    this.items = [];

    this.formatter = x => x ? x.toString() : this.placeholder || '';
  }

  static get template() {
    return Picker.createTemplate(ListPicker_1, {
      implementation: 'dope-list-field',
      arguments: {
        items: '[[items]]',
        equality: '[[equality]]',
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
    this.empty = 0 !== value && !value;
  }

};

__decorate([property({
  type: Object,
  notify: true
})], ListPicker.prototype, "value", void 0);

__decorate([property()], ListPicker.prototype, "equality", void 0);

__decorate([property()], ListPicker.prototype, "formatter", void 0);

__decorate([property({
  type: Array
})], ListPicker.prototype, "items", void 0);

__decorate([query('dope-list-field')], ListPicker.prototype, "innerField", void 0);

__decorate([observe('value')], ListPicker.prototype, "observeEmpty", null);

ListPicker = ListPicker_1 = __decorate([customElement('dope-list-picker')], ListPicker);
export { ListPicker };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8saUJBQVA7QUFDQSxPQUFPLGFBQVA7QUFDQSxTQUFTLGFBQVQsRUFBd0IsUUFBeEIsRUFBa0MsT0FBbEMsRUFBMkMsS0FBM0MsUUFBd0QsdUNBQXhEO0FBR0EsU0FBUyxNQUFULFFBQXVCLGFBQXZCO0FBU0EsSUFBYSxVQUFVLEdBQUEsWUFBQSxHQUF2QixNQUFhLFVBQWIsU0FBbUMsTUFBbkMsQ0FBNEM7QUE0QjFDLEVBQUEsV0FBQSxHQUFBO0FBQ0U7O0FBWkYsU0FBQSxRQUFBLEdBQXdELENBQUMsQ0FBRCxFQUFJLENBQUosS0FBVSxDQUFDLEtBQUssQ0FBeEU7O0FBTUEsU0FBQSxLQUFBLEdBQWlDLEVBQWpDOztBQU9FLFNBQUssU0FBTCxHQUFrQixDQUFELElBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFGLEVBQUgsR0FBbUIsS0FBSyxXQUFMLElBQW9CLEVBQWhFO0FBQ0Q7O0FBOUJELGFBQVcsUUFBWCxHQUFtQjtBQUNqQixXQUFPLE1BQU0sQ0FBQyxjQUFQLENBQXNCLFlBQXRCLEVBQWtDO0FBQ3ZDLE1BQUEsY0FBYyxFQUFFLGlCQUR1QjtBQUV2QyxNQUFBLFNBQVMsRUFBRTtBQUNULFFBQUEsS0FBSyxFQUFFLFdBREU7QUFFVCxRQUFBLFFBQVEsRUFBRSxjQUZEO0FBR1QsUUFBQSxTQUFTLEVBQUUsZUFIRjtBQUlULFFBQUEsS0FBSyxFQUFFO0FBSkU7QUFGNEIsS0FBbEMsQ0FBUDtBQVNEOztBQXNCRCxFQUFBLFFBQVEsR0FBQTtBQUNOLFNBQUssT0FBTCxDQUFhLEtBQWI7QUFDQSxTQUFLLFVBQUwsQ0FBZ0IsUUFBaEI7QUFDRDs7QUFHRCxFQUFBLFlBQVksQ0FBQyxLQUFELEVBQW1CO0FBQzdCLFNBQUssS0FBTCxHQUFhLE1BQVksS0FBWixJQUFxQixDQUFDLEtBQW5DO0FBQ0Q7O0FBekN5QyxDQUE1Qzs7QUFjRSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCLEVBQUEsTUFBTSxFQUFFO0FBQXhCLENBQUQsQ0FDVCxDQUFBLEUsb0JBQUEsRSxPQUFBLEUsS0FBbUIsQ0FBbkIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLEVBQ1QsQ0FBQSxFLG9CQUFBLEUsVUFBQSxFLEtBQXlFLENBQXpFLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxFQUNULENBQUEsRSxvQkFBQSxFLFdBQUEsRSxLQUF5QyxDQUF6QyxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSxvQkFBQSxFLE9BQUEsRSxLQUFvQyxDQUFwQyxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLEtBQUssQ0FBQyxpQkFBRCxDQUNOLENBQUEsRSxvQkFBQSxFLFlBQUEsRSxLQUEwQixDQUExQixDQUFBOztBQWFBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxPQUFELENBQ1IsQ0FBQSxFLG9CQUFBLEUsY0FBQSxFQUVDLElBRkQsQ0FBQTs7QUF2Q1csVUFBVSxHQUFBLFlBQUEsR0FBQSxVQUFBLENBQUEsQ0FEdEIsYUFBYSxDQUFDLGtCQUFELENBQ1MsQ0FBQSxFQUFWLFVBQVUsQ0FBVjtTQUFBLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vbGlzdC1maWVsZCc7XG5pbXBvcnQgJy4vcGlja2VyJztcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBvYnNlcnZlLCBxdWVyeSB9IGZyb20gJ0Bwb2x5bWVyL2RlY29yYXRvcnMvbGliL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgVmFsdWVGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgTGlzdEZpZWxkIH0gZnJvbSAnLi9saXN0LWZpZWxkJztcbmltcG9ydCB7IFBpY2tlciB9IGZyb20gJy4vcGlja2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBMaXN0RmllbGRJdGVtPFQ+IHtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBpY29uPzogc3RyaW5nO1xuICBkYXRhOiBUO1xufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1saXN0LXBpY2tlcicpXG5leHBvcnQgY2xhc3MgTGlzdFBpY2tlcjxUPiBleHRlbmRzIFBpY2tlcjxUPiBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8VHx1bmRlZmluZWQ+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gUGlja2VyLmNyZWF0ZVRlbXBsYXRlKExpc3RQaWNrZXIsIHtcbiAgICAgIGltcGxlbWVudGF0aW9uOiAnZG9wZS1saXN0LWZpZWxkJyxcbiAgICAgIGFyZ3VtZW50czoge1xuICAgICAgICBpdGVtczogJ1tbaXRlbXNdXScsXG4gICAgICAgIGVxdWFsaXR5OiAnW1tlcXVhbGl0eV1dJyxcbiAgICAgICAgZm9ybWF0dGVyOiAnW1tmb3JtYXR0ZXJdXScsXG4gICAgICAgIHZhbHVlOiAne3t2YWx1ZX19J1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWUgfSlcbiAgdmFsdWU6IFR8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIGVxdWFsaXR5OiAoYTogVHx1bmRlZmluZWQsIGI6IFR8dW5kZWZpbmVkKSA9PiBib29sZWFuID0gKGEsIGIpID0+IGEgPT09IGJcblxuICBAcHJvcGVydHkoKVxuICBmb3JtYXR0ZXI6IChpdGVtOiBUfHVuZGVmaW5lZCkgPT4gc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gIGl0ZW1zOiBBcnJheTxMaXN0RmllbGRJdGVtPFQ+PiA9IFtdO1xuXG4gIEBxdWVyeSgnZG9wZS1saXN0LWZpZWxkJylcbiAgaW5uZXJGaWVsZCE6IExpc3RGaWVsZDxUPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZm9ybWF0dGVyID0gKHgpID0+IHggPyB4LnRvU3RyaW5nKCkgOiAodGhpcy5wbGFjZWhvbGRlciB8fCAnJyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLndyYXBwZXIuZm9jdXMoKTtcbiAgICB0aGlzLmlubmVyRmllbGQuYWN0aXZhdGUoKTtcbiAgfVxuXG4gIEBvYnNlcnZlKCd2YWx1ZScpXG4gIG9ic2VydmVFbXB0eSh2YWx1ZTogVHx1bmRlZmluZWQpIHtcbiAgICB0aGlzLmVtcHR5ID0gMCAhPT0gPGFueT4gdmFsdWUgJiYgIXZhbHVlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9