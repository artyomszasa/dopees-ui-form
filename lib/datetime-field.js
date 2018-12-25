var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import "./date-field/date-field.js";
import "./time-field.js";
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { property, observe, customElement, query } from "@polymer/decorators/lib/decorators.js";
import { mkTemplate } from "./templates.js";
import { FieldMixin } from "./field.js";
import { DateTime, TimeSpan } from "dopees-core/lib/datetime.js";
const view = "<style>:host{display:inline-block}.wrapper{display:flex;height:var(--height, 14rem)}dope-time-field,dope-date-field{outline:none}dope-time-field{flex-grow:0;flex-shrink:0;flex-basis:var(--time-width, 5rem)}dope-date-field{flex:1}\n\n/*# sourceMappingURL=datetime-field.css.map */</style><div class=\"wrapper\"><dope-date-field value=\"{{dateValue}}\" dirty=\"{{dateDirty}}\" focused=\"{{dateFocused}}\" required=\"[[required]]\"></dope-date-field><dope-time-field value=\"{{timeValue}}\" dirty=\"{{timeDirty}}\" focused=\"{{timeFocused}}\" required=\"[[required]]\"></dope-time-field></div>";
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
      let value = undefined;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLHVCQUFBLEUsV0FBQSxFLEtBQTJCLENBQTNCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLHVCQUFBLEUsYUFBQSxFLEtBQTZCLENBQTdCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQU87QUFBYixDQUFELENBQ1QsQ0FBQSxFLHVCQUFBLEUsV0FBQSxFLEtBQXFCLENBQXJCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLHVCQUFBLEUsV0FBQSxFLEtBQTJCLENBQTNCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLHVCQUFBLEUsYUFBQSxFLEtBQTZCLENBQTdCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQU87QUFBYixDQUFELENBQ1QsQ0FBQSxFLHVCQUFBLEUsV0FBQSxFLEtBQXFCLENBQXJCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsS0FBSyxDQUFDLGlCQUFELENBQ04sQ0FBQSxFLHVCQUFBLEUsV0FBQSxFLEtBQXNCLENBQXRCLENBQUE7O0FBWUEsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLE9BQUQsQ0FDUixDQUFBLEUsdUJBQUEsRSxjQUFBLEVBUUMsSUFSRCxDQUFBOztBQVdBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxXQUFELEVBQWMsV0FBZCxDQUNSLENBQUEsRSx1QkFBQSxFLG1CQUFBLEVBSUMsSUFKRCxDQUFBOztBQU9BLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxhQUFELEVBQWdCLGFBQWhCLENBQ1IsQ0FBQSxFLHVCQUFBLEUsZ0JBQUEsRUFHQyxJQUhELENBQUE7O0FBTUEsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLE9BQUQsQ0FDUixDQUFBLEUsdUJBQUEsRSxjQUFBLEVBZ0JDLElBaEJELENBQUE7O0FBbUJBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxXQUFELEVBQWMsV0FBZCxDQUNSLENBQUEsRSx1QkFBQSxFLGVBQUEsRUFZQyxJQVpELENBQUE7O0FBaEdXLGFBQWEsR0FBQSxVQUFBLENBQUEsQ0FEekIsYUFBYSxDQUFDLHFCQUFELENBQ1ksQ0FBQSxFQUFiLGFBQWEsQ0FBYjtTQUFBLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vZGF0ZS1maWVsZC9kYXRlLWZpZWxkJztcbmltcG9ydCAnLi90aW1lLWZpZWxkJztcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQnO1xuaW1wb3J0IHsgcHJvcGVydHksIG9ic2VydmUsIGN1c3RvbUVsZW1lbnQsIHF1ZXJ5IH0gZnJvbSAnQHBvbHltZXIvZGVjb3JhdG9ycy9saWIvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBta1RlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IHsgRmllbGRNaXhpbiwgVmFsdWVGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgRGF0ZVRpbWUsIFRpbWVTcGFuIH0gZnJvbSAnZG9wZWVzLWNvcmUvbGliL2RhdGV0aW1lJztcbmltcG9ydCB2aWV3IGZyb20gJy4vZGF0ZXRpbWUtZmllbGQvZGF0ZXRpbWUtZmllbGQucHVnJztcbmltcG9ydCB7IERhdGVGaWVsZCB9IGZyb20gJy4vZGF0ZS1maWVsZC9kYXRlLWZpZWxkJztcblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtZGF0ZXRpbWUtZmllbGQnKVxuZXhwb3J0IGNsYXNzIERhdGVUaW1lRmllbGQgZXh0ZW5kcyBGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8RGF0ZVRpbWV8dW5kZWZpbmVkPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiBta1RlbXBsYXRlKHZpZXcpOyB9XG5cbiAgX2Rlc2VyaWFsaXplVmFsdWUodmFsdWU6IHN0cmluZ3xudWxsLCB0eXBlOiBhbnkpIHtcbiAgICBpZiAoRGF0ZVRpbWUgPT09IHR5cGUpIHtcbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gc3VwZXIuX2Rlc2VyaWFsaXplVmFsdWUodmFsdWUsIHR5cGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfX3ZhbHVlQ2hhbmdpbmcgPSBmYWxzZTtcblxuICBwcml2YXRlIF9fZGlydHlDaGFuZ2luZyA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX19mb2N1c2VkVGltZW91dDogYW55O1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IDxhbnk+RGF0ZVRpbWUsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogRGF0ZVRpbWV8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgZGF0ZURpcnR5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBkYXRlRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IDxhbnk+RGF0ZVRpbWUgfSlcbiAgZGF0ZVZhbHVlPzogRGF0ZVRpbWU7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICB0aW1lRGlydHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIHRpbWVGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogPGFueT5UaW1lU3BhbiB9KVxuICB0aW1lVmFsdWU/OiBUaW1lU3BhbjtcblxuICBAcXVlcnkoJ2RvcGUtZGF0ZS1maWVsZCcpXG4gIGRhdGVGaWVsZCE6IERhdGVGaWVsZDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZW1wdHkgPSB0cnVlO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5kYXRlRmllbGQuZm9jdXMoKTtcbiAgfVxuXG4gIEBvYnNlcnZlKCdkaXJ0eScpXG4gIGRpcnR5Q2hhbmdlZChkaXJ0eTogYm9vbGVhbikge1xuICAgIHRoaXMuX19kaXJ0eUNoYW5naW5nID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5kYXRlRGlydHkgPSBkaXJ0eTtcbiAgICAgIHRoaXMudGltZURpcnR5ID0gZGlydHk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX19kaXJ0eUNoYW5naW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQG9ic2VydmUoJ2RhdGVEaXJ0eScsICd0aW1lRGlydHknKVxuICBpbm5lckRpcnR5Q2hhbmdlZChkYXRlRGlydHk6IGJvb2xlYW4sIHRpbWVEaXJ0eTogYm9vbGVhbikge1xuICAgIGlmICghdGhpcy5fX2RpcnR5Q2hhbmdpbmcpIHtcbiAgICAgIHRoaXMuZGlydHkgPSBkYXRlRGlydHkgfHwgdGltZURpcnR5O1xuICAgIH1cbiAgfVxuXG4gIEBvYnNlcnZlKCdkYXRlRm9jdXNlZCcsICd0aW1lRm9jdXNlZCcpXG4gIG9ic2VydmVGb2N1c2VkKGRhdGVGb2N1c2VkOiBib29sZWFuLCB0aW1lRm9jdXNlZDogYm9vbGVhbikge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9fZm9jdXNlZFRpbWVvdXQpO1xuICAgIHRoaXMuX19mb2N1c2VkVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5mb2N1c2VkID0gZGF0ZUZvY3VzZWQgfHwgdGltZUZvY3VzZWQsIDI1KTtcbiAgfVxuXG4gIEBvYnNlcnZlKCd2YWx1ZScpXG4gIHZhbHVlQ2hhbmdlZCh2YWx1ZTogRGF0ZVRpbWV8dW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fX3ZhbHVlQ2hhbmdpbmcgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29uc3QgZGF0ZVBhcnQgPSBuZXcgRGF0ZVRpbWUoeyB5ZWFyOiB2YWx1ZS55ZWFyLCBtb250aDogdmFsdWUubW9udGgsIGRheTogdmFsdWUuZGF5IH0pO1xuICAgICAgICB0aGlzLmRhdGVWYWx1ZSA9IGRhdGVQYXJ0O1xuICAgICAgICB0aGlzLnRpbWVWYWx1ZSA9IHZhbHVlLnN1YnN0cmFjdChkYXRlUGFydCk7XG4gICAgICAgIHRoaXMuZW1wdHkgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0ZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnRpbWVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5lbXB0eSA9IHRydWU7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX192YWx1ZUNoYW5naW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQG9ic2VydmUoJ2RhdGVWYWx1ZScsICd0aW1lVmFsdWUnKVxuICB2YWx1ZXNDaGFuZ2VkKGRhdGU6IERhdGVUaW1lfHVuZGVmaW5lZCwgdGltZTogVGltZVNwYW58dW5kZWZpbmVkKSB7XG4gICAgaWYgKCF0aGlzLl9fdmFsdWVDaGFuZ2luZykge1xuICAgICAgbGV0IHZhbHVlOiBEYXRlVGltZXx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgICBpZiAoZGF0ZSkge1xuICAgICAgICBpZiAodGltZSkge1xuICAgICAgICAgIHZhbHVlID0gbmV3IERhdGVUaW1lKHsgeWVhcjogZGF0ZS55ZWFyLCBtb250aDogZGF0ZS5tb250aCwgZGF5OiBkYXRlLmRheSwgaG91cnM6IHRpbWUuaG91cnMsIG1pbnV0ZXM6IHRpbWUubWludXRlcywgc2Vjb25kczogdGltZS5zZWNvbmRzLCBtaWxsaXNlY29uZHM6IHRpbWUubWlsbGlzZWNvbmRzIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gbmV3IERhdGVUaW1lKHsgeWVhcjogZGF0ZS55ZWFyLCBtb250aDogZGF0ZS5tb250aCwgZGF5OiBkYXRlLmRheSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=