var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import "../menu/menu.js";
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { property, customElement, observe, query } from "@polymer/decorators/lib/decorators.js";
import { FieldMixin } from "../field.js";
import { mkTemplate } from "../templates.js";
const template = "<style>:host{display:inline-block}\n\n/*# sourceMappingURL=list-field.css.map */</style><div class=\"field\" tabindex$=\"[[tabindex]]\" focused$=\"[[focused]]\" empty$=\"[[empty]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" invalid$=\"[[invalid]]\" on-focus=\"onFocus\" on-blur=\"onBlur\"><dope-menu items=\"[[toMenuItems(formatter, items, required, placeholder)]]\" on-choose=\"onMenuChoose\" selected-index=\"{{selectedIndex}}\"></dope-menu></div>";

class ItemWrapper {
  constructor(source, formatter) {
    this.source = source;
    this.formatter = formatter;
  }

  get disabled() {
    return this.source.disabled;
  }

  get icon() {
    return this.source.icon;
  }

  get data() {
    return this.source.data;
  }

  get text() {
    return this.formatter(this.data);
  }

}

let ListField = class ListField extends FieldMixin(PolymerElement) {
  constructor() {
    super();
    this.tabindex = 0;
    this.items = [];
    /**
     * Bound to underlying menu property.
     */

    this.selectedIndex = -1;

    this.formatter = x => x ? x.toString() : '';
  }

  static get template() {
    return mkTemplate(template);
  }

  activate() {
    this.wrapper.focus();
  }

  onBlur() {
    this.focused = false;
  }

  onFocus() {
    this.focused = true;
  }

  onMenuChoose(e) {
    e.preventDefault();
    this.dirty = true;
    this.value = e.detail;
  }

  toMenuItems(formatter, items, required, placeholder) {
    let mapped;

    if (!items || !formatter) {
      mapped = [];
    }

    mapped = items.map(item => new ItemWrapper(item, formatter));

    if (!required) {
      mapped.unshift({
        data: undefined,
        text: placeholder || ''
      });
    }

    return mapped;
  }

  observeEmpty(value) {
    this.empty = !value;

    if (this.required) {
      this.invalid = !value;
    }
  }

  observeSelectedIndex(value, items, required) {
    if (!value || !items) {
      this.selectedIndex = required ? -1 : 0;
    } else {
      this.selectedIndex = items.findIndex(item => item.data === value) + (required ? 0 : 1);
    }
  }

};

__decorate([property({
  type: Object,
  notify: true
})], ListField.prototype, "value", void 0);

__decorate([property({
  type: Number
})], ListField.prototype, "tabindex", void 0);

__decorate([property()], ListField.prototype, "formatter", void 0);

__decorate([property({
  type: Array
})], ListField.prototype, "items", void 0);

__decorate([property({
  type: String
})], ListField.prototype, "placeholder", void 0);

__decorate([property({
  type: Number,
  notify: true
})], ListField.prototype, "selectedIndex", void 0);

__decorate([query('.field')], ListField.prototype, "wrapper", void 0);

__decorate([observe('value')], ListField.prototype, "observeEmpty", null);

__decorate([observe('value', 'items', 'required')], ListField.prototype, "observeSelectedIndex", null);

ListField = __decorate([customElement('dope-list-field')], ListField);
export { ListField };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBMkIsQ0FBM0IsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxLQUFLLENBQUMsUUFBRCxDQUNOLENBQUEsRSxtQkFBQSxFLFNBQUEsRSxLQUF5QixDQUF6QixDQUFBOztBQW1DQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsT0FBRCxDQUNSLENBQUEsRSxtQkFBQSxFLGNBQUEsRUFLQyxJQUxELENBQUE7O0FBUUEsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLFVBQW5CLENBQ1IsQ0FBQSxFLG1CQUFBLEUsc0JBQUEsRUFNQyxJQU5ELENBQUE7O0FBcEVXLFNBQVMsR0FBQSxVQUFBLENBQUEsQ0FEckIsYUFBYSxDQUFDLGlCQUFELENBQ1EsQ0FBQSxFQUFULFNBQVMsQ0FBVDtTQUFBLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL21lbnUvbWVudSc7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50JztcbmltcG9ydCB7IHByb3BlcnR5LCBjdXN0b21FbGVtZW50LCBvYnNlcnZlLCBxdWVyeSB9IGZyb20gJ0Bwb2x5bWVyL2RlY29yYXRvcnMvbGliL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgRmllbGRNaXhpbiwgVmFsdWVGaWVsZCB9IGZyb20gJy4uL2ZpZWxkJztcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICcuLi9tZW51L21lbnUnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbGlzdC1maWVsZC5wdWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpc3RGaWVsZEl0ZW08VD4ge1xuICAvKiogV2hldGhlciBpdGVtIGlzIGRpc2FibGVkLiAqL1xuICByZWFkb25seSBkaXNhYmxlZD86IGJvb2xlYW47XG4gIC8qKiBJY29uIHRvIHNob3cgaWYgYW55LiAqL1xuICByZWFkb25seSBpY29uPzogc3RyaW5nO1xuICAvKiogVW5kZXJseWluZyB2YWx1ZSBvZiB0aGUgaXRlbS4gKi9cbiAgcmVhZG9ubHkgZGF0YTogVFxufVxuXG5jbGFzcyBJdGVtV3JhcHBlcjxUPiBpbXBsZW1lbnRzIExpc3RGaWVsZEl0ZW08VD4sIE1lbnVJdGVtIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzb3VyY2U6IExpc3RGaWVsZEl0ZW08VD47XG4gIHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0dGVyOiAoaXRlbTogVHx1bmRlZmluZWQpID0+IHN0cmluZztcbiAgZ2V0IGRpc2FibGVkKCkgeyByZXR1cm4gdGhpcy5zb3VyY2UuZGlzYWJsZWQ7IH1cbiAgZ2V0IGljb24oKSB7IHJldHVybiB0aGlzLnNvdXJjZS5pY29uOyB9XG4gIGdldCBkYXRhKCkgeyByZXR1cm4gdGhpcy5zb3VyY2UuZGF0YTsgfVxuICBnZXQgdGV4dCgpIHsgcmV0dXJuIHRoaXMuZm9ybWF0dGVyKHRoaXMuZGF0YSk7IH1cbiAgY29uc3RydWN0b3Ioc291cmNlOiBMaXN0RmllbGRJdGVtPFQ+LCBmb3JtYXR0ZXI6IChpdGVtOiBUfHVuZGVmaW5lZCkgPT4gc3RyaW5nKSB7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgdGhpcy5mb3JtYXR0ZXIgPSBmb3JtYXR0ZXI7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtbGlzdC1maWVsZCcpXG5leHBvcnQgY2xhc3MgTGlzdEZpZWxkPFQ+IGV4dGVuZHMgRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkgaW1wbGVtZW50cyBWYWx1ZUZpZWxkPFR8dW5kZWZpbmVkPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiBta1RlbXBsYXRlKHRlbXBsYXRlKTsgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBUfHVuZGVmaW5lZDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbiAgdGFiaW5kZXg/OiBudW1iZXIgPSAwO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIGZvcm1hdHRlcjogKGl0ZW06IFR8dW5kZWZpbmVkKSA9PiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSlcbiAgaXRlbXM6IExpc3RGaWVsZEl0ZW08VD5bXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICAvKipcbiAgICogQm91bmQgdG8gdW5kZXJseWluZyBtZW51IHByb3BlcnR5LlxuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCBub3RpZnk6IHRydWUgfSlcbiAgc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gLTE7XG5cbiAgQHF1ZXJ5KCcuZmllbGQnKVxuICB3cmFwcGVyITogSFRNTERpdkVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmZvcm1hdHRlciA9IHggPT4geCA/IHgudG9TdHJpbmcoKSA6ICcnO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7IHRoaXMud3JhcHBlci5mb2N1cygpOyB9XG5cbiAgb25CbHVyKCkgeyB0aGlzLmZvY3VzZWQgPSBmYWxzZTsgfVxuXG4gIG9uRm9jdXMoKSB7IHRoaXMuZm9jdXNlZCA9IHRydWU7IH1cblxuICBvbk1lbnVDaG9vc2UoZTogQ3VzdG9tRXZlbnQ8VD4pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgdGhpcy52YWx1ZSA9IGUuZGV0YWlsO1xuICB9XG5cbiAgdG9NZW51SXRlbXMoZm9ybWF0dGVyOiAoaXRlbTogVHx1bmRlZmluZWQpID0+IHN0cmluZywgaXRlbXM6IExpc3RGaWVsZEl0ZW08VD5bXSwgcmVxdWlyZWQ6IGJvb2xlYW58dW5kZWZpbmVkLCBwbGFjZWhvbGRlcjogc3RyaW5nfHVuZGVmaW5lZCkge1xuICAgIGxldCBtYXBwZWQ6IE1lbnVJdGVtW107XG4gICAgaWYgKCFpdGVtcyB8fCAhZm9ybWF0dGVyKSB7XG4gICAgICBtYXBwZWQgPSBbXTtcbiAgICB9XG4gICAgbWFwcGVkID0gaXRlbXMubWFwKGl0ZW0gPT4gbmV3IEl0ZW1XcmFwcGVyPFQ+KGl0ZW0sIGZvcm1hdHRlcikpO1xuICAgIGlmICghcmVxdWlyZWQpIHtcbiAgICAgIG1hcHBlZC51bnNoaWZ0KHtcbiAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgICB0ZXh0OiBwbGFjZWhvbGRlciB8fCAnJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtYXBwZWQ7XG4gIH1cblxuICBAb2JzZXJ2ZSgndmFsdWUnKVxuICBvYnNlcnZlRW1wdHkodmFsdWU6IFR8dW5kZWZpbmVkKSB7XG4gICAgdGhpcy5lbXB0eSA9ICF2YWx1ZTtcbiAgICBpZiAodGhpcy5yZXF1aXJlZCkge1xuICAgICAgdGhpcy5pbnZhbGlkID0gIXZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIEBvYnNlcnZlKCd2YWx1ZScsICdpdGVtcycsICdyZXF1aXJlZCcpXG4gIG9ic2VydmVTZWxlY3RlZEluZGV4KHZhbHVlOiBUfHVuZGVmaW5lZCwgaXRlbXM6IExpc3RGaWVsZEl0ZW08VD5bXSwgcmVxdWlyZWQ6IGJvb2xlYW58dW5kZWZpbmVkKSB7XG4gICAgaWYgKCF2YWx1ZSB8fCAhaXRlbXMpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHJlcXVpcmVkID8gLTEgOiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmRhdGEgPT09IHZhbHVlKSArIChyZXF1aXJlZCA/IDAgOiAxKTtcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9