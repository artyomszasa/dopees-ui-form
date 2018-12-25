var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ListPicker_1;
import "../list-field/list-field.js";
import "../picker/picker.js";
import { customElement, property, observe, query } from "@polymer/decorators/lib/decorators.js";
import { Picker } from "../picker/picker.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sNkJBQVA7QUFDQSxPQUFPLHFCQUFQO0FBQ0EsU0FBUyxhQUFULEVBQXdCLFFBQXhCLEVBQWtDLE9BQWxDLEVBQTJDLEtBQTNDLFFBQXdELHVDQUF4RDtBQUdBLFNBQVMsTUFBVCxRQUF1QixxQkFBdkI7QUFTQSxJQUFhLFVBQVUsR0FBQSxZQUFBLEdBQXZCLE1BQWEsVUFBYixTQUFtQyxNQUFuQyxDQUE0QztBQXdCMUMsRUFBQSxXQUFBLEdBQUE7QUFDRTtBQU5GLFNBQUEsS0FBQSxHQUE0QixFQUE1Qjs7QUFPRSxTQUFLLFNBQUwsR0FBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBRixFQUFILEdBQW1CLEtBQUssV0FBTCxJQUFvQixFQUE5RDtBQUNEOztBQTFCRCxhQUFXLFFBQVgsR0FBbUI7QUFDakIsV0FBTyxNQUFNLENBQUMsY0FBUCxDQUFzQixZQUF0QixFQUFrQztBQUN2QyxNQUFBLGNBQWMsRUFBRSxpQkFEdUI7QUFFdkMsTUFBQSxTQUFTLEVBQUU7QUFDVCxRQUFBLEtBQUssRUFBRSxXQURFO0FBRVQsUUFBQSxTQUFTLEVBQUUsZUFGRjtBQUdULFFBQUEsS0FBSyxFQUFFO0FBSEU7QUFGNEIsS0FBbEMsQ0FBUDtBQVFEOztBQW1CRCxFQUFBLFFBQVEsR0FBQTtBQUNOLFNBQUssT0FBTCxDQUFhLEtBQWI7QUFDQSxTQUFLLFVBQUwsQ0FBZ0IsUUFBaEI7QUFDRDs7QUFHRCxFQUFBLFlBQVksQ0FBQyxLQUFELEVBQW1CO0FBQzdCLFNBQUssS0FBTCxHQUFhLENBQUMsS0FBZDtBQUNEOztBQXJDeUMsQ0FBNUM7O0FBYUUsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQixFQUFBLE1BQU0sRUFBRTtBQUF4QixDQUFELENBQ1QsQ0FBQSxFLG9CQUFBLEUsT0FBQSxFLEtBQW1CLENBQW5CLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxFQUNULENBQUEsRSxvQkFBQSxFLFdBQUEsRSxLQUF5QyxDQUF6QyxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSxvQkFBQSxFLE9BQUEsRSxLQUErQixDQUEvQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLEtBQUssQ0FBQyxpQkFBRCxDQUNOLENBQUEsRSxvQkFBQSxFLFlBQUEsRSxLQUEwQixDQUExQixDQUFBOztBQWFBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxPQUFELENBQ1IsQ0FBQSxFLG9CQUFBLEUsY0FBQSxFQUVDLElBRkQsQ0FBQTs7QUFuQ1csVUFBVSxHQUFBLFlBQUEsR0FBQSxVQUFBLENBQUEsQ0FEdEIsYUFBYSxDQUFDLGtCQUFELENBQ1MsQ0FBQSxFQUFWLFVBQVUsQ0FBVjtTQUFBLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2xpc3QtZmllbGQvbGlzdC1maWVsZCc7XG5pbXBvcnQgJy4uL3BpY2tlci9waWNrZXInO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIG9ic2VydmUsIHF1ZXJ5IH0gZnJvbSAnQHBvbHltZXIvZGVjb3JhdG9ycy9saWIvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBWYWx1ZUZpZWxkIH0gZnJvbSAnLi4vZmllbGQnO1xuaW1wb3J0IHsgTGlzdEZpZWxkIH0gZnJvbSAnLi4vbGlzdC1maWVsZC9saXN0LWZpZWxkJztcbmltcG9ydCB7IFBpY2tlciB9IGZyb20gJy4uL3BpY2tlci9waWNrZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpc3RGaWVsZEl0ZW08VD4ge1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGljb24/OiBzdHJpbmc7XG4gIGRhdGE6IFRcbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtbGlzdC1waWNrZXInKVxuZXhwb3J0IGNsYXNzIExpc3RQaWNrZXI8VD4gZXh0ZW5kcyBQaWNrZXI8VD4gaW1wbGVtZW50cyBWYWx1ZUZpZWxkPFR8dW5kZWZpbmVkPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIFBpY2tlci5jcmVhdGVUZW1wbGF0ZShMaXN0UGlja2VyLCB7XG4gICAgICBpbXBsZW1lbnRhdGlvbjogJ2RvcGUtbGlzdC1maWVsZCcsXG4gICAgICBhcmd1bWVudHM6IHtcbiAgICAgICAgaXRlbXM6ICdbW2l0ZW1zXV0nLFxuICAgICAgICBmb3JtYXR0ZXI6ICdbW2Zvcm1hdHRlcl1dJyxcbiAgICAgICAgdmFsdWU6ICd7e3ZhbHVlfX0nXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogVHx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KClcbiAgZm9ybWF0dGVyOiAoaXRlbTogVHx1bmRlZmluZWQpID0+IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICBpdGVtczogTGlzdEZpZWxkSXRlbTxUPltdID0gW107XG5cbiAgQHF1ZXJ5KCdkb3BlLWxpc3QtZmllbGQnKVxuICBpbm5lckZpZWxkITogTGlzdEZpZWxkPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mb3JtYXR0ZXIgPSB4ID0+IHggPyB4LnRvU3RyaW5nKCkgOiAodGhpcy5wbGFjZWhvbGRlciB8fCAnJyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLndyYXBwZXIuZm9jdXMoKTtcbiAgICB0aGlzLmlubmVyRmllbGQuYWN0aXZhdGUoKTtcbiAgfVxuXG4gIEBvYnNlcnZlKCd2YWx1ZScpXG4gIG9ic2VydmVFbXB0eSh2YWx1ZTogVHx1bmRlZmluZWQpIHtcbiAgICB0aGlzLmVtcHR5ID0gIXZhbHVlO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==