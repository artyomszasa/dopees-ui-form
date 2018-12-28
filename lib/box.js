var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import "dopees-ui/lib/material-icon.js";
import "./text-field.js";
import "./list-field.js";
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { customElement, property, query, observe } from "@polymer/decorators/lib/decorators.js";
import { DecoratedFieldMixin } from "./field.js";
import { mkTemplate } from "./templates.js";
import { TimeSpan } from "dopees-core/lib/datetime.js";
import { sprintf } from "dopees-core/lib/string.js";
const wrapperView = "<style>:host{display:block}:host[focused]{position:relative;z-index:2}.field{cursor:pointer;padding-top:0.375rem}.field--box{position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:.5rem .625rem;background:var(--background-color, #fff);border:0.125rem solid var(--border-color, rgba(0,0,0,0.25));border-radius:.25rem;transition:border 0.35s cubic-bezier(0, 0, 0.2, 1)}.field--label{position:relative;display:block;z-index:1;padding:0 .5rem 0 0;margin:0;width:auto;height:var(--dope-height, 1.75rem);line-height:var(--dope-height, 1.75rem);font-size:inherit;font-family:inherit;transform:translateZ(0);color:var(--text-color, #000);opacity:.38;transition:all 0.35s cubic-bezier(0, 0, 0.2, 1);pointer-events:none}.field--label:empty{display:none}.field--inner{margin-top:calc(-1 * var(--dope-height, 1.75rem));display:flex;transition:margin 0.35s cubic-bezier(0, 0, 0.2, 1)}.field[no-label] .field--inner{margin-top:0}.field--icon::slotted(dope-material-icon){width:1rem;height:1rem;margin:.375rem 0}.field--icon::slotted(dope-material-icon) svg{width:1rem;height:1rem}.field:not([empty]) .field--label,.field[focused] .field--label{padding:0 .25rem;height:.75rem;font-size:.75rem;line-height:.75rem;transform:translate3d(-0.25rem, -0.875rem, 0);transform-origin:top left;opacity:1;background:var(--dope-background, #fff);cursor:text;color:var(--border-color, rgba(0,0,0,0.25))}.field:not([empty]) .field--label:empty,.field[focused] .field--label:empty{display:none}.field:not([empty]) .field--inner,.field[focused] .field--inner{margin-top:-.75rem}.field:not([empty])[no-label] .field--inner,.field[focused][no-label] .field--inner{margin-top:0}.field:not([empty]):hover:not([focused]):not([invalid]) .field--label,.field[focused]:hover:not([focused]):not([invalid]) .field--label{color:var(--border-color, rgba(0,0,0,0.5))}.field:hover .field--box{border:0.125rem solid var(--border-hiver-color, rgba(0,0,0,0.5))}.field[focused] .field--box{border-color:var(--color-primary-A700, blue)}.field[focused] .field--label{color:var(--color-primary-A700, blue);filter:none}.field[invalid] .field--box{border-color:var(--border-error-color, #FF1744)}.field[invalid] .field--label{color:var(--border-error-color, #FF1744)}\n\n/*# sourceMappingURL=box.css.map */</style><div class=\"field\" focused$=\"[[focused]]\" empty$=\"[[empty]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" invalid$=\"[[invalid]]\" no-label$=\"[[isEmpty(label)]]\"><div class=\"field--box\"><label class=\"field--label\">[[label]]</label><div class=\"field--inner\"><slot class=\"field--body\" name=\"implementation\"></slot><slot class=\"field--icon\" name=\"icon\"></slot></div></div><div class=\"field--under\"><template is=\"dom-if\" if=\"[[hint]]\"><span class=\"field--hint\">[[hint]]</span></template></div></div>";
const textBoxView = "<style>:host{display:inline-block;vertical-align:middle}[empty] dope-material-icon{display: none;}:host([focused]){position:relative;z-index:2;}</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" empty=\"[[empty]]\" placeholder=\"[[placeholder]]\" on-click=\"activate\"><dope-text-field class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" minlength=\"[[minlength]]\" maxlength=\"[[maxlength]]\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" value=\"{{value}}\"></dope-text-field><dope-material-icon slot=\"icon\" type=\"close\" on-click=\"onClearClick\"></dope-material-icon></dope-box>";
const multitextBoxView = "<dope-box dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" empty=\"[[empty]]\" placeholder=\"[[placeholder]]\"><dope-multitext-field class=\"raw\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" minlength=\"[[minlength]]\" maxlength=\"[[maxlength]]\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" value=\"{{value}}\"></dope-multitext-field></dope-box>";
const listBoxView = "<style>:host{display:inline-block;vertical-align:middle}:host([focused]){position:relative;z-index:2;}</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-list-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" equality=\"[[equality]]\" formatter=\"[[formatter]]\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\"></dope-list-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
const dateBoxView = "<style>:host{display:inline-block;vertical-align:middle}:host([focused]){position:relative;z-index:2;}</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-date-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" formatter=\"{{formatter}}\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\"></dope-date-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
const dateTimeBoxView = "<style>:host{display:inline-block;vertical-align:middle}:host([focused]){position:relative;z-index:2;}</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-datetime-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" formatter=\"{{formatter}}\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\"></dope-datetime-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
const dateRangeBoxView = "<style>:host{display:inline-block;vertical-align:middle}:host([focused]){position:relative;z-index:2;}</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-date-range-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" formatter=\"{{formatter}}\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\" start-date=\"{{startDate}}\" end-date=\"{{endDate}}\"></dope-date-range-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
const timeBoxView = "<style>:host{display:inline-block;vertical-align:middle}:host([focused]){position:relative;z-index:2;}</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-time-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" formatter=\"{{formatter}}\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\" start-time=\"{{startTime}}\" end-time=\"{{endTime}}\" step=\"{{step}}\"></dope-time-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
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

    this.equality = (a, b) => a === b;

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

__decorate([property()], ListBox.prototype, "equality", void 0);

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
let TimeBox = class TimeBox extends DecoratedFieldMixin(PolymerElement) {
  constructor() {
    super();

    this.formatter = x => x ? sprintf('%02d:%02d', x.hours, x.minutes) : this.placeholder || '';
  }

  static get template() {
    return mkTemplate(timeBoxView);
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
})], TimeBox.prototype, "placeholder", void 0);

__decorate([property({
  type: TimeSpan,
  notify: true
})], TimeBox.prototype, "value", void 0);

__decorate([property()], TimeBox.prototype, "formatter", void 0);

__decorate([property({
  type: TimeSpan
})], TimeBox.prototype, "startTime", void 0);

__decorate([property({
  type: TimeSpan
})], TimeBox.prototype, "endTime", void 0);

__decorate([property({
  type: TimeSpan
})], TimeBox.prototype, "step", void 0);

__decorate([query('dope-time-picker')], TimeBox.prototype, "impl", void 0);

TimeBox = __decorate([customElement('dope-time-box')], TimeBox);
export { TimeBox };
let DateTimeBox = class DateTimeBox extends DecoratedFieldMixin(PolymerElement) {
  constructor() {
    super();

    this.formatter = x => x ? sprintf('%04d. %02d. %02d %02d:%02d', x.year, x.month, x.day, x.hours, x.minutes) : this.placeholder || '';
  }

  static get template() {
    return mkTemplate(dateTimeBoxView);
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
})], DateTimeBox.prototype, "placeholder", void 0);

__decorate([property({
  type: Object,
  notify: true
})], DateTimeBox.prototype, "value", void 0);

__decorate([property()], DateTimeBox.prototype, "formatter", void 0);

__decorate([query('dope-datetime-picker')], DateTimeBox.prototype, "impl", void 0);

DateTimeBox = __decorate([customElement('dope-datetime-box')], DateTimeBox);
export { DateTimeBox };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxFLFdBQUEsRSxLQUE4QixDQUE5QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0IsRUFBQSxNQUFNLEVBQUU7QUFBeEIsQ0FBRCxDQUNULENBQUEsRSxzQkFBQSxFLFNBQUEsRSxLQUE0QixDQUE1QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsRUFDVCxDQUFBLEUsc0JBQUEsRSxXQUFBLEUsS0FBaUQsQ0FBakQsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxLQUFLLENBQUMsd0JBQUQsQ0FDTixDQUFBLEUsc0JBQUEsRSxNQUFBLEUsS0FBdUIsQ0FBdkIsQ0FBQTs7QUFlQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsT0FBRCxDQUNSLENBQUEsRSxzQkFBQSxFLGNBQUEsRUFRQyxJQVJELENBQUE7O0FBV0EsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLFdBQUQsRUFBYyxTQUFkLENBQ1IsQ0FBQSxFLHNCQUFBLEUsZUFBQSxFQUlDLElBSkQsQ0FBQTs7QUFsRFcsWUFBWSxHQUFBLFVBQUEsQ0FBQSxDQUR4QixhQUFhLENBQUMscUJBQUQsQ0FDVyxDQUFBLEVBQVosWUFBWSxDQUFaO1NBQUEsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnZG9wZWVzLXVpL2xpYi9tYXRlcmlhbC1pY29uJztcbmltcG9ydCAnLi90ZXh0LWZpZWxkJztcbmltcG9ydCAnLi9saXN0LWZpZWxkJztcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQnO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIHF1ZXJ5LCBvYnNlcnZlIH0gZnJvbSAnQHBvbHltZXIvZGVjb3JhdG9ycy9saWIvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBWYWx1ZUZpZWxkLCBEZWNvcmF0ZWRGaWVsZE1peGluIH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQgeyBNdWx0aXRleHRGaWVsZCB9IGZyb20gJy4vbXVsdGl0ZXh0ZmllbGQvbXVsdGl0ZXh0ZmllbGQnO1xuaW1wb3J0IHsgTGlzdEZpZWxkSXRlbSB9IGZyb20gJy4vbGlzdC1maWVsZCc7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSAnLi9saXN0LXBpY2tlcic7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICcuL3RleHQtZmllbGQnO1xuaW1wb3J0IHsgbWtUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGVzJztcbmltcG9ydCB7IERhdGVUaW1lLCBUaW1lU3BhbiB9IGZyb20gJ2RvcGVlcy1jb3JlL2xpYi9kYXRldGltZSc7XG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnLi9kYXRlLXBpY2tlcic7XG5pbXBvcnQgeyBEYXRlVGltZVJhbmdlIH0gZnJvbSAnLi9kYXRlLXJhbmdlLWZpZWxkJztcbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlciB9IGZyb20gJy4vZGF0ZS1yYW5nZS1waWNrZXInO1xuaW1wb3J0IHsgVGltZVBpY2tlciB9IGZyb20gJy4vdGltZS1waWNrZXInO1xuaW1wb3J0IHsgRGF0ZVRpbWVQaWNrZXIgfSBmcm9tICcuL2RhdGV0aW1lLXBpY2tlcic7XG5pbXBvcnQgeyBzcHJpbnRmIH0gZnJvbSAnZG9wZWVzLWNvcmUvbGliL3N0cmluZyc7XG5pbXBvcnQgd3JhcHBlclZpZXcgZnJvbSAnLi9ib3gvYm94LnB1Zyc7XG5pbXBvcnQgdGV4dEJveFZpZXcgZnJvbSAnLi9ib3gvdGV4dC1ib3gucHVnJztcbmltcG9ydCBtdWx0aXRleHRCb3hWaWV3IGZyb20gJy4vYm94L211bHRpdGV4dC1ib3gucHVnJztcbmltcG9ydCBsaXN0Qm94VmlldyBmcm9tICcuL2JveC9saXN0LWJveC5wdWcnO1xuaW1wb3J0IGRhdGVCb3hWaWV3IGZyb20gJy4vYm94L2RhdGUtYm94LnB1Zyc7XG5pbXBvcnQgZGF0ZVRpbWVCb3hWaWV3IGZyb20gJy4vYm94L2RhdGV0aW1lLWJveC5wdWcnO1xuaW1wb3J0IGRhdGVSYW5nZUJveFZpZXcgZnJvbSAnLi9ib3gvZGF0ZS1yYW5nZS1ib3gucHVnJztcbmltcG9ydCB0aW1lQm94VmlldyBmcm9tICcuL2JveC90aW1lLWJveC5wdWcnO1xuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1ib3gnKVxuZXhwb3J0IGNsYXNzIEJveEZpZWxkIGV4dGVuZHMgRGVjb3JhdGVkRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlICgpIHsgcmV0dXJuIG1rVGVtcGxhdGUod3JhcHBlclZpZXcpOyB9XG5cbiAgaXNOb25FbXB0eSguLi52YWx1ZXM6IGFueVtdKSB7IHJldHVybiB2YWx1ZXMuc29tZShCb29sZWFuKTsgfVxuXG4gIGlzRW1wdHkoLi4udmFsdWVzOiBhbnlbXSkgeyByZXR1cm4gIXZhbHVlcy5zb21lKEJvb2xlYW4pOyB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLXRleHQtYm94JylcbmV4cG9ydCBjbGFzcyBUZXh0Qm94IGV4dGVuZHMgRGVjb3JhdGVkRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkgaW1wbGVtZW50cyBWYWx1ZUZpZWxkPHN0cmluZz4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlICgpIHsgcmV0dXJuIG1rVGVtcGxhdGUodGV4dEJveFZpZXcpOyB9XG5cbiAgQHF1ZXJ5KCcucmF3JylcbiAgcHJvdGVjdGVkIGZpZWxkITogVGV4dEZpZWxkO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICB0eXBlPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSB9KVxuICBtaW5sZW5ndGg/OiBudW1iZXI7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUgfSlcbiAgbWF4bGVuZ3RoPzogbnVtYmVyO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZywgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBzdHJpbmcgPSAnJztcblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5maWVsZC5hY3RpdmF0ZSgpOyB9XG5cbiAgb25DbGVhckNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtbXVsdGl0ZXh0LWJveCcpXG5leHBvcnQgY2xhc3MgTWlsdGl0ZXh0Qm94IGV4dGVuZHMgRGVjb3JhdGVkRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkgaW1wbGVtZW50cyBWYWx1ZUZpZWxkPHN0cmluZz4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlICgpIHsgcmV0dXJuIG1rVGVtcGxhdGUobXVsdGl0ZXh0Qm94Vmlldyk7IH1cblxuICBAcXVlcnkoJy5yYXcnKVxuICBwcm90ZWN0ZWQgZmllbGQhOiBNdWx0aXRleHRGaWVsZDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgdHlwZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUgfSlcbiAgbWlubGVuZ3RoPzogbnVtYmVyO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlIH0pXG4gIG1heGxlbmd0aD86IG51bWJlcjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgdmFsdWU6IHN0cmluZyA9ICcnO1xuXG4gIGFjdGl2YXRlKCkgeyB0aGlzLmZpZWxkLmFjdGl2YXRlKCk7IH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtbGlzdC1ib3gnKVxuZXhwb3J0IGNsYXNzIExpc3RCb3g8VD4gZXh0ZW5kcyBEZWNvcmF0ZWRGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8VHx1bmRlZmluZWQ+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSAoKSB7IHJldHVybiBta1RlbXBsYXRlKGxpc3RCb3hWaWV3KTsgfVxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWUgfSlcbiAgdmFsdWU6IFR8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIGZvcm1hdHRlcjogKGl0ZW06IFR8dW5kZWZpbmVkKSA9PiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KClcbiAgZXF1YWxpdHk6IChhOiBUfHVuZGVmaW5lZCwgYjogVHx1bmRlZmluZWQpID0+IGJvb2xlYW4gPSAoYSwgYikgPT4gYSA9PT0gYjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICBpdGVtczogTGlzdEZpZWxkSXRlbTxUPltdID0gW107XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIHRhYmluZGV4OiBudW1iZXIgPSAwO1xuXG4gIEBxdWVyeSgnZG9wZS1saXN0LXBpY2tlcicpXG4gIGltcGwhOiBMaXN0UGlja2VyPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mb3JtYXR0ZXIgPSB4ID0+IHggPyB4LnRvU3RyaW5nKCkgOiAodGhpcy5wbGFjZWhvbGRlciB8fCAnJyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5pbXBsLmFjdGl2YXRlKCk7IH1cblxuICBjb21wdXRlRW1wdHkoZW1wdHk6IGJvb2xlYW4sIHBsYWNlaG9sZGVyOiBzdHJpbmd8dW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGVtcHR5ICYmICFwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIG9uSWNvbkNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZhdGUoKSwgMTApO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLWRhdGUtYm94JylcbmV4cG9ydCBjbGFzcyBEYXRlQm94IGV4dGVuZHMgRGVjb3JhdGVkRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkgaW1wbGVtZW50cyBWYWx1ZUZpZWxkPERhdGVUaW1lfHVuZGVmaW5lZD4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlICgpIHsgcmV0dXJuIG1rVGVtcGxhdGUoZGF0ZUJveFZpZXcpOyB9XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbmFtZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogRGF0ZVRpbWV8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIGZvcm1hdHRlciE6IChpdGVtOiBEYXRlVGltZXx1bmRlZmluZWQpID0+IHN0cmluZztcblxuICBAcXVlcnkoJ2RvcGUtZGF0ZS1waWNrZXInKVxuICBpbXBsITogRGF0ZVBpY2tlcjtcblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5pbXBsLmFjdGl2YXRlKCk7IH1cblxuICBjb21wdXRlRW1wdHkoZW1wdHk6IGJvb2xlYW4sIHBsYWNlaG9sZGVyOiBzdHJpbmd8dW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGVtcHR5ICYmICFwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIG9uSWNvbkNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmFjdGl2YXRlKCk7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtdGltZS1ib3gnKVxuZXhwb3J0IGNsYXNzIFRpbWVCb3ggZXh0ZW5kcyBEZWNvcmF0ZWRGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8VGltZVNwYW58dW5kZWZpbmVkPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUgKCkgeyByZXR1cm4gbWtUZW1wbGF0ZSh0aW1lQm94Vmlldyk7IH1cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IDxhbnk+VGltZVNwYW4sIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogVGltZVNwYW58dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIGZvcm1hdHRlcjogKGl0ZW06IFRpbWVTcGFufHVuZGVmaW5lZCkgPT4gc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IDxhbnk+VGltZVNwYW4gfSlcbiAgc3RhcnRUaW1lITogVGltZVNwYW47XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogPGFueT5UaW1lU3BhbiB9KVxuICBlbmRUaW1lITogVGltZVNwYW47XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogPGFueT5UaW1lU3BhbiB9KVxuICBzdGVwITogVGltZVNwYW47XG5cbiAgQHF1ZXJ5KCdkb3BlLXRpbWUtcGlja2VyJylcbiAgaW1wbCE6IFRpbWVQaWNrZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmZvcm1hdHRlciA9IHggPT4geCA/IHNwcmludGYoJyUwMmQ6JTAyZCcsIHguaG91cnMsIHgubWludXRlcykgOiAodGhpcy5wbGFjZWhvbGRlciB8fCAnJyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5pbXBsLmFjdGl2YXRlKCk7IH1cblxuICBjb21wdXRlRW1wdHkoZW1wdHk6IGJvb2xlYW4sIHBsYWNlaG9sZGVyOiBzdHJpbmd8dW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGVtcHR5ICYmICFwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIG9uSWNvbkNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmFjdGl2YXRlKCk7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtZGF0ZXRpbWUtYm94JylcbmV4cG9ydCBjbGFzcyBEYXRlVGltZUJveCBleHRlbmRzIERlY29yYXRlZEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpIGltcGxlbWVudHMgVmFsdWVGaWVsZDxEYXRlVGltZXx1bmRlZmluZWQ+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSAoKSB7IHJldHVybiBta1RlbXBsYXRlKGRhdGVUaW1lQm94Vmlldyk7IH1cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBEYXRlVGltZXx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KClcbiAgZm9ybWF0dGVyOiAoaXRlbTogRGF0ZVRpbWV8dW5kZWZpbmVkKSA9PiBzdHJpbmc7XG5cbiAgQHF1ZXJ5KCdkb3BlLWRhdGV0aW1lLXBpY2tlcicpXG4gIGltcGwhOiBEYXRlVGltZVBpY2tlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZm9ybWF0dGVyID0geCA9PiB4ID8gc3ByaW50ZignJTA0ZC4gJTAyZC4gJTAyZCAlMDJkOiUwMmQnLCB4LnllYXIsIHgubW9udGgsIHguZGF5LCB4LmhvdXJzLCB4Lm1pbnV0ZXMpIDogKHRoaXMucGxhY2Vob2xkZXIgfHwgJycpO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7IHRoaXMuaW1wbC5hY3RpdmF0ZSgpOyB9XG5cbiAgY29tcHV0ZUVtcHR5KGVtcHR5OiBib29sZWFuLCBwbGFjZWhvbGRlcjogc3RyaW5nfHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBlbXB0eSAmJiAhcGxhY2Vob2xkZXI7XG4gIH1cblxuICBvbkljb25DbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5hY3RpdmF0ZSgpO1xuICB9XG59XG5cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtZGF0ZS1yYW5nZS1ib3gnKVxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZUJveCBleHRlbmRzIERlY29yYXRlZEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpIGltcGxlbWVudHMgVmFsdWVGaWVsZDxEYXRlVGltZVJhbmdlPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUgKCkgeyByZXR1cm4gbWtUZW1wbGF0ZShkYXRlUmFuZ2VCb3hWaWV3KTsgfVxuXG4gIHByaXZhdGUgX192YWx1ZUNoYW5naW5nID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBEYXRlVGltZVJhbmdlID0ge307XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWUgfSlcbiAgc3RhcnREYXRlOiBEYXRlVGltZXx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWUgfSlcbiAgZW5kRGF0ZTogRGF0ZVRpbWV8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIGZvcm1hdHRlciE6IChpdGVtOiBEYXRlVGltZXx1bmRlZmluZWQpID0+IHN0cmluZztcblxuICBAcXVlcnkoJ2RvcGUtZGF0ZS1yYW5nZS1waWNrZXInKVxuICBpbXBsITogRGF0ZVJhbmdlUGlja2VyO1xuXG4gIGFjdGl2YXRlKCkgeyB0aGlzLmltcGwuYWN0aXZhdGUoKTsgfVxuXG4gIGNvbXB1dGVFbXB0eShlbXB0eTogYm9vbGVhbiwgcGxhY2Vob2xkZXI6IHN0cmluZ3x1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZW1wdHkgJiYgIXBsYWNlaG9sZGVyO1xuICB9XG5cbiAgb25JY29uQ2xpY2soZTogTW91c2VFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgfVxuXG4gIEBvYnNlcnZlKCd2YWx1ZScpXG4gIHZhbHVlQ2hhbmdlZCh2YWx1ZTogRGF0ZVRpbWVSYW5nZSkge1xuICAgIHRoaXMuX192YWx1ZUNoYW5naW5nID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zdGFydERhdGUgPSB2YWx1ZS5zdGFydDtcbiAgICAgIHRoaXMuZW5kRGF0ZSA9IHZhbHVlLmVuZDtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fX3ZhbHVlQ2hhbmdpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAb2JzZXJ2ZSgnc3RhcnREYXRlJywgJ2VuZERhdGUnKVxuICB2YWx1ZXNDaGFuZ2VkKHN0YXJ0OiBEYXRlVGltZXx1bmRlZmluZWQsIGVuZDogRGF0ZVRpbWV8dW5kZWZpbmVkKSB7XG4gICAgaWYgKCF0aGlzLl9fdmFsdWVDaGFuZ2luZykge1xuICAgICAgdGhpcy52YWx1ZSA9IHsgc3RhcnQsIGVuZCB9O1xuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=