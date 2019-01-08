var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import "dopees-ui/lib/material-icon.js";
import "./datetime-picker.js";
import "./date-range-picker.js";
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
const textBoxView = "<style>:host{display:var(--field-display, inline-block);vertical-align:middle}:host([focused]){position:relative;z-index:2}[empty] dope-material-icon,[required] dope-material-icon{display:none}\n\n/*# sourceMappingURL=text-box.css.map */</style><dope-box label=\"[[label]]\" hint=\"[[hint]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" empty=\"[[empty]]\" placeholder=\"[[placeholder]]\" validation-message=\"[[validationMessage]]\" on-click=\"activate\"><dope-text-field class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" pattern=\"[[pattern]]\" maxlength=\"[[maxlength]]\" minlength=\"[[minlength]]\" maxlength-message=\"[[maxlengthMessage]]\" minlength-message=\"[[minlengthMessage]]\" pattern-message=\"[[patternMessage]]\" required-message=\"[[requiredMessage]]\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" validation-message=\"{{validationMessage}}\" value=\"{{value}}\"></dope-text-field><dope-material-icon slot=\"icon\" type=\"close\" on-click=\"onClearClick\"></dope-material-icon></dope-box>";
const multitextBoxView = "<style>:host{display:var(--field-display, inline-block);vertical-align:middle}:host([focused]){position:relative;z-index:2}[empty] dope-material-icon,[required] dope-material-icon{display:none}\n\n/*# sourceMappingURL=multitext-box.css.map */</style><dope-box label=\"[[label]]\" hint=\"[[hint]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" empty=\"[[empty]]\" placeholder=\"[[placeholder]]\" validation-message=\"[[validationMessage]]\" on-click=\"activate\"><dope-multitext-field class=\"raw\" slot=\"implementation\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" maxlength=\"[[maxlength]]\" minlength=\"[[minlength]]\" maxlength-message=\"[[maxlengthMessage]]\" minlength-message=\"[[minlengthMessage]]\" required-message=\"[[requiredMessage]]\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" validation-message=\"{{validationMessage}}\" dirty=\"{{dirty}}\" value=\"{{value}}\"></dope-multitext-field><dope-material-icon slot=\"icon\" type=\"close\" on-click=\"onClearClick\"></dope-material-icon></dope-box>";
const listBoxView = "<style>:host{display:var(--field-display, inline-block);vertical-align:middle}:host([focused]){position:relative;z-index:2}\n\n/*# sourceMappingURL=list-box.css.map */</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-list-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" equality=\"[[equality]]\" formatter=\"[[formatter]]\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\"></dope-list-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
const dateBoxView = "<style>:host{display:var(--field-display, inline-block);vertical-align:middle}:host([focused]){position:relative;z-index:2}\n\n/*# sourceMappingURL=date-box.css.map */</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-date-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" formatter=\"{{formatter}}\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\"></dope-date-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
const dateTimeBoxView = "<style>:host{display:var(--field-display, inline-block);vertical-align:middle}:host([focused]){position:relative;z-index:2}\n\n/*# sourceMappingURL=datetime-box.css.map */</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-datetime-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" formatter=\"{{formatter}}\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\"></dope-datetime-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
const dateRangeBoxView = "<style>:host{display:var(--field-display, inline-block);vertical-align:middle}:host([focused]){position:relative;z-index:2}\n\n/*# sourceMappingURL=date-range-box.css.map */</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-date-range-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" formatter=\"{{formatter}}\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\" start-date=\"{{startDate}}\" end-date=\"{{endDate}}\"></dope-date-range-picker><dope-material-icon class=\"icon\" slot=\"icon\" type$=\"[[computeIconType(clearable)]]\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
const timeBoxView = "<style>:host{display:inline-block;vertical-align:middle}:host([focused]){position:relative;z-index:2;}</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-time-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" formatter=\"{{formatter}}\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\" start-time=\"{{startTime}}\" end-time=\"{{endTime}}\" step=\"{{step}}\"></dope-time-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";

const ClearablePickerMixin = base => {
  class SomeClearablePicker extends base {
    constructor() {
      super(...arguments);
      this.clearable = false;
    }

    computeClearable(empty, required) {
      return !empty && !required;
    }

    computeIconType(clearable) {
      return clearable ? 'close' : 'expand more';
    }

  }

  __decorate([property({
    type: Boolean,
    computed: 'computeClearable(empty, required)'
  })], SomeClearablePicker.prototype, "clearable", void 0);

  return SomeClearablePicker;
};

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
let TimeBox = class TimeBox extends ClearablePickerMixin(DecoratedFieldMixin(PolymerElement)) {
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

    if (this.clearable) {
      this.value = undefined;
      this.dirty = true;
    } else {
      this.activate();
    }
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
let DateTimeBox = class DateTimeBox extends ClearablePickerMixin(DecoratedFieldMixin(PolymerElement)) {
  constructor() {
    super();

    this.formatter = x => {
      if (x) {
        return sprintf('%04d. %02d. %02d %02d:%02d', x.year, x.month, x.day, x.hours, x.minutes);
      }

      return this.placeholder || '';
    };
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

    if (this.clearable) {
      this.value = undefined;
      this.dirty = true;
    } else {
      this.activate();
    }
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
let DateRangeBox = class DateRangeBox extends ClearablePickerMixin(DecoratedFieldMixin(PolymerElement)) {
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

    if (this.clearable) {
      this.value = {};
      this.dirty = true;
    } else {
      this.activate();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEVBQUUsTUFBUjtBQUFnQixFQUFBLE1BQU0sRUFBRTtBQUF4QixDQUFELENBQ1QsQ0FBQSxFLHNCQUFBLEUsT0FBQSxFLEtBQTBCLENBQTFCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQixFQUFBLE1BQU0sRUFBRTtBQUF4QixDQUFELENBQ1QsQ0FBQSxFLHNCQUFBLEUsV0FBQSxFLEtBQThCLENBQTlCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQixFQUFBLE1BQU0sRUFBRTtBQUF4QixDQUFELENBQ1QsQ0FBQSxFLHNCQUFBLEUsU0FBQSxFLEtBQTRCLENBQTVCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxFQUNULENBQUEsRSxzQkFBQSxFLFdBQUEsRSxLQUFpRCxDQUFqRCxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLEtBQUssQ0FBQyx3QkFBRCxDQUNOLENBQUEsRSxzQkFBQSxFLE1BQUEsRSxLQUF1QixDQUF2QixDQUFBOztBQW9CQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsT0FBRCxDQUNSLENBQUEsRSxzQkFBQSxFLGNBQUEsRUFRQyxJQVJELENBQUE7O0FBV0EsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLFdBQUQsRUFBYyxTQUFkLENBQ1IsQ0FBQSxFLHNCQUFBLEUsZUFBQSxFQUlDLElBSkQsQ0FBQTs7QUExRFcsWUFBWSxHQUFBLFVBQUEsQ0FBQSxDQUR4QixhQUFhLENBQUMscUJBQUQsQ0FDVyxDQUFBLEVBQVosWUFBWSxDQUFaO1NBQUEsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnZG9wZWVzLXVpL2xpYi9tYXRlcmlhbC1pY29uJztcbmltcG9ydCAnLi9kYXRldGltZS1waWNrZXInO1xuaW1wb3J0ICcuL2RhdGUtcmFuZ2UtcGlja2VyJztcbmltcG9ydCAnLi90ZXh0LWZpZWxkJztcbmltcG9ydCAnLi9saXN0LXBpY2tlcic7XG5pbXBvcnQgJy4vdGV4dC1maWVsZCc7XG5pbXBvcnQgJy4vbXVsdGl0ZXh0LWZpZWxkJztcbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9saWIvZWxlbWVudHMvZG9tLWlmJztcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQnO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIHF1ZXJ5LCBvYnNlcnZlIH0gZnJvbSAnQHBvbHltZXIvZGVjb3JhdG9ycy9saWIvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBWYWx1ZUZpZWxkLCBEZWNvcmF0ZWRGaWVsZE1peGluLCBGaWVsZCwgRmllbGRXcmFwcGVyIH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQgeyBNdWx0aXRleHRGaWVsZCB9IGZyb20gJy4vbXVsdGl0ZXh0LWZpZWxkJztcbmltcG9ydCB7IExpc3RGaWVsZEl0ZW0gfSBmcm9tICcuL2xpc3QtZmllbGQnO1xuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gJy4vbGlzdC1waWNrZXInO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAnLi90ZXh0LWZpZWxkJztcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlcyc7XG5pbXBvcnQgeyBEYXRlVGltZSwgVGltZVNwYW4gfSBmcm9tICdkb3BlZXMtY29yZS9saWIvZGF0ZXRpbWUnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJy4vZGF0ZS1waWNrZXInO1xuaW1wb3J0IHsgRGF0ZVRpbWVSYW5nZSB9IGZyb20gJy4vZGF0ZS1yYW5nZS1maWVsZCc7XG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXIgfSBmcm9tICcuL2RhdGUtcmFuZ2UtcGlja2VyJztcbmltcG9ydCB7IFRpbWVQaWNrZXIgfSBmcm9tICcuL3RpbWUtcGlja2VyJztcbmltcG9ydCB7IERhdGVUaW1lUGlja2VyIH0gZnJvbSAnLi9kYXRldGltZS1waWNrZXInO1xuaW1wb3J0IHsgc3ByaW50ZiB9IGZyb20gJ2RvcGVlcy1jb3JlL2xpYi9zdHJpbmcnO1xuaW1wb3J0IHdyYXBwZXJWaWV3IGZyb20gJy4vYm94L2JveC5wdWcnO1xuaW1wb3J0IHRleHRCb3hWaWV3IGZyb20gJy4vYm94L3RleHQtYm94LnB1Zyc7XG5pbXBvcnQgbXVsdGl0ZXh0Qm94VmlldyBmcm9tICcuL2JveC9tdWx0aXRleHQtYm94LnB1Zyc7XG5pbXBvcnQgbGlzdEJveFZpZXcgZnJvbSAnLi9ib3gvbGlzdC1ib3gucHVnJztcbmltcG9ydCBkYXRlQm94VmlldyBmcm9tICcuL2JveC9kYXRlLWJveC5wdWcnO1xuaW1wb3J0IGRhdGVUaW1lQm94VmlldyBmcm9tICcuL2JveC9kYXRldGltZS1ib3gucHVnJztcbmltcG9ydCBkYXRlUmFuZ2VCb3hWaWV3IGZyb20gJy4vYm94L2RhdGUtcmFuZ2UtYm94LnB1Zyc7XG5pbXBvcnQgdGltZUJveFZpZXcgZnJvbSAnLi9ib3gvdGltZS1ib3gucHVnJztcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhcmFibGVQaWNrZXIge1xuICByZWFkb25seSBjbGVhcmFibGU6IGJvb2xlYW47XG4gIGNvbXB1dGVDbGVhcmFibGUoZW1wdHk6IGJvb2xlYW4sIHJlcXVpcmVkOiBib29sZWFuKTogYm9vbGVhbjtcbiAgY29tcHV0ZUljb25UeXBlKGNsZWFyYWJsZTogYm9vbGVhbik6IHN0cmluZztcbn1cblxudHlwZSBEZWNvcmF0ZWRGaWVsZEVsZW1lbnQgPSBQb2x5bWVyRWxlbWVudCZGaWVsZCZGaWVsZFdyYXBwZXI7XG5cbnR5cGUgQ3RvcjxUPiA9IG5ldyAoLi4uYXJnczogYW55W10pID0+IFQ7XG5cbmNvbnN0IENsZWFyYWJsZVBpY2tlck1peGluID0gPFQgZXh0ZW5kcyBEZWNvcmF0ZWRGaWVsZEVsZW1lbnQ+IChiYXNlOiBDdG9yPFQ+KSA9PiB7XG4gIGNsYXNzIFNvbWVDbGVhcmFibGVQaWNrZXIgZXh0ZW5kcyAoPEN0b3I8RGVjb3JhdGVkRmllbGRFbGVtZW50Pj4gYmFzZSkgaW1wbGVtZW50cyBDbGVhcmFibGVQaWNrZXIge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIGNvbXB1dGVkOiAnY29tcHV0ZUNsZWFyYWJsZShlbXB0eSwgcmVxdWlyZWQpJyB9KVxuICAgIGNsZWFyYWJsZSA9IGZhbHNlO1xuXG4gICAgY29tcHV0ZUNsZWFyYWJsZShlbXB0eTogYm9vbGVhbiwgcmVxdWlyZWQ6IGJvb2xlYW4pIHtcbiAgICAgIHJldHVybiAhZW1wdHkgJiYgIXJlcXVpcmVkO1xuICAgIH1cblxuICAgIGNvbXB1dGVJY29uVHlwZShjbGVhcmFibGU6IGJvb2xlYW4pIHtcbiAgICAgIHJldHVybiBjbGVhcmFibGUgPyAnY2xvc2UnIDogJ2V4cGFuZCBtb3JlJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIDxDdG9yPFQmQ2xlYXJhYmxlUGlja2VyPj4gPHVua25vd24+IFNvbWVDbGVhcmFibGVQaWNrZXI7XG59O1xuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1ib3gnKVxuZXhwb3J0IGNsYXNzIEJveEZpZWxkIGV4dGVuZHMgRGVjb3JhdGVkRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gbWtUZW1wbGF0ZSh3cmFwcGVyVmlldyk7IH1cblxuICBfX3Nob3dIaW50KGVycm9yOiBzdHJpbmd8dW5kZWZpbmVkLCBoaW50OiBzdHJpbmd8dW5kZWZpbmVkKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKCFlcnJvciAmJiBoaW50KTtcbiAgfVxuXG4gIGlzTm9uRW1wdHkoLi4udmFsdWVzOiBhbnlbXSkgeyByZXR1cm4gdmFsdWVzLnNvbWUoQm9vbGVhbik7IH1cblxuICBpc0VtcHR5KC4uLnZhbHVlczogYW55W10pIHsgcmV0dXJuICF2YWx1ZXMuc29tZShCb29sZWFuKTsgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS10ZXh0LWJveCcpXG5leHBvcnQgY2xhc3MgVGV4dEJveCBleHRlbmRzIERlY29yYXRlZEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpIGltcGxlbWVudHMgVmFsdWVGaWVsZDxzdHJpbmc+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUodGV4dEJveFZpZXcpOyB9XG5cbiAgX2Rlc2VyaWFsaXplVmFsdWUodmFsdWU6IHN0cmluZ3xudWxsLCB0eXBlOiBhbnkpIHtcbiAgICBpZiAoUmVnRXhwID09PSB0eXBlKSB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cCh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5fZGVzZXJpYWxpemVWYWx1ZSh2YWx1ZSwgdHlwZSk7XG4gIH1cblxuICBAcXVlcnkoJy5yYXcnKVxuICBwcm90ZWN0ZWQgZmllbGQhOiBUZXh0RmllbGQ7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHR5cGU/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IDxhbnk+IFJlZ0V4cCB9KVxuICBwYXR0ZXJuPzogUmVnRXhwO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlIH0pXG4gIG1pbmxlbmd0aD86IG51bWJlcjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSB9KVxuICBtYXhsZW5ndGg/OiBudW1iZXI7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nLCBub3RpZnk6IHRydWUgfSlcbiAgdmFsdWU6IHN0cmluZyA9ICcnO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwYXR0ZXJuTWVzc2FnZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbWlubGVuZ3RoTWVzc2FnZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbWF4bGVuZ3RoTWVzc2FnZT86IHN0cmluZztcblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5maWVsZC5hY3RpdmF0ZSgpOyB9XG5cbiAgb25DbGVhckNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtbXVsdGl0ZXh0LWJveCcpXG5leHBvcnQgY2xhc3MgTWlsdGl0ZXh0Qm94IGV4dGVuZHMgRGVjb3JhdGVkRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkgaW1wbGVtZW50cyBWYWx1ZUZpZWxkPHN0cmluZz4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gbWtUZW1wbGF0ZShtdWx0aXRleHRCb3hWaWV3KTsgfVxuXG4gIEBxdWVyeSgnLnJhdycpXG4gIHByb3RlY3RlZCBmaWVsZCE6IE11bHRpdGV4dEZpZWxkO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICB0eXBlPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSB9KVxuICBtaW5sZW5ndGg/OiBudW1iZXI7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUgfSlcbiAgbWF4bGVuZ3RoPzogbnVtYmVyO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICB2YWx1ZTogc3RyaW5nID0gJyc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIG1pbmxlbmd0aE1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIG1heGxlbmd0aE1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgYWN0aXZhdGUoKSB7IHRoaXMuZmllbGQuYWN0aXZhdGUoKTsgfVxuXG4gIG9uQ2xlYXJDbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLWxpc3QtYm94JylcbmV4cG9ydCBjbGFzcyBMaXN0Qm94PFQ+IGV4dGVuZHMgRGVjb3JhdGVkRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkgaW1wbGVtZW50cyBWYWx1ZUZpZWxkPFR8dW5kZWZpbmVkPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiBta1RlbXBsYXRlKGxpc3RCb3hWaWV3KTsgfVxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWUgfSlcbiAgdmFsdWU6IFR8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIGZvcm1hdHRlcjogKGl0ZW06IFR8dW5kZWZpbmVkKSA9PiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KClcbiAgZXF1YWxpdHk6IChhOiBUfHVuZGVmaW5lZCwgYjogVHx1bmRlZmluZWQpID0+IGJvb2xlYW4gPSAoYSwgYikgPT4gYSA9PT0gYlxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gIGl0ZW1zOiBBcnJheTxMaXN0RmllbGRJdGVtPFQ+PiA9IFtdO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICB0YWJpbmRleDogbnVtYmVyID0gMDtcblxuICBAcXVlcnkoJ2RvcGUtbGlzdC1waWNrZXInKVxuICBpbXBsITogTGlzdFBpY2tlcjxUPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZm9ybWF0dGVyID0gKHgpID0+IHggPyB4LnRvU3RyaW5nKCkgOiAodGhpcy5wbGFjZWhvbGRlciB8fCAnJyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5pbXBsLmFjdGl2YXRlKCk7IH1cblxuICBjb21wdXRlRW1wdHkoZW1wdHk6IGJvb2xlYW4sIHBsYWNlaG9sZGVyOiBzdHJpbmd8dW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGVtcHR5ICYmICFwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIG9uSWNvbkNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZhdGUoKSwgMTApO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLWRhdGUtYm94JylcbmV4cG9ydCBjbGFzcyBEYXRlQm94IGV4dGVuZHMgRGVjb3JhdGVkRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkgaW1wbGVtZW50cyBWYWx1ZUZpZWxkPERhdGVUaW1lfHVuZGVmaW5lZD4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gbWtUZW1wbGF0ZShkYXRlQm94Vmlldyk7IH1cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBEYXRlVGltZXx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KClcbiAgZm9ybWF0dGVyITogKGl0ZW06IERhdGVUaW1lfHVuZGVmaW5lZCkgPT4gc3RyaW5nO1xuXG4gIEBxdWVyeSgnZG9wZS1kYXRlLXBpY2tlcicpXG4gIGltcGwhOiBEYXRlUGlja2VyO1xuXG4gIGFjdGl2YXRlKCkgeyB0aGlzLmltcGwuYWN0aXZhdGUoKTsgfVxuXG4gIGNvbXB1dGVFbXB0eShlbXB0eTogYm9vbGVhbiwgcGxhY2Vob2xkZXI6IHN0cmluZ3x1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZW1wdHkgJiYgIXBsYWNlaG9sZGVyO1xuICB9XG5cbiAgb25JY29uQ2xpY2soZTogTW91c2VFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS10aW1lLWJveCcpXG5leHBvcnQgY2xhc3MgVGltZUJveFxuICBleHRlbmRzIENsZWFyYWJsZVBpY2tlck1peGluKERlY29yYXRlZEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpKVxuICBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8VGltZVNwYW58dW5kZWZpbmVkPiB7XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUodGltZUJveFZpZXcpOyB9XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IDxhbnk+IFRpbWVTcGFuLCBub3RpZnk6IHRydWUgfSlcbiAgdmFsdWU6IFRpbWVTcGFufHVuZGVmaW5lZDtcblxuICBAcHJvcGVydHkoKVxuICBmb3JtYXR0ZXI6IChpdGVtOiBUaW1lU3Bhbnx1bmRlZmluZWQpID0+IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiA8YW55PiBUaW1lU3BhbiB9KVxuICBzdGFydFRpbWUhOiBUaW1lU3BhbjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiA8YW55PiBUaW1lU3BhbiB9KVxuICBlbmRUaW1lITogVGltZVNwYW47XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogPGFueT4gVGltZVNwYW4gfSlcbiAgc3RlcCE6IFRpbWVTcGFuO1xuXG4gIEBxdWVyeSgnZG9wZS10aW1lLXBpY2tlcicpXG4gIGltcGwhOiBUaW1lUGlja2VyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mb3JtYXR0ZXIgPSAoeCkgPT4geCA/IHNwcmludGYoJyUwMmQ6JTAyZCcsIHguaG91cnMsIHgubWludXRlcykgOiAodGhpcy5wbGFjZWhvbGRlciB8fCAnJyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5pbXBsLmFjdGl2YXRlKCk7IH1cblxuICBjb21wdXRlRW1wdHkoZW1wdHk6IGJvb2xlYW4sIHBsYWNlaG9sZGVyOiBzdHJpbmd8dW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGVtcHR5ICYmICFwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIG9uSWNvbkNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5jbGVhcmFibGUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuICAgIH1cbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1kYXRldGltZS1ib3gnKVxuZXhwb3J0IGNsYXNzIERhdGVUaW1lQm94XG4gIGV4dGVuZHMgQ2xlYXJhYmxlUGlja2VyTWl4aW4oRGVjb3JhdGVkRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkpXG4gIGltcGxlbWVudHMgVmFsdWVGaWVsZDxEYXRlVGltZXx1bmRlZmluZWQ+IHtcblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gbWtUZW1wbGF0ZShkYXRlVGltZUJveFZpZXcpOyB9XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBEYXRlVGltZXx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KClcbiAgZm9ybWF0dGVyOiAoaXRlbTogRGF0ZVRpbWV8dW5kZWZpbmVkKSA9PiBzdHJpbmc7XG5cbiAgQHF1ZXJ5KCdkb3BlLWRhdGV0aW1lLXBpY2tlcicpXG4gIGltcGwhOiBEYXRlVGltZVBpY2tlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZm9ybWF0dGVyID0gKHgpID0+IHtcbiAgICAgIGlmICh4KSB7XG4gICAgICAgIHJldHVybiBzcHJpbnRmKCclMDRkLiAlMDJkLiAlMDJkICUwMmQ6JTAyZCcsIHgueWVhciwgeC5tb250aCwgeC5kYXksIHguaG91cnMsIHgubWludXRlcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKHRoaXMucGxhY2Vob2xkZXIgfHwgJycpO1xuICAgIH07XG4gIH1cblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5pbXBsLmFjdGl2YXRlKCk7IH1cblxuICBjb21wdXRlRW1wdHkoZW1wdHk6IGJvb2xlYW4sIHBsYWNlaG9sZGVyOiBzdHJpbmd8dW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGVtcHR5ICYmICFwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIG9uSWNvbkNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5jbGVhcmFibGUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuICAgIH1cbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1kYXRlLXJhbmdlLWJveCcpXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlQm94XG4gIGV4dGVuZHMgQ2xlYXJhYmxlUGlja2VyTWl4aW4oRGVjb3JhdGVkRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkpXG4gIGltcGxlbWVudHMgVmFsdWVGaWVsZDxEYXRlVGltZVJhbmdlPiB7XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUoZGF0ZVJhbmdlQm94Vmlldyk7IH1cblxuICBwcml2YXRlIF9fdmFsdWVDaGFuZ2luZyA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbmFtZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogRGF0ZVRpbWVSYW5nZSA9IHt9O1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIHN0YXJ0RGF0ZTogRGF0ZVRpbWV8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIGVuZERhdGU6IERhdGVUaW1lfHVuZGVmaW5lZDtcblxuICBAcHJvcGVydHkoKVxuICBmb3JtYXR0ZXIhOiAoaXRlbTogRGF0ZVRpbWV8dW5kZWZpbmVkKSA9PiBzdHJpbmc7XG5cbiAgQHF1ZXJ5KCdkb3BlLWRhdGUtcmFuZ2UtcGlja2VyJylcbiAgaW1wbCE6IERhdGVSYW5nZVBpY2tlcjtcblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5pbXBsLmFjdGl2YXRlKCk7IH1cblxuICBjb21wdXRlRW1wdHkoZW1wdHk6IGJvb2xlYW4sIHBsYWNlaG9sZGVyOiBzdHJpbmd8dW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGVtcHR5ICYmICFwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIG9uSWNvbkNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5jbGVhcmFibGUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB7IH07XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIEBvYnNlcnZlKCd2YWx1ZScpXG4gIHZhbHVlQ2hhbmdlZCh2YWx1ZTogRGF0ZVRpbWVSYW5nZSkge1xuICAgIHRoaXMuX192YWx1ZUNoYW5naW5nID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zdGFydERhdGUgPSB2YWx1ZS5zdGFydDtcbiAgICAgIHRoaXMuZW5kRGF0ZSA9IHZhbHVlLmVuZDtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fX3ZhbHVlQ2hhbmdpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAb2JzZXJ2ZSgnc3RhcnREYXRlJywgJ2VuZERhdGUnKVxuICB2YWx1ZXNDaGFuZ2VkKHN0YXJ0OiBEYXRlVGltZXx1bmRlZmluZWQsIGVuZDogRGF0ZVRpbWV8dW5kZWZpbmVkKSB7XG4gICAgaWYgKCF0aGlzLl9fdmFsdWVDaGFuZ2luZykge1xuICAgICAgdGhpcy52YWx1ZSA9IHsgc3RhcnQsIGVuZCB9O1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==