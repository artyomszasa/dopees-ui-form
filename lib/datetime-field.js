var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import "./date-field.js";
import "./time-field.js";
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { property, observe, customElement, query } from "@polymer/decorators/lib/decorators.js";
import { mkTemplate } from "./templates.js";
import { FieldMixin } from "./field.js";
import { DateTime, TimeSpan } from "dopees-core/lib/datetime.js";
const view = "<style>:host{display:inline-block;outline:var(--outline)}.wrapper{display:flex;height:var(--height, 14rem)}dope-time-field,dope-date-field{outline:none}dope-time-field{flex-grow:0;flex-shrink:0;flex-basis:var(--time-width, 5rem)}dope-date-field{flex:1}\n\n/*# sourceMappingURL=datetime-field.css.map */</style><div class=\"wrapper\"><dope-date-field value=\"{{dateValue}}\" dirty=\"{{dateDirty}}\" focused=\"{{dateFocused}}\" required=\"[[required]]\"></dope-date-field><dope-time-field value=\"{{timeValue}}\" dirty=\"{{timeDirty}}\" focused=\"{{timeFocused}}\" required=\"[[required]]\"></dope-time-field></div>";
let DateTimeField = class DateTimeField extends FieldMixin(PolymerElement) {
  constructor() {
    super();
    this.__valueChanging = false;
    this.__dirtyChanging = false;
    this.dateDirty = false;
    this.dateFocused = false;
    this.timeDirty = false;
    this.timeFocused = false;
    this.empty = true;
  }

  static get template() {
    return mkTemplate(view);
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
    this.dateField.focus();
  }

  dirtyChanged(dirty) {
    this.__dirtyChanging = true;

    try {
      this.dateDirty = dirty;
      this.timeDirty = dirty;
    } finally {
      this.__dirtyChanging = false;
    }
  }

  innerDirtyChanged(dateDirty, timeDirty) {
    if (!this.__dirtyChanging) {
      this.dirty = dateDirty || timeDirty;
    }
  }

  observeFocused(dateFocused, timeFocused) {
    clearTimeout(this.__focusedTimeout);
    this.__focusedTimeout = setTimeout(() => this.focused = dateFocused || timeFocused, 25);
  }

  valueChanged(value) {
    this.__valueChanging = true;

    try {
      if (value) {
        const datePart = new DateTime({
          year: value.year,
          month: value.month,
          day: value.day
        });
        this.dateValue = datePart;
        this.timeValue = value.substract(datePart);
        this.empty = false;
      } else {
        this.dateValue = undefined;
        this.timeValue = undefined;
        this.empty = true;
      }
    } finally {
      this.__valueChanging = false;
    }
  }

  valuesChanged(date, time) {
    if (!this.__valueChanging) {
      let value;

      if (date) {
        if (time) {
          value = new DateTime({
            year: date.year,
            month: date.month,
            day: date.day,
            hours: time.hours,
            minutes: time.minutes,
            seconds: time.seconds,
            milliseconds: time.milliseconds
          });
        } else {
          value = new DateTime({
            year: date.year,
            month: date.month,
            day: date.day
          });
        }
      }

      this.value = value;
    }
  }

};

__decorate([property({
  type: DateTime,
  notify: true
})], DateTimeField.prototype, "value", void 0);

__decorate([property({
  type: Boolean
})], DateTimeField.prototype, "dateDirty", void 0);

__decorate([property({
  type: Boolean
})], DateTimeField.prototype, "dateFocused", void 0);

__decorate([property({
  type: DateTime
})], DateTimeField.prototype, "dateValue", void 0);

__decorate([property({
  type: Boolean
})], DateTimeField.prototype, "timeDirty", void 0);

__decorate([property({
  type: Boolean
})], DateTimeField.prototype, "timeFocused", void 0);

__decorate([property({
  type: TimeSpan
})], DateTimeField.prototype, "timeValue", void 0);

__decorate([query('dope-date-field')], DateTimeField.prototype, "dateField", void 0);

__decorate([observe('dirty')], DateTimeField.prototype, "dirtyChanged", null);

__decorate([observe('dateDirty', 'timeDirty')], DateTimeField.prototype, "innerDirtyChanged", null);

__decorate([observe('dateFocused', 'timeFocused')], DateTimeField.prototype, "observeFocused", null);

__decorate([observe('value')], DateTimeField.prototype, "valueChanged", null);

__decorate([observe('dateValue', 'timeValue')], DateTimeField.prototype, "valuesChanged", null);

DateTimeField = __decorate([customElement('dope-datetime-field')], DateTimeField);
export { DateTimeField };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQixhQUFoQixDQUNSLENBQUEsRSx1QkFBQSxFLGdCQUFBLEVBR0MsSUFIRCxDQUFBOztBQU1BLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxPQUFELENBQ1IsQ0FBQSxFLHVCQUFBLEUsY0FBQSxFQWdCQyxJQWhCRCxDQUFBOztBQW1CQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsV0FBRCxFQUFjLFdBQWQsQ0FDUixDQUFBLEUsdUJBQUEsRSxlQUFBLEVBb0JDLElBcEJELENBQUE7O0FBaEdXLGFBQWEsR0FBQSxVQUFBLENBQUEsQ0FEekIsYUFBYSxDQUFDLHFCQUFELENBQ1ksQ0FBQSxFQUFiLGFBQWEsQ0FBYjtTQUFBLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vZGF0ZS1maWVsZCc7XG5pbXBvcnQgJy4vdGltZS1maWVsZCc7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50JztcbmltcG9ydCB7IHByb3BlcnR5LCBvYnNlcnZlLCBjdXN0b21FbGVtZW50LCBxdWVyeSB9IGZyb20gJ0Bwb2x5bWVyL2RlY29yYXRvcnMvbGliL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgbWtUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGVzJztcbmltcG9ydCB7IEZpZWxkTWl4aW4sIFZhbHVlRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7IERhdGVUaW1lLCBUaW1lU3BhbiB9IGZyb20gJ2RvcGVlcy1jb3JlL2xpYi9kYXRldGltZSc7XG5pbXBvcnQgeyBEYXRlRmllbGQgfSBmcm9tICcuL2RhdGUtZmllbGQnO1xuaW1wb3J0IHZpZXcgZnJvbSAnLi9kYXRldGltZS1maWVsZC9kYXRldGltZS1maWVsZC5wdWcnO1xuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1kYXRldGltZS1maWVsZCcpXG5leHBvcnQgY2xhc3MgRGF0ZVRpbWVGaWVsZCBleHRlbmRzIEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpIGltcGxlbWVudHMgVmFsdWVGaWVsZDxEYXRlVGltZXx1bmRlZmluZWQ+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUodmlldyk7IH1cblxuICBfZGVzZXJpYWxpemVWYWx1ZSh2YWx1ZTogc3RyaW5nfG51bGwsIHR5cGU6IGFueSkge1xuICAgIGlmIChEYXRlVGltZSA9PT0gdHlwZSkge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5fZGVzZXJpYWxpemVWYWx1ZSh2YWx1ZSwgdHlwZSk7XG4gIH1cblxuICBwcml2YXRlIF9fdmFsdWVDaGFuZ2luZyA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX19kaXJ0eUNoYW5naW5nID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfX2ZvY3VzZWRUaW1lb3V0OiBhbnk7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogPGFueT4gRGF0ZVRpbWUsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogRGF0ZVRpbWV8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgZGF0ZURpcnR5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBkYXRlRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IDxhbnk+IERhdGVUaW1lIH0pXG4gIGRhdGVWYWx1ZT86IERhdGVUaW1lO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgdGltZURpcnR5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICB0aW1lRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IDxhbnk+IFRpbWVTcGFuIH0pXG4gIHRpbWVWYWx1ZT86IFRpbWVTcGFuO1xuXG4gIEBxdWVyeSgnZG9wZS1kYXRlLWZpZWxkJylcbiAgZGF0ZUZpZWxkITogRGF0ZUZpZWxkO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5lbXB0eSA9IHRydWU7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmRhdGVGaWVsZC5mb2N1cygpO1xuICB9XG5cbiAgQG9ic2VydmUoJ2RpcnR5JylcbiAgZGlydHlDaGFuZ2VkKGRpcnR5OiBib29sZWFuKSB7XG4gICAgdGhpcy5fX2RpcnR5Q2hhbmdpbmcgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmRhdGVEaXJ0eSA9IGRpcnR5O1xuICAgICAgdGhpcy50aW1lRGlydHkgPSBkaXJ0eTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fX2RpcnR5Q2hhbmdpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAb2JzZXJ2ZSgnZGF0ZURpcnR5JywgJ3RpbWVEaXJ0eScpXG4gIGlubmVyRGlydHlDaGFuZ2VkKGRhdGVEaXJ0eTogYm9vbGVhbiwgdGltZURpcnR5OiBib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLl9fZGlydHlDaGFuZ2luZykge1xuICAgICAgdGhpcy5kaXJ0eSA9IGRhdGVEaXJ0eSB8fCB0aW1lRGlydHk7XG4gICAgfVxuICB9XG5cbiAgQG9ic2VydmUoJ2RhdGVGb2N1c2VkJywgJ3RpbWVGb2N1c2VkJylcbiAgb2JzZXJ2ZUZvY3VzZWQoZGF0ZUZvY3VzZWQ6IGJvb2xlYW4sIHRpbWVGb2N1c2VkOiBib29sZWFuKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX19mb2N1c2VkVGltZW91dCk7XG4gICAgdGhpcy5fX2ZvY3VzZWRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmZvY3VzZWQgPSBkYXRlRm9jdXNlZCB8fCB0aW1lRm9jdXNlZCwgMjUpO1xuICB9XG5cbiAgQG9ic2VydmUoJ3ZhbHVlJylcbiAgdmFsdWVDaGFuZ2VkKHZhbHVlOiBEYXRlVGltZXx1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9fdmFsdWVDaGFuZ2luZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBjb25zdCBkYXRlUGFydCA9IG5ldyBEYXRlVGltZSh7IHllYXI6IHZhbHVlLnllYXIsIG1vbnRoOiB2YWx1ZS5tb250aCwgZGF5OiB2YWx1ZS5kYXkgfSk7XG4gICAgICAgIHRoaXMuZGF0ZVZhbHVlID0gZGF0ZVBhcnQ7XG4gICAgICAgIHRoaXMudGltZVZhbHVlID0gdmFsdWUuc3Vic3RyYWN0KGRhdGVQYXJ0KTtcbiAgICAgICAgdGhpcy5lbXB0eSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMudGltZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmVtcHR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fX3ZhbHVlQ2hhbmdpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAb2JzZXJ2ZSgnZGF0ZVZhbHVlJywgJ3RpbWVWYWx1ZScpXG4gIHZhbHVlc0NoYW5nZWQoZGF0ZTogRGF0ZVRpbWV8dW5kZWZpbmVkLCB0aW1lOiBUaW1lU3Bhbnx1bmRlZmluZWQpIHtcbiAgICBpZiAoIXRoaXMuX192YWx1ZUNoYW5naW5nKSB7XG4gICAgICBsZXQgdmFsdWU6IERhdGVUaW1lfHVuZGVmaW5lZDtcbiAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgIGlmICh0aW1lKSB7XG4gICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZVRpbWUoe1xuICAgICAgICAgICAgeWVhcjogZGF0ZS55ZWFyLFxuICAgICAgICAgICAgbW9udGg6IGRhdGUubW9udGgsXG4gICAgICAgICAgICBkYXk6IGRhdGUuZGF5LFxuICAgICAgICAgICAgaG91cnM6IHRpbWUuaG91cnMsXG4gICAgICAgICAgICBtaW51dGVzOiB0aW1lLm1pbnV0ZXMsXG4gICAgICAgICAgICBzZWNvbmRzOiB0aW1lLnNlY29uZHMsXG4gICAgICAgICAgICBtaWxsaXNlY29uZHM6IHRpbWUubWlsbGlzZWNvbmRzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZVRpbWUoeyB5ZWFyOiBkYXRlLnllYXIsIG1vbnRoOiBkYXRlLm1vbnRoLCBkYXk6IGRhdGUuZGF5IH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9