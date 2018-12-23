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
const template = "<style>input{height:var(--dope-height, 1.75rem);line-height:var(--dope-height, 1.75rem);width:var(--dope-width, 100%);display:var(--dope-display);padding:var(--dope-padding, 0);margin:0;border:none;outline:none;box-shadow:none;font-size:inherit;font-family:inherit;background:transparent;text-align:var(--dope-text-align, left);color:var(--text-color, #000)}\n\n/*# sourceMappingURL=textfield.css.map */</style><input id=\"input\" type$=\"[[type]]\" placeholder$=\"[[placeholder]]\" minlength$=\"[[minlength]]\" maxlength$=\"[[maxlength]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" name$=\"[[name]]\" on-keydown=\"onKeydown\" on-input=\"onChange\" on-change=\"onChange\" on-focus=\"onFocus\" on-blur=\"onBlur\"/>";
import { wrapEvent } from "../helpers.js";
let TextField = class TextField extends FieldMixin(PolymerElement) {
  constructor() {
    super(...arguments);
    this.value = '';
  }

  static get template() {
    return mkTemplate(template);
  }

  activate() {
    this.native.focus();
  }

  onKeydown(e) {
    const ew = wrapEvent(e, 'dope');
    this.dispatchEvent(ew);

    if (ew.defaultPrevented) {
      e.preventDefault();
    }
  }

  onChange(e) {
    const ew = wrapEvent(e, 'dope');
    this.dispatchEvent(ew);
    this.dirty = true;
    this.value = this.native.value;
  }

  onBlur() {
    this.focused = false;
  }

  onFocus() {
    this.focused = true;
  }

  valueChanged(value) {
    this.native.value = value;
    this.empty = !value;
  }

};

__decorate([property({
  type: String
})], TextField.prototype, "type", void 0);

__decorate([property({
  type: String
})], TextField.prototype, "placeholder", void 0);

__decorate([property({
  type: Number,
  reflectToAttribute: true
})], TextField.prototype, "minlength", void 0);

__decorate([property({
  type: Number,
  reflectToAttribute: true
})], TextField.prototype, "maxlength", void 0);

__decorate([property({
  type: String
})], TextField.prototype, "name", void 0);

__decorate([property({
  type: String,
  notify: true
})], TextField.prototype, "value", void 0);

__decorate([query('input')], TextField.prototype, "native", void 0);

__decorate([observe('value')], TextField.prototype, "valueChanged", null);

TextField = __decorate([customElement('dope-text-field')], TextField);
export { TextField };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHRmaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVMsY0FBVCxRQUErQixxQ0FBL0I7QUFDQSxTQUFTLGFBQVQsRUFBd0IsUUFBeEIsRUFBa0MsT0FBbEMsRUFBMkMsS0FBM0MsUUFBd0QsdUNBQXhEO0FBQ0EsU0FBUyxVQUFULFFBQTJCLGlCQUEzQjtBQUNBLFNBQVMsVUFBVCxRQUF1QyxhQUF2QztNQUNPLFE7QUFDUCxTQUFTLFNBQVQsUUFBMEIsZUFBMUI7QUFHQSxJQUFhLFNBQVMsR0FBdEIsTUFBYSxTQUFiLFNBQStCLFVBQVUsQ0FBQyxjQUFELENBQXpDLENBQXlEO0FBRHpELEVBQUEsV0FBQSxHQUFBOztBQW9CRSxTQUFBLEtBQUEsR0FBZ0IsRUFBaEI7QUErQkQ7O0FBakRDLGFBQVcsUUFBWCxHQUFtQjtBQUFLLFdBQU8sVUFBVSxDQUFDLFFBQUQsQ0FBakI7QUFBOEI7O0FBdUJ0RCxFQUFBLFFBQVEsR0FBQTtBQUFLLFNBQUssTUFBTCxDQUFZLEtBQVo7QUFBc0I7O0FBRW5DLEVBQUEsU0FBUyxDQUFDLENBQUQsRUFBaUI7QUFDeEIsVUFBTSxFQUFFLEdBQUcsU0FBUyxDQUFDLENBQUQsRUFBSSxNQUFKLENBQXBCO0FBQ0EsU0FBSyxhQUFMLENBQW1CLEVBQW5COztBQUNBLFFBQUksRUFBRSxDQUFDLGdCQUFQLEVBQXlCO0FBQ3ZCLE1BQUEsQ0FBQyxDQUFDLGNBQUY7QUFDRDtBQUNGOztBQUVELEVBQUEsUUFBUSxDQUFDLENBQUQsRUFBUztBQUNmLFVBQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFELEVBQUksTUFBSixDQUFwQjtBQUNBLFNBQUssYUFBTCxDQUFtQixFQUFuQjtBQUNBLFNBQUssS0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLLEtBQUwsR0FBYSxLQUFLLE1BQUwsQ0FBWSxLQUF6QjtBQUNEOztBQUVELEVBQUEsTUFBTSxHQUFBO0FBQUssU0FBSyxPQUFMLEdBQWUsS0FBZjtBQUF1Qjs7QUFFbEMsRUFBQSxPQUFPLEdBQUE7QUFBSyxTQUFLLE9BQUwsR0FBZSxJQUFmO0FBQXNCOztBQUdsQyxFQUFBLFlBQVksQ0FBQyxLQUFELEVBQWM7QUFDeEIsU0FBSyxNQUFMLENBQVksS0FBWixHQUFvQixLQUFwQjtBQUNBLFNBQUssS0FBTCxHQUFhLENBQUMsS0FBZDtBQUNEOztBQWpEc0QsQ0FBekQ7O0FBSUUsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLG1CQUFBLEUsTUFBQSxFLEtBQWMsQ0FBZCxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSxtQkFBQSxFLGFBQUEsRSxLQUFxQixDQUFyQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0IsRUFBQSxrQkFBa0IsRUFBRTtBQUFwQyxDQUFELENBQ1QsQ0FBQSxFLG1CQUFBLEUsV0FBQSxFLEtBQW1CLENBQW5CLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQixFQUFBLGtCQUFrQixFQUFFO0FBQXBDLENBQUQsQ0FDVCxDQUFBLEUsbUJBQUEsRSxXQUFBLEUsS0FBbUIsQ0FBbkIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FDVCxDQUFBLEUsbUJBQUEsRSxNQUFBLEUsS0FBYyxDQUFkLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQixFQUFBLE1BQU0sRUFBRTtBQUF4QixDQUFELENBQ1QsQ0FBQSxFLG1CQUFBLEUsT0FBQSxFLEtBQW1CLENBQW5CLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsS0FBSyxDQUFDLE9BQUQsQ0FDTixDQUFBLEUsbUJBQUEsRSxRQUFBLEUsS0FBMEIsQ0FBMUIsQ0FBQTs7QUF3QkEsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLE9BQUQsQ0FDUixDQUFBLEUsbUJBQUEsRSxjQUFBLEVBR0MsSUFIRCxDQUFBOztBQTlDVyxTQUFTLEdBQUEsVUFBQSxDQUFBLENBRHJCLGFBQWEsQ0FBQyxpQkFBRCxDQUNRLENBQUEsRUFBVCxTQUFTLENBQVQ7U0FBQSxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudCc7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgb2JzZXJ2ZSwgcXVlcnkgfSBmcm9tICdAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IHsgRmllbGRNaXhpbiwgVmFsdWVGaWVsZCB9IGZyb20gJy4uL2ZpZWxkJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RleHRmaWVsZC5wdWcnO1xuaW1wb3J0IHsgd3JhcEV2ZW50IH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbkBjdXN0b21FbGVtZW50KCdkb3BlLXRleHQtZmllbGQnKVxuZXhwb3J0IGNsYXNzIFRleHRGaWVsZCBleHRlbmRzIEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpIGltcGxlbWVudHMgVmFsdWVGaWVsZDxzdHJpbmc+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUodGVtcGxhdGUpOyB9XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHR5cGU/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlIH0pXG4gIG1pbmxlbmd0aD86IG51bWJlcjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSB9KVxuICBtYXhsZW5ndGg/OiBudW1iZXI7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nLCBub3RpZnk6IHRydWUgfSlcbiAgdmFsdWU6IHN0cmluZyA9ICcnO1xuXG4gIEBxdWVyeSgnaW5wdXQnKVxuICBuYXRpdmUhOiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIGFjdGl2YXRlKCkgeyB0aGlzLm5hdGl2ZS5mb2N1cygpOyB9XG5cbiAgb25LZXlkb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCBldyA9IHdyYXBFdmVudChlLCAnZG9wZScpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldyk7XG4gICAgaWYgKGV3LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShlOiBFdmVudCkge1xuICAgIGNvbnN0IGV3ID0gd3JhcEV2ZW50KGUsICdkb3BlJyk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV3KTtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5uYXRpdmUudmFsdWU7XG4gIH1cblxuICBvbkJsdXIoKSB7IHRoaXMuZm9jdXNlZCA9IGZhbHNlOyB9XG5cbiAgb25Gb2N1cygpIHsgdGhpcy5mb2N1c2VkID0gdHJ1ZTsgfVxuXG4gIEBvYnNlcnZlKCd2YWx1ZScpXG4gIHZhbHVlQ2hhbmdlZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uYXRpdmUudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmVtcHR5ID0gIXZhbHVlO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==