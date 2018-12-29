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
const template = "<style>:host{display:inline-flex;flex-direction:column;vertical-align:middle}.field{outline:none;height:100%;display:inline-block;overflow-x:none;overflow-y:auto;border-radius:var(--border-radius, 0)}dope-menu{height:100%}\n\n/*# sourceMappingURL=list-field.css.map */</style><div class=\"field\" tabindex$=\"[[tabindex]]\" focused$=\"[[focused]]\" empty$=\"[[empty]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" invalid$=\"[[invalid]]\" on-focus=\"onFocus\" on-blur=\"onBlur\"><dope-menu items=\"[[toMenuItems(formatter, items, required, placeholder)]]\" on-choose=\"onMenuChoose\" selected-index=\"{{selectedIndex}}\"></dope-menu></div>";

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
    this.empty = !value; // moved to validation...
    // if (this.required) {
    //   this.invalid = !value;
    // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFELENBQ1QsQ0FBQSxFLG1CQUFBLEUsYUFBQSxFLEtBQXFCLENBQXJCLENBQUE7O0FBTUEsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQixFQUFBLE1BQU0sRUFBRTtBQUF4QixDQUFELENBQ1QsQ0FBQSxFLG1CQUFBLEUsZUFBQSxFLEtBQTJCLENBQTNCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsS0FBSyxDQUFDLFFBQUQsQ0FDTixDQUFBLEUsbUJBQUEsRSxTQUFBLEUsS0FBeUIsQ0FBekIsQ0FBQTs7QUFvQ0EsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLE9BQUQsQ0FDUixDQUFBLEUsbUJBQUEsRSxjQUFBLEVBTUMsSUFORCxDQUFBOztBQVNBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixVQUFuQixDQUNSLENBQUEsRSxtQkFBQSxFLHNCQUFBLEVBUUMsSUFSRCxDQUFBOztBQXpFVyxTQUFTLEdBQUEsVUFBQSxDQUFBLENBRHJCLGFBQWEsQ0FBQyxpQkFBRCxDQUNRLENBQUEsRUFBVCxTQUFTLENBQVQ7U0FBQSxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL21lbnUnO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgY3VzdG9tRWxlbWVudCwgb2JzZXJ2ZSwgcXVlcnkgfSBmcm9tICdAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IEZpZWxkTWl4aW4sIFZhbHVlRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlcyc7XG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9saXN0LWZpZWxkL2xpc3QtZmllbGQucHVnJztcblxuZXhwb3J0IGludGVyZmFjZSBMaXN0RmllbGRJdGVtPFQ+IHtcbiAgLyoqIFdoZXRoZXIgaXRlbSBpcyBkaXNhYmxlZC4gKi9cbiAgcmVhZG9ubHkgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAvKiogSWNvbiB0byBzaG93IGlmIGFueS4gKi9cbiAgcmVhZG9ubHkgaWNvbj86IHN0cmluZztcbiAgLyoqIFVuZGVybHlpbmcgdmFsdWUgb2YgdGhlIGl0ZW0uICovXG4gIHJlYWRvbmx5IGRhdGE6IFRcbn1cblxuY2xhc3MgSXRlbVdyYXBwZXI8VD4gaW1wbGVtZW50cyBMaXN0RmllbGRJdGVtPFQ+LCBNZW51SXRlbSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc291cmNlOiBMaXN0RmllbGRJdGVtPFQ+O1xuICBwcml2YXRlIHJlYWRvbmx5IGZvcm1hdHRlcjogKGl0ZW06IFR8dW5kZWZpbmVkKSA9PiBzdHJpbmc7XG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuc291cmNlLmRpc2FibGVkOyB9XG4gIGdldCBpY29uKCkgeyByZXR1cm4gdGhpcy5zb3VyY2UuaWNvbjsgfVxuICBnZXQgZGF0YSgpIHsgcmV0dXJuIHRoaXMuc291cmNlLmRhdGE7IH1cbiAgZ2V0IHRleHQoKSB7IHJldHVybiB0aGlzLmZvcm1hdHRlcih0aGlzLmRhdGEpOyB9XG4gIGNvbnN0cnVjdG9yKHNvdXJjZTogTGlzdEZpZWxkSXRlbTxUPiwgZm9ybWF0dGVyOiAoaXRlbTogVHx1bmRlZmluZWQpID0+IHN0cmluZykge1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIHRoaXMuZm9ybWF0dGVyID0gZm9ybWF0dGVyO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLWxpc3QtZmllbGQnKVxuZXhwb3J0IGNsYXNzIExpc3RGaWVsZDxUPiBleHRlbmRzIEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpIGltcGxlbWVudHMgVmFsdWVGaWVsZDxUfHVuZGVmaW5lZD4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gbWtUZW1wbGF0ZSh0ZW1wbGF0ZSk7IH1cblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogVHx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIHRhYmluZGV4PzogbnVtYmVyID0gMDtcblxuICBAcHJvcGVydHkoKVxuICBmb3JtYXR0ZXI6IChpdGVtOiBUfHVuZGVmaW5lZCkgPT4gc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIGVxdWFsaXR5OiAoYTogVHx1bmRlZmluZWQsIGI6IFR8dW5kZWZpbmVkKSA9PiBib29sZWFuID0gKGEsIGIpID0+IGEgPT09IGI7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSlcbiAgaXRlbXM6IExpc3RGaWVsZEl0ZW08VD5bXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICAvKipcbiAgICogQm91bmQgdG8gdW5kZXJseWluZyBtZW51IHByb3BlcnR5LlxuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCBub3RpZnk6IHRydWUgfSlcbiAgc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gLTE7XG5cbiAgQHF1ZXJ5KCcuZmllbGQnKVxuICB3cmFwcGVyITogSFRNTERpdkVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmVtcHR5ID0gdHJ1ZTtcbiAgICB0aGlzLmZvcm1hdHRlciA9IHggPT4geCA/IHgudG9TdHJpbmcoKSA6ICcnO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7IHRoaXMud3JhcHBlci5mb2N1cygpOyB9XG5cbiAgb25CbHVyKCkgeyB0aGlzLmZvY3VzZWQgPSBmYWxzZTsgfVxuXG4gIG9uRm9jdXMoKSB7IHRoaXMuZm9jdXNlZCA9IHRydWU7IH1cblxuICBvbk1lbnVDaG9vc2UoZTogQ3VzdG9tRXZlbnQ8VD4pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgdGhpcy52YWx1ZSA9IGUuZGV0YWlsO1xuICB9XG5cbiAgdG9NZW51SXRlbXMoZm9ybWF0dGVyOiAoaXRlbTogVHx1bmRlZmluZWQpID0+IHN0cmluZywgaXRlbXM6IExpc3RGaWVsZEl0ZW08VD5bXSwgcmVxdWlyZWQ6IGJvb2xlYW58dW5kZWZpbmVkLCBwbGFjZWhvbGRlcjogc3RyaW5nfHVuZGVmaW5lZCkge1xuICAgIGxldCBtYXBwZWQ6IE1lbnVJdGVtW107XG4gICAgaWYgKCFpdGVtcyB8fCAhZm9ybWF0dGVyKSB7XG4gICAgICBtYXBwZWQgPSBbXTtcbiAgICB9XG4gICAgbWFwcGVkID0gaXRlbXMubWFwKGl0ZW0gPT4gbmV3IEl0ZW1XcmFwcGVyPFQ+KGl0ZW0sIGZvcm1hdHRlcikpO1xuICAgIGlmICghcmVxdWlyZWQpIHtcbiAgICAgIG1hcHBlZC51bnNoaWZ0KHtcbiAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgICB0ZXh0OiBwbGFjZWhvbGRlciB8fCAnJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtYXBwZWQ7XG4gIH1cblxuICBAb2JzZXJ2ZSgndmFsdWUnKVxuICBvYnNlcnZlRW1wdHkodmFsdWU6IFR8dW5kZWZpbmVkKSB7XG4gICAgdGhpcy5lbXB0eSA9ICF2YWx1ZTtcbiAgICAvLyBtb3ZlZCB0byB2YWxpZGF0aW9uLi4uXG4gICAgLy8gaWYgKHRoaXMucmVxdWlyZWQpIHtcbiAgICAvLyAgIHRoaXMuaW52YWxpZCA9ICF2YWx1ZTtcbiAgICAvLyB9XG4gIH1cblxuICBAb2JzZXJ2ZSgndmFsdWUnLCAnaXRlbXMnLCAncmVxdWlyZWQnKVxuICBvYnNlcnZlU2VsZWN0ZWRJbmRleCh2YWx1ZTogVHx1bmRlZmluZWQsIGl0ZW1zOiBMaXN0RmllbGRJdGVtPFQ+W10sIHJlcXVpcmVkOiBib29sZWFufHVuZGVmaW5lZCkge1xuICAgIGlmICghdmFsdWUgfHwgIWl0ZW1zKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSByZXF1aXJlZCA/IC0xIDogMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaXRlbXMuZmluZEluZGV4KGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5lcXVhbGl0eShpdGVtLmRhdGEsIHZhbHVlKTtcbiAgICAgIH0pICsgKHJlcXVpcmVkID8gMCA6IDEpO1xuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=