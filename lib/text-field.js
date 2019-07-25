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
const template = "<style>input{height:var(--height, 1.75rem);line-height:var(--height, 1.75rem);width:var(--width, 100%);display:var(--display);padding:var(--padding, 0);margin:0;border:none;outline:none;box-shadow:none;font-size:inherit;font-family:inherit;background:transparent;text-align:var(--text-align, left);color:var(--text-color, #000);-webkit-appearance:none}\n\n/*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJImZpbGUiOiAidGV4dC1maWVsZC5jc3MiLAoJInNvdXJjZXMiOiBbCgkJIi4uLy4uL3NyYy90ZXh0LWZpZWxkL3RleHQtZmllbGQuc2NzcyIKCV0sCgkic291cmNlc0NvbnRlbnQiOiBbCgkJImlucHV0IHtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQsIDEuNzVyZW0pO1xuICBsaW5lLWhlaWdodDogdmFyKC0taGVpZ2h0LCAxLjc1cmVtKTtcbiAgd2lkdGg6IHZhcigtLXdpZHRoLCAxMDAlKTtcbiAgZGlzcGxheTogdmFyKC0tZGlzcGxheSk7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcsIDApO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IHZhcigtLXRleHQtYWxpZ24sIGxlZnQpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvciwgIzAwMCk7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn0iCgldLAoJIm5hbWVzIjogW10sCgkibWFwcGluZ3MiOiAiQUFBQSxBQUFBLEtBQUssQUFBQyxDQUNKLE1BQU0sQ0FBRSxzQkFBc0IsQ0FDOUIsV0FBVyxDQUFFLHNCQUFzQixDQUNuQyxLQUFLLENBQUUsa0JBQWtCLENBQ3pCLE9BQU8sQ0FBRSxjQUFjLENBQ3ZCLE9BQU8sQ0FBRSxpQkFBaUIsQ0FDMUIsTUFBTSxDQUFFLENBQUMsQ0FDVCxNQUFNLENBQUUsSUFBSSxDQUNaLE9BQU8sQ0FBRSxJQUFJLENBQ2IsVUFBVSxDQUFFLElBQUksQ0FDaEIsU0FBUyxDQUFFLE9BQU8sQ0FDbEIsV0FBVyxDQUFFLE9BQU8sQ0FDcEIsVUFBVSxDQUFFLFdBQVcsQ0FDdkIsVUFBVSxDQUFFLHVCQUF1QixDQUNuQyxLQUFLLENBQUUsdUJBQXVCLENBQzlCLGtCQUFrQixDQUFFLElBQUksQ0FDekIiCn0= */</style><input id=\"input\" type$=\"[[type]]\" placeholder$=\"[[placeholder]]\" minlength$=\"[[minlength]]\" maxlength$=\"[[maxlength]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" name$=\"[[name]]\" on-keydown=\"onKeydown\" on-input=\"onChange\" on-change=\"onChange\" on-focus=\"onFocus\" on-blur=\"onBlur\"/>";
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
    this.native.value = null === value || undefined === value ? '' : String(value);
    this.empty = 0 !== value && !value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUQsQ0FDVCxDQUFBLEUsbUJBQUEsRSxnQkFBQSxFLEtBQXdCLENBQXhCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLG1CQUFBLEUsa0JBQUEsRSxLQUEwQixDQUExQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSxtQkFBQSxFLGtCQUFBLEUsS0FBMEIsQ0FBMUIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxLQUFLLENBQUMsT0FBRCxDQUNOLENBQUEsRSxtQkFBQSxFLFFBQUEsRSxLQUEwQixDQUExQixDQUFBOztBQTRDQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsT0FBRCxDQUNSLENBQUEsRSxtQkFBQSxFLGNBQUEsRUFHQyxJQUhELENBQUE7O0FBckZXLFNBQVMsR0FBQSxVQUFBLENBQUEsQ0FEckIsYUFBYSxDQUFDLGlCQUFELENBQ1EsQ0FBQSxFQUFULFNBQVMsQ0FBVDtTQUFBLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50JztcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBvYnNlcnZlLCBxdWVyeSB9IGZyb20gJ0Bwb2x5bWVyL2RlY29yYXRvcnMvbGliL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgbWtUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGVzJztcbmltcG9ydCB7IEZpZWxkTWl4aW4sIFZhbHVlRmllbGQsIFZhbGlkYXRpb25NaXhpbiB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGV4dC1maWVsZC90ZXh0LWZpZWxkLnB1Zyc7XG5pbXBvcnQgeyB3cmFwRXZlbnQgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS10ZXh0LWZpZWxkJylcbmV4cG9ydCBjbGFzcyBUZXh0RmllbGQgZXh0ZW5kcyBWYWxpZGF0aW9uTWl4aW4oRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkpIGltcGxlbWVudHMgVmFsdWVGaWVsZDxzdHJpbmc+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUodGVtcGxhdGUpOyB9XG5cbiAgX2Rlc2VyaWFsaXplVmFsdWUodmFsdWU6IHN0cmluZ3xudWxsLCB0eXBlOiBhbnkpIHtcbiAgICBpZiAoUmVnRXhwID09PSB0eXBlKSB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cCh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5fZGVzZXJpYWxpemVWYWx1ZSh2YWx1ZSwgdHlwZSk7XG4gIH1cblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgdHlwZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogPGFueT4gUmVnRXhwIH0pXG4gIHBhdHRlcm4/OiBSZWdFeHA7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUgfSlcbiAgbWlubGVuZ3RoPzogbnVtYmVyO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlIH0pXG4gIG1heGxlbmd0aD86IG51bWJlcjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogc3RyaW5nID0gJyc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBhdHRlcm5NZXNzYWdlPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBtaW5sZW5ndGhNZXNzYWdlPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBtYXhsZW5ndGhNZXNzYWdlPzogc3RyaW5nO1xuXG4gIEBxdWVyeSgnaW5wdXQnKVxuICBuYXRpdmUhOiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIGFjdGl2YXRlKCkgeyB0aGlzLm5hdGl2ZS5mb2N1cygpOyB9XG5cbiAgb25LZXlkb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCBldyA9IHdyYXBFdmVudChlLCAnZG9wZScpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldyk7XG4gICAgaWYgKGV3LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShlOiBFdmVudCkge1xuICAgIGNvbnN0IGV3ID0gd3JhcEV2ZW50KGUsICdkb3BlJyk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV3KTtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5uYXRpdmUudmFsdWU7XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gIH1cblxuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICB9XG5cbiAgdmFsaWRhdGUoKSB7XG4gICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgIXRoaXMudmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlcXVpcmVkTWVzc2FnZSB8fCAnVmFsdWUgaXMgcmVxdWlyZWQnO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXR0ZXJuICYmIHRoaXMudmFsdWUgJiYgIXRoaXMucGF0dGVybi50ZXN0KHRoaXMudmFsdWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXR0ZXJuTWVzc2FnZSB8fCAnVmFsdWUgZG9lcyBub3QgbWF0Y2ggdGhlIHNwZWNpZmllZCBwYXR0ZXJuJztcbiAgICB9XG4gICAgaWYgKHRoaXMubWlubGVuZ3RoICYmIHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGggPCB0aGlzLm1pbmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMubWlubGVuZ3RoTWVzc2FnZSB8fCAnVmFsdWUgaXMgdG9vIHNob3J0JztcbiAgICB9XG4gICAgaWYgKHRoaXMubWF4bGVuZ3RoICYmIHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGggPiB0aGlzLm1heGxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMubWF4bGVuZ3RoTWVzc2FnZSB8fCAnVmFsdWUgaXMgdG9vIGxvbmcnO1xuICAgIH1cbiAgfVxuXG4gIEBvYnNlcnZlKCd2YWx1ZScpXG4gIHZhbHVlQ2hhbmdlZCh2YWx1ZTogc3RyaW5nfG51bWJlcikge1xuICAgIHRoaXMubmF0aXZlLnZhbHVlID0gKG51bGwgPT09IHZhbHVlIHx8IHVuZGVmaW5lZCA9PT0gdmFsdWUpID8gJycgOiBTdHJpbmcodmFsdWUpO1xuICAgIHRoaXMuZW1wdHkgPSAwICE9PSB2YWx1ZSAmJiAhdmFsdWU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=