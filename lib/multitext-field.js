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
import { FieldMixin } from "./field.js";
const template = "<style>:host{position:relative;display:inline-flex;flex-direction:column}textarea,.pre{overflow-y:auto;width:var(--dope-width, 100%);display:var(--dope-display);padding:0;margin:0;border:none;outline:none;font:inherit;background:transparent}textarea{height:1rem;resize:none;min-height:calc(var(--height, 1.75rem) - .75rem);line-height:calc(var(--height, 1.75rem) - .75rem);padding-top:.375rem;padding-bottom:.375rem}.pre{position:absolute;z-index:-1;visibility:hidden;padding:.5rem 0 0 0;white-space:pre-wrap}\n\n/*# sourceMappingURL=multitext-field.css.map */</style><textarea type$=\"[[type]]\" minlength$=\"[[minlength]]\" maxlength$=\"[[maxlength]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" on-keydown=\"onKeydown\" on-input=\"onChange\" on-change=\"onChange\" on-focus=\"onFocus\" on-blur=\"onBlur\"></textarea><div contenteditable=\"contenteditable\"><pre class=\"pre\"></pre></div>";
import { wrapEvent } from "./helpers.js";
let MultitextField = class MultitextField extends FieldMixin(PolymerElement) {
  constructor() {
    super(...arguments);
    this.value = '';
  }

  static get template() {
    return mkTemplate(template);
  }

  updateHeight() {
    let value = this.native.value;

    if (value.endsWith('\n')) {
      value += 'x';
    }

    this.pre.innerHTML = value;
    this.native.style.height = this.pre.offsetHeight - 12 + 'px';
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
    this.updateHeight();
  }

};

__decorate([property({
  type: String
})], MultitextField.prototype, "type", void 0);

__decorate([property({
  type: String
})], MultitextField.prototype, "placeholder", void 0);

__decorate([property({
  type: Number,
  reflectToAttribute: true
})], MultitextField.prototype, "minlength", void 0);

__decorate([property({
  type: Number,
  reflectToAttribute: true
})], MultitextField.prototype, "maxlength", void 0);

__decorate([property({
  type: String
})], MultitextField.prototype, "name", void 0);

__decorate([property({
  type: String,
  notify: true
})], MultitextField.prototype, "value", void 0);

__decorate([property({
  type: String
})], MultitextField.prototype, "minlengthMessage", void 0);

__decorate([property({
  type: String
})], MultitextField.prototype, "maxlengthMessage", void 0);

__decorate([query('textarea')], MultitextField.prototype, "native", void 0);

__decorate([query('.pre')], MultitextField.prototype, "pre", void 0);

__decorate([observe('value')], MultitextField.prototype, "valueChanged", null);

MultitextField = __decorate([customElement('dope-multitext-field')], MultitextField);
export { MultitextField };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtCQUFBLEUsS0FBMEIsQ0FBMUIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxLQUFLLENBQUMsVUFBRCxDQUNOLENBQUEsRSx3QkFBQSxFLFFBQUEsRSxLQUE2QixDQUE3QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLEtBQUssQ0FBQyxNQUFELENBQ04sQ0FBQSxFLHdCQUFBLEUsS0FBQSxFLEtBQXFCLENBQXJCLENBQUE7O0FBa0RBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxPQUFELENBQ1IsQ0FBQSxFLHdCQUFBLEUsY0FBQSxFQUlDLElBSkQsQ0FBQTs7QUFqRlcsY0FBYyxHQUFBLFVBQUEsQ0FBQSxDQUQxQixhQUFhLENBQUMsc0JBQUQsQ0FDYSxDQUFBLEVBQWQsY0FBYyxDQUFkO1NBQUEsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQnO1xuaW1wb3J0IHtjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgb2JzZXJ2ZSwgcXVlcnl9IGZyb20gJ0Bwb2x5bWVyL2RlY29yYXRvcnMvbGliL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgbWtUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGVzJztcbmltcG9ydCB7IEZpZWxkTWl4aW4sIFZhbHVlRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL211bHRpdGV4dC1maWVsZC9tdWx0aXRleHQtZmllbGQucHVnJztcbmltcG9ydCB7IHdyYXBFdmVudCB9IGZyb20gJy4vaGVscGVycyc7XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLW11bHRpdGV4dC1maWVsZCcpXG5leHBvcnQgY2xhc3MgTXVsdGl0ZXh0RmllbGQgZXh0ZW5kcyBGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8c3RyaW5nPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiBta1RlbXBsYXRlKHRlbXBsYXRlKTsgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICB0eXBlPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSB9KVxuICBtaW5sZW5ndGg/OiBudW1iZXI7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUgfSlcbiAgbWF4bGVuZ3RoPzogbnVtYmVyO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZywgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBzdHJpbmcgPSAnJztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbWlubGVuZ3RoTWVzc2FnZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbWF4bGVuZ3RoTWVzc2FnZT86IHN0cmluZztcblxuICBAcXVlcnkoJ3RleHRhcmVhJylcbiAgbmF0aXZlITogSFRNTFRleHRBcmVhRWxlbWVudDtcblxuICBAcXVlcnkoJy5wcmUnKVxuICBwcmUhOiBIVE1MRGl2RWxlbWVudDtcblxuICBwcml2YXRlIHVwZGF0ZUhlaWdodCAoKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5uYXRpdmUudmFsdWU7XG4gICAgaWYgKHZhbHVlLmVuZHNXaXRoKCdcXG4nKSkge1xuICAgICAgdmFsdWUgKz0gJ3gnO1xuICAgIH1cbiAgICB0aGlzLnByZS5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICB0aGlzLm5hdGl2ZS5zdHlsZS5oZWlnaHQgPSAodGhpcy5wcmUub2Zmc2V0SGVpZ2h0IC0gMTIpICsgJ3B4JztcbiAgfVxuXG4gIGFjdGl2YXRlKCkgeyB0aGlzLm5hdGl2ZS5mb2N1cygpOyB9XG5cbiAgb25LZXlkb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCBldyA9IHdyYXBFdmVudChlLCAnZG9wZScpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldyk7XG4gICAgaWYgKGV3LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShlOiBFdmVudCkge1xuICAgIGNvbnN0IGV3ID0gd3JhcEV2ZW50KGUsICdkb3BlJyk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV3KTtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5uYXRpdmUudmFsdWU7XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gIH1cblxuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICB9XG5cbiAgdmFsaWRhdGUoKSB7XG4gICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgIXRoaXMudmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlcXVpcmVkTWVzc2FnZSB8fCAnVmFsdWUgaXMgcmVxdWlyZWQnO1xuICAgIH1cbiAgICBpZiAodGhpcy5taW5sZW5ndGggJiYgdGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA8IHRoaXMubWlubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5taW5sZW5ndGhNZXNzYWdlIHx8ICdWYWx1ZSBpcyB0b28gc2hvcnQnO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXhsZW5ndGggJiYgdGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA+IHRoaXMubWF4bGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXhsZW5ndGhNZXNzYWdlIHx8ICdWYWx1ZSBpcyB0b28gbG9uZyc7XG4gICAgfVxuICB9XG5cbiAgQG9ic2VydmUoJ3ZhbHVlJylcbiAgdmFsdWVDaGFuZ2VkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5hdGl2ZS52YWx1ZSA9IChudWxsID09PSB2YWx1ZSB8fCB1bmRlZmluZWQgPT09IHZhbHVlKSA/ICcnIDogdmFsdWU7XG4gICAgdGhpcy5lbXB0eSA9ICF2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==