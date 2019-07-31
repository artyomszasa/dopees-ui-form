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
const template = "<style>:host{display:inline-flex;flex-direction:column;vertical-align:middle;width:var(--width, 100%)}.field{outline:var(--outline, none);height:100%;display:inline-block;overflow-x:none;overflow-y:auto;border-radius:var(--border-radius, 0)}dope-menu{height:100%}\n\n/*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJImZpbGUiOiAibGlzdC1maWVsZC5jc3MiLAoJInNvdXJjZXMiOiBbCgkJIi4uLy4uL3NyYy9saXN0LWZpZWxkL2xpc3QtZmllbGQuc2NzcyIKCV0sCgkic291cmNlc0NvbnRlbnQiOiBbCgkJIjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiB2YXIoLS13aWR0aCwgMTAwJSk7XG59XG5cbi5maWVsZCB7XG4gIG91dGxpbmU6IHZhcigtLW91dGxpbmUsIG5vbmUpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3cteDogbm9uZTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cywgMCk7XG59XG5cbmRvcGUtbWVudSB7XG4gIGhlaWdodDogMTAwJTtcbn0iCgldLAoJIm5hbWVzIjogW10sCgkibWFwcGluZ3MiOiAiQUFBQSxBQUFBLEtBQUssQUFBQyxDQUNKLE9BQU8sQ0FBRSxXQUFXLENBQ3BCLGNBQWMsQ0FBRSxNQUFNLENBQ3RCLGNBQWMsQ0FBRSxNQUFNLENBQ3RCLEtBQUssQ0FBRSxrQkFBa0IsQ0FDMUIsQUFFRCxBQUFBLE1BQU0sQUFBQyxDQUNMLE9BQU8sQ0FBRSxvQkFBb0IsQ0FDN0IsTUFBTSxDQUFFLElBQUksQ0FDWixPQUFPLENBQUUsWUFBWSxDQUNyQixVQUFVLENBQUUsSUFBSSxDQUNoQixVQUFVLENBQUUsSUFBSSxDQUNoQixhQUFhLENBQUUsdUJBQXVCLENBQ3ZDLEFBRUQsQUFBQSxTQUFTLEFBQUMsQ0FDUixNQUFNLENBQUUsSUFBSSxDQUNiIgp9 */</style><div class=\"field\" tabindex$=\"[[tabindex]]\" focused$=\"[[focused]]\" empty$=\"[[empty]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" invalid$=\"[[invalid]]\" on-focus=\"onFocus\" on-blur=\"onBlur\"><dope-menu items=\"[[toMenuItems(formatter, items, required, placeholder)]]\" on-choose=\"onMenuChoose\" selected-index=\"{{selectedIndex}}\"></dope-menu></div>";

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
  } // tslint:disable-next-line:max-line-length


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
    this.empty = 0 !== value && !value; // moved to validation...
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7QUFBRSxFQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FDVCxDQUFBLEUsbUJBQUEsRSxhQUFBLEUsS0FBcUIsQ0FBckIsQ0FBQTs7QUFNQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCLEVBQUEsTUFBTSxFQUFFO0FBQXhCLENBQUQsQ0FDVCxDQUFBLEUsbUJBQUEsRSxlQUFBLEUsS0FBMkIsQ0FBM0IsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxLQUFLLENBQUMsUUFBRCxDQUNOLENBQUEsRSxtQkFBQSxFLFNBQUEsRSxLQUF5QixDQUF6QixDQUFBOztBQXFDQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsT0FBRCxDQUNSLENBQUEsRSxtQkFBQSxFLGNBQUEsRUFNQyxJQU5ELENBQUE7O0FBU0EsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLFVBQW5CLENBQ1IsQ0FBQSxFLG1CQUFBLEUsc0JBQUEsRUFRQyxJQVJELENBQUE7O0FBMUVXLFNBQVMsR0FBQSxVQUFBLENBQUEsQ0FEckIsYUFBYSxDQUFDLGlCQUFELENBQ1EsQ0FBQSxFQUFULFNBQVMsQ0FBVDtTQUFBLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vbWVudSc7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50JztcbmltcG9ydCB7IHByb3BlcnR5LCBjdXN0b21FbGVtZW50LCBvYnNlcnZlLCBxdWVyeSB9IGZyb20gJ0Bwb2x5bWVyL2RlY29yYXRvcnMvbGliL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgRmllbGRNaXhpbiwgVmFsdWVGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgbWtUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGVzJztcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2xpc3QtZmllbGQvbGlzdC1maWVsZC5wdWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpc3RGaWVsZEl0ZW08VD4ge1xuICAvKiogV2hldGhlciBpdGVtIGlzIGRpc2FibGVkLiAqL1xuICByZWFkb25seSBkaXNhYmxlZD86IGJvb2xlYW47XG4gIC8qKiBJY29uIHRvIHNob3cgaWYgYW55LiAqL1xuICByZWFkb25seSBpY29uPzogc3RyaW5nO1xuICAvKiogVW5kZXJseWluZyB2YWx1ZSBvZiB0aGUgaXRlbS4gKi9cbiAgcmVhZG9ubHkgZGF0YTogVDtcbn1cblxuY2xhc3MgSXRlbVdyYXBwZXI8VD4gaW1wbGVtZW50cyBMaXN0RmllbGRJdGVtPFQ+LCBNZW51SXRlbSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc291cmNlOiBMaXN0RmllbGRJdGVtPFQ+O1xuICBwcml2YXRlIHJlYWRvbmx5IGZvcm1hdHRlcjogKGl0ZW06IFR8dW5kZWZpbmVkKSA9PiBzdHJpbmc7XG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuc291cmNlLmRpc2FibGVkOyB9XG4gIGdldCBpY29uKCkgeyByZXR1cm4gdGhpcy5zb3VyY2UuaWNvbjsgfVxuICBnZXQgZGF0YSgpIHsgcmV0dXJuIHRoaXMuc291cmNlLmRhdGE7IH1cbiAgZ2V0IHRleHQoKSB7IHJldHVybiB0aGlzLmZvcm1hdHRlcih0aGlzLmRhdGEpOyB9XG4gIGNvbnN0cnVjdG9yKHNvdXJjZTogTGlzdEZpZWxkSXRlbTxUPiwgZm9ybWF0dGVyOiAoaXRlbTogVHx1bmRlZmluZWQpID0+IHN0cmluZykge1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIHRoaXMuZm9ybWF0dGVyID0gZm9ybWF0dGVyO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLWxpc3QtZmllbGQnKVxuZXhwb3J0IGNsYXNzIExpc3RGaWVsZDxUPiBleHRlbmRzIEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpIGltcGxlbWVudHMgVmFsdWVGaWVsZDxUfHVuZGVmaW5lZD4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gbWtUZW1wbGF0ZSh0ZW1wbGF0ZSk7IH1cblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogVHx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIHRhYmluZGV4PzogbnVtYmVyID0gMDtcblxuICBAcHJvcGVydHkoKVxuICBmb3JtYXR0ZXI6IChpdGVtOiBUfHVuZGVmaW5lZCkgPT4gc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIGVxdWFsaXR5OiAoYTogVHx1bmRlZmluZWQsIGI6IFR8dW5kZWZpbmVkKSA9PiBib29sZWFuID0gKGEsIGIpID0+IGEgPT09IGJcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICBpdGVtczogQXJyYXk8TGlzdEZpZWxkSXRlbTxUPj4gPSBbXTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJvdW5kIHRvIHVuZGVybHlpbmcgbWVudSBwcm9wZXJ0eS5cbiAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciwgbm90aWZ5OiB0cnVlIH0pXG4gIHNlbGVjdGVkSW5kZXg6IG51bWJlciA9IC0xO1xuXG4gIEBxdWVyeSgnLmZpZWxkJylcbiAgd3JhcHBlciE6IEhUTUxEaXZFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5lbXB0eSA9IHRydWU7XG4gICAgdGhpcy5mb3JtYXR0ZXIgPSAoeCkgPT4geCA/IHgudG9TdHJpbmcoKSA6ICcnO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7IHRoaXMud3JhcHBlci5mb2N1cygpOyB9XG5cbiAgb25CbHVyKCkgeyB0aGlzLmZvY3VzZWQgPSBmYWxzZTsgfVxuXG4gIG9uRm9jdXMoKSB7IHRoaXMuZm9jdXNlZCA9IHRydWU7IH1cblxuICBvbk1lbnVDaG9vc2UoZTogQ3VzdG9tRXZlbnQ8VD4pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgdGhpcy52YWx1ZSA9IGUuZGV0YWlsO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICB0b01lbnVJdGVtcyhmb3JtYXR0ZXI6IChpdGVtOiBUfHVuZGVmaW5lZCkgPT4gc3RyaW5nLCBpdGVtczogQXJyYXk8TGlzdEZpZWxkSXRlbTxUPj4sIHJlcXVpcmVkOiBib29sZWFufHVuZGVmaW5lZCwgcGxhY2Vob2xkZXI6IHN0cmluZ3x1bmRlZmluZWQpIHtcbiAgICBsZXQgbWFwcGVkOiBNZW51SXRlbVtdO1xuICAgIGlmICghaXRlbXMgfHwgIWZvcm1hdHRlcikge1xuICAgICAgbWFwcGVkID0gW107XG4gICAgfVxuICAgIG1hcHBlZCA9IGl0ZW1zLm1hcCgoaXRlbSkgPT4gbmV3IEl0ZW1XcmFwcGVyPFQ+KGl0ZW0sIGZvcm1hdHRlcikpO1xuICAgIGlmICghcmVxdWlyZWQpIHtcbiAgICAgIG1hcHBlZC51bnNoaWZ0KHtcbiAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgICB0ZXh0OiBwbGFjZWhvbGRlciB8fCAnJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtYXBwZWQ7XG4gIH1cblxuICBAb2JzZXJ2ZSgndmFsdWUnKVxuICBvYnNlcnZlRW1wdHkodmFsdWU6IFR8dW5kZWZpbmVkKSB7XG4gICAgdGhpcy5lbXB0eSA9IDAgIT09IDxhbnk+IHZhbHVlICYmICF2YWx1ZTtcbiAgICAvLyBtb3ZlZCB0byB2YWxpZGF0aW9uLi4uXG4gICAgLy8gaWYgKHRoaXMucmVxdWlyZWQpIHtcbiAgICAvLyAgIHRoaXMuaW52YWxpZCA9ICF2YWx1ZTtcbiAgICAvLyB9XG4gIH1cblxuICBAb2JzZXJ2ZSgndmFsdWUnLCAnaXRlbXMnLCAncmVxdWlyZWQnKVxuICBvYnNlcnZlU2VsZWN0ZWRJbmRleCh2YWx1ZTogVHx1bmRlZmluZWQsIGl0ZW1zOiBBcnJheTxMaXN0RmllbGRJdGVtPFQ+PiwgcmVxdWlyZWQ6IGJvb2xlYW58dW5kZWZpbmVkKSB7XG4gICAgaWYgKCF2YWx1ZSB8fCAhaXRlbXMpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHJlcXVpcmVkID8gLTEgOiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXF1YWxpdHkoaXRlbS5kYXRhLCB2YWx1ZSk7XG4gICAgICB9KSArIChyZXF1aXJlZCA/IDAgOiAxKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=