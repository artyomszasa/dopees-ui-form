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
const view = "<style>:host{display:inline-block;vertical-align:middle}.wrapper{outline:none;--outline: none;min-width:var(--min-width, 6rem);background:var(--background-color, #fff)}\n\n/*# sourceMappingURL=picker.css.map */</style><div class=\"wrapper\" tabindex$=\"[[tabindex]]\" on-click=\"activate\" on-focus=\"onFocus\" on-blur=\"onBlur\"><dope-drop-down formatter=\"[[formatter]]\" placeholder=\"[[placeholder]]\" value=\"[[value]]\" opened=\"[[focused]]\"><template body=\"body\"></template></dope-drop-down></div>";
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
  } // tslint:disable-next-line:max-line-length


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7QUFBRSxFQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FDVCxDQUFBLEUsZ0JBQUEsRSxhQUFBLEUsS0FBNkIsQ0FBN0IsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FDVCxDQUFBLEUsZ0JBQUEsRSx1QkFBQSxFLEtBQXVDLENBQXZDLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsS0FBSyxDQUFDLHlCQUFELENBQ04sQ0FBQSxFLGdCQUFBLEUsZ0JBQUEsRSxLQUFtRCxDQUFuRCxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLEtBQUssQ0FBQyxVQUFELENBQ04sQ0FBQSxFLGdCQUFBLEUsU0FBQSxFLEtBQWdDLENBQWhDLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsS0FBSyxDQUFDLGdCQUFELENBQ04sQ0FBQSxFLGdCQUFBLEUsVUFBQSxFLEtBQXFDLENBQXJDLENBQUE7O0FBV0EsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLGFBQUQsRUFBZ0IsdUJBQWhCLENBQ1IsQ0FBQSxFLGdCQUFBLEUsZUFBQSxFQUVDLElBRkQsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9kcm9wLWRvd24nO1xuaW1wb3J0IHsgRmllbGRNaXhpbiwgVmFsdWVGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgcXVlcnksIG9ic2VydmUgfSBmcm9tICdAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlcyc7XG5pbXBvcnQgeyBEb3BlRHJvcERvd24gfSBmcm9tICcuL2Ryb3AtZG93bic7XG5pbXBvcnQgdmlldyBmcm9tICcuL3BpY2tlci9waWNrZXIucHVnJztcblxuZXhwb3J0IGludGVyZmFjZSBQaWNrZXJUZW1wbGF0ZU9wdGlvbnMge1xuICBpbXBsZW1lbnRhdGlvbjogc3RyaW5nO1xuICBjc3M/OiBzdHJpbmc7XG4gIGFyZ3VtZW50cz86IHt9O1xufVxuXG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgc2xvdDogJ2JvZHknLFxuICB0YWJpbmRleDogJ1tbdGFiaW5kZXhdXScsXG4gIHBsYWNlaG9sZGVyOiAnW1twbGFjZWhvbGRlcl1dJyxcbiAgcmVhZG9ubHk6ICdbW3JlYWRvbmx5XV0nLFxuICByZXF1aXJlZDogJ1tbcmVxdWlyZWRdXScsXG4gIGRpcnR5OiAne3tkaXJ0eX19JyxcbiAgaW52YWxpZDogJ3t7aW52YWxpZH19JyxcbiAgZm9jdXNlZDogJ3t7aW1wbGVtZW50YXRpb25Gb2N1c2VkfX0nXG59O1xuXG5jb25zdCBrZXlUZW1wbGF0ZSA9IFN5bWJvbCgndGVtcGxhdGUnKTtcbmNvbnN0IHRlbXBsYXRlQmFzZSA9IG1rVGVtcGxhdGUodmlldyk7XG5cbmV4cG9ydCBjbGFzcyBQaWNrZXI8VD4gZXh0ZW5kcyBGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgc3RhdGljIGNyZWF0ZVRlbXBsYXRlPFQgZXh0ZW5kcyBuZXcoLi4uYXJnczogYW55W10pID0+IFBvbHltZXJFbGVtZW50Pihob3N0OiBULCBvcHRpb25zOiBQaWNrZXJUZW1wbGF0ZU9wdGlvbnMpOiBIVE1MVGVtcGxhdGVFbGVtZW50IHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbnMgbXVzdCBiZSBzcGVjaWZpZWQnKTtcbiAgICB9XG4gICAgaWYgKCFob3N0W2tleVRlbXBsYXRlXSkge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSA8SFRNTFRlbXBsYXRlRWxlbWVudD4gdGVtcGxhdGVCYXNlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIC8vIGluamVjdCBjc3NcbiAgICAgIGlmIChvcHRpb25zLmNzcykge1xuICAgICAgICBsZXQgc3R5bGU6IEhUTUxTdHlsZUVsZW1lbnQgPSA8SFRNTFN0eWxlRWxlbWVudD4gdGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZScpO1xuICAgICAgICBpZiAoIXN0eWxlKSB7XG4gICAgICAgICAgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gKHN0eWxlLnRleHRDb250ZW50ICsgb3B0aW9ucy5jc3MpO1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGltcGxlbWVudGF0aW9uXG4gICAgICBjb25zdCBpbm5lciA9IDxOb2RlPiB0ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3RlbXBsYXRlW2JvZHldJyk7XG4gICAgICBjb25zdCBpbXBsZW1lbnRhdGlvblRlbXBsYXRlID0gbWtUZW1wbGF0ZShgPCR7b3B0aW9ucy5pbXBsZW1lbnRhdGlvbn0+PC8ke29wdGlvbnMuaW1wbGVtZW50YXRpb259PmApO1xuICAgICAgY29uc3QgaW1wbGVtZW50YXRpb24gPSA8SFRNTEVsZW1lbnQ+IGltcGxlbWVudGF0aW9uVGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuaW1wbGVtZW50YXRpb24pO1xuICAgICAgY29uc3QgYXJncyA9IG9wdGlvbnMuYXJndW1lbnRzIHx8IHt9O1xuICAgICAgY29uc3QgZGVmYXVsdEtleXMgPSBPYmplY3Qua2V5cyhkZWZhdWx0cyk7XG4gICAgICBkZWZhdWx0S2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhcmdzW2tleV0gfHwgZGVmYXVsdHNba2V5XTtcbiAgICAgICAgaW1wbGVtZW50YXRpb24uc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgICBPYmplY3Qua2V5cyhhcmdzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKC0xID09PSBkZWZhdWx0S2V5cy5pbmRleE9mKGtleSkpIHtcbiAgICAgICAgICBpbXBsZW1lbnRhdGlvbi5zZXRBdHRyaWJ1dGUoa2V5LCBhcmdzW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlcyA9IDxIVE1MRWxlbWVudD4gKDxOb2RlPiBpbm5lci5wYXJlbnROb2RlKS5yZXBsYWNlQ2hpbGQoaW1wbGVtZW50YXRpb24sIGlubmVyKTtcbiAgICAgIHJlcy5jbGFzc0xpc3QuYWRkKCcucGlja2VyLS1pbXBsZW1lbnRhdGlvbicpO1xuICAgICAgaG9zdFtrZXlUZW1wbGF0ZV0gPSB0ZW1wbGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhvc3Rba2V5VGVtcGxhdGVdO1xuICB9XG5cbiAgcHJpdmF0ZSBfX2JsdXJUaW1lb3V0OiBhbnk7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICB0YWJpbmRleD86IG51bWJlciA9IDA7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBzZWxmRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgaW1wbGVtZW50YXRpb25Gb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQHF1ZXJ5KCcucGlja2VyLS1pbXBsZW1lbnRhdGlvbicpXG4gIHByb3RlY3RlZCBpbXBsZW1lbnRhdGlvbiE6IFZhbHVlRmllbGQ8VHx1bmRlZmluZWQ+O1xuXG4gIEBxdWVyeSgnLndyYXBwZXInKVxuICBwcm90ZWN0ZWQgd3JhcHBlciE6IEhUTUxFbGVtZW50O1xuXG4gIEBxdWVyeSgnZG9wZS1kcm9wLWRvd24nKVxuICBwcm90ZWN0ZWQgZHJvcERvd24hOiBEb3BlRHJvcERvd248VD47XG5cbiAgb25Gb2N1cygpIHsgdGhpcy5zZWxmRm9jdXNlZCA9IHRydWU7IH1cblxuICBvbkJsdXIoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX19ibHVyVGltZW91dCk7XG4gICAgLy8gYWxsb3cgaW1wbGVtZW50YXRpb24gdG8gZm9jdXMuLi5cbiAgICB0aGlzLl9fYmx1clRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VsZkZvY3VzZWQgPSBmYWxzZSwgNTApO1xuICB9XG5cbiAgQG9ic2VydmUoJ3NlbGZGb2N1c2VkJywgJ2ltcGxlbWVudGF0aW9uRm9jdXNlZCcpXG4gIG9ic2VydmVBY3RpdmUoc2VsZkZvY3VzZWQ6IGJvb2xlYW4sIGltcGxlbWVudGF0aW9uRm9jdXNlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZm9jdXNlZCA9IHNlbGZGb2N1c2VkIHx8IGltcGxlbWVudGF0aW9uRm9jdXNlZDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==