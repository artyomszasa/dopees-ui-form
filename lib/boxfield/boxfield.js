var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import "../textfield/textfield.js";
import "../listfield/listfield.js";
import "dopees-ui/lib/material-icon.js";
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { customElement, property, query } from "@polymer/decorators/lib/decorators.js";
import { DecoratedFieldMixin } from "../field.js";
import { mkTemplate } from "../templates.js";
const wrapperView = "<style>:host{display:block}:host[focused]{position:relative;z-index:2}.field{cursor:pointer;padding-top:0.375rem}.field--box{position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:.5rem .625rem;background:var(--background-color, #fff);border:0.125rem solid var(--border-color, rgba(0,0,0,0.25));border-radius:.25rem;transition:border 0.35s cubic-bezier(0, 0, 0.2, 1)}.field--label{position:relative;display:block;z-index:1;padding:0 .5rem 0 0;margin:0;width:auto;height:var(--dope-height, 1.75rem);line-height:var(--dope-height, 1.75rem);font-size:inherit;font-family:inherit;transform:translateZ(0);color:var(--text-color, #000);opacity:.38;transition:all 0.35s cubic-bezier(0, 0, 0.2, 1);pointer-events:none}.field--inner{margin-top:calc(-1 * var(--dope-height, 1.75rem));display:flex;transition:margin 0.35s cubic-bezier(0, 0, 0.2, 1)}.field--icon::slotted(dope-material-icon){width:1rem;height:1rem;margin:.375rem 0}.field--icon::slotted(dope-material-icon) svg{width:1rem;height:1rem}.field:not([empty]) .field--label,.field[focused] .field--label{padding:0 .25rem;height:.75rem;font-size:.75rem;line-height:.75rem;transform:translate3d(-0.25rem, -0.875rem, 0);transform-origin:top left;opacity:1;background:var(--dope-background, #fff);cursor:text;color:var(--border-color, rgba(0,0,0,0.25))}.field:not([empty]) .field--label:empty,.field[focused] .field--label:empty{display:none}.field:not([empty]) .field--inner,.field[focused] .field--inner{margin-top:-.75rem}.field:not([empty]):hover:not([focused]):not([invalid]) .field--label,.field[focused]:hover:not([focused]):not([invalid]) .field--label{color:var(--border-color, rgba(0,0,0,0.5))}.field:hover .field--box{border:0.125rem solid var(--border-hiver-color, rgba(0,0,0,0.5))}.field[focused] .field--box{border-color:var(--color-primary-A700, blue)}.field[focused] .field--label{color:var(--color-primary-A700, blue);filter:none}.field[invalid] .field--box{border-color:var(--border-error-color, #FF1744)}.field[invalid] .field--label{color:var(--border-error-color, #FF1744)}\n\n/*# sourceMappingURL=boxfield.css.map */</style><div class=\"field\" focused$=\"[[focused]]\" empty$=\"[[empty]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" invalid$=\"[[invalid]]\"><div class=\"field--box\"><label class=\"field--label\">[[label]]</label><div class=\"field--inner\"><slot class=\"field--body\" name=\"implementation\"></slot><slot class=\"field--icon\" name=\"icon\"></slot></div></div><div class=\"field--under\"><template is=\"dom-if\" if=\"[[hint]]\"><span class=\"field--hint\">[[hint]]</span></template></div></div>";
const textBoxView = "<style>:host{display:inline-block;vertical-align:middle}[empty] dope-material-icon{display: none;}</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" empty=\"[[empty]]\" on-click=\"activate\"><dope-text-field class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" minlength=\"[[minlength]]\" maxlength=\"[[maxlength]]\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" value=\"{{value}}\"></dope-text-field><dope-material-icon slot=\"icon\" type=\"close\" on-click=\"onClearClick\"></dope-material-icon></dope-box>";
const multitextBoxView = "<dope-box dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" empty=\"[[empty]]\"><dope-multitext-field class=\"raw\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" minlength=\"[[minlength]]\" maxlength=\"[[maxlength]]\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" value=\"{{value}}\"></dope-multitext-field></dope-box>";
const listBoxView = "<style>:host{display:inline-block;vertical-align:middle}</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-list-field class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\"></dope-list-field><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
let BoxField = class BoxField extends DecoratedFieldMixin(PolymerElement) {
  static get template() {
    return mkTemplate(wrapperView);
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
    this.activate();
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

__decorate([query('dope-list-field')], ListBox.prototype, "impl", void 0);

ListBox = __decorate([customElement('dope-list-box')], ListBox);
export { ListBox };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLGlCQUFBLEUsT0FBQSxFLEtBQStCLENBQS9CLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLGlCQUFBLEUsVUFBQSxFLEtBQXFCLENBQXJCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsS0FBSyxDQUFDLGlCQUFELENBQ04sQ0FBQSxFLGlCQUFBLEUsTUFBQSxFLEtBQW9CLENBQXBCLENBQUE7O0FBckJXLE9BQU8sR0FBQSxVQUFBLENBQUEsQ0FEbkIsYUFBYSxDQUFDLGVBQUQsQ0FDTSxDQUFBLEVBQVAsT0FBTyxDQUFQO1NBQUEsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vdGV4dGZpZWxkL3RleHRmaWVsZCc7XG5pbXBvcnQgJy4uL2xpc3RmaWVsZC9saXN0ZmllbGQnO1xuaW1wb3J0ICdkb3BlZXMtdWkvbGliL21hdGVyaWFsLWljb24nO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBxdWVyeSB9IGZyb20gXCJAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzXCI7XG5pbXBvcnQgeyBGaWVsZE1peGluLCBWYWx1ZUZpZWxkLCBEZWNvcmF0ZWRGaWVsZE1peGluIH0gZnJvbSBcIi4uL2ZpZWxkXCI7XG5pbXBvcnQgeyBNdWx0aXRleHRGaWVsZCB9IGZyb20gXCIuLi9tdWx0aXRleHRmaWVsZC9tdWx0aXRleHRmaWVsZFwiO1xuaW1wb3J0IHsgTGlzdEZpZWxkSXRlbSwgTGlzdEZpZWxkIH0gZnJvbSAnLi4vbGlzdGZpZWxkL2xpc3RmaWVsZCc7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICcuLi90ZXh0ZmllbGQvdGV4dGZpZWxkJztcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tIFwiLi4vdGVtcGxhdGVzXCI7XG5pbXBvcnQgd3JhcHBlclZpZXcgZnJvbSAnLi9ib3hmaWVsZC5wdWcnO1xuaW1wb3J0IHRleHRCb3hWaWV3IGZyb20gJy4vdGV4dGJveC5wdWcnO1xuaW1wb3J0IG11bHRpdGV4dEJveFZpZXcgZnJvbSAnLi9tdWx0aXRleHRib3gucHVnJztcbmltcG9ydCBsaXN0Qm94VmlldyBmcm9tICcuL2xpc3Rib3gucHVnJztcblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtYm94JylcbmV4cG9ydCBjbGFzcyBCb3hGaWVsZCBleHRlbmRzIERlY29yYXRlZEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSAoKSB7IHJldHVybiBta1RlbXBsYXRlKHdyYXBwZXJWaWV3KTsgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS10ZXh0LWJveCcpXG5leHBvcnQgY2xhc3MgVGV4dEJveCBleHRlbmRzIERlY29yYXRlZEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpIGltcGxlbWVudHMgVmFsdWVGaWVsZDxzdHJpbmc+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSAoKSB7IHJldHVybiBta1RlbXBsYXRlKHRleHRCb3hWaWV3KTsgfVxuXG4gIEBxdWVyeSgnLnJhdycpXG4gIHByb3RlY3RlZCBmaWVsZCE6IFRleHRGaWVsZDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgdHlwZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUgfSlcbiAgbWlubGVuZ3RoPzogbnVtYmVyO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlIH0pXG4gIG1heGxlbmd0aD86IG51bWJlcjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogc3RyaW5nID0gJyc7XG5cbiAgYWN0aXZhdGUoKSB7IHRoaXMuZmllbGQuYWN0aXZhdGUoKTsgfVxuXG4gIG9uQ2xlYXJDbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLW11bHRpdGV4dC1ib3gnKVxuZXhwb3J0IGNsYXNzIE1pbHRpdGV4dEJveCBleHRlbmRzIERlY29yYXRlZEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpIGltcGxlbWVudHMgVmFsdWVGaWVsZDxzdHJpbmc+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSAoKSB7IHJldHVybiBta1RlbXBsYXRlKG11bHRpdGV4dEJveFZpZXcpOyB9XG5cbiAgQHF1ZXJ5KCcucmF3JylcbiAgcHJvdGVjdGVkIGZpZWxkITogTXVsdGl0ZXh0RmllbGQ7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHR5cGU/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlIH0pXG4gIG1pbmxlbmd0aD86IG51bWJlcjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSB9KVxuICBtYXhsZW5ndGg/OiBudW1iZXI7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHZhbHVlOiBzdHJpbmcgPSAnJztcblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5maWVsZC5hY3RpdmF0ZSgpOyB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLWxpc3QtYm94JylcbmV4cG9ydCBjbGFzcyBMaXN0Qm94PFQ+IGV4dGVuZHMgRGVjb3JhdGVkRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkgaW1wbGVtZW50cyBWYWx1ZUZpZWxkPFR8dW5kZWZpbmVkPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUgKCkgeyByZXR1cm4gbWtUZW1wbGF0ZShsaXN0Qm94Vmlldyk7IH1cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBUfHVuZGVmaW5lZDtcblxuICBAcHJvcGVydHkoKVxuICBmb3JtYXR0ZXI6IChpdGVtOiBUfHVuZGVmaW5lZCkgPT4gc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gIGl0ZW1zOiBMaXN0RmllbGRJdGVtPFQ+W10gPSBbXTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbiAgdGFiaW5kZXg6IG51bWJlciA9IDA7XG5cbiAgQHF1ZXJ5KCdkb3BlLWxpc3QtZmllbGQnKVxuICBpbXBsITogTGlzdEZpZWxkPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mb3JtYXR0ZXIgPSB4ID0+IHggPyB4LnRvU3RyaW5nKCkgOiAodGhpcy5wbGFjZWhvbGRlciB8fCAnJyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5pbXBsLmFjdGl2YXRlKCk7IH1cblxuICBjb21wdXRlRW1wdHkoZW1wdHk6IGJvb2xlYW4sIHBsYWNlaG9sZGVyOiBzdHJpbmd8dW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGVtcHR5ICYmICFwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIG9uSWNvbkNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmFjdGl2YXRlKCk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9