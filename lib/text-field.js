var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { customElement, property, observe, query } from "@polymer/decorators/lib/decorators.js";
import { mkTemplate } from "./templates.js";
import { FieldMixin, ValidationMixin } from "./field.js";
const template = "<style>input{height:var(--height, 1.75rem);line-height:var(--height, 1.75rem);width:var(--width, 100%);display:var(--display);padding:var(--padding, 0);margin:0;border:none;outline:none;box-shadow:none;font-size:inherit;font-family:inherit;background:transparent;text-align:var(--text-align, left);color:var(--text-color, #000)}\n\n/*# sourceMappingURL=text-field.css.map */</style><input id=\"input\" type$=\"[[type]]\" placeholder$=\"[[placeholder]]\" minlength$=\"[[minlength]]\" maxlength$=\"[[maxlength]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" name$=\"[[name]]\" on-keydown=\"onKeydown\" on-input=\"onChange\" on-change=\"onChange\" on-focus=\"onFocus\" on-blur=\"onBlur\"/>";
import { wrapEvent } from "./helpers.js";
let TextField = class TextField extends ValidationMixin(FieldMixin(PolymerElement)) {
  constructor() {
    super(...arguments);
    this.value = '';
  }

  static get template() {
    return mkTemplate(template);
  }

  _deserializeValue(value, type) {
    if (RegExp === type) {
      if (!value) {
        return undefined;
      }

      return new RegExp(value);
    }

    return super._deserializeValue(value, type);
  }

  activate() {
    this.native.focus();
  }

  onKeydown(e) {
    const ew = wrapEvent(e, 'dope');
    this.dispatchEvent(ew);

    if (ew.defaultPrevented) {
      e.preventDefault();
    }
  }

  onChange(e) {
    const ew = wrapEvent(e, 'dope');
    this.dispatchEvent(ew);
    this.dirty = true;
    this.value = this.native.value;
  }

  onBlur() {
    this.focused = false;
  }

  onFocus() {
    this.activated = true;
    this.focused = true;
  }

  validate() {
    if (this.required && !this.value) {
      return this.requiredMessage || 'Value is required';
    }

    if (this.pattern && this.value && !this.pattern.test(this.value)) {
      return this.patternMessage || 'Value does not match the specified pattern';
    }

    if (this.minlength && this.value && this.value.length < this.minlength) {
      return this.minlengthMessage || 'Value is too short';
    }

    if (this.maxlength && this.value && this.value.length > this.maxlength) {
      return this.maxlengthMessage || 'Value is too long';
    }
  }

  valueChanged(value) {
    this.native.value = null === value || undefined === value ? '' : value;
    this.empty = !value;
  }

};

__decorate([property({
  type: String
})], TextField.prototype, "type", void 0);

__decorate([property({
  type: String
})], TextField.prototype, "placeholder", void 0);

__decorate([property({
  type: RegExp
})], TextField.prototype, "pattern", void 0);

__decorate([property({
  type: Number,
  reflectToAttribute: true
})], TextField.prototype, "minlength", void 0);

__decorate([property({
  type: Number,
  reflectToAttribute: true
})], TextField.prototype, "maxlength", void 0);

__decorate([property({
  type: String,
  notify: true
})], TextField.prototype, "value", void 0);

__decorate([property({
  type: String
})], TextField.prototype, "patternMessage", void 0);

__decorate([property({
  type: String
})], TextField.prototype, "minlengthMessage", void 0);

__decorate([property({
  type: String
})], TextField.prototype, "maxlengthMessage", void 0);

__decorate([query('input')], TextField.prototype, "native", void 0);

__decorate([observe('value')], TextField.prototype, "valueChanged", null);

TextField = __decorate([customElement('dope-text-field')], TextField);
export { TextField };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3QixDQUF4QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSxtQkFBQSxFLGtCQUFBLEUsS0FBMEIsQ0FBMUIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FDVCxDQUFBLEUsbUJBQUEsRSxrQkFBQSxFLEtBQTBCLENBQTFCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsS0FBSyxDQUFDLE9BQUQsQ0FDTixDQUFBLEUsbUJBQUEsRSxRQUFBLEUsS0FBMEIsQ0FBMUIsQ0FBQTs7QUE0Q0EsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLE9BQUQsQ0FDUixDQUFBLEUsbUJBQUEsRSxjQUFBLEVBR0MsSUFIRCxDQUFBOztBQXJGVyxTQUFTLEdBQUEsVUFBQSxDQUFBLENBRHJCLGFBQWEsQ0FBQyxpQkFBRCxDQUNRLENBQUEsRUFBVCxTQUFTLENBQVQ7U0FBQSxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudCc7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgb2JzZXJ2ZSwgcXVlcnkgfSBmcm9tICdAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlcyc7XG5pbXBvcnQgeyBGaWVsZE1peGluLCBWYWx1ZUZpZWxkLCBWYWxpZGF0aW9uTWl4aW4gfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RleHQtZmllbGQvdGV4dC1maWVsZC5wdWcnO1xuaW1wb3J0IHsgd3JhcEV2ZW50IH0gZnJvbSAnLi9oZWxwZXJzJztcblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtdGV4dC1maWVsZCcpXG5leHBvcnQgY2xhc3MgVGV4dEZpZWxkIGV4dGVuZHMgVmFsaWRhdGlvbk1peGluKEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpKSBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8c3RyaW5nPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiBta1RlbXBsYXRlKHRlbXBsYXRlKTsgfVxuXG4gIF9kZXNlcmlhbGl6ZVZhbHVlKHZhbHVlOiBzdHJpbmd8bnVsbCwgdHlwZTogYW55KSB7XG4gICAgaWYgKFJlZ0V4cCA9PT0gdHlwZSkge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gc3VwZXIuX2Rlc2VyaWFsaXplVmFsdWUodmFsdWUsIHR5cGUpO1xuICB9XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHR5cGU/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IDxhbnk+UmVnRXhwIH0pXG4gIHBhdHRlcm4/OiBSZWdFeHA7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUgfSlcbiAgbWlubGVuZ3RoPzogbnVtYmVyO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlIH0pXG4gIG1heGxlbmd0aD86IG51bWJlcjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogc3RyaW5nID0gJyc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBhdHRlcm5NZXNzYWdlPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBtaW5sZW5ndGhNZXNzYWdlPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBtYXhsZW5ndGhNZXNzYWdlPzogc3RyaW5nO1xuXG4gIEBxdWVyeSgnaW5wdXQnKVxuICBuYXRpdmUhOiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIGFjdGl2YXRlKCkgeyB0aGlzLm5hdGl2ZS5mb2N1cygpOyB9XG5cbiAgb25LZXlkb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCBldyA9IHdyYXBFdmVudChlLCAnZG9wZScpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldyk7XG4gICAgaWYgKGV3LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShlOiBFdmVudCkge1xuICAgIGNvbnN0IGV3ID0gd3JhcEV2ZW50KGUsICdkb3BlJyk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV3KTtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5uYXRpdmUudmFsdWU7XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gIH1cblxuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICB9XG5cbiAgdmFsaWRhdGUoKSB7XG4gICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgIXRoaXMudmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlcXVpcmVkTWVzc2FnZSB8fCAnVmFsdWUgaXMgcmVxdWlyZWQnO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXR0ZXJuICYmIHRoaXMudmFsdWUgJiYgIXRoaXMucGF0dGVybi50ZXN0KHRoaXMudmFsdWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXR0ZXJuTWVzc2FnZSB8fCAnVmFsdWUgZG9lcyBub3QgbWF0Y2ggdGhlIHNwZWNpZmllZCBwYXR0ZXJuJztcbiAgICB9XG4gICAgaWYgKHRoaXMubWlubGVuZ3RoICYmIHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGggPCB0aGlzLm1pbmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMubWlubGVuZ3RoTWVzc2FnZSB8fCAnVmFsdWUgaXMgdG9vIHNob3J0JztcbiAgICB9XG4gICAgaWYgKHRoaXMubWF4bGVuZ3RoICYmIHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGggPiB0aGlzLm1heGxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMubWF4bGVuZ3RoTWVzc2FnZSB8fCAnVmFsdWUgaXMgdG9vIGxvbmcnO1xuICAgIH1cbiAgfVxuXG4gIEBvYnNlcnZlKCd2YWx1ZScpXG4gIHZhbHVlQ2hhbmdlZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uYXRpdmUudmFsdWUgPSAobnVsbCA9PT0gdmFsdWUgfHwgdW5kZWZpbmVkID09PSB2YWx1ZSkgPyAnJyA6IHZhbHVlO1xuICAgIHRoaXMuZW1wdHkgPSAhdmFsdWU7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9