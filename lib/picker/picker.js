var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import "../dropdown/dropdown.js";
import { FieldMixin } from "../field.js";
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { property, query, observe } from "@polymer/decorators/lib/decorators.js";
import { mkTemplate } from "../templates.js";
const view = "<style>:host{display:inline-block;vertical-align:middle}.wrapper{outline:none;min-width:var(--min-width, 6rem)}\n\n/*# sourceMappingURL=picker.css.map */</style><div class=\"wrapper\" tabindex$=\"[[tabindex]]\" on-click=\"activate\" on-focus=\"onFocus\" on-blur=\"onBlur\"><dope-drop-down formatter=\"[[formatter]]\" placeholder=\"[[placeholder]]\" value=\"[[value]]\" opened=\"[[focused]]\"><template body=\"body\"></template></dope-drop-down></div>";
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

    this.__blurTimeout = setTimeout(() => this.selfFocused = false, 25);
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

__decorate([observe('selfFocused', 'implementationFocused')], Picker.prototype, "observeActive", null);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSxnQkFBQSxFLGFBQUEsRSxLQUE2QixDQUE3QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSxnQkFBQSxFLHVCQUFBLEUsS0FBdUMsQ0FBdkMsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxLQUFLLENBQUMseUJBQUQsQ0FDTixDQUFBLEUsZ0JBQUEsRSxnQkFBQSxFLEtBQWtELENBQWxELENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsS0FBSyxDQUFDLFVBQUQsQ0FDTixDQUFBLEUsZ0JBQUEsRSxTQUFBLEUsS0FBK0IsQ0FBL0IsQ0FBQTs7QUFXQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsYUFBRCxFQUFnQix1QkFBaEIsQ0FDUixDQUFBLEUsZ0JBQUEsRSxlQUFBLEVBRUMsSUFGRCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9kcm9wZG93bi9kcm9wZG93bic7XG5pbXBvcnQgeyBGaWVsZE1peGluLCBWYWx1ZUZpZWxkIH0gZnJvbSAnLi4vZmllbGQnO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgcXVlcnksIG9ic2VydmUgfSBmcm9tICdAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IHZpZXcgZnJvbSAnLi9waWNrZXIucHVnJztcblxuZXhwb3J0IGludGVyZmFjZSBQaWNrZXJUZW1wbGF0ZU9wdGlvbnMge1xuICBpbXBsZW1lbnRhdGlvbjogc3RyaW5nO1xuICBjc3M/OiBzdHJpbmc7XG4gIGFyZ3VtZW50cz86IHt9XG59XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICBzbG90OiAnYm9keScsXG4gIHRhYmluZGV4OiAnW1t0YWJpbmRleF1dJyxcbiAgcGxhY2Vob2xkZXI6ICdbW3BsYWNlaG9sZGVyXV0nLFxuICByZWFkb25seTogJ1tbcmVhZG9ubHldXScsXG4gIHJlcXVpcmVkOiAnW1tyZXF1aXJlZF1dJyxcbiAgZGlydHk6ICd7e2RpcnR5fX0nLFxuICBpbnZhbGlkOiAne3tpbnZhbGlkfX0nLFxuICBmb2N1c2VkOiAne3tpbXBsZW1lbnRhdGlvbkZvY3VzZWR9fSdcbn1cblxuY29uc3Qga2V5VGVtcGxhdGUgPSBTeW1ib2woJ3RlbXBsYXRlJyk7XG5jb25zdCB0ZW1wbGF0ZUJhc2UgPSBta1RlbXBsYXRlKHZpZXcpO1xuXG5leHBvcnQgY2xhc3MgUGlja2VyPFQ+IGV4dGVuZHMgRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgY3JlYXRlVGVtcGxhdGU8VCBleHRlbmRzIHsgbmV3KC4uLmFyZ3M6IGFueVtdKTogUG9seW1lckVsZW1lbnR9Pihob3N0OiBULCBvcHRpb25zOiBQaWNrZXJUZW1wbGF0ZU9wdGlvbnMpOiBIVE1MVGVtcGxhdGVFbGVtZW50IHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbnMgbXVzdCBiZSBzcGVjaWZpZWQnKTtcbiAgICB9XG4gICAgaWYgKCFob3N0W2tleVRlbXBsYXRlXSkge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSA8SFRNTFRlbXBsYXRlRWxlbWVudD50ZW1wbGF0ZUJhc2UuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgLy8gaW5qZWN0IGNzc1xuICAgICAgaWYgKG9wdGlvbnMuY3NzKSB7XG4gICAgICAgIGxldCBzdHlsZTogSFRNTFN0eWxlRWxlbWVudCA9IDxIVE1MU3R5bGVFbGVtZW50PnRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3Rvcignc3R5bGUnKTtcbiAgICAgICAgaWYgKCFzdHlsZSkge1xuICAgICAgICAgIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICB0ZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IChzdHlsZS50ZXh0Q29udGVudCArIG9wdGlvbnMuY3NzKTtcbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBpbXBsZW1lbnRhdGlvblxuICAgICAgY29uc3QgaW5uZXIgPSA8Tm9kZT50ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3RlbXBsYXRlW2JvZHldJyk7XG4gICAgICBjb25zdCBpbXBsZW1lbnRhdGlvblRlbXBsYXRlID0gbWtUZW1wbGF0ZShgPCR7b3B0aW9ucy5pbXBsZW1lbnRhdGlvbn0+PC8ke29wdGlvbnMuaW1wbGVtZW50YXRpb259PmApO1xuICAgICAgY29uc3QgaW1wbGVtZW50YXRpb24gPSA8SFRNTEVsZW1lbnQ+aW1wbGVtZW50YXRpb25UZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5pbXBsZW1lbnRhdGlvbik7XG4gICAgICBjb25zdCBhcmdzID0gb3B0aW9ucy5hcmd1bWVudHMgfHwge307XG4gICAgICBjb25zdCBkZWZhdWx0S2V5cyA9IE9iamVjdC5rZXlzKGRlZmF1bHRzKTtcbiAgICAgIGRlZmF1bHRLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhcmdzW2tleV0gfHwgZGVmYXVsdHNba2V5XTtcbiAgICAgICAgaW1wbGVtZW50YXRpb24uc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgICBPYmplY3Qua2V5cyhhcmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmICgtMSA9PT0gZGVmYXVsdEtleXMuaW5kZXhPZihrZXkpKSB7XG4gICAgICAgICAgaW1wbGVtZW50YXRpb24uc2V0QXR0cmlidXRlKGtleSwgYXJnc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXMgPSA8SFRNTEVsZW1lbnQ+KDxOb2RlPmlubmVyLnBhcmVudE5vZGUpLnJlcGxhY2VDaGlsZChpbXBsZW1lbnRhdGlvbiwgaW5uZXIpO1xuICAgICAgcmVzLmNsYXNzTGlzdC5hZGQoJy5waWNrZXItLWltcGxlbWVudGF0aW9uJyk7XG4gICAgICBob3N0W2tleVRlbXBsYXRlXSA9IHRlbXBsYXRlO1xuICAgIH1cbiAgICByZXR1cm4gaG9zdFtrZXlUZW1wbGF0ZV07XG4gIH1cblxuICBwcml2YXRlIF9fYmx1clRpbWVvdXQ6IGFueTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIHRhYmluZGV4PzogbnVtYmVyID0gMDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIHNlbGZGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBpbXBsZW1lbnRhdGlvbkZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAcXVlcnkoJy5waWNrZXItLWltcGxlbWVudGF0aW9uJylcbiAgcHJvdGVjdGVkIGltcGxlbWVudGF0aW9uITogVmFsdWVGaWVsZDxUfHVuZGVmaW5lZD5cblxuICBAcXVlcnkoJy53cmFwcGVyJylcbiAgcHJvdGVjdGVkIHdyYXBwZXIhOiBIVE1MRWxlbWVudFxuXG4gIG9uRm9jdXMoKSB7IHRoaXMuc2VsZkZvY3VzZWQgPSB0cnVlOyB9XG5cbiAgb25CbHVyKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9fYmx1clRpbWVvdXQpO1xuICAgIC8vIGFsbG93IGltcGxlbWVudGF0aW9uIHRvIGZvY3VzLi4uXG4gICAgdGhpcy5fX2JsdXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnNlbGZGb2N1c2VkID0gZmFsc2UsIDI1KTtcbiAgfVxuXG4gIEBvYnNlcnZlKCdzZWxmRm9jdXNlZCcsICdpbXBsZW1lbnRhdGlvbkZvY3VzZWQnKVxuICBvYnNlcnZlQWN0aXZlKHNlbGZGb2N1c2VkOiBib29sZWFuLCBpbXBsZW1lbnRhdGlvbkZvY3VzZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzZWQgPSBzZWxmRm9jdXNlZCB8fCBpbXBsZW1lbnRhdGlvbkZvY3VzZWQ7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9