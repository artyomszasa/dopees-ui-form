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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8saUJBQVA7QUFDQSxPQUFPLGFBQVA7QUFDQSxTQUFTLGFBQVQsRUFBd0IsUUFBeEIsRUFBa0MsT0FBbEMsRUFBMkMsS0FBM0MsUUFBd0QsdUNBQXhEO0FBR0EsU0FBUyxNQUFULFFBQXVCLGFBQXZCO0FBU0EsSUFBYSxVQUFVLEdBQUEsWUFBQSxHQUF2QixNQUFhLFVBQWIsU0FBbUMsTUFBbkMsQ0FBNEM7QUE0QjFDLEVBQUEsV0FBQSxHQUFBO0FBQ0U7O0FBWkYsU0FBQSxRQUFBLEdBQXdELENBQUMsQ0FBRCxFQUFJLENBQUosS0FBVSxDQUFDLEtBQUssQ0FBeEU7O0FBTUEsU0FBQSxLQUFBLEdBQWlDLEVBQWpDOztBQU9FLFNBQUssU0FBTCxHQUFrQixDQUFELElBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFGLEVBQUgsR0FBbUIsS0FBSyxXQUFMLElBQW9CLEVBQWhFO0FBQ0Q7O0FBOUJELGFBQVcsUUFBWCxHQUFtQjtBQUNqQixXQUFPLE1BQU0sQ0FBQyxjQUFQLENBQXNCLFlBQXRCLEVBQWtDO0FBQ3ZDLE1BQUEsY0FBYyxFQUFFLGlCQUR1QjtBQUV2QyxNQUFBLFNBQVMsRUFBRTtBQUNULFFBQUEsS0FBSyxFQUFFLFdBREU7QUFFVCxRQUFBLFFBQVEsRUFBRSxjQUZEO0FBR1QsUUFBQSxTQUFTLEVBQUUsZUFIRjtBQUlULFFBQUEsS0FBSyxFQUFFO0FBSkU7QUFGNEIsS0FBbEMsQ0FBUDtBQVNEOztBQXNCRCxFQUFBLFFBQVEsR0FBQTtBQUNOLFNBQUssT0FBTCxDQUFhLEtBQWI7QUFDQSxTQUFLLFVBQUwsQ0FBZ0IsUUFBaEI7QUFDRDs7QUFHRCxFQUFBLFlBQVksQ0FBQyxLQUFELEVBQW1CO0FBQzdCLFNBQUssS0FBTCxHQUFhLENBQUMsS0FBZDtBQUNEOztBQXpDeUMsQ0FBNUM7O0FBY0UsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQixFQUFBLE1BQU0sRUFBRTtBQUF4QixDQUFELENBQ1QsQ0FBQSxFLG9CQUFBLEUsT0FBQSxFLEtBQW1CLENBQW5CLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxFQUNULENBQUEsRSxvQkFBQSxFLFVBQUEsRSxLQUF5RSxDQUF6RSxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsRUFDVCxDQUFBLEUsb0JBQUEsRSxXQUFBLEUsS0FBeUMsQ0FBekMsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FDVCxDQUFBLEUsb0JBQUEsRSxPQUFBLEUsS0FBb0MsQ0FBcEMsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxLQUFLLENBQUMsaUJBQUQsQ0FDTixDQUFBLEUsb0JBQUEsRSxZQUFBLEUsS0FBMEIsQ0FBMUIsQ0FBQTs7QUFhQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsT0FBRCxDQUNSLENBQUEsRSxvQkFBQSxFLGNBQUEsRUFFQyxJQUZELENBQUE7O0FBdkNXLFVBQVUsR0FBQSxZQUFBLEdBQUEsVUFBQSxDQUFBLENBRHRCLGFBQWEsQ0FBQyxrQkFBRCxDQUNTLENBQUEsRUFBVixVQUFVLENBQVY7U0FBQSxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2xpc3QtZmllbGQnO1xuaW1wb3J0ICcuL3BpY2tlcic7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgb2JzZXJ2ZSwgcXVlcnkgfSBmcm9tICdAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IFZhbHVlRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7IExpc3RGaWVsZCB9IGZyb20gJy4vbGlzdC1maWVsZCc7XG5pbXBvcnQgeyBQaWNrZXIgfSBmcm9tICcuL3BpY2tlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdEZpZWxkSXRlbTxUPiB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgaWNvbj86IHN0cmluZztcbiAgZGF0YTogVDtcbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtbGlzdC1waWNrZXInKVxuZXhwb3J0IGNsYXNzIExpc3RQaWNrZXI8VD4gZXh0ZW5kcyBQaWNrZXI8VD4gaW1wbGVtZW50cyBWYWx1ZUZpZWxkPFR8dW5kZWZpbmVkPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIFBpY2tlci5jcmVhdGVUZW1wbGF0ZShMaXN0UGlja2VyLCB7XG4gICAgICBpbXBsZW1lbnRhdGlvbjogJ2RvcGUtbGlzdC1maWVsZCcsXG4gICAgICBhcmd1bWVudHM6IHtcbiAgICAgICAgaXRlbXM6ICdbW2l0ZW1zXV0nLFxuICAgICAgICBlcXVhbGl0eTogJ1tbZXF1YWxpdHldXScsXG4gICAgICAgIGZvcm1hdHRlcjogJ1tbZm9ybWF0dGVyXV0nLFxuICAgICAgICB2YWx1ZTogJ3t7dmFsdWV9fSdcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBUfHVuZGVmaW5lZDtcblxuICBAcHJvcGVydHkoKVxuICBlcXVhbGl0eTogKGE6IFR8dW5kZWZpbmVkLCBiOiBUfHVuZGVmaW5lZCkgPT4gYm9vbGVhbiA9IChhLCBiKSA9PiBhID09PSBiXG5cbiAgQHByb3BlcnR5KClcbiAgZm9ybWF0dGVyOiAoaXRlbTogVHx1bmRlZmluZWQpID0+IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICBpdGVtczogQXJyYXk8TGlzdEZpZWxkSXRlbTxUPj4gPSBbXTtcblxuICBAcXVlcnkoJ2RvcGUtbGlzdC1maWVsZCcpXG4gIGlubmVyRmllbGQhOiBMaXN0RmllbGQ8VD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmZvcm1hdHRlciA9ICh4KSA9PiB4ID8geC50b1N0cmluZygpIDogKHRoaXMucGxhY2Vob2xkZXIgfHwgJycpO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy53cmFwcGVyLmZvY3VzKCk7XG4gICAgdGhpcy5pbm5lckZpZWxkLmFjdGl2YXRlKCk7XG4gIH1cblxuICBAb2JzZXJ2ZSgndmFsdWUnKVxuICBvYnNlcnZlRW1wdHkodmFsdWU6IFR8dW5kZWZpbmVkKSB7XG4gICAgdGhpcy5lbXB0eSA9ICF2YWx1ZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==