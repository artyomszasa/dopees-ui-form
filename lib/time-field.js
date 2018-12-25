var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { ListField } from "./list-field/list-field.js";
import { lessThan } from "dopees-core/lib/contract.js";
import { TimeSpan } from "dopees-core/lib/datetime.js";
import { property, observe, customElement } from "@polymer/decorators/lib/decorators.js";
import { sprintf } from "dopees-core/lib/string.js";
const min = new TimeSpan("00:00");
const max = new TimeSpan("23:59:59");
const defaultStep = new TimeSpan("00:30:00");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSxtQkFBQSxFLE1BQUEsRSxLQUE2QixDQUE3QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsRUFDVCxDQUFBLEUsbUJBQUEsRSxXQUFBLEUsS0FBZ0QsQ0FBaEQsQ0FBQTs7QUFpQkEsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLFdBQUQsRUFBYyxTQUFkLEVBQXlCLE1BQXpCLENBQ1IsQ0FBQSxFLG1CQUFBLEUsY0FBQSxFQVNDLElBVEQsQ0FBQTs7QUE5Q1csU0FBUyxHQUFBLFVBQUEsQ0FBQSxDQURyQixhQUFhLENBQUMsaUJBQUQsQ0FDUSxDQUFBLEVBQVQsU0FBUyxDQUFUO1NBQUEsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RGaWVsZCwgTGlzdEZpZWxkSXRlbSB9IGZyb20gJy4vbGlzdC1maWVsZC9saXN0LWZpZWxkJztcbmltcG9ydCB7IGxlc3NUaGFuIH0gZnJvbSAnZG9wZWVzLWNvcmUvbGliL2NvbnRyYWN0JztcbmltcG9ydCB7IFRpbWVTcGFuIH0gZnJvbSAnZG9wZWVzLWNvcmUvbGliL2RhdGV0aW1lJztcbmltcG9ydCB7IHByb3BlcnR5LCBvYnNlcnZlLCBjdXN0b21FbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvZGVjb3JhdG9ycy9saWIvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBzcHJpbnRmIH0gZnJvbSAnZG9wZWVzLWNvcmUvbGliL3N0cmluZyc7XG5cbmNvbnN0IG1pbiA9IG5ldyBUaW1lU3BhbihcIjAwOjAwXCIpO1xuY29uc3QgbWF4ID0gbmV3IFRpbWVTcGFuKFwiMjM6NTk6NTlcIik7XG5jb25zdCBkZWZhdWx0U3RlcCA9IG5ldyBUaW1lU3BhbihcIjAwOjMwOjAwXCIpO1xuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS10aW1lLWZpZWxkJylcbmV4cG9ydCBjbGFzcyBUaW1lRmllbGQgZXh0ZW5kcyBMaXN0RmllbGQ8VGltZVNwYW4+IHtcblxuICBzdGF0aWMgdHlwZUZvclByb3BlcnR5KHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCd2YWx1ZScgPT09IHByb3BlcnR5TmFtZSkge1xuICAgICAgcmV0dXJuIFRpbWVTcGFuO1xuICAgIH1cbiAgICByZXR1cm4gKDxhbnk+TGlzdEZpZWxkKS50eXBlRm9yUHJvcGVydHkocHJvcGVydHlOYW1lKTtcbiAgfVxuXG4gIF9kZXNlcmlhbGl6ZVZhbHVlKHZhbHVlOiBzdHJpbmd8bnVsbCwgdHlwZTogYW55KSB7XG4gICAgaWYgKFRpbWVTcGFuID09PSB0eXBlKSB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLl9kZXNlcmlhbGl6ZVZhbHVlKHZhbHVlLCB0eXBlKTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCB9KVxuICBzdGFydFRpbWU6IFRpbWVTcGFuID0gbWluO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCB9KVxuICBlbmRUaW1lOiBUaW1lU3BhbiA9IG1heDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QgfSlcbiAgc3RlcDogVGltZVNwYW4gPSBkZWZhdWx0U3RlcDtcblxuICBAcHJvcGVydHkoKVxuICBmb3JtYXR0ZXI6ICh0aW1lOiBUaW1lU3Bhbnx1bmRlZmluZWQpID0+IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZXF1YWxpdHkgPSAoYSwgYikgPT4ge1xuICAgICAgaWYgKCFhKSB7XG4gICAgICAgIHJldHVybiAhYjtcbiAgICAgIH1cbiAgICAgIGlmICghYikge1xuICAgICAgICByZXR1cm4gIWE7XG4gICAgICB9XG4gICAgICByZXR1cm4gYS5lcXVhbHNUbyhiKTtcbiAgICB9XG4gICAgdGhpcy5mb3JtYXR0ZXIgPSB4ID0+IHggPyBzcHJpbnRmKCclMDJkOiUwMmQnLCB4LmhvdXJzLCB4Lm1pbnV0ZXMpIDogJyc7XG4gIH1cblxuICBAb2JzZXJ2ZSgnc3RhcnRUaW1lJywgJ2VuZFRpbWUnLCAnc3RlcCcpXG4gIGNvbXB1dGVJdGVtcyhzdGFydFRpbWU6IFRpbWVTcGFuLCBlbmRUaW1lOiBUaW1lU3Bhbiwgc3RlcDogVGltZVNwYW4pOiB2b2lkIHtcbiAgICBpZiAoIXN0YXJ0VGltZSB8fCAhZW5kVGltZSB8fCAhc3RlcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpdGVtczogTGlzdEZpZWxkSXRlbTxUaW1lU3Bhbj5bXSA9IFtdO1xuICAgIGZvciAobGV0IGN1cnIgPSBzdGFydFRpbWU7IGxlc3NUaGFuKGN1cnIsIGVuZFRpbWUpOyBjdXJyID0gY3Vyci5hZGQoc3RlcCkpIHtcbiAgICAgIGl0ZW1zLnB1c2goeyBkYXRhOiBjdXJyIH0pXG4gICAgfVxuICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=