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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FDVCxDQUFBLEUsbUJBQUEsRSxhQUFBLEUsS0FBcUIsQ0FBckIsQ0FBQTs7QUFNQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCLEVBQUEsTUFBTSxFQUFFO0FBQXhCLENBQUQsQ0FDVCxDQUFBLEUsbUJBQUEsRSxlQUFBLEUsS0FBMkIsQ0FBM0IsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxLQUFLLENBQUMsUUFBRCxDQUNOLENBQUEsRSxtQkFBQSxFLFNBQUEsRSxLQUF5QixDQUF6QixDQUFBOztBQW9DQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsT0FBRCxDQUNSLENBQUEsRSxtQkFBQSxFLGNBQUEsRUFLQyxJQUxELENBQUE7O0FBUUEsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLFVBQW5CLENBQ1IsQ0FBQSxFLG1CQUFBLEUsc0JBQUEsRUFRQyxJQVJELENBQUE7O0FBeEVXLFNBQVMsR0FBQSxVQUFBLENBQUEsQ0FEckIsYUFBYSxDQUFDLGlCQUFELENBQ1EsQ0FBQSxFQUFULFNBQVMsQ0FBVDtTQUFBLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL21lbnUvbWVudSc7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50JztcbmltcG9ydCB7IHByb3BlcnR5LCBjdXN0b21FbGVtZW50LCBvYnNlcnZlLCBxdWVyeSB9IGZyb20gJ0Bwb2x5bWVyL2RlY29yYXRvcnMvbGliL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgRmllbGRNaXhpbiwgVmFsdWVGaWVsZCB9IGZyb20gJy4uL2ZpZWxkJztcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICcuLi9tZW51L21lbnUnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbGlzdC1maWVsZC5wdWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpc3RGaWVsZEl0ZW08VD4ge1xuICAvKiogV2hldGhlciBpdGVtIGlzIGRpc2FibGVkLiAqL1xuICByZWFkb25seSBkaXNhYmxlZD86IGJvb2xlYW47XG4gIC8qKiBJY29uIHRvIHNob3cgaWYgYW55LiAqL1xuICByZWFkb25seSBpY29uPzogc3RyaW5nO1xuICAvKiogVW5kZXJseWluZyB2YWx1ZSBvZiB0aGUgaXRlbS4gKi9cbiAgcmVhZG9ubHkgZGF0YTogVFxufVxuXG5jbGFzcyBJdGVtV3JhcHBlcjxUPiBpbXBsZW1lbnRzIExpc3RGaWVsZEl0ZW08VD4sIE1lbnVJdGVtIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzb3VyY2U6IExpc3RGaWVsZEl0ZW08VD47XG4gIHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0dGVyOiAoaXRlbTogVHx1bmRlZmluZWQpID0+IHN0cmluZztcbiAgZ2V0IGRpc2FibGVkKCkgeyByZXR1cm4gdGhpcy5zb3VyY2UuZGlzYWJsZWQ7IH1cbiAgZ2V0IGljb24oKSB7IHJldHVybiB0aGlzLnNvdXJjZS5pY29uOyB9XG4gIGdldCBkYXRhKCkgeyByZXR1cm4gdGhpcy5zb3VyY2UuZGF0YTsgfVxuICBnZXQgdGV4dCgpIHsgcmV0dXJuIHRoaXMuZm9ybWF0dGVyKHRoaXMuZGF0YSk7IH1cbiAgY29uc3RydWN0b3Ioc291cmNlOiBMaXN0RmllbGRJdGVtPFQ+LCBmb3JtYXR0ZXI6IChpdGVtOiBUfHVuZGVmaW5lZCkgPT4gc3RyaW5nKSB7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgdGhpcy5mb3JtYXR0ZXIgPSBmb3JtYXR0ZXI7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtbGlzdC1maWVsZCcpXG5leHBvcnQgY2xhc3MgTGlzdEZpZWxkPFQ+IGV4dGVuZHMgRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkgaW1wbGVtZW50cyBWYWx1ZUZpZWxkPFR8dW5kZWZpbmVkPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiBta1RlbXBsYXRlKHRlbXBsYXRlKTsgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBUfHVuZGVmaW5lZDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbiAgdGFiaW5kZXg/OiBudW1iZXIgPSAwO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIGZvcm1hdHRlcjogKGl0ZW06IFR8dW5kZWZpbmVkKSA9PiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KClcbiAgZXF1YWxpdHk6IChhOiBUfHVuZGVmaW5lZCwgYjogVHx1bmRlZmluZWQpID0+IGJvb2xlYW4gPSAoYSwgYikgPT4gYSA9PT0gYjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICBpdGVtczogTGlzdEZpZWxkSXRlbTxUPltdID0gW107XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBCb3VuZCB0byB1bmRlcmx5aW5nIG1lbnUgcHJvcGVydHkuXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIsIG5vdGlmeTogdHJ1ZSB9KVxuICBzZWxlY3RlZEluZGV4OiBudW1iZXIgPSAtMTtcblxuICBAcXVlcnkoJy5maWVsZCcpXG4gIHdyYXBwZXIhOiBIVE1MRGl2RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZW1wdHkgPSB0cnVlO1xuICAgIHRoaXMuZm9ybWF0dGVyID0geCA9PiB4ID8geC50b1N0cmluZygpIDogJyc7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHsgdGhpcy53cmFwcGVyLmZvY3VzKCk7IH1cblxuICBvbkJsdXIoKSB7IHRoaXMuZm9jdXNlZCA9IGZhbHNlOyB9XG5cbiAgb25Gb2N1cygpIHsgdGhpcy5mb2N1c2VkID0gdHJ1ZTsgfVxuXG4gIG9uTWVudUNob29zZShlOiBDdXN0b21FdmVudDxUPikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLnZhbHVlID0gZS5kZXRhaWw7XG4gIH1cblxuICB0b01lbnVJdGVtcyhmb3JtYXR0ZXI6IChpdGVtOiBUfHVuZGVmaW5lZCkgPT4gc3RyaW5nLCBpdGVtczogTGlzdEZpZWxkSXRlbTxUPltdLCByZXF1aXJlZDogYm9vbGVhbnx1bmRlZmluZWQsIHBsYWNlaG9sZGVyOiBzdHJpbmd8dW5kZWZpbmVkKSB7XG4gICAgbGV0IG1hcHBlZDogTWVudUl0ZW1bXTtcbiAgICBpZiAoIWl0ZW1zIHx8ICFmb3JtYXR0ZXIpIHtcbiAgICAgIG1hcHBlZCA9IFtdO1xuICAgIH1cbiAgICBtYXBwZWQgPSBpdGVtcy5tYXAoaXRlbSA9PiBuZXcgSXRlbVdyYXBwZXI8VD4oaXRlbSwgZm9ybWF0dGVyKSk7XG4gICAgaWYgKCFyZXF1aXJlZCkge1xuICAgICAgbWFwcGVkLnVuc2hpZnQoe1xuICAgICAgICBkYXRhOiB1bmRlZmluZWQsXG4gICAgICAgIHRleHQ6IHBsYWNlaG9sZGVyIHx8ICcnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcHBlZDtcbiAgfVxuXG4gIEBvYnNlcnZlKCd2YWx1ZScpXG4gIG9ic2VydmVFbXB0eSh2YWx1ZTogVHx1bmRlZmluZWQpIHtcbiAgICB0aGlzLmVtcHR5ID0gIXZhbHVlO1xuICAgIGlmICh0aGlzLnJlcXVpcmVkKSB7XG4gICAgICB0aGlzLmludmFsaWQgPSAhdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQG9ic2VydmUoJ3ZhbHVlJywgJ2l0ZW1zJywgJ3JlcXVpcmVkJylcbiAgb2JzZXJ2ZVNlbGVjdGVkSW5kZXgodmFsdWU6IFR8dW5kZWZpbmVkLCBpdGVtczogTGlzdEZpZWxkSXRlbTxUPltdLCByZXF1aXJlZDogYm9vbGVhbnx1bmRlZmluZWQpIHtcbiAgICBpZiAoIXZhbHVlIHx8ICFpdGVtcykge1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gcmVxdWlyZWQgPyAtMSA6IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGl0ZW1zLmZpbmRJbmRleChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXF1YWxpdHkoaXRlbS5kYXRhLCB2YWx1ZSk7XG4gICAgICB9KSArIChyZXF1aXJlZCA/IDAgOiAxKTtcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9