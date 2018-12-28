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
    this.empty = !value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8saUJBQVA7QUFDQSxPQUFPLGFBQVA7QUFDQSxTQUFTLGFBQVQsRUFBd0IsUUFBeEIsRUFBa0MsT0FBbEMsRUFBMkMsS0FBM0MsUUFBd0QsdUNBQXhEO0FBR0EsU0FBUyxNQUFULFFBQXVCLGFBQXZCO0FBU0EsSUFBYSxVQUFVLEdBQUEsWUFBQSxHQUF2QixNQUFhLFVBQWIsU0FBbUMsTUFBbkMsQ0FBNEM7QUE0QjFDLEVBQUEsV0FBQSxHQUFBO0FBQ0U7O0FBWkYsU0FBQSxRQUFBLEdBQXdELENBQUMsQ0FBRCxFQUFJLENBQUosS0FBVSxDQUFDLEtBQUssQ0FBeEU7O0FBTUEsU0FBQSxLQUFBLEdBQTRCLEVBQTVCOztBQU9FLFNBQUssU0FBTCxHQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFGLEVBQUgsR0FBbUIsS0FBSyxXQUFMLElBQW9CLEVBQTlEO0FBQ0Q7O0FBOUJELGFBQVcsUUFBWCxHQUFtQjtBQUNqQixXQUFPLE1BQU0sQ0FBQyxjQUFQLENBQXNCLFlBQXRCLEVBQWtDO0FBQ3ZDLE1BQUEsY0FBYyxFQUFFLGlCQUR1QjtBQUV2QyxNQUFBLFNBQVMsRUFBRTtBQUNULFFBQUEsS0FBSyxFQUFFLFdBREU7QUFFVCxRQUFBLFFBQVEsRUFBRSxjQUZEO0FBR1QsUUFBQSxTQUFTLEVBQUUsZUFIRjtBQUlULFFBQUEsS0FBSyxFQUFFO0FBSkU7QUFGNEIsS0FBbEMsQ0FBUDtBQVNEOztBQXNCRCxFQUFBLFFBQVEsR0FBQTtBQUNOLFNBQUssT0FBTCxDQUFhLEtBQWI7QUFDQSxTQUFLLFVBQUwsQ0FBZ0IsUUFBaEI7QUFDRDs7QUFHRCxFQUFBLFlBQVksQ0FBQyxLQUFELEVBQW1CO0FBQzdCLFNBQUssS0FBTCxHQUFhLENBQUMsS0FBZDtBQUNEOztBQXpDeUMsQ0FBNUM7O0FBY0UsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQixFQUFBLE1BQU0sRUFBRTtBQUF4QixDQUFELENBQ1QsQ0FBQSxFLG9CQUFBLEUsT0FBQSxFLEtBQW1CLENBQW5CLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxFQUNULENBQUEsRSxvQkFBQSxFLFVBQUEsRSxLQUEwRSxDQUExRSxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsRUFDVCxDQUFBLEUsb0JBQUEsRSxXQUFBLEUsS0FBeUMsQ0FBekMsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FDVCxDQUFBLEUsb0JBQUEsRSxPQUFBLEUsS0FBK0IsQ0FBL0IsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxLQUFLLENBQUMsaUJBQUQsQ0FDTixDQUFBLEUsb0JBQUEsRSxZQUFBLEUsS0FBMEIsQ0FBMUIsQ0FBQTs7QUFhQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsT0FBRCxDQUNSLENBQUEsRSxvQkFBQSxFLGNBQUEsRUFFQyxJQUZELENBQUE7O0FBdkNXLFVBQVUsR0FBQSxZQUFBLEdBQUEsVUFBQSxDQUFBLENBRHRCLGFBQWEsQ0FBQyxrQkFBRCxDQUNTLENBQUEsRUFBVixVQUFVLENBQVY7U0FBQSxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2xpc3QtZmllbGQnO1xuaW1wb3J0ICcuL3BpY2tlcic7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgb2JzZXJ2ZSwgcXVlcnkgfSBmcm9tICdAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IFZhbHVlRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7IExpc3RGaWVsZCB9IGZyb20gJy4vbGlzdC1maWVsZCc7XG5pbXBvcnQgeyBQaWNrZXIgfSBmcm9tICcuL3BpY2tlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdEZpZWxkSXRlbTxUPiB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgaWNvbj86IHN0cmluZztcbiAgZGF0YTogVFxufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1saXN0LXBpY2tlcicpXG5leHBvcnQgY2xhc3MgTGlzdFBpY2tlcjxUPiBleHRlbmRzIFBpY2tlcjxUPiBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8VHx1bmRlZmluZWQ+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gUGlja2VyLmNyZWF0ZVRlbXBsYXRlKExpc3RQaWNrZXIsIHtcbiAgICAgIGltcGxlbWVudGF0aW9uOiAnZG9wZS1saXN0LWZpZWxkJyxcbiAgICAgIGFyZ3VtZW50czoge1xuICAgICAgICBpdGVtczogJ1tbaXRlbXNdXScsXG4gICAgICAgIGVxdWFsaXR5OiAnW1tlcXVhbGl0eV1dJyxcbiAgICAgICAgZm9ybWF0dGVyOiAnW1tmb3JtYXR0ZXJdXScsXG4gICAgICAgIHZhbHVlOiAne3t2YWx1ZX19J1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWUgfSlcbiAgdmFsdWU6IFR8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIGVxdWFsaXR5OiAoYTogVHx1bmRlZmluZWQsIGI6IFR8dW5kZWZpbmVkKSA9PiBib29sZWFuID0gKGEsIGIpID0+IGEgPT09IGI7XG5cbiAgQHByb3BlcnR5KClcbiAgZm9ybWF0dGVyOiAoaXRlbTogVHx1bmRlZmluZWQpID0+IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICBpdGVtczogTGlzdEZpZWxkSXRlbTxUPltdID0gW107XG5cbiAgQHF1ZXJ5KCdkb3BlLWxpc3QtZmllbGQnKVxuICBpbm5lckZpZWxkITogTGlzdEZpZWxkPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mb3JtYXR0ZXIgPSB4ID0+IHggPyB4LnRvU3RyaW5nKCkgOiAodGhpcy5wbGFjZWhvbGRlciB8fCAnJyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLndyYXBwZXIuZm9jdXMoKTtcbiAgICB0aGlzLmlubmVyRmllbGQuYWN0aXZhdGUoKTtcbiAgfVxuXG4gIEBvYnNlcnZlKCd2YWx1ZScpXG4gIG9ic2VydmVFbXB0eSh2YWx1ZTogVHx1bmRlZmluZWQpIHtcbiAgICB0aGlzLmVtcHR5ID0gIXZhbHVlO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==