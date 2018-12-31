var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import "./list-field.js";
import { ListField } from "./list-field.js";
import { lessThan } from "dopees-core/lib/contract.js";
import { TimeSpan } from "dopees-core/lib/datetime.js";
import { property, observe, customElement } from "@polymer/decorators/lib/decorators.js";
import { sprintf } from "dopees-core/lib/string.js";
const min = new TimeSpan('00:00');
const max = new TimeSpan('23:59:59');
const defaultStep = new TimeSpan('00:30:00');
let TimeField = class TimeField extends ListField {
  constructor() {
    super();
    this.startTime = min;
    this.endTime = max;
    this.step = defaultStep;

    this.equality = (a, b) => {
      if (!a) {
        return !b;
      }

      if (!b) {
        return !a;
      }

      return a.equalsTo(b);
    };

    this.formatter = x => x ? sprintf('%02d:%02d', x.hours, x.minutes) : '';
  }

  static typeForProperty(propertyName) {
    if ('value' === propertyName) {
      return TimeSpan;
    }

    return ListField.typeForProperty(propertyName);
  }

  _deserializeValue(value, type) {
    if (TimeSpan === type) {
      if (!value) {
        return undefined;
      }

      return new TimeSpan(value);
    }

    return super._deserializeValue(value, type);
  }

  computeItems(startTime, endTime, step) {
    if (!startTime || !endTime || !step) {
      return;
    }

    const items = [];

    for (let curr = startTime; lessThan(curr, endTime); curr = curr.add(step)) {
      items.push({
        data: curr
      });
    }

    this.items = items;
  }

};

__decorate([property({
  type: Object
})], TimeField.prototype, "startTime", void 0);

__decorate([property({
  type: Object
})], TimeField.prototype, "endTime", void 0);

__decorate([property({
  type: Object
})], TimeField.prototype, "step", void 0);

__decorate([property()], TimeField.prototype, "formatter", void 0);

__decorate([observe('startTime', 'endTime', 'step')], TimeField.prototype, "computeItems", null);

TimeField = __decorate([customElement('dope-time-field')], TimeField);
export { TimeField };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEUsS0FBd0IsQ0FBeEIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FDVCxDQUFBLEUsbUJBQUEsRSxNQUFBLEUsS0FBNkIsQ0FBN0IsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLEVBQ1QsQ0FBQSxFLG1CQUFBLEUsV0FBQSxFLEtBQWdELENBQWhELENBQUE7O0FBaUJBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxXQUFELEVBQWMsU0FBZCxFQUF5QixNQUF6QixDQUNSLENBQUEsRSxtQkFBQSxFLGNBQUEsRUFTQyxJQVRELENBQUE7O0FBOUNXLFNBQVMsR0FBQSxVQUFBLENBQUEsQ0FEckIsYUFBYSxDQUFDLGlCQUFELENBQ1EsQ0FBQSxFQUFULFNBQVMsQ0FBVDtTQUFBLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vbGlzdC1maWVsZCc7XG5pbXBvcnQgeyBMaXN0RmllbGQsIExpc3RGaWVsZEl0ZW0gfSBmcm9tICcuL2xpc3QtZmllbGQnO1xuaW1wb3J0IHsgbGVzc1RoYW4gfSBmcm9tICdkb3BlZXMtY29yZS9saWIvY29udHJhY3QnO1xuaW1wb3J0IHsgVGltZVNwYW4gfSBmcm9tICdkb3BlZXMtY29yZS9saWIvZGF0ZXRpbWUnO1xuaW1wb3J0IHsgcHJvcGVydHksIG9ic2VydmUsIGN1c3RvbUVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IHNwcmludGYgfSBmcm9tICdkb3BlZXMtY29yZS9saWIvc3RyaW5nJztcblxuY29uc3QgbWluID0gbmV3IFRpbWVTcGFuKCcwMDowMCcpO1xuY29uc3QgbWF4ID0gbmV3IFRpbWVTcGFuKCcyMzo1OTo1OScpO1xuY29uc3QgZGVmYXVsdFN0ZXAgPSBuZXcgVGltZVNwYW4oJzAwOjMwOjAwJyk7XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLXRpbWUtZmllbGQnKVxuZXhwb3J0IGNsYXNzIFRpbWVGaWVsZCBleHRlbmRzIExpc3RGaWVsZDxUaW1lU3Bhbj4ge1xuXG4gIHN0YXRpYyB0eXBlRm9yUHJvcGVydHkocHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoJ3ZhbHVlJyA9PT0gcHJvcGVydHlOYW1lKSB7XG4gICAgICByZXR1cm4gVGltZVNwYW47XG4gICAgfVxuICAgIHJldHVybiAoPGFueT4gTGlzdEZpZWxkKS50eXBlRm9yUHJvcGVydHkocHJvcGVydHlOYW1lKTtcbiAgfVxuXG4gIF9kZXNlcmlhbGl6ZVZhbHVlKHZhbHVlOiBzdHJpbmd8bnVsbCwgdHlwZTogYW55KSB7XG4gICAgaWYgKFRpbWVTcGFuID09PSB0eXBlKSB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLl9kZXNlcmlhbGl6ZVZhbHVlKHZhbHVlLCB0eXBlKTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCB9KVxuICBzdGFydFRpbWU6IFRpbWVTcGFuID0gbWluO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCB9KVxuICBlbmRUaW1lOiBUaW1lU3BhbiA9IG1heDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QgfSlcbiAgc3RlcDogVGltZVNwYW4gPSBkZWZhdWx0U3RlcDtcblxuICBAcHJvcGVydHkoKVxuICBmb3JtYXR0ZXI6ICh0aW1lOiBUaW1lU3Bhbnx1bmRlZmluZWQpID0+IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZXF1YWxpdHkgPSAoYSwgYikgPT4ge1xuICAgICAgaWYgKCFhKSB7XG4gICAgICAgIHJldHVybiAhYjtcbiAgICAgIH1cbiAgICAgIGlmICghYikge1xuICAgICAgICByZXR1cm4gIWE7XG4gICAgICB9XG4gICAgICByZXR1cm4gYS5lcXVhbHNUbyhiKTtcbiAgICB9O1xuICAgIHRoaXMuZm9ybWF0dGVyID0gKHgpID0+IHggPyBzcHJpbnRmKCclMDJkOiUwMmQnLCB4LmhvdXJzLCB4Lm1pbnV0ZXMpIDogJyc7XG4gIH1cblxuICBAb2JzZXJ2ZSgnc3RhcnRUaW1lJywgJ2VuZFRpbWUnLCAnc3RlcCcpXG4gIGNvbXB1dGVJdGVtcyhzdGFydFRpbWU6IFRpbWVTcGFuLCBlbmRUaW1lOiBUaW1lU3Bhbiwgc3RlcDogVGltZVNwYW4pOiB2b2lkIHtcbiAgICBpZiAoIXN0YXJ0VGltZSB8fCAhZW5kVGltZSB8fCAhc3RlcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpdGVtczogQXJyYXk8TGlzdEZpZWxkSXRlbTxUaW1lU3Bhbj4+ID0gW107XG4gICAgZm9yIChsZXQgY3VyciA9IHN0YXJ0VGltZTsgbGVzc1RoYW4oY3VyciwgZW5kVGltZSk7IGN1cnIgPSBjdXJyLmFkZChzdGVwKSkge1xuICAgICAgaXRlbXMucHVzaCh7IGRhdGE6IGN1cnIgfSk7XG4gICAgfVxuICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==