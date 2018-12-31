var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import "dopees-ui/lib/material-icon.js";
import "./text-field.js";
import "./list-picker.js";
import "./text-field.js";
import "./multitext-field.js";
import "@polymer/polymer/lib/elements/dom-if.js";
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { customElement, property, query, observe } from "@polymer/decorators/lib/decorators.js";
import { DecoratedFieldMixin } from "./field.js";
import { mkTemplate } from "./templates.js";
import { TimeSpan } from "dopees-core/lib/datetime.js";
import { sprintf } from "dopees-core/lib/string.js";
const wrapperView = "<style>:host{display:block}:host[focused]{position:relative;z-index:2}.field{cursor:pointer;padding-top:0.375rem}.field--box{position:relative;display:flex;flex-direction:column;align-items:stretch;padding:.5rem .625rem;background:var(--background-color, #fff);border:0.125rem solid var(--border-color, rgba(0,0,0,0.25));border-radius:.25rem;transition:border 0.35s cubic-bezier(0, 0, 0.2, 1)}.field--hint{color:var(--border-hover-color, rgba(0,0,0,0.5));font-size:var(--hint-font-size, 0.75rem)}.field--error{color:var(--border-error-color, #FF1744);font-size:var(--error-font-size, var(--hint-font-size, 0.75rem))}.field--label{position:relative;display:block;align-self:flex-start;z-index:1;padding:0 .5rem 0 0;margin:0;width:auto;height:var(--height, 1.75rem);line-height:var(--height, 1.75rem);font-size:inherit;font-family:inherit;transform:translateZ(0);color:var(--text-color, #000);opacity:.38;transition:all 0.35s cubic-bezier(0, 0, 0.2, 1);pointer-events:none}.field--label:empty{display:none}.field--inner{margin-top:calc(-1 * var(--height, 1.75rem));display:flex;transition:margin 0.35s cubic-bezier(0, 0, 0.2, 1)}.field[no-label] .field--inner{margin-top:0}.field--icon::slotted(dope-material-icon){width:1rem;height:1rem;align-self:center;fill:var(--text-color, #000)}.field--icon::slotted(dope-material-icon) svg{width:1rem;height:1rem}.field--body::slotted(*){flex:1}.field:not([empty]) .field--label,.field[focused] .field--label{padding:0 .25rem;height:.75rem;font-size:.75rem;line-height:.75rem;transform:translate3d(-0.25rem, -0.875rem, 0);transform-origin:top left;opacity:1;background:var(--background-color, #fff);cursor:text;color:var(--border-color, rgba(0,0,0,0.25))}.field:not([empty]) .field--label:empty,.field[focused] .field--label:empty{display:none}.field:not([empty]) .field--inner,.field[focused] .field--inner{margin-top:-.75rem}.field:not([empty])[no-label] .field--inner,.field[focused][no-label] .field--inner{margin-top:0}.field:not([empty]):hover:not([focused]):not([invalid]) .field--label,.field[focused]:hover:not([focused]):not([invalid]) .field--label{color:var(--border-hover-color, rgba(0,0,0,0.5))}.field:hover .field--box{border:0.125rem solid var(--border-hover-color, rgba(0,0,0,0.5))}.field[focused] .field--box{border-color:var(--color-primary-A700, blue)}.field[focused] .field--label{color:var(--color-primary-A700, blue);filter:none}.field[invalid] .field--box{border-color:var(--border-error-color, #FF1744)}.field[invalid] .field--label{color:var(--border-error-color, #FF1744)}\n\n/*# sourceMappingURL=box.css.map */</style><div class=\"field\" focused$=\"[[focused]]\" empty$=\"[[empty]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" invalid$=\"[[invalid]]\" no-label$=\"[[isEmpty(label)]]\"><div class=\"field--box\"><label class=\"field--label\">[[label]]</label><div class=\"field--inner\"><slot class=\"field--body\" name=\"implementation\"></slot><slot class=\"field--icon\" name=\"icon\"></slot></div></div><div class=\"field--under\"><template is=\"dom-if\" if=\"[[__showHint(validationMessage, hint)]]\"><span class=\"field--hint\">[[hint]]</span></template><template is=\"dom-if\" if=\"[[validationMessage]]\"><span class=\"field--error\">[[validationMessage]]</span></template></div></div>";
const textBoxView = "<style>:host{display:var(--field-display, inline-block);vertical-align:middle}:host([focused]){position:relative;z-index:2}[empty] dope-material-icon,[required] dope-material-icon{display:none}\n\n/*# sourceMappingURL=text-box.css.map */</style><dope-box label=\"[[label]]\" hint=\"[[hint]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" empty=\"[[empty]]\" placeholder=\"[[placeholder]]\" validation-message=\"[[validationMessage]]\" on-click=\"activate\"><dope-text-field class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" pattern=\"[[pattern]]\" maxlength=\"[[maxlength]]\" minlength=\"[[minlength]]\" maxlength-message=\"[[maxlengthMessage]]\" minlength-message=\"[[minlengthMessage]]\" pattern-message=\"[[patternMessage]]\" required-message=\"[[requiredMessage]]\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" validation-message=\"{{validationMessage}}\" value=\"{{value}}\"></dope-text-field><dope-material-icon slot=\"icon\" type=\"close\" on-click=\"onClearClick\"></dope-material-icon></dope-box>";
const multitextBoxView = "<style>:host{display:var(--field-display, inline-block);vertical-align:middle}:host([focused]){position:relative;z-index:2}[empty] dope-material-icon,[required] dope-material-icon{display:none}\n\n/*# sourceMappingURL=multitext-box.css.map */</style><dope-box label=\"[[label]]\" hint=\"[[hint]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" empty=\"[[empty]]\" placeholder=\"[[placeholder]]\" validation-message=\"[[validationMessage]]\" on-click=\"activate\"><dope-multitext-field class=\"raw\" slot=\"implementation\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" maxlength=\"[[maxlength]]\" minlength=\"[[minlength]]\" maxlength-message=\"[[maxlengthMessage]]\" minlength-message=\"[[minlengthMessage]]\" required-message=\"[[requiredMessage]]\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" validation-message=\"{{validationMessage}}\" value=\"{{value}}\"></dope-multitext-field><dope-material-icon slot=\"icon\" type=\"close\" on-click=\"onClearClick\"></dope-material-icon></dope-box>";
const listBoxView = "<style>:host{display:var(--field-display, inline-block);vertical-align:middle}:host([focused]){position:relative;z-index:2}\n\n/*# sourceMappingURL=list-box.css.map */</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-list-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" equality=\"[[equality]]\" formatter=\"[[formatter]]\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\"></dope-list-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
const dateBoxView = "<style>:host{display:var(--field-display, inline-block);vertical-align:middle}:host([focused]){position:relative;z-index:2}\n\n/*# sourceMappingURL=date-box.css.map */</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-date-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" formatter=\"{{formatter}}\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\"></dope-date-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
const dateTimeBoxView = "<style>:host{display:inline-block;vertical-align:middle}:host([focused]){position:relative;z-index:2;}</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-datetime-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" formatter=\"{{formatter}}\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\"></dope-datetime-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
const dateRangeBoxView = "<style>:host{display:var(--field-display, inline-block);vertical-align:middle}:host([focused]){position:relative;z-index:2}\n\n/*# sourceMappingURL=date-range-box.css.map */</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-date-range-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" formatter=\"{{formatter}}\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\" start-date=\"{{startDate}}\" end-date=\"{{endDate}}\"></dope-date-range-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
const timeBoxView = "<style>:host{display:inline-block;vertical-align:middle}:host([focused]){position:relative;z-index:2;}</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-time-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" formatter=\"{{formatter}}\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\" start-time=\"{{startTime}}\" end-time=\"{{endTime}}\" step=\"{{step}}\"></dope-time-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
let BoxField = class BoxField extends DecoratedFieldMixin(PolymerElement) {
  static get template() {
    return mkTemplate(wrapperView);
  }

  __showHint(error, hint) {
    return !!(!error && hint);
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

  _deserializeValue(value, type) {
    if (RegExp === type) {
      if (!value) {
        return undefined;
      }

      return new RegExp(value);
    }

    return super._deserializeValue(value, type);
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
  type: RegExp
})], TextBox.prototype, "pattern", void 0);

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

__decorate([property({
  type: String
})], TextBox.prototype, "patternMessage", void 0);

__decorate([property({
  type: String
})], TextBox.prototype, "minlengthMessage", void 0);

__decorate([property({
  type: String
})], TextBox.prototype, "maxlengthMessage", void 0);

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

  onClearClick(e) {
    e.stopPropagation();
    e.preventDefault();
    this.value = '';
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

__decorate([property({
  type: String
})], MiltitextBox.prototype, "minlengthMessage", void 0);

__decorate([property({
  type: String
})], MiltitextBox.prototype, "maxlengthMessage", void 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0IsRUFBQSxNQUFNLEVBQUU7QUFBeEIsQ0FBRCxDQUNULENBQUEsRSxzQkFBQSxFLE9BQUEsRSxLQUEwQixDQUExQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0IsRUFBQSxNQUFNLEVBQUU7QUFBeEIsQ0FBRCxDQUNULENBQUEsRSxzQkFBQSxFLFdBQUEsRSxLQUE4QixDQUE5QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0IsRUFBQSxNQUFNLEVBQUU7QUFBeEIsQ0FBRCxDQUNULENBQUEsRSxzQkFBQSxFLFNBQUEsRSxLQUE0QixDQUE1QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsRUFDVCxDQUFBLEUsc0JBQUEsRSxXQUFBLEUsS0FBaUQsQ0FBakQsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxLQUFLLENBQUMsd0JBQUQsQ0FDTixDQUFBLEUsc0JBQUEsRSxNQUFBLEUsS0FBdUIsQ0FBdkIsQ0FBQTs7QUFlQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsT0FBRCxDQUNSLENBQUEsRSxzQkFBQSxFLGNBQUEsRUFRQyxJQVJELENBQUE7O0FBV0EsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLFdBQUQsRUFBYyxTQUFkLENBQ1IsQ0FBQSxFLHNCQUFBLEUsZUFBQSxFQUlDLElBSkQsQ0FBQTs7QUFsRFcsWUFBWSxHQUFBLFVBQUEsQ0FBQSxDQUR4QixhQUFhLENBQUMscUJBQUQsQ0FDVyxDQUFBLEVBQVosWUFBWSxDQUFaO1NBQUEsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnZG9wZWVzLXVpL2xpYi9tYXRlcmlhbC1pY29uJztcbmltcG9ydCAnLi90ZXh0LWZpZWxkJztcbmltcG9ydCAnLi9saXN0LXBpY2tlcic7XG5pbXBvcnQgJy4vdGV4dC1maWVsZCc7XG5pbXBvcnQgJy4vbXVsdGl0ZXh0LWZpZWxkJztcbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9saWIvZWxlbWVudHMvZG9tLWlmJztcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQnO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIHF1ZXJ5LCBvYnNlcnZlIH0gZnJvbSAnQHBvbHltZXIvZGVjb3JhdG9ycy9saWIvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBWYWx1ZUZpZWxkLCBEZWNvcmF0ZWRGaWVsZE1peGluIH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQgeyBNdWx0aXRleHRGaWVsZCB9IGZyb20gJy4vbXVsdGl0ZXh0LWZpZWxkJztcbmltcG9ydCB7IExpc3RGaWVsZEl0ZW0gfSBmcm9tICcuL2xpc3QtZmllbGQnO1xuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gJy4vbGlzdC1waWNrZXInO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAnLi90ZXh0LWZpZWxkJztcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlcyc7XG5pbXBvcnQgeyBEYXRlVGltZSwgVGltZVNwYW4gfSBmcm9tICdkb3BlZXMtY29yZS9saWIvZGF0ZXRpbWUnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJy4vZGF0ZS1waWNrZXInO1xuaW1wb3J0IHsgRGF0ZVRpbWVSYW5nZSB9IGZyb20gJy4vZGF0ZS1yYW5nZS1maWVsZCc7XG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXIgfSBmcm9tICcuL2RhdGUtcmFuZ2UtcGlja2VyJztcbmltcG9ydCB7IFRpbWVQaWNrZXIgfSBmcm9tICcuL3RpbWUtcGlja2VyJztcbmltcG9ydCB7IERhdGVUaW1lUGlja2VyIH0gZnJvbSAnLi9kYXRldGltZS1waWNrZXInO1xuaW1wb3J0IHsgc3ByaW50ZiB9IGZyb20gJ2RvcGVlcy1jb3JlL2xpYi9zdHJpbmcnO1xuaW1wb3J0IHdyYXBwZXJWaWV3IGZyb20gJy4vYm94L2JveC5wdWcnO1xuaW1wb3J0IHRleHRCb3hWaWV3IGZyb20gJy4vYm94L3RleHQtYm94LnB1Zyc7XG5pbXBvcnQgbXVsdGl0ZXh0Qm94VmlldyBmcm9tICcuL2JveC9tdWx0aXRleHQtYm94LnB1Zyc7XG5pbXBvcnQgbGlzdEJveFZpZXcgZnJvbSAnLi9ib3gvbGlzdC1ib3gucHVnJztcbmltcG9ydCBkYXRlQm94VmlldyBmcm9tICcuL2JveC9kYXRlLWJveC5wdWcnO1xuaW1wb3J0IGRhdGVUaW1lQm94VmlldyBmcm9tICcuL2JveC9kYXRldGltZS1ib3gucHVnJztcbmltcG9ydCBkYXRlUmFuZ2VCb3hWaWV3IGZyb20gJy4vYm94L2RhdGUtcmFuZ2UtYm94LnB1Zyc7XG5pbXBvcnQgdGltZUJveFZpZXcgZnJvbSAnLi9ib3gvdGltZS1ib3gucHVnJztcblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtYm94JylcbmV4cG9ydCBjbGFzcyBCb3hGaWVsZCBleHRlbmRzIERlY29yYXRlZEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSAoKSB7IHJldHVybiBta1RlbXBsYXRlKHdyYXBwZXJWaWV3KTsgfVxuXG4gIF9fc2hvd0hpbnQoZXJyb3I6IHN0cmluZ3x1bmRlZmluZWQsIGhpbnQ6IHN0cmluZ3x1bmRlZmluZWQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEoIWVycm9yICYmIGhpbnQpO1xuICB9XG5cbiAgaXNOb25FbXB0eSguLi52YWx1ZXM6IGFueVtdKSB7IHJldHVybiB2YWx1ZXMuc29tZShCb29sZWFuKTsgfVxuXG4gIGlzRW1wdHkoLi4udmFsdWVzOiBhbnlbXSkgeyByZXR1cm4gIXZhbHVlcy5zb21lKEJvb2xlYW4pOyB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLXRleHQtYm94JylcbmV4cG9ydCBjbGFzcyBUZXh0Qm94IGV4dGVuZHMgRGVjb3JhdGVkRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkgaW1wbGVtZW50cyBWYWx1ZUZpZWxkPHN0cmluZz4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlICgpIHsgcmV0dXJuIG1rVGVtcGxhdGUodGV4dEJveFZpZXcpOyB9XG5cbiAgX2Rlc2VyaWFsaXplVmFsdWUodmFsdWU6IHN0cmluZ3xudWxsLCB0eXBlOiBhbnkpIHtcbiAgICBpZiAoUmVnRXhwID09PSB0eXBlKSB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cCh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5fZGVzZXJpYWxpemVWYWx1ZSh2YWx1ZSwgdHlwZSk7XG4gIH1cblxuICBAcXVlcnkoJy5yYXcnKVxuICBwcm90ZWN0ZWQgZmllbGQhOiBUZXh0RmllbGQ7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHR5cGU/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IDxhbnk+UmVnRXhwIH0pXG4gIHBhdHRlcm4/OiBSZWdFeHA7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUgfSlcbiAgbWlubGVuZ3RoPzogbnVtYmVyO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlIH0pXG4gIG1heGxlbmd0aD86IG51bWJlcjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogc3RyaW5nID0gJyc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBhdHRlcm5NZXNzYWdlPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBtaW5sZW5ndGhNZXNzYWdlPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBtYXhsZW5ndGhNZXNzYWdlPzogc3RyaW5nO1xuXG4gIGFjdGl2YXRlKCkgeyB0aGlzLmZpZWxkLmFjdGl2YXRlKCk7IH1cblxuICBvbkNsZWFyQ2xpY2soZTogTW91c2VFdmVudCkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1tdWx0aXRleHQtYm94JylcbmV4cG9ydCBjbGFzcyBNaWx0aXRleHRCb3ggZXh0ZW5kcyBEZWNvcmF0ZWRGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8c3RyaW5nPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUgKCkgeyByZXR1cm4gbWtUZW1wbGF0ZShtdWx0aXRleHRCb3hWaWV3KTsgfVxuXG4gIEBxdWVyeSgnLnJhdycpXG4gIHByb3RlY3RlZCBmaWVsZCE6IE11bHRpdGV4dEZpZWxkO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICB0eXBlPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSB9KVxuICBtaW5sZW5ndGg/OiBudW1iZXI7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUgfSlcbiAgbWF4bGVuZ3RoPzogbnVtYmVyO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICB2YWx1ZTogc3RyaW5nID0gJyc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIG1pbmxlbmd0aE1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIG1heGxlbmd0aE1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgYWN0aXZhdGUoKSB7IHRoaXMuZmllbGQuYWN0aXZhdGUoKTsgfVxuXG4gIG9uQ2xlYXJDbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLWxpc3QtYm94JylcbmV4cG9ydCBjbGFzcyBMaXN0Qm94PFQ+IGV4dGVuZHMgRGVjb3JhdGVkRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkgaW1wbGVtZW50cyBWYWx1ZUZpZWxkPFR8dW5kZWZpbmVkPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUgKCkgeyByZXR1cm4gbWtUZW1wbGF0ZShsaXN0Qm94Vmlldyk7IH1cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBUfHVuZGVmaW5lZDtcblxuICBAcHJvcGVydHkoKVxuICBmb3JtYXR0ZXI6IChpdGVtOiBUfHVuZGVmaW5lZCkgPT4gc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIGVxdWFsaXR5OiAoYTogVHx1bmRlZmluZWQsIGI6IFR8dW5kZWZpbmVkKSA9PiBib29sZWFuID0gKGEsIGIpID0+IGEgPT09IGI7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSlcbiAgaXRlbXM6IExpc3RGaWVsZEl0ZW08VD5bXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICB0YWJpbmRleDogbnVtYmVyID0gMDtcblxuICBAcXVlcnkoJ2RvcGUtbGlzdC1waWNrZXInKVxuICBpbXBsITogTGlzdFBpY2tlcjxUPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZm9ybWF0dGVyID0geCA9PiB4ID8geC50b1N0cmluZygpIDogKHRoaXMucGxhY2Vob2xkZXIgfHwgJycpO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7IHRoaXMuaW1wbC5hY3RpdmF0ZSgpOyB9XG5cbiAgY29tcHV0ZUVtcHR5KGVtcHR5OiBib29sZWFuLCBwbGFjZWhvbGRlcjogc3RyaW5nfHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBlbXB0eSAmJiAhcGxhY2Vob2xkZXI7XG4gIH1cblxuICBvbkljb25DbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFjdGl2YXRlKCksIDEwKTtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1kYXRlLWJveCcpXG5leHBvcnQgY2xhc3MgRGF0ZUJveCBleHRlbmRzIERlY29yYXRlZEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpIGltcGxlbWVudHMgVmFsdWVGaWVsZDxEYXRlVGltZXx1bmRlZmluZWQ+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSAoKSB7IHJldHVybiBta1RlbXBsYXRlKGRhdGVCb3hWaWV3KTsgfVxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWUgfSlcbiAgdmFsdWU6IERhdGVUaW1lfHVuZGVmaW5lZDtcblxuICBAcHJvcGVydHkoKVxuICBmb3JtYXR0ZXIhOiAoaXRlbTogRGF0ZVRpbWV8dW5kZWZpbmVkKSA9PiBzdHJpbmc7XG5cbiAgQHF1ZXJ5KCdkb3BlLWRhdGUtcGlja2VyJylcbiAgaW1wbCE6IERhdGVQaWNrZXI7XG5cbiAgYWN0aXZhdGUoKSB7IHRoaXMuaW1wbC5hY3RpdmF0ZSgpOyB9XG5cbiAgY29tcHV0ZUVtcHR5KGVtcHR5OiBib29sZWFuLCBwbGFjZWhvbGRlcjogc3RyaW5nfHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBlbXB0eSAmJiAhcGxhY2Vob2xkZXI7XG4gIH1cblxuICBvbkljb25DbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5hY3RpdmF0ZSgpO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLXRpbWUtYm94JylcbmV4cG9ydCBjbGFzcyBUaW1lQm94IGV4dGVuZHMgRGVjb3JhdGVkRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkgaW1wbGVtZW50cyBWYWx1ZUZpZWxkPFRpbWVTcGFufHVuZGVmaW5lZD4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlICgpIHsgcmV0dXJuIG1rVGVtcGxhdGUodGltZUJveFZpZXcpOyB9XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiA8YW55PlRpbWVTcGFuLCBub3RpZnk6IHRydWUgfSlcbiAgdmFsdWU6IFRpbWVTcGFufHVuZGVmaW5lZDtcblxuICBAcHJvcGVydHkoKVxuICBmb3JtYXR0ZXI6IChpdGVtOiBUaW1lU3Bhbnx1bmRlZmluZWQpID0+IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiA8YW55PlRpbWVTcGFuIH0pXG4gIHN0YXJ0VGltZSE6IFRpbWVTcGFuO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IDxhbnk+VGltZVNwYW4gfSlcbiAgZW5kVGltZSE6IFRpbWVTcGFuO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IDxhbnk+VGltZVNwYW4gfSlcbiAgc3RlcCE6IFRpbWVTcGFuO1xuXG4gIEBxdWVyeSgnZG9wZS10aW1lLXBpY2tlcicpXG4gIGltcGwhOiBUaW1lUGlja2VyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mb3JtYXR0ZXIgPSB4ID0+IHggPyBzcHJpbnRmKCclMDJkOiUwMmQnLCB4LmhvdXJzLCB4Lm1pbnV0ZXMpIDogKHRoaXMucGxhY2Vob2xkZXIgfHwgJycpO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7IHRoaXMuaW1wbC5hY3RpdmF0ZSgpOyB9XG5cbiAgY29tcHV0ZUVtcHR5KGVtcHR5OiBib29sZWFuLCBwbGFjZWhvbGRlcjogc3RyaW5nfHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBlbXB0eSAmJiAhcGxhY2Vob2xkZXI7XG4gIH1cblxuICBvbkljb25DbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5hY3RpdmF0ZSgpO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLWRhdGV0aW1lLWJveCcpXG5leHBvcnQgY2xhc3MgRGF0ZVRpbWVCb3ggZXh0ZW5kcyBEZWNvcmF0ZWRGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8RGF0ZVRpbWV8dW5kZWZpbmVkPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUgKCkgeyByZXR1cm4gbWtUZW1wbGF0ZShkYXRlVGltZUJveFZpZXcpOyB9XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogRGF0ZVRpbWV8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIGZvcm1hdHRlcjogKGl0ZW06IERhdGVUaW1lfHVuZGVmaW5lZCkgPT4gc3RyaW5nO1xuXG4gIEBxdWVyeSgnZG9wZS1kYXRldGltZS1waWNrZXInKVxuICBpbXBsITogRGF0ZVRpbWVQaWNrZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmZvcm1hdHRlciA9IHggPT4geCA/IHNwcmludGYoJyUwNGQuICUwMmQuICUwMmQgJTAyZDolMDJkJywgeC55ZWFyLCB4Lm1vbnRoLCB4LmRheSwgeC5ob3VycywgeC5taW51dGVzKSA6ICh0aGlzLnBsYWNlaG9sZGVyIHx8ICcnKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkgeyB0aGlzLmltcGwuYWN0aXZhdGUoKTsgfVxuXG4gIGNvbXB1dGVFbXB0eShlbXB0eTogYm9vbGVhbiwgcGxhY2Vob2xkZXI6IHN0cmluZ3x1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZW1wdHkgJiYgIXBsYWNlaG9sZGVyO1xuICB9XG5cbiAgb25JY29uQ2xpY2soZTogTW91c2VFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgfVxufVxuXG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLWRhdGUtcmFuZ2UtYm94JylcbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VCb3ggZXh0ZW5kcyBEZWNvcmF0ZWRGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8RGF0ZVRpbWVSYW5nZT4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlICgpIHsgcmV0dXJuIG1rVGVtcGxhdGUoZGF0ZVJhbmdlQm94Vmlldyk7IH1cblxuICBwcml2YXRlIF9fdmFsdWVDaGFuZ2luZyA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbmFtZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogRGF0ZVRpbWVSYW5nZSA9IHt9O1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIHN0YXJ0RGF0ZTogRGF0ZVRpbWV8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIGVuZERhdGU6IERhdGVUaW1lfHVuZGVmaW5lZDtcblxuICBAcHJvcGVydHkoKVxuICBmb3JtYXR0ZXIhOiAoaXRlbTogRGF0ZVRpbWV8dW5kZWZpbmVkKSA9PiBzdHJpbmc7XG5cbiAgQHF1ZXJ5KCdkb3BlLWRhdGUtcmFuZ2UtcGlja2VyJylcbiAgaW1wbCE6IERhdGVSYW5nZVBpY2tlcjtcblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5pbXBsLmFjdGl2YXRlKCk7IH1cblxuICBjb21wdXRlRW1wdHkoZW1wdHk6IGJvb2xlYW4sIHBsYWNlaG9sZGVyOiBzdHJpbmd8dW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGVtcHR5ICYmICFwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIG9uSWNvbkNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmFjdGl2YXRlKCk7XG4gIH1cblxuICBAb2JzZXJ2ZSgndmFsdWUnKVxuICB2YWx1ZUNoYW5nZWQodmFsdWU6IERhdGVUaW1lUmFuZ2UpIHtcbiAgICB0aGlzLl9fdmFsdWVDaGFuZ2luZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc3RhcnREYXRlID0gdmFsdWUuc3RhcnQ7XG4gICAgICB0aGlzLmVuZERhdGUgPSB2YWx1ZS5lbmQ7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX192YWx1ZUNoYW5naW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQG9ic2VydmUoJ3N0YXJ0RGF0ZScsICdlbmREYXRlJylcbiAgdmFsdWVzQ2hhbmdlZChzdGFydDogRGF0ZVRpbWV8dW5kZWZpbmVkLCBlbmQ6IERhdGVUaW1lfHVuZGVmaW5lZCkge1xuICAgIGlmICghdGhpcy5fX3ZhbHVlQ2hhbmdpbmcpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB7IHN0YXJ0LCBlbmQgfTtcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9