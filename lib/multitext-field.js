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
const template = "<style>:host{position:relative;display:inline-flex;flex-direction:column}textarea,.pre{overflow-y:auto;width:var(--dope-width, 100%);display:var(--dope-display);padding:0;margin:0;border:none;outline:none;font:inherit;background:transparent;line-height:1.4}textarea{height:1rem;resize:none;min-height:var(--min-height, calc(var(--height, 1.75rem) - .75rem))}.pre{position:absolute;z-index:-1;visibility:hidden;padding:.5rem 0 0 0;white-space:pre-wrap}\n\n/*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJImZpbGUiOiAibXVsdGl0ZXh0LWZpZWxkLmNzcyIsCgkic291cmNlcyI6IFsKCQkiLi4vLi4vc3JjL211bHRpdGV4dC1maWVsZC9tdWx0aXRleHQtZmllbGQuc2NzcyIKCV0sCgkic291cmNlc0NvbnRlbnQiOiBbCgkJIjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbnRleHRhcmVhLFxuLnByZSB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHdpZHRoOiB2YXIoLS1kb3BlLXdpZHRoLCAxMDAlKTtcbiAgZGlzcGxheTogdmFyKC0tZG9wZS1kaXNwbGF5KTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBsaW5lLWhlaWdodDogMS40O1xufVxudGV4dGFyZWEge1xuICBoZWlnaHQ6IDFyZW07XG4gIHJlc2l6ZTogbm9uZTtcbiAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCwgY2FsYyh2YXIoLS1oZWlnaHQsIDEuNzVyZW0pIC0gLjc1cmVtKSk7XG4gIC8vY2FsYyh2YXIoLS1oZWlnaHQsIDEuNzVyZW0pIC0gLjc1cmVtKTtcbiAgLy8gcGFkZGluZy10b3A6IC4zNzVyZW07XG4gIC8vIHBhZGRpbmctYm90dG9tOiAuMzc1cmVtO1xufVxuLnByZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcGFkZGluZzogLjVyZW0gMCAwIDA7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn0iCgldLAoJIm5hbWVzIjogW10sCgkibWFwcGluZ3MiOiAiQUFBQSxBQUFBLEtBQUssQUFBQyxDQUNKLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLE9BQU8sQ0FBRSxXQUFXLENBQ3BCLGNBQWMsQ0FBRSxNQUFNLENBQ3ZCLEFBQ0QsQUFBQSxRQUFRLENBQ1IsSUFBSSxBQUFDLENBQ0gsVUFBVSxDQUFFLElBQUksQ0FDaEIsS0FBSyxDQUFFLHVCQUF1QixDQUM5QixPQUFPLENBQUUsbUJBQW1CLENBQzVCLE9BQU8sQ0FBRSxDQUFDLENBQ1YsTUFBTSxDQUFFLENBQUMsQ0FDVCxNQUFNLENBQUUsSUFBSSxDQUNaLE9BQU8sQ0FBRSxJQUFJLENBQ2IsSUFBSSxDQUFFLE9BQU8sQ0FDYixVQUFVLENBQUUsV0FBVyxDQUN2QixXQUFXLENBQUUsR0FBRyxDQUNqQixBQUNELEFBQUEsUUFBUSxBQUFDLENBQ1AsTUFBTSxDQUFFLElBQUksQ0FDWixNQUFNLENBQUUsSUFBSSxDQUNaLFVBQVUsQ0FBRSx3REFBd0QsQ0FJckUsQUFDRCxBQUFBLElBQUksQUFBQyxDQUNILFFBQVEsQ0FBRSxRQUFRLENBQ2xCLE9BQU8sQ0FBRSxFQUFFLENBQ1gsVUFBVSxDQUFFLE1BQU0sQ0FDbEIsT0FBTyxDQUFFLFdBQVcsQ0FDcEIsV0FBVyxDQUFFLFFBQVEsQ0FDdEIiCn0= */</style><textarea type$=\"[[type]]\" minlength$=\"[[minlength]]\" maxlength$=\"[[maxlength]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" on-keydown=\"onKeydown\" on-input=\"onChange\" on-change=\"onChange\" on-focus=\"onFocus\" on-blur=\"onBlur\"></textarea><div contenteditable=\"contenteditable\"><pre class=\"pre\"></pre></div>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtCQUFBLEUsS0FBMEIsQ0FBMUIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxLQUFLLENBQUMsVUFBRCxDQUNOLENBQUEsRSx3QkFBQSxFLFFBQUEsRSxLQUE2QixDQUE3QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLEtBQUssQ0FBQyxNQUFELENBQ04sQ0FBQSxFLHdCQUFBLEUsS0FBQSxFLEtBQXFCLENBQXJCLENBQUE7O0FBa0RBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxPQUFELENBQ1IsQ0FBQSxFLHdCQUFBLEUsY0FBQSxFQUlDLElBSkQsQ0FBQTs7QUFqRlcsY0FBYyxHQUFBLFVBQUEsQ0FBQSxDQUQxQixhQUFhLENBQUMsc0JBQUQsQ0FDYSxDQUFBLEVBQWQsY0FBYyxDQUFkO1NBQUEsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQnO1xuaW1wb3J0IHtjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgb2JzZXJ2ZSwgcXVlcnl9IGZyb20gJ0Bwb2x5bWVyL2RlY29yYXRvcnMvbGliL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgbWtUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGVzJztcbmltcG9ydCB7IEZpZWxkTWl4aW4sIFZhbHVlRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL211bHRpdGV4dC1maWVsZC9tdWx0aXRleHQtZmllbGQucHVnJztcbmltcG9ydCB7IHdyYXBFdmVudCB9IGZyb20gJy4vaGVscGVycyc7XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLW11bHRpdGV4dC1maWVsZCcpXG5leHBvcnQgY2xhc3MgTXVsdGl0ZXh0RmllbGQgZXh0ZW5kcyBGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8c3RyaW5nPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiBta1RlbXBsYXRlKHRlbXBsYXRlKTsgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICB0eXBlPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSB9KVxuICBtaW5sZW5ndGg/OiBudW1iZXI7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUgfSlcbiAgbWF4bGVuZ3RoPzogbnVtYmVyO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZywgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBzdHJpbmcgPSAnJztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbWlubGVuZ3RoTWVzc2FnZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbWF4bGVuZ3RoTWVzc2FnZT86IHN0cmluZztcblxuICBAcXVlcnkoJ3RleHRhcmVhJylcbiAgbmF0aXZlITogSFRNTFRleHRBcmVhRWxlbWVudDtcblxuICBAcXVlcnkoJy5wcmUnKVxuICBwcmUhOiBIVE1MRGl2RWxlbWVudDtcblxuICBwcml2YXRlIHVwZGF0ZUhlaWdodCgpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLm5hdGl2ZS52YWx1ZTtcbiAgICBpZiAodmFsdWUuZW5kc1dpdGgoJ1xcbicpKSB7XG4gICAgICB2YWx1ZSArPSAneCc7XG4gICAgfVxuICAgIHRoaXMucHJlLmlubmVySFRNTCA9IHZhbHVlO1xuICAgIHRoaXMubmF0aXZlLnN0eWxlLmhlaWdodCA9ICh0aGlzLnByZS5vZmZzZXRIZWlnaHQgLSAxMikgKyAncHgnO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7IHRoaXMubmF0aXZlLmZvY3VzKCk7IH1cblxuICBvbktleWRvd24oZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNvbnN0IGV3ID0gd3JhcEV2ZW50KGUsICdkb3BlJyk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV3KTtcbiAgICBpZiAoZXcuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKGU6IEV2ZW50KSB7XG4gICAgY29uc3QgZXcgPSB3cmFwRXZlbnQoZSwgJ2RvcGUnKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXcpO1xuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLm5hdGl2ZS52YWx1ZTtcbiAgfVxuXG4gIG9uQmx1cigpIHtcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5hY3RpdmF0ZWQgPSB0cnVlO1xuICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiAhdGhpcy52YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVxdWlyZWRNZXNzYWdlIHx8ICdWYWx1ZSBpcyByZXF1aXJlZCc7XG4gICAgfVxuICAgIGlmICh0aGlzLm1pbmxlbmd0aCAmJiB0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubGVuZ3RoIDwgdGhpcy5taW5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1pbmxlbmd0aE1lc3NhZ2UgfHwgJ1ZhbHVlIGlzIHRvbyBzaG9ydCc7XG4gICAgfVxuICAgIGlmICh0aGlzLm1heGxlbmd0aCAmJiB0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubGVuZ3RoID4gdGhpcy5tYXhsZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1heGxlbmd0aE1lc3NhZ2UgfHwgJ1ZhbHVlIGlzIHRvbyBsb25nJztcbiAgICB9XG4gIH1cblxuICBAb2JzZXJ2ZSgndmFsdWUnKVxuICB2YWx1ZUNoYW5nZWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMubmF0aXZlLnZhbHVlID0gKG51bGwgPT09IHZhbHVlIHx8IHVuZGVmaW5lZCA9PT0gdmFsdWUpID8gJycgOiB2YWx1ZTtcbiAgICB0aGlzLmVtcHR5ID0gIXZhbHVlO1xuICAgIHRoaXMudXBkYXRlSGVpZ2h0KCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=