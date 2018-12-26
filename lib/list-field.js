var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import "./menu.js";
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { property, customElement, observe, query } from "@polymer/decorators/lib/decorators.js";
import { FieldMixin } from "./field.js";
import { mkTemplate } from "./templates.js";
const template = "<style>:host{display:inline-flex;flex-direction:column;vertical-align:middle}.field{height:100%;display:inline-block;overflow-x:none;overflow-y:auto}dope-menu{height:100%}\n\n/*# sourceMappingURL=list-field.css.map */</style><div class=\"field\" tabindex$=\"[[tabindex]]\" focused$=\"[[focused]]\" empty$=\"[[empty]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" invalid$=\"[[invalid]]\" on-focus=\"onFocus\" on-blur=\"onBlur\"><dope-menu items=\"[[toMenuItems(formatter, items, required, placeholder)]]\" on-choose=\"onMenuChoose\" selected-index=\"{{selectedIndex}}\"></dope-menu></div>";

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

    this.equality = (a, b) => a === b;

    this.items = [];
    /**
     * Bound to underlying menu property.
     */

    this.selectedIndex = -1;
    this.empty = true;

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
      this.selectedIndex = items.findIndex(item => {
        return this.equality(item.data, value);
      }) + (required ? 0 : 1);
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

__decorate([property()], ListField.prototype, "equality", void 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSxtQkFBQSxFLGFBQUEsRSxLQUFxQixDQUFyQixDQUFBOztBQU1BLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0IsRUFBQSxNQUFNLEVBQUU7QUFBeEIsQ0FBRCxDQUNULENBQUEsRSxtQkFBQSxFLGVBQUEsRSxLQUEyQixDQUEzQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLEtBQUssQ0FBQyxRQUFELENBQ04sQ0FBQSxFLG1CQUFBLEUsU0FBQSxFLEtBQXlCLENBQXpCLENBQUE7O0FBb0NBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxPQUFELENBQ1IsQ0FBQSxFLG1CQUFBLEUsY0FBQSxFQUtDLElBTEQsQ0FBQTs7QUFRQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsVUFBbkIsQ0FDUixDQUFBLEUsbUJBQUEsRSxzQkFBQSxFQVFDLElBUkQsQ0FBQTs7QUF4RVcsU0FBUyxHQUFBLFVBQUEsQ0FBQSxDQURyQixhQUFhLENBQUMsaUJBQUQsQ0FDUSxDQUFBLEVBQVQsU0FBUyxDQUFUO1NBQUEsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9tZW51JztcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQnO1xuaW1wb3J0IHsgcHJvcGVydHksIGN1c3RvbUVsZW1lbnQsIG9ic2VydmUsIHF1ZXJ5IH0gZnJvbSAnQHBvbHltZXIvZGVjb3JhdG9ycy9saWIvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBGaWVsZE1peGluLCBWYWx1ZUZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQgeyBta1RlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbGlzdC1maWVsZC9saXN0LWZpZWxkLnB1Zyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdEZpZWxkSXRlbTxUPiB7XG4gIC8qKiBXaGV0aGVyIGl0ZW0gaXMgZGlzYWJsZWQuICovXG4gIHJlYWRvbmx5IGRpc2FibGVkPzogYm9vbGVhbjtcbiAgLyoqIEljb24gdG8gc2hvdyBpZiBhbnkuICovXG4gIHJlYWRvbmx5IGljb24/OiBzdHJpbmc7XG4gIC8qKiBVbmRlcmx5aW5nIHZhbHVlIG9mIHRoZSBpdGVtLiAqL1xuICByZWFkb25seSBkYXRhOiBUXG59XG5cbmNsYXNzIEl0ZW1XcmFwcGVyPFQ+IGltcGxlbWVudHMgTGlzdEZpZWxkSXRlbTxUPiwgTWVudUl0ZW0ge1xuICBwcml2YXRlIHJlYWRvbmx5IHNvdXJjZTogTGlzdEZpZWxkSXRlbTxUPjtcbiAgcHJpdmF0ZSByZWFkb25seSBmb3JtYXR0ZXI6IChpdGVtOiBUfHVuZGVmaW5lZCkgPT4gc3RyaW5nO1xuICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLnNvdXJjZS5kaXNhYmxlZDsgfVxuICBnZXQgaWNvbigpIHsgcmV0dXJuIHRoaXMuc291cmNlLmljb247IH1cbiAgZ2V0IGRhdGEoKSB7IHJldHVybiB0aGlzLnNvdXJjZS5kYXRhOyB9XG4gIGdldCB0ZXh0KCkgeyByZXR1cm4gdGhpcy5mb3JtYXR0ZXIodGhpcy5kYXRhKTsgfVxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IExpc3RGaWVsZEl0ZW08VD4sIGZvcm1hdHRlcjogKGl0ZW06IFR8dW5kZWZpbmVkKSA9PiBzdHJpbmcpIHtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB0aGlzLmZvcm1hdHRlciA9IGZvcm1hdHRlcjtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1saXN0LWZpZWxkJylcbmV4cG9ydCBjbGFzcyBMaXN0RmllbGQ8VD4gZXh0ZW5kcyBGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8VHx1bmRlZmluZWQ+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUodGVtcGxhdGUpOyB9XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWUgfSlcbiAgdmFsdWU6IFR8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICB0YWJpbmRleD86IG51bWJlciA9IDA7XG5cbiAgQHByb3BlcnR5KClcbiAgZm9ybWF0dGVyOiAoaXRlbTogVHx1bmRlZmluZWQpID0+IHN0cmluZztcblxuICBAcHJvcGVydHkoKVxuICBlcXVhbGl0eTogKGE6IFR8dW5kZWZpbmVkLCBiOiBUfHVuZGVmaW5lZCkgPT4gYm9vbGVhbiA9IChhLCBiKSA9PiBhID09PSBiO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gIGl0ZW1zOiBMaXN0RmllbGRJdGVtPFQ+W10gPSBbXTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJvdW5kIHRvIHVuZGVybHlpbmcgbWVudSBwcm9wZXJ0eS5cbiAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciwgbm90aWZ5OiB0cnVlIH0pXG4gIHNlbGVjdGVkSW5kZXg6IG51bWJlciA9IC0xO1xuXG4gIEBxdWVyeSgnLmZpZWxkJylcbiAgd3JhcHBlciE6IEhUTUxEaXZFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5lbXB0eSA9IHRydWU7XG4gICAgdGhpcy5mb3JtYXR0ZXIgPSB4ID0+IHggPyB4LnRvU3RyaW5nKCkgOiAnJztcbiAgfVxuXG4gIGFjdGl2YXRlKCkgeyB0aGlzLndyYXBwZXIuZm9jdXMoKTsgfVxuXG4gIG9uQmx1cigpIHsgdGhpcy5mb2N1c2VkID0gZmFsc2U7IH1cblxuICBvbkZvY3VzKCkgeyB0aGlzLmZvY3VzZWQgPSB0cnVlOyB9XG5cbiAgb25NZW51Q2hvb3NlKGU6IEN1c3RvbUV2ZW50PFQ+KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIHRoaXMudmFsdWUgPSBlLmRldGFpbDtcbiAgfVxuXG4gIHRvTWVudUl0ZW1zKGZvcm1hdHRlcjogKGl0ZW06IFR8dW5kZWZpbmVkKSA9PiBzdHJpbmcsIGl0ZW1zOiBMaXN0RmllbGRJdGVtPFQ+W10sIHJlcXVpcmVkOiBib29sZWFufHVuZGVmaW5lZCwgcGxhY2Vob2xkZXI6IHN0cmluZ3x1bmRlZmluZWQpIHtcbiAgICBsZXQgbWFwcGVkOiBNZW51SXRlbVtdO1xuICAgIGlmICghaXRlbXMgfHwgIWZvcm1hdHRlcikge1xuICAgICAgbWFwcGVkID0gW107XG4gICAgfVxuICAgIG1hcHBlZCA9IGl0ZW1zLm1hcChpdGVtID0+IG5ldyBJdGVtV3JhcHBlcjxUPihpdGVtLCBmb3JtYXR0ZXIpKTtcbiAgICBpZiAoIXJlcXVpcmVkKSB7XG4gICAgICBtYXBwZWQudW5zaGlmdCh7XG4gICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgdGV4dDogcGxhY2Vob2xkZXIgfHwgJydcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbWFwcGVkO1xuICB9XG5cbiAgQG9ic2VydmUoJ3ZhbHVlJylcbiAgb2JzZXJ2ZUVtcHR5KHZhbHVlOiBUfHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZW1wdHkgPSAhdmFsdWU7XG4gICAgaWYgKHRoaXMucmVxdWlyZWQpIHtcbiAgICAgIHRoaXMuaW52YWxpZCA9ICF2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBAb2JzZXJ2ZSgndmFsdWUnLCAnaXRlbXMnLCAncmVxdWlyZWQnKVxuICBvYnNlcnZlU2VsZWN0ZWRJbmRleCh2YWx1ZTogVHx1bmRlZmluZWQsIGl0ZW1zOiBMaXN0RmllbGRJdGVtPFQ+W10sIHJlcXVpcmVkOiBib29sZWFufHVuZGVmaW5lZCkge1xuICAgIGlmICghdmFsdWUgfHwgIWl0ZW1zKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSByZXF1aXJlZCA/IC0xIDogMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaXRlbXMuZmluZEluZGV4KGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5lcXVhbGl0eShpdGVtLmRhdGEsIHZhbHVlKTtcbiAgICAgIH0pICsgKHJlcXVpcmVkID8gMCA6IDEpO1xuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=