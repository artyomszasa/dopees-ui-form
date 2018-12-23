var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import "@polymer/polymer/lib/elements/dom-if.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";
import "../menu/menu.js";
import "../dropdown/dropdown.js";
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { customElement, property, observe, query } from "@polymer/decorators/lib/decorators.js";
import { mkTemplate } from "../templates.js";
import { FieldMixin } from "../field.js";
const template = "<style>.wrapper{outline:none;min-width:var(--min-width, 6rem)}\n\n/*# sourceMappingURL=listfield.css.map */</style><div class=\"wrapper\" tabindex$=\"[[tabindex]]\" on-focus=\"onFocus\" on-blur=\"onBlur\"><dope-drop-down formatter=\"[[formatter]]\" placeholder=\"[[placeholder]]\" value=\"[[value]]\"><dope-menu slot=\"body\" items=\"[[toMenuItems(formatter, items)]]\" on-choose=\"onMenuChoose\"></dope-menu></dope-drop-down></div>";
let ListField = class ListField extends FieldMixin(PolymerElement) {
  constructor() {
    super();
    this.items = [];
    this.tabindex = 0;

    this.formatter = x => x ? x.toString() : this.placeholder || '';

    this.observeEmpty(this.value, this.placeholder);
  }

  static get template() {
    return mkTemplate(template);
  }

  activate() {
    this.wrapper.focus();
  }

  focusedChanged(focused) {
    clearTimeout(this.__blurTimeout);

    if (!focused) {
      this.__blurTimeout = setTimeout(() => this.dropDown.close(), 100);
    } else {
      this.dropDown.open();
    }
  }

  onMenuChoose(e) {
    e.preventDefault();
    this.dirty = true;
    this.value = e.detail;
    this.wrapper.blur();
  }

  onBlur() {
    this.focused = false;
  }

  onFocus() {
    this.focused = true;
  }

  toMenuItems(formatter, items) {
    const menuItems = items.map(item => {
      return {
        text: formatter(item.data),
        data: item.data,
        disabled: item.disabled,
        icon: item.icon
      };
    });

    if (!this.required) {
      menuItems.unshift({
        text: formatter(undefined),
        data: undefined
      });
    }

    return menuItems;
  }

  observeEmpty(value, placeholder) {
    this.empty = !value && !placeholder;
  }

  valueChanged(value) {
    this.empty = !value;
  }

};

__decorate([property({
  type: String
})], ListField.prototype, "placeholder", void 0);

__decorate([property({
  type: String
})], ListField.prototype, "name", void 0);

__decorate([property({
  type: Object,
  notify: true
})], ListField.prototype, "value", void 0);

__decorate([property()], ListField.prototype, "formatter", void 0);

__decorate([property({
  type: Array
})], ListField.prototype, "items", void 0);

__decorate([property({
  type: Number
})], ListField.prototype, "tabindex", void 0);

__decorate([query('dope-drop-down')], ListField.prototype, "dropDown", void 0);

__decorate([query('.wrapper')], ListField.prototype, "wrapper", void 0);

__decorate([observe('focused')], ListField.prototype, "focusedChanged", null);

__decorate([observe('value', 'placeholder')], ListField.prototype, "observeEmpty", null);

__decorate([observe('value')], ListField.prototype, "valueChanged", null);

ListField = __decorate([customElement('dope-list-field')], ListField);
export { ListField };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VixDQUNSLENBQUEsRSxtQkFBQSxFLGNBQUEsRUFFQyxJQUZELENBQUE7O0FBS0EsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLE9BQUQsQ0FDUixDQUFBLEUsbUJBQUEsRSxjQUFBLEVBRUMsSUFGRCxDQUFBOztBQWxGVyxTQUFTLEdBQUEsVUFBQSxDQUFBLENBRHJCLGFBQWEsQ0FBQyxpQkFBRCxDQUNRLENBQUEsRUFBVCxTQUFTLENBQVQ7U0FBQSxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL2xpYi9lbGVtZW50cy9kb20taWYnO1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL2xpYi9lbGVtZW50cy9kb20tcmVwZWF0JztcbmltcG9ydCAnLi4vbWVudS9tZW51JztcbmltcG9ydCAnLi4vZHJvcGRvd24vZHJvcGRvd24nO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudCc7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgb2JzZXJ2ZSwgcXVlcnkgfSBmcm9tICdAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IHsgRmllbGRNaXhpbiwgVmFsdWVGaWVsZCB9IGZyb20gJy4uL2ZpZWxkJztcbmltcG9ydCB7IERvcGVEcm9wRG93biB9IGZyb20gJ3NyYy9kcm9wZG93bi9kcm9wZG93bic7XG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJ3NyYy9tZW51L21lbnUnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbGlzdGZpZWxkLnB1Zyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdEZpZWxkSXRlbTxUPiB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgaWNvbj86IHN0cmluZztcbiAgZGF0YTogVFxufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1saXN0LWZpZWxkJylcbmV4cG9ydCBjbGFzcyBMaXN0RmllbGQ8VD4gZXh0ZW5kcyBGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8VHx1bmRlZmluZWQ+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUodGVtcGxhdGUpOyB9XG5cbiAgX19ibHVyVGltZW91dDogYW55O1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbmFtZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogVHx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KClcbiAgZm9ybWF0dGVyOiAoaXRlbTogVHx1bmRlZmluZWQpID0+IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICBpdGVtczogTGlzdEZpZWxkSXRlbTxUPltdID0gW107XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIHRhYmluZGV4OiBudW1iZXIgPSAwO1xuXG4gIEBxdWVyeSgnZG9wZS1kcm9wLWRvd24nKVxuICBkcm9wRG93biE6IERvcGVEcm9wRG93bjxUPjtcblxuICBAcXVlcnkoJy53cmFwcGVyJylcbiAgd3JhcHBlciE6IEhUTUxEaXZFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mb3JtYXR0ZXIgPSB4ID0+IHggPyB4LnRvU3RyaW5nKCkgOiAodGhpcy5wbGFjZWhvbGRlciB8fCAnJyk7XG4gICAgdGhpcy5vYnNlcnZlRW1wdHkodGhpcy52YWx1ZSwgdGhpcy5wbGFjZWhvbGRlcik7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHsgdGhpcy53cmFwcGVyLmZvY3VzKCk7IH1cblxuICBAb2JzZXJ2ZSgnZm9jdXNlZCcpXG4gIGZvY3VzZWRDaGFuZ2VkKGZvY3VzZWQ6IGJvb2xlYW4pIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fX2JsdXJUaW1lb3V0KTtcbiAgICBpZiAoIWZvY3VzZWQpIHtcbiAgICAgIHRoaXMuX19ibHVyVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kcm9wRG93bi5jbG9zZSgpLCAxMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyb3BEb3duLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBvbk1lbnVDaG9vc2UoZTogQ3VzdG9tRXZlbnQ8VD4pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgdGhpcy52YWx1ZSA9IGUuZGV0YWlsO1xuICAgIHRoaXMud3JhcHBlci5ibHVyKCk7XG4gIH1cblxuICBvbkJsdXIoKSB7IHRoaXMuZm9jdXNlZCA9IGZhbHNlOyB9XG5cbiAgb25Gb2N1cygpIHsgdGhpcy5mb2N1c2VkID0gdHJ1ZTsgfVxuXG4gIHRvTWVudUl0ZW1zKGZvcm1hdHRlcjogKGl0ZW06IFR8dW5kZWZpbmVkKSA9PiBzdHJpbmcsIGl0ZW1zOiBMaXN0RmllbGRJdGVtPFQ+W10pIHtcbiAgICBjb25zdCBtZW51SXRlbXMgPSBpdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gPE1lbnVJdGVtPntcbiAgICAgICAgdGV4dDogZm9ybWF0dGVyKGl0ZW0uZGF0YSksXG4gICAgICAgIGRhdGE6IGl0ZW0uZGF0YSxcbiAgICAgICAgZGlzYWJsZWQ6IGl0ZW0uZGlzYWJsZWQsXG4gICAgICAgIGljb246IGl0ZW0uaWNvblxuICAgICAgfTtcbiAgICB9KTtcbiAgICBpZiAoIXRoaXMucmVxdWlyZWQpIHtcbiAgICAgIG1lbnVJdGVtcy51bnNoaWZ0KHtcbiAgICAgICAgdGV4dDogZm9ybWF0dGVyKHVuZGVmaW5lZCksXG4gICAgICAgIGRhdGE6IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtZW51SXRlbXM7XG4gIH1cblxuICBAb2JzZXJ2ZSgndmFsdWUnLCAncGxhY2Vob2xkZXInKVxuICBvYnNlcnZlRW1wdHkodmFsdWU6IFR8dW5kZWZpbmVkLCBwbGFjZWhvbGRlcjogc3RyaW5nfHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZW1wdHkgPSAhdmFsdWUgJiYgIXBsYWNlaG9sZGVyO1xuICB9XG5cbiAgQG9ic2VydmUoJ3ZhbHVlJylcbiAgdmFsdWVDaGFuZ2VkKHZhbHVlOiBUfHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZW1wdHkgPSAhdmFsdWU7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9