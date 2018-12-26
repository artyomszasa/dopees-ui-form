var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import "./drop-down.js";
import { FieldMixin } from "./field.js";
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { property, query, observe } from "@polymer/decorators/lib/decorators.js";
import { mkTemplate } from "./templates.js";
const view = "<style>:host{display:inline-block;vertical-align:middle}.wrapper{outline:none;min-width:var(--min-width, 6rem);background:var(--background, #fff)}\n\n/*# sourceMappingURL=picker.css.map */</style><div class=\"wrapper\" tabindex$=\"[[tabindex]]\" on-click=\"activate\" on-focus=\"onFocus\" on-blur=\"onBlur\"><dope-drop-down formatter=\"[[formatter]]\" placeholder=\"[[placeholder]]\" value=\"[[value]]\" opened=\"[[focused]]\"><template body=\"body\"></template></dope-drop-down></div>";
const defaults = {
  slot: 'body',
  tabindex: '[[tabindex]]',
  placeholder: '[[placeholder]]',
  readonly: '[[readonly]]',
  required: '[[required]]',
  dirty: '{{dirty}}',
  invalid: '{{invalid}}',
  focused: '{{implementationFocused}}'
};
const keyTemplate = Symbol('template');
const templateBase = mkTemplate(view);
export class Picker extends FieldMixin(PolymerElement) {
  constructor() {
    super(...arguments);
    this.tabindex = 0;
    this.selfFocused = false;
    this.implementationFocused = false;
  }

  static createTemplate(host, options) {
    if (!options) {
      throw new TypeError('options must be specified');
    }

    if (!host[keyTemplate]) {
      const template = templateBase.cloneNode(true); // inject css

      if (options.css) {
        let style = template.content.querySelector('style');

        if (!style) {
          style = document.createElement('style');
          template.content.appendChild(style);
        }

        style.textContent = style.textContent + options.css;
      } // inject implementation


      const inner = template.content.querySelector('template[body]');
      const implementationTemplate = mkTemplate(`<${options.implementation}></${options.implementation}>`);
      const implementation = implementationTemplate.content.querySelector(options.implementation);
      const args = options.arguments || {};
      const defaultKeys = Object.keys(defaults);
      defaultKeys.forEach(key => {
        const value = args[key] || defaults[key];
        implementation.setAttribute(key, value);
      });
      Object.keys(args).forEach(key => {
        if (-1 === defaultKeys.indexOf(key)) {
          implementation.setAttribute(key, args[key]);
        }
      });
      const res = inner.parentNode.replaceChild(implementation, inner);
      res.classList.add('.picker--implementation');
      host[keyTemplate] = template;
    }

    return host[keyTemplate];
  }

  onFocus() {
    this.selfFocused = true;
  }

  onBlur() {
    clearTimeout(this.__blurTimeout); // allow implementation to focus...

    this.__blurTimeout = setTimeout(() => this.selfFocused = false, 50);
  }

  observeActive(selfFocused, implementationFocused) {
    this.focused = selfFocused || implementationFocused;
  }

}

__decorate([property({
  type: String
})], Picker.prototype, "placeholder", void 0);

__decorate([property({
  type: Number
})], Picker.prototype, "tabindex", void 0);

__decorate([property({
  type: Boolean
})], Picker.prototype, "selfFocused", void 0);

__decorate([property({
  type: Boolean
})], Picker.prototype, "implementationFocused", void 0);

__decorate([query('.picker--implementation')], Picker.prototype, "implementation", void 0);

__decorate([query('.wrapper')], Picker.prototype, "wrapper", void 0);

__decorate([query('dope-drop-down')], Picker.prototype, "dropDown", void 0);

__decorate([observe('selfFocused', 'implementationFocused')], Picker.prototype, "observeActive", null);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSxnQkFBQSxFLGFBQUEsRSxLQUE2QixDQUE3QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSxnQkFBQSxFLHVCQUFBLEUsS0FBdUMsQ0FBdkMsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxLQUFLLENBQUMseUJBQUQsQ0FDTixDQUFBLEUsZ0JBQUEsRSxnQkFBQSxFLEtBQWtELENBQWxELENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsS0FBSyxDQUFDLFVBQUQsQ0FDTixDQUFBLEUsZ0JBQUEsRSxTQUFBLEUsS0FBK0IsQ0FBL0IsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxLQUFLLENBQUMsZ0JBQUQsQ0FDTixDQUFBLEUsZ0JBQUEsRSxVQUFBLEUsS0FBcUMsQ0FBckMsQ0FBQTs7QUFXQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsYUFBRCxFQUFnQix1QkFBaEIsQ0FDUixDQUFBLEUsZ0JBQUEsRSxlQUFBLEVBRUMsSUFGRCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Ryb3AtZG93bic7XG5pbXBvcnQgeyBGaWVsZE1peGluLCBWYWx1ZUZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50JztcbmltcG9ydCB7IHByb3BlcnR5LCBxdWVyeSwgb2JzZXJ2ZSB9IGZyb20gJ0Bwb2x5bWVyL2RlY29yYXRvcnMvbGliL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgbWtUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGVzJztcbmltcG9ydCB7IERvcGVEcm9wRG93biB9IGZyb20gJy4vZHJvcC1kb3duJztcbmltcG9ydCB2aWV3IGZyb20gJy4vcGlja2VyL3BpY2tlci5wdWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBpY2tlclRlbXBsYXRlT3B0aW9ucyB7XG4gIGltcGxlbWVudGF0aW9uOiBzdHJpbmc7XG4gIGNzcz86IHN0cmluZztcbiAgYXJndW1lbnRzPzoge31cbn1cblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gIHNsb3Q6ICdib2R5JyxcbiAgdGFiaW5kZXg6ICdbW3RhYmluZGV4XV0nLFxuICBwbGFjZWhvbGRlcjogJ1tbcGxhY2Vob2xkZXJdXScsXG4gIHJlYWRvbmx5OiAnW1tyZWFkb25seV1dJyxcbiAgcmVxdWlyZWQ6ICdbW3JlcXVpcmVkXV0nLFxuICBkaXJ0eTogJ3t7ZGlydHl9fScsXG4gIGludmFsaWQ6ICd7e2ludmFsaWR9fScsXG4gIGZvY3VzZWQ6ICd7e2ltcGxlbWVudGF0aW9uRm9jdXNlZH19J1xufVxuXG5jb25zdCBrZXlUZW1wbGF0ZSA9IFN5bWJvbCgndGVtcGxhdGUnKTtcbmNvbnN0IHRlbXBsYXRlQmFzZSA9IG1rVGVtcGxhdGUodmlldyk7XG5cbmV4cG9ydCBjbGFzcyBQaWNrZXI8VD4gZXh0ZW5kcyBGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBjcmVhdGVUZW1wbGF0ZTxUIGV4dGVuZHMgeyBuZXcoLi4uYXJnczogYW55W10pOiBQb2x5bWVyRWxlbWVudH0+KGhvc3Q6IFQsIG9wdGlvbnM6IFBpY2tlclRlbXBsYXRlT3B0aW9ucyk6IEhUTUxUZW1wbGF0ZUVsZW1lbnQge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9ucyBtdXN0IGJlIHNwZWNpZmllZCcpO1xuICAgIH1cbiAgICBpZiAoIWhvc3Rba2V5VGVtcGxhdGVdKSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IDxIVE1MVGVtcGxhdGVFbGVtZW50PnRlbXBsYXRlQmFzZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAvLyBpbmplY3QgY3NzXG4gICAgICBpZiAob3B0aW9ucy5jc3MpIHtcbiAgICAgICAgbGV0IHN0eWxlOiBIVE1MU3R5bGVFbGVtZW50ID0gPEhUTUxTdHlsZUVsZW1lbnQ+dGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZScpO1xuICAgICAgICBpZiAoIXN0eWxlKSB7XG4gICAgICAgICAgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gKHN0eWxlLnRleHRDb250ZW50ICsgb3B0aW9ucy5jc3MpO1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGltcGxlbWVudGF0aW9uXG4gICAgICBjb25zdCBpbm5lciA9IDxOb2RlPnRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcigndGVtcGxhdGVbYm9keV0nKTtcbiAgICAgIGNvbnN0IGltcGxlbWVudGF0aW9uVGVtcGxhdGUgPSBta1RlbXBsYXRlKGA8JHtvcHRpb25zLmltcGxlbWVudGF0aW9ufT48LyR7b3B0aW9ucy5pbXBsZW1lbnRhdGlvbn0+YCk7XG4gICAgICBjb25zdCBpbXBsZW1lbnRhdGlvbiA9IDxIVE1MRWxlbWVudD5pbXBsZW1lbnRhdGlvblRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmltcGxlbWVudGF0aW9uKTtcbiAgICAgIGNvbnN0IGFyZ3MgPSBvcHRpb25zLmFyZ3VtZW50cyB8fCB7fTtcbiAgICAgIGNvbnN0IGRlZmF1bHRLZXlzID0gT2JqZWN0LmtleXMoZGVmYXVsdHMpO1xuICAgICAgZGVmYXVsdEtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGFyZ3Nba2V5XSB8fCBkZWZhdWx0c1trZXldO1xuICAgICAgICBpbXBsZW1lbnRhdGlvbi5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5rZXlzKGFyZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKC0xID09PSBkZWZhdWx0S2V5cy5pbmRleE9mKGtleSkpIHtcbiAgICAgICAgICBpbXBsZW1lbnRhdGlvbi5zZXRBdHRyaWJ1dGUoa2V5LCBhcmdzW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlcyA9IDxIVE1MRWxlbWVudD4oPE5vZGU+aW5uZXIucGFyZW50Tm9kZSkucmVwbGFjZUNoaWxkKGltcGxlbWVudGF0aW9uLCBpbm5lcik7XG4gICAgICByZXMuY2xhc3NMaXN0LmFkZCgnLnBpY2tlci0taW1wbGVtZW50YXRpb24nKTtcbiAgICAgIGhvc3Rba2V5VGVtcGxhdGVdID0gdGVtcGxhdGU7XG4gICAgfVxuICAgIHJldHVybiBob3N0W2tleVRlbXBsYXRlXTtcbiAgfVxuXG4gIHByaXZhdGUgX19ibHVyVGltZW91dDogYW55O1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbiAgdGFiaW5kZXg/OiBudW1iZXIgPSAwO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgc2VsZkZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIGltcGxlbWVudGF0aW9uRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBxdWVyeSgnLnBpY2tlci0taW1wbGVtZW50YXRpb24nKVxuICBwcm90ZWN0ZWQgaW1wbGVtZW50YXRpb24hOiBWYWx1ZUZpZWxkPFR8dW5kZWZpbmVkPlxuXG4gIEBxdWVyeSgnLndyYXBwZXInKVxuICBwcm90ZWN0ZWQgd3JhcHBlciE6IEhUTUxFbGVtZW50XG5cbiAgQHF1ZXJ5KCdkb3BlLWRyb3AtZG93bicpXG4gIHByb3RlY3RlZCBkcm9wRG93biE6IERvcGVEcm9wRG93bjxUPjtcblxuICBvbkZvY3VzKCkgeyB0aGlzLnNlbGZGb2N1c2VkID0gdHJ1ZTsgfVxuXG4gIG9uQmx1cigpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fX2JsdXJUaW1lb3V0KTtcbiAgICAvLyBhbGxvdyBpbXBsZW1lbnRhdGlvbiB0byBmb2N1cy4uLlxuICAgIHRoaXMuX19ibHVyVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZWxmRm9jdXNlZCA9IGZhbHNlLCA1MCk7XG4gIH1cblxuICBAb2JzZXJ2ZSgnc2VsZkZvY3VzZWQnLCAnaW1wbGVtZW50YXRpb25Gb2N1c2VkJylcbiAgb2JzZXJ2ZUFjdGl2ZShzZWxmRm9jdXNlZDogYm9vbGVhbiwgaW1wbGVtZW50YXRpb25Gb2N1c2VkOiBib29sZWFuKSB7XG4gICAgdGhpcy5mb2N1c2VkID0gc2VsZkZvY3VzZWQgfHwgaW1wbGVtZW50YXRpb25Gb2N1c2VkO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==