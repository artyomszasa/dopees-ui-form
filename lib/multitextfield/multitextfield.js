var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { customElement, property, observe, query } from "@polymer/decorators/lib/decorators.js";
import { mkTemplate } from "../templates.js";
import { FieldMixin } from "../field.js";
const template = "<style>:host{position:relative;display:block}textarea,.pre{overflow-y:auto;max-height:18rem;width:var(--dope-width, 100%);display:var(--dope-display);padding:0;margin:0;border:none;outline:none;font:inherit;background:transparent}textarea{height:1rem;resize:none}.pre{position:absolute;z-index:-1;visibility:hidden;padding:1rem 0 0 0}\n\n/*# sourceMappingURL=multitextfield.css.map */</style>";
let MultitextField = class MultitextField extends FieldMixin(PolymerElement) {
  constructor() {
    super(...arguments);
    this.value = '';
  }

  static get template() {
    return mkTemplate(template);
  }

  updateHeight() {
    this.pre.innerHTML = this.native.value;
    this.native.style.height = this.pre.offsetHeight + 'px';
  }

  activate() {
    this.native.focus();
  }

  onKeydown(e) {
    this.dispatchEvent(e);
  }

  onChange(e) {
    this.dirty = true;
    this.dispatchEvent(e);

    if (!e.defaultPrevented) {
      this.value = this.native.value;
      this.updateHeight();
    }
  }

  onBlur() {
    this.focused = false;
  }

  onFocus() {
    this.focused = true;
  }

  valueChanged(value) {
    this.native.value = value;
    this.updateHeight();
  }

};

__decorate([property({
  type: String
})], MultitextField.prototype, "type", void 0);

__decorate([property({
  type: String
})], MultitextField.prototype, "placeholder", void 0);

__decorate([property({
  type: Number,
  reflectToAttribute: true
})], MultitextField.prototype, "minlength", void 0);

__decorate([property({
  type: Number,
  reflectToAttribute: true
})], MultitextField.prototype, "maxlength", void 0);

__decorate([property({
  type: String
})], MultitextField.prototype, "name", void 0);

__decorate([property({
  type: String
})], MultitextField.prototype, "value", void 0);

__decorate([query('textarea')], MultitextField.prototype, "native", void 0);

__decorate([query('pre')], MultitextField.prototype, "pre", void 0);

__decorate([observe('value')], MultitextField.prototype, "valueChanged", null);

MultitextField = __decorate([customElement('dope-multitext-field')], MultitextField);
export { MultitextField };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQ04sQ0FBQSxFLHdCQUFBLEUsUUFBQSxFLEtBQTZCLENBQTdCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsS0FBSyxDQUFDLEtBQUQsQ0FDTixDQUFBLEUsd0JBQUEsRSxLQUFBLEUsS0FBcUIsQ0FBckIsQ0FBQTs7QUEyQkEsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLE9BQUQsQ0FDUixDQUFBLEUsd0JBQUEsRSxjQUFBLEVBR0MsSUFIRCxDQUFBOztBQXBEVyxjQUFjLEdBQUEsVUFBQSxDQUFBLENBRDFCLGFBQWEsQ0FBQyxzQkFBRCxDQUNhLENBQUEsRUFBZCxjQUFjLENBQWQ7U0FBQSxjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudCc7XG5pbXBvcnQge2N1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBvYnNlcnZlLCBxdWVyeX0gZnJvbSAnQHBvbHltZXIvZGVjb3JhdG9ycy9saWIvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBta1RlbXBsYXRlIH0gZnJvbSAnLi4vdGVtcGxhdGVzJztcbmltcG9ydCB7IEZpZWxkTWl4aW4sIFZhbHVlRmllbGQgfSBmcm9tICcuLi9maWVsZCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9tdWx0aXRleHRmaWVsZC5wdWcnO1xuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1tdWx0aXRleHQtZmllbGQnKVxuZXhwb3J0IGNsYXNzIE11bHRpdGV4dEZpZWxkIGV4dGVuZHMgRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkgaW1wbGVtZW50cyBWYWx1ZUZpZWxkPHN0cmluZz4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gbWtUZW1wbGF0ZSh0ZW1wbGF0ZSk7IH1cblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgdHlwZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUgfSlcbiAgbWlubGVuZ3RoPzogbnVtYmVyO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlIH0pXG4gIG1heGxlbmd0aD86IG51bWJlcjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbmFtZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgdmFsdWU6IHN0cmluZyA9ICcnO1xuXG4gIEBxdWVyeSgndGV4dGFyZWEnKVxuICBuYXRpdmUhOiBIVE1MVGV4dEFyZWFFbGVtZW50O1xuXG4gIEBxdWVyeSgncHJlJylcbiAgcHJlITogSFRNTERpdkVsZW1lbnQ7XG5cbiAgcHJpdmF0ZSB1cGRhdGVIZWlnaHQgKCkge1xuICAgIHRoaXMucHJlLmlubmVySFRNTCA9IHRoaXMubmF0aXZlLnZhbHVlO1xuICAgIHRoaXMubmF0aXZlLnN0eWxlLmhlaWdodCA9IHRoaXMucHJlLm9mZnNldEhlaWdodCArICdweCc7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5uYXRpdmUuZm9jdXMoKTsgfVxuXG4gIG9uS2V5ZG93bihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGUpO1xuICB9XG5cbiAgb25DaGFuZ2UoZTogRXZlbnQpIHtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm5hdGl2ZS52YWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlSGVpZ2h0KCk7XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKCkgeyB0aGlzLmZvY3VzZWQgPSBmYWxzZTsgfVxuXG4gIG9uRm9jdXMoKSB7IHRoaXMuZm9jdXNlZCA9IHRydWU7IH1cblxuICBAb2JzZXJ2ZSgndmFsdWUnKVxuICB2YWx1ZUNoYW5nZWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMubmF0aXZlLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVIZWlnaHQoKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=