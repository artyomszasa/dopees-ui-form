var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import "../textfield/textfield.js";
import "../list-field/list-field.js"; // import '../datepicker/datepicker';

import "dopees-ui/lib/material-icon.js";
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { customElement, property, query, observe } from "@polymer/decorators/lib/decorators.js";
import { DecoratedFieldMixin } from "../field.js";
import { mkTemplate } from "../templates.js";
const wrapperView = "<style>:host{display:block}:host[focused]{position:relative;z-index:2}.field{cursor:pointer;padding-top:0.375rem}.field--box{position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:.5rem .625rem;background:var(--background-color, #fff);border:0.125rem solid var(--border-color, rgba(0,0,0,0.25));border-radius:.25rem;transition:border 0.35s cubic-bezier(0, 0, 0.2, 1)}.field--label{position:relative;display:block;z-index:1;padding:0 .5rem 0 0;margin:0;width:auto;height:var(--dope-height, 1.75rem);line-height:var(--dope-height, 1.75rem);font-size:inherit;font-family:inherit;transform:translateZ(0);color:var(--text-color, #000);opacity:.38;transition:all 0.35s cubic-bezier(0, 0, 0.2, 1);pointer-events:none}.field--label:empty{display:none}.field--inner{margin-top:calc(-1 * var(--dope-height, 1.75rem));display:flex;transition:margin 0.35s cubic-bezier(0, 0, 0.2, 1)}.field[no-label] .field--inner{margin-top:0}.field--icon::slotted(dope-material-icon){width:1rem;height:1rem;margin:.375rem 0}.field--icon::slotted(dope-material-icon) svg{width:1rem;height:1rem}.field:not([empty]) .field--label,.field[focused] .field--label{padding:0 .25rem;height:.75rem;font-size:.75rem;line-height:.75rem;transform:translate3d(-0.25rem, -0.875rem, 0);transform-origin:top left;opacity:1;background:var(--dope-background, #fff);cursor:text;color:var(--border-color, rgba(0,0,0,0.25))}.field:not([empty]) .field--label:empty,.field[focused] .field--label:empty{display:none}.field:not([empty]) .field--inner,.field[focused] .field--inner{margin-top:-.75rem}.field:not([empty])[no-label] .field--inner,.field[focused][no-label] .field--inner{margin-top:0}.field:not([empty]):hover:not([focused]):not([invalid]) .field--label,.field[focused]:hover:not([focused]):not([invalid]) .field--label{color:var(--border-color, rgba(0,0,0,0.5))}.field:hover .field--box{border:0.125rem solid var(--border-hiver-color, rgba(0,0,0,0.5))}.field[focused] .field--box{border-color:var(--color-primary-A700, blue)}.field[focused] .field--label{color:var(--color-primary-A700, blue);filter:none}.field[invalid] .field--box{border-color:var(--border-error-color, #FF1744)}.field[invalid] .field--label{color:var(--border-error-color, #FF1744)}\n\n/*# sourceMappingURL=boxfield.css.map */</style><div class=\"field\" focused$=\"[[focused]]\" empty$=\"[[empty]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" invalid$=\"[[invalid]]\" no-label$=\"[[isEmpty(label)]]\"><div class=\"field--box\"><label class=\"field--label\">[[label]]</label><div class=\"field--inner\"><slot class=\"field--body\" name=\"implementation\"></slot><slot class=\"field--icon\" name=\"icon\"></slot></div></div><div class=\"field--under\"><template is=\"dom-if\" if=\"[[hint]]\"><span class=\"field--hint\">[[hint]]</span></template></div></div>";
const textBoxView = "<style>:host{display:inline-block;vertical-align:middle}[empty] dope-material-icon{display: none;}:host([focused]){position:relative;z-index:2;}</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" empty=\"[[empty]]\" placeholder=\"[[placeholder]]\" on-click=\"activate\"><dope-text-field class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" minlength=\"[[minlength]]\" maxlength=\"[[maxlength]]\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" value=\"{{value}}\"></dope-text-field><dope-material-icon slot=\"icon\" type=\"close\" on-click=\"onClearClick\"></dope-material-icon></dope-box>";
const multitextBoxView = "<dope-box dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" empty=\"[[empty]]\" placeholder=\"[[placeholder]]\"><dope-multitext-field class=\"raw\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" minlength=\"[[minlength]]\" maxlength=\"[[maxlength]]\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" value=\"{{value}}\"></dope-multitext-field></dope-box>";
const listBoxView = "<style>:host{display:inline-block;vertical-align:middle}:host([focused]){position:relative;z-index:2;}</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-list-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\"></dope-list-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
const dateBoxView = "<style>:host{display:inline-block;vertical-align:middle}:host([focused]){position:relative;z-index:2;}</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-date-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" formatter=\"{{formatter}}\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\"></dope-date-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
const dateRangeBoxView = "<style>:host{display:inline-block;vertical-align:middle}:host([focused]){position:relative;z-index:2;}</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-date-range-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" formatter=\"{{formatter}}\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\" start-date=\"{{startDate}}\" end-date=\"{{endDate}}\"></dope-date-range-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
let BoxField = class BoxField extends DecoratedFieldMixin(PolymerElement) {
  static get template() {
    return mkTemplate(wrapperView);
  }

  isNonEmpty(...values) {
    return values.some(Boolean);
  }

  isEmpty(...values) {
    return !values.some(Boolean);
  }

};
BoxField = __decorate([customElement('dope-box')], BoxField);
export { BoxField };
let TextBox = class TextBox extends DecoratedFieldMixin(PolymerElement) {
  constructor() {
    super(...arguments);
    this.value = '';
  }

  static get template() {
    return mkTemplate(textBoxView);
  }

  activate() {
    this.field.activate();
  }

  onClearClick(e) {
    e.stopPropagation();
    e.preventDefault();
    this.value = '';
  }

};

__decorate([query('.raw')], TextBox.prototype, "field", void 0);

__decorate([property({
  type: String
})], TextBox.prototype, "type", void 0);

__decorate([property({
  type: String
})], TextBox.prototype, "placeholder", void 0);

__decorate([property({
  type: Number,
  reflectToAttribute: true
})], TextBox.prototype, "minlength", void 0);

__decorate([property({
  type: Number,
  reflectToAttribute: true
})], TextBox.prototype, "maxlength", void 0);

__decorate([property({
  type: String,
  notify: true
})], TextBox.prototype, "value", void 0);

TextBox = __decorate([customElement('dope-text-box')], TextBox);
export { TextBox };
let MiltitextBox = class MiltitextBox extends DecoratedFieldMixin(PolymerElement) {
  constructor() {
    super(...arguments);
    this.value = '';
  }

  static get template() {
    return mkTemplate(multitextBoxView);
  }

  activate() {
    this.field.activate();
  }

};

__decorate([query('.raw')], MiltitextBox.prototype, "field", void 0);

__decorate([property({
  type: String
})], MiltitextBox.prototype, "type", void 0);

__decorate([property({
  type: String
})], MiltitextBox.prototype, "placeholder", void 0);

__decorate([property({
  type: Number,
  reflectToAttribute: true
})], MiltitextBox.prototype, "minlength", void 0);

__decorate([property({
  type: Number,
  reflectToAttribute: true
})], MiltitextBox.prototype, "maxlength", void 0);

__decorate([property({
  type: String
})], MiltitextBox.prototype, "value", void 0);

MiltitextBox = __decorate([customElement('dope-multitext-box')], MiltitextBox);
export { MiltitextBox };
let ListBox = class ListBox extends DecoratedFieldMixin(PolymerElement) {
  constructor() {
    super();
    this.items = [];
    this.tabindex = 0;

    this.formatter = x => x ? x.toString() : this.placeholder || '';
  }

  static get template() {
    return mkTemplate(listBoxView);
  }

  activate() {
    this.impl.activate();
  }

  computeEmpty(empty, placeholder) {
    return empty && !placeholder;
  }

  onIconClick(e) {
    e.preventDefault();
    e.stopPropagation();
    setTimeout(() => this.activate(), 10);
  }

};

__decorate([property({
  type: String
})], ListBox.prototype, "placeholder", void 0);

__decorate([property({
  type: String
})], ListBox.prototype, "name", void 0);

__decorate([property({
  type: Object,
  notify: true
})], ListBox.prototype, "value", void 0);

__decorate([property()], ListBox.prototype, "formatter", void 0);

__decorate([property({
  type: Array
})], ListBox.prototype, "items", void 0);

__decorate([property({
  type: Number
})], ListBox.prototype, "tabindex", void 0);

__decorate([query('dope-list-picker')], ListBox.prototype, "impl", void 0);

ListBox = __decorate([customElement('dope-list-box')], ListBox);
export { ListBox };
let DateBox = class DateBox extends DecoratedFieldMixin(PolymerElement) {
  static get template() {
    return mkTemplate(dateBoxView);
  }

  activate() {
    this.impl.activate();
  }

  computeEmpty(empty, placeholder) {
    return empty && !placeholder;
  }

  onIconClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.activate();
  }

};

__decorate([property({
  type: String
})], DateBox.prototype, "placeholder", void 0);

__decorate([property({
  type: String
})], DateBox.prototype, "name", void 0);

__decorate([property({
  type: Object,
  notify: true
})], DateBox.prototype, "value", void 0);

__decorate([property()], DateBox.prototype, "formatter", void 0);

__decorate([query('dope-date-picker')], DateBox.prototype, "impl", void 0);

DateBox = __decorate([customElement('dope-date-box')], DateBox);
export { DateBox };
let DateRangeBox = class DateRangeBox extends DecoratedFieldMixin(PolymerElement) {
  constructor() {
    super(...arguments);
    this.__valueChanging = false;
    this.value = {};
  }

  static get template() {
    return mkTemplate(dateRangeBoxView);
  }

  activate() {
    this.impl.activate();
  }

  computeEmpty(empty, placeholder) {
    return empty && !placeholder;
  }

  onIconClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.activate();
  }

  valueChanged(value) {
    this.__valueChanging = true;

    try {
      this.startDate = value.start;
      this.endDate = value.end;
    } finally {
      this.__valueChanging = false;
    }
  }

  valuesChanged(start, end) {
    if (!this.__valueChanging) {
      this.value = {
        start,
        end
      };
    }
  }

};

__decorate([property({
  type: String
})], DateRangeBox.prototype, "placeholder", void 0);

__decorate([property({
  type: String
})], DateRangeBox.prototype, "name", void 0);

__decorate([property({
  type: Object,
  notify: true
})], DateRangeBox.prototype, "value", void 0);

__decorate([property({
  type: Object,
  notify: true
})], DateRangeBox.prototype, "startDate", void 0);

__decorate([property({
  type: Object,
  notify: true
})], DateRangeBox.prototype, "endDate", void 0);

__decorate([property()], DateRangeBox.prototype, "formatter", void 0);

__decorate([query('dope-date-range-picker')], DateRangeBox.prototype, "impl", void 0);

__decorate([observe('value')], DateRangeBox.prototype, "valueChanged", null);

__decorate([observe('startDate', 'endDate')], DateRangeBox.prototype, "valuesChanged", null);

DateRangeBox = __decorate([customElement('dope-date-range-box')], DateRangeBox);
export { DateRangeBox };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQixFQUFBLE1BQU0sRUFBRTtBQUF4QixDQUFELENBQ1QsQ0FBQSxFLHNCQUFBLEUsV0FBQSxFLEtBQThCLENBQTlCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQixFQUFBLE1BQU0sRUFBRTtBQUF4QixDQUFELENBQ1QsQ0FBQSxFLHNCQUFBLEUsU0FBQSxFLEtBQTRCLENBQTVCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxFQUNULENBQUEsRSxzQkFBQSxFLFdBQUEsRSxLQUFpRCxDQUFqRCxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLEtBQUssQ0FBQyx3QkFBRCxDQUNOLENBQUEsRSxzQkFBQSxFLE1BQUEsRSxLQUF1QixDQUF2QixDQUFBOztBQWVBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxPQUFELENBQ1IsQ0FBQSxFLHNCQUFBLEUsY0FBQSxFQVFDLElBUkQsQ0FBQTs7QUFXQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsV0FBRCxFQUFjLFNBQWQsQ0FDUixDQUFBLEUsc0JBQUEsRSxlQUFBLEVBSUMsSUFKRCxDQUFBOztBQWxEVyxZQUFZLEdBQUEsVUFBQSxDQUFBLENBRHhCLGFBQWEsQ0FBQyxxQkFBRCxDQUNXLENBQUEsRUFBWixZQUFZLENBQVo7U0FBQSxZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi90ZXh0ZmllbGQvdGV4dGZpZWxkJztcbmltcG9ydCAnLi4vbGlzdC1maWVsZC9saXN0LWZpZWxkJztcbi8vIGltcG9ydCAnLi4vZGF0ZXBpY2tlci9kYXRlcGlja2VyJztcbmltcG9ydCAnZG9wZWVzLXVpL2xpYi9tYXRlcmlhbC1pY29uJztcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQnO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIHF1ZXJ5LCBvYnNlcnZlIH0gZnJvbSAnQHBvbHltZXIvZGVjb3JhdG9ycy9saWIvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBWYWx1ZUZpZWxkLCBEZWNvcmF0ZWRGaWVsZE1peGluIH0gZnJvbSAnLi4vZmllbGQnO1xuaW1wb3J0IHsgTXVsdGl0ZXh0RmllbGQgfSBmcm9tICcuLi9tdWx0aXRleHRmaWVsZC9tdWx0aXRleHRmaWVsZCc7XG5pbXBvcnQgeyBMaXN0RmllbGRJdGVtIH0gZnJvbSAnLi4vbGlzdC1maWVsZC9saXN0LWZpZWxkJztcbmltcG9ydCB7IExpc3RQaWNrZXIgfSBmcm9tICcuLi9saXN0LXBpY2tlci9saXN0LXBpY2tlcic7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICcuLi90ZXh0ZmllbGQvdGV4dGZpZWxkJztcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdkb3BlZXMtY29yZS9saWIvZGF0ZXRpbWUnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJy4uL2RhdGUtcGlja2VyJztcbmltcG9ydCB7IERhdGVUaW1lUmFuZ2UgfSBmcm9tICcuLi9kYXRlLXJhbmdlLWZpZWxkL2RhdGUtcmFuZ2UtZmllbGQnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyIH0gZnJvbSAnLi4vZGF0ZS1yYW5nZS1waWNrZXInO1xuaW1wb3J0IHdyYXBwZXJWaWV3IGZyb20gJy4vYm94ZmllbGQucHVnJztcbmltcG9ydCB0ZXh0Qm94VmlldyBmcm9tICcuL3RleHRib3gucHVnJztcbmltcG9ydCBtdWx0aXRleHRCb3hWaWV3IGZyb20gJy4vbXVsdGl0ZXh0Ym94LnB1Zyc7XG5pbXBvcnQgbGlzdEJveFZpZXcgZnJvbSAnLi9saXN0Ym94LnB1Zyc7XG5pbXBvcnQgZGF0ZUJveFZpZXcgZnJvbSAnLi9kYXRlYm94LnB1Zyc7XG5pbXBvcnQgZGF0ZVJhbmdlQm94VmlldyBmcm9tICcuL2RhdGUtcmFuZ2UtYm94LnB1Zyc7XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLWJveCcpXG5leHBvcnQgY2xhc3MgQm94RmllbGQgZXh0ZW5kcyBEZWNvcmF0ZWRGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUgKCkgeyByZXR1cm4gbWtUZW1wbGF0ZSh3cmFwcGVyVmlldyk7IH1cblxuICBpc05vbkVtcHR5KC4uLnZhbHVlczogYW55W10pIHsgcmV0dXJuIHZhbHVlcy5zb21lKEJvb2xlYW4pOyB9XG5cbiAgaXNFbXB0eSguLi52YWx1ZXM6IGFueVtdKSB7IHJldHVybiAhdmFsdWVzLnNvbWUoQm9vbGVhbik7IH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtdGV4dC1ib3gnKVxuZXhwb3J0IGNsYXNzIFRleHRCb3ggZXh0ZW5kcyBEZWNvcmF0ZWRGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8c3RyaW5nPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUgKCkgeyByZXR1cm4gbWtUZW1wbGF0ZSh0ZXh0Qm94Vmlldyk7IH1cblxuICBAcXVlcnkoJy5yYXcnKVxuICBwcm90ZWN0ZWQgZmllbGQhOiBUZXh0RmllbGQ7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHR5cGU/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlIH0pXG4gIG1pbmxlbmd0aD86IG51bWJlcjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSB9KVxuICBtYXhsZW5ndGg/OiBudW1iZXI7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nLCBub3RpZnk6IHRydWUgfSlcbiAgdmFsdWU6IHN0cmluZyA9ICcnO1xuXG4gIGFjdGl2YXRlKCkgeyB0aGlzLmZpZWxkLmFjdGl2YXRlKCk7IH1cblxuICBvbkNsZWFyQ2xpY2soZTogTW91c2VFdmVudCkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1tdWx0aXRleHQtYm94JylcbmV4cG9ydCBjbGFzcyBNaWx0aXRleHRCb3ggZXh0ZW5kcyBEZWNvcmF0ZWRGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8c3RyaW5nPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUgKCkgeyByZXR1cm4gbWtUZW1wbGF0ZShtdWx0aXRleHRCb3hWaWV3KTsgfVxuXG4gIEBxdWVyeSgnLnJhdycpXG4gIHByb3RlY3RlZCBmaWVsZCE6IE11bHRpdGV4dEZpZWxkO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICB0eXBlPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSB9KVxuICBtaW5sZW5ndGg/OiBudW1iZXI7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUgfSlcbiAgbWF4bGVuZ3RoPzogbnVtYmVyO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICB2YWx1ZTogc3RyaW5nID0gJyc7XG5cbiAgYWN0aXZhdGUoKSB7IHRoaXMuZmllbGQuYWN0aXZhdGUoKTsgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1saXN0LWJveCcpXG5leHBvcnQgY2xhc3MgTGlzdEJveDxUPiBleHRlbmRzIERlY29yYXRlZEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpIGltcGxlbWVudHMgVmFsdWVGaWVsZDxUfHVuZGVmaW5lZD4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlICgpIHsgcmV0dXJuIG1rVGVtcGxhdGUobGlzdEJveFZpZXcpOyB9XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbmFtZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogVHx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KClcbiAgZm9ybWF0dGVyOiAoaXRlbTogVHx1bmRlZmluZWQpID0+IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICBpdGVtczogTGlzdEZpZWxkSXRlbTxUPltdID0gW107XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIHRhYmluZGV4OiBudW1iZXIgPSAwO1xuXG4gIEBxdWVyeSgnZG9wZS1saXN0LXBpY2tlcicpXG4gIGltcGwhOiBMaXN0UGlja2VyPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mb3JtYXR0ZXIgPSB4ID0+IHggPyB4LnRvU3RyaW5nKCkgOiAodGhpcy5wbGFjZWhvbGRlciB8fCAnJyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5pbXBsLmFjdGl2YXRlKCk7IH1cblxuICBjb21wdXRlRW1wdHkoZW1wdHk6IGJvb2xlYW4sIHBsYWNlaG9sZGVyOiBzdHJpbmd8dW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGVtcHR5ICYmICFwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIG9uSWNvbkNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZhdGUoKSwgMTApO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLWRhdGUtYm94JylcbmV4cG9ydCBjbGFzcyBEYXRlQm94IGV4dGVuZHMgRGVjb3JhdGVkRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkgaW1wbGVtZW50cyBWYWx1ZUZpZWxkPERhdGVUaW1lfHVuZGVmaW5lZD4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlICgpIHsgcmV0dXJuIG1rVGVtcGxhdGUoZGF0ZUJveFZpZXcpOyB9XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbmFtZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogRGF0ZVRpbWV8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIGZvcm1hdHRlciE6IChpdGVtOiBEYXRlVGltZXx1bmRlZmluZWQpID0+IHN0cmluZztcblxuICBAcXVlcnkoJ2RvcGUtZGF0ZS1waWNrZXInKVxuICBpbXBsITogRGF0ZVBpY2tlcjtcblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5pbXBsLmFjdGl2YXRlKCk7IH1cblxuICBjb21wdXRlRW1wdHkoZW1wdHk6IGJvb2xlYW4sIHBsYWNlaG9sZGVyOiBzdHJpbmd8dW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGVtcHR5ICYmICFwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIG9uSWNvbkNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmFjdGl2YXRlKCk7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtZGF0ZS1yYW5nZS1ib3gnKVxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZUJveCBleHRlbmRzIERlY29yYXRlZEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpIGltcGxlbWVudHMgVmFsdWVGaWVsZDxEYXRlVGltZVJhbmdlPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUgKCkgeyByZXR1cm4gbWtUZW1wbGF0ZShkYXRlUmFuZ2VCb3hWaWV3KTsgfVxuXG4gIHByaXZhdGUgX192YWx1ZUNoYW5naW5nID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBEYXRlVGltZVJhbmdlID0ge307XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWUgfSlcbiAgc3RhcnREYXRlOiBEYXRlVGltZXx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWUgfSlcbiAgZW5kRGF0ZTogRGF0ZVRpbWV8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIGZvcm1hdHRlciE6IChpdGVtOiBEYXRlVGltZXx1bmRlZmluZWQpID0+IHN0cmluZztcblxuICBAcXVlcnkoJ2RvcGUtZGF0ZS1yYW5nZS1waWNrZXInKVxuICBpbXBsITogRGF0ZVJhbmdlUGlja2VyO1xuXG4gIGFjdGl2YXRlKCkgeyB0aGlzLmltcGwuYWN0aXZhdGUoKTsgfVxuXG4gIGNvbXB1dGVFbXB0eShlbXB0eTogYm9vbGVhbiwgcGxhY2Vob2xkZXI6IHN0cmluZ3x1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZW1wdHkgJiYgIXBsYWNlaG9sZGVyO1xuICB9XG5cbiAgb25JY29uQ2xpY2soZTogTW91c2VFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgfVxuXG4gIEBvYnNlcnZlKCd2YWx1ZScpXG4gIHZhbHVlQ2hhbmdlZCh2YWx1ZTogRGF0ZVRpbWVSYW5nZSkge1xuICAgIHRoaXMuX192YWx1ZUNoYW5naW5nID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zdGFydERhdGUgPSB2YWx1ZS5zdGFydDtcbiAgICAgIHRoaXMuZW5kRGF0ZSA9IHZhbHVlLmVuZDtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fX3ZhbHVlQ2hhbmdpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAb2JzZXJ2ZSgnc3RhcnREYXRlJywgJ2VuZERhdGUnKVxuICB2YWx1ZXNDaGFuZ2VkKHN0YXJ0OiBEYXRlVGltZXx1bmRlZmluZWQsIGVuZDogRGF0ZVRpbWV8dW5kZWZpbmVkKSB7XG4gICAgaWYgKCF0aGlzLl9fdmFsdWVDaGFuZ2luZykge1xuICAgICAgdGhpcy52YWx1ZSA9IHsgc3RhcnQsIGVuZCB9O1xuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=