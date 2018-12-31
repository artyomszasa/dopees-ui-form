var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import "./menu.js";
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { property, customElement, observe, query } from "@polymer/decorators/lib/decorators.js";
import { FieldMixin } from "./field.js";
import { mkTemplate } from "./templates.js";
const template = "<style>:host{display:inline-flex;flex-direction:column;vertical-align:middle}.field{outline:none;height:100%;display:inline-block;overflow-x:none;overflow-y:auto;border-radius:var(--border-radius, 0)}dope-menu{height:100%}\n\n/*# sourceMappingURL=list-field.css.map */</style><div class=\"field\" tabindex$=\"[[tabindex]]\" focused$=\"[[focused]]\" empty$=\"[[empty]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" invalid$=\"[[invalid]]\" on-focus=\"onFocus\" on-blur=\"onBlur\"><dope-menu items=\"[[toMenuItems(formatter, items, required, placeholder)]]\" on-choose=\"onMenuChoose\" selected-index=\"{{selectedIndex}}\"></dope-menu></div>";

class ItemWrapper {
  constructor(source, formatter) {
    this.source = source;
    this.formatter = formatter;
  }

  get disabled() {
    return this.source.disabled;
  }

  get icon() {
    return this.source.icon;
  }

  get data() {
    return this.source.data;
  }

  get text() {
    return this.formatter(this.data);
  }

}

let ListField = class ListField extends FieldMixin(PolymerElement) {
  constructor() {
    super();
    this.tabindex = 0;

    this.equality = (a, b) => a === b;

    this.items = [];
    /**
     * Bound to underlying menu property.
     */

    this.selectedIndex = -1;
    this.empty = true;

    this.formatter = x => x ? x.toString() : '';
  }

  static get template() {
    return mkTemplate(template);
  }

  activate() {
    this.wrapper.focus();
  }

  onBlur() {
    this.focused = false;
  }

  onFocus() {
    this.focused = true;
  }

  onMenuChoose(e) {
    e.preventDefault();
    this.dirty = true;
    this.value = e.detail;
  } // tslint:disable-next-line:max-line-length


  toMenuItems(formatter, items, required, placeholder) {
    let mapped;

    if (!items || !formatter) {
      mapped = [];
    }

    mapped = items.map(item => new ItemWrapper(item, formatter));

    if (!required) {
      mapped.unshift({
        data: undefined,
        text: placeholder || ''
      });
    }

    return mapped;
  }

  observeEmpty(value) {
    this.empty = !value; // moved to validation...
    // if (this.required) {
    //   this.invalid = !value;
    // }
  }

  observeSelectedIndex(value, items, required) {
    if (!value || !items) {
      this.selectedIndex = required ? -1 : 0;
    } else {
      this.selectedIndex = items.findIndex(item => {
        return this.equality(item.data, value);
      }) + (required ? 0 : 1);
    }
  }

};

__decorate([property({
  type: Object,
  notify: true
})], ListField.prototype, "value", void 0);

__decorate([property({
  type: Number
})], ListField.prototype, "tabindex", void 0);

__decorate([property()], ListField.prototype, "formatter", void 0);

__decorate([property()], ListField.prototype, "equality", void 0);

__decorate([property({
  type: Array
})], ListField.prototype, "items", void 0);

__decorate([property({
  type: String
})], ListField.prototype, "placeholder", void 0);

__decorate([property({
  type: Number,
  notify: true
})], ListField.prototype, "selectedIndex", void 0);

__decorate([query('.field')], ListField.prototype, "wrapper", void 0);

__decorate([observe('value')], ListField.prototype, "observeEmpty", null);

__decorate([observe('value', 'items', 'required')], ListField.prototype, "observeSelectedIndex", null);

ListField = __decorate([customElement('dope-list-field')], ListField);
export { ListField };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPLFdBQVA7QUFDQSxTQUFTLGNBQVQsUUFBK0IscUNBQS9CO0FBQ0EsU0FBUyxRQUFULEVBQW1CLGFBQW5CLEVBQWtDLE9BQWxDLEVBQTJDLEtBQTNDLFFBQXdELHVDQUF4RDtBQUNBLFNBQVMsVUFBVCxRQUF1QyxZQUF2QztBQUNBLFNBQVMsVUFBVCxRQUEyQixnQkFBM0I7TUFFTyxROztBQVdQLE1BQU0sV0FBTixDQUFpQjtBQU9mLEVBQUEsV0FBQSxDQUFZLE1BQVosRUFBc0MsU0FBdEMsRUFBOEU7QUFDNUUsU0FBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLFNBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNEOztBQVBELE1BQUksUUFBSixHQUFZO0FBQUssV0FBTyxLQUFLLE1BQUwsQ0FBWSxRQUFuQjtBQUE4Qjs7QUFDL0MsTUFBSSxJQUFKLEdBQVE7QUFBSyxXQUFPLEtBQUssTUFBTCxDQUFZLElBQW5CO0FBQTBCOztBQUN2QyxNQUFJLElBQUosR0FBUTtBQUFLLFdBQU8sS0FBSyxNQUFMLENBQVksSUFBbkI7QUFBMEI7O0FBQ3ZDLE1BQUksSUFBSixHQUFRO0FBQUssV0FBTyxLQUFLLFNBQUwsQ0FBZSxLQUFLLElBQXBCLENBQVA7QUFBbUM7O0FBTmpDOztBQWNqQixJQUFhLFNBQVMsR0FBdEIsTUFBYSxTQUFiLFNBQWtDLFVBQVUsQ0FBQyxjQUFELENBQTVDLENBQTREO0FBOEIxRCxFQUFBLFdBQUEsR0FBQTtBQUNFO0FBeEJGLFNBQUEsUUFBQSxHQUFvQixDQUFwQjs7QUFNQSxTQUFBLFFBQUEsR0FBd0QsQ0FBQyxDQUFELEVBQUksQ0FBSixLQUFVLENBQUMsS0FBSyxDQUF4RTs7QUFHQSxTQUFBLEtBQUEsR0FBaUMsRUFBakM7QUFLQTs7OztBQUlBLFNBQUEsYUFBQSxHQUF3QixDQUFDLENBQXpCO0FBT0UsU0FBSyxLQUFMLEdBQWEsSUFBYjs7QUFDQSxTQUFLLFNBQUwsR0FBa0IsQ0FBRCxJQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBRixFQUFILEdBQWtCLEVBQTNDO0FBQ0Q7O0FBakNELGFBQVcsUUFBWCxHQUFtQjtBQUFLLFdBQU8sVUFBVSxDQUFDLFFBQUQsQ0FBakI7QUFBOEI7O0FBbUN0RCxFQUFBLFFBQVEsR0FBQTtBQUFLLFNBQUssT0FBTCxDQUFhLEtBQWI7QUFBdUI7O0FBRXBDLEVBQUEsTUFBTSxHQUFBO0FBQUssU0FBSyxPQUFMLEdBQWUsS0FBZjtBQUF1Qjs7QUFFbEMsRUFBQSxPQUFPLEdBQUE7QUFBSyxTQUFLLE9BQUwsR0FBZSxJQUFmO0FBQXNCOztBQUVsQyxFQUFBLFlBQVksQ0FBQyxDQUFELEVBQWtCO0FBQzVCLElBQUEsQ0FBQyxDQUFDLGNBQUY7QUFDQSxTQUFLLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBSyxLQUFMLEdBQWEsQ0FBQyxDQUFDLE1BQWY7QUFDRCxHQTlDeUQsQ0FnRDFEOzs7QUFDQSxFQUFBLFdBQVcsQ0FBQyxTQUFELEVBQTJDLEtBQTNDLEVBQTJFLFFBQTNFLEVBQXdHLFdBQXhHLEVBQXFJO0FBQzlJLFFBQUksTUFBSjs7QUFDQSxRQUFJLENBQUMsS0FBRCxJQUFVLENBQUMsU0FBZixFQUEwQjtBQUN4QixNQUFBLE1BQU0sR0FBRyxFQUFUO0FBQ0Q7O0FBQ0QsSUFBQSxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQU4sQ0FBVyxJQUFELElBQVUsSUFBSSxXQUFKLENBQW1CLElBQW5CLEVBQXlCLFNBQXpCLENBQXBCLENBQVQ7O0FBQ0EsUUFBSSxDQUFDLFFBQUwsRUFBZTtBQUNiLE1BQUEsTUFBTSxDQUFDLE9BQVAsQ0FBZTtBQUNiLFFBQUEsSUFBSSxFQUFFLFNBRE87QUFFYixRQUFBLElBQUksRUFBRSxXQUFXLElBQUk7QUFGUixPQUFmO0FBSUQ7O0FBQ0QsV0FBTyxNQUFQO0FBQ0Q7O0FBR0QsRUFBQSxZQUFZLENBQUMsS0FBRCxFQUFtQjtBQUM3QixTQUFLLEtBQUwsR0FBYSxDQUFDLEtBQWQsQ0FENkIsQ0FFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7QUFHRCxFQUFBLG9CQUFvQixDQUFDLEtBQUQsRUFBcUIsS0FBckIsRUFBcUQsUUFBckQsRUFBZ0Y7QUFDbEcsUUFBSSxDQUFDLEtBQUQsSUFBVSxDQUFDLEtBQWYsRUFBc0I7QUFDcEIsV0FBSyxhQUFMLEdBQXFCLFFBQVEsR0FBRyxDQUFDLENBQUosR0FBUSxDQUFyQztBQUNELEtBRkQsTUFFTztBQUNMLFdBQUssYUFBTCxHQUFxQixLQUFLLENBQUMsU0FBTixDQUFpQixJQUFELElBQVM7QUFDNUMsZUFBTyxLQUFLLFFBQUwsQ0FBYyxJQUFJLENBQUMsSUFBbkIsRUFBeUIsS0FBekIsQ0FBUDtBQUNELE9BRm9CLEtBRWYsUUFBUSxHQUFHLENBQUgsR0FBTyxDQUZBLENBQXJCO0FBR0Q7QUFDRjs7QUFsRnlELENBQTVEOztBQUlFLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0IsRUFBQSxNQUFNLEVBQUU7QUFBeEIsQ0FBRCxDQUNULENBQUEsRSxtQkFBQSxFLE9BQUEsRSxLQUFtQixDQUFuQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSxtQkFBQSxFLFVBQUEsRSxLQUFzQixDQUF0QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsRUFDVCxDQUFBLEUsbUJBQUEsRSxXQUFBLEUsS0FBeUMsQ0FBekMsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLEVBQ1QsQ0FBQSxFLG1CQUFBLEUsVUFBQSxFLEtBQXlFLENBQXpFLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLG1CQUFBLEUsT0FBQSxFLEtBQW9DLENBQXBDLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLG1CQUFBLEUsYUFBQSxFLEtBQXFCLENBQXJCLENBQUE7O0FBTUEsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQixFQUFBLE1BQU0sRUFBRTtBQUF4QixDQUFELENBQ1QsQ0FBQSxFLG1CQUFBLEUsZUFBQSxFLEtBQTJCLENBQTNCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsS0FBSyxDQUFDLFFBQUQsQ0FDTixDQUFBLEUsbUJBQUEsRSxTQUFBLEUsS0FBeUIsQ0FBekIsQ0FBQTs7QUFxQ0EsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLE9BQUQsQ0FDUixDQUFBLEUsbUJBQUEsRSxjQUFBLEVBTUMsSUFORCxDQUFBOztBQVNBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixVQUFuQixDQUNSLENBQUEsRSxtQkFBQSxFLHNCQUFBLEVBUUMsSUFSRCxDQUFBOztBQTFFVyxTQUFTLEdBQUEsVUFBQSxDQUFBLENBRHJCLGFBQWEsQ0FBQyxpQkFBRCxDQUNRLENBQUEsRUFBVCxTQUFTLENBQVQ7U0FBQSxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL21lbnUnO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgY3VzdG9tRWxlbWVudCwgb2JzZXJ2ZSwgcXVlcnkgfSBmcm9tICdAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IEZpZWxkTWl4aW4sIFZhbHVlRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlcyc7XG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9saXN0LWZpZWxkL2xpc3QtZmllbGQucHVnJztcblxuZXhwb3J0IGludGVyZmFjZSBMaXN0RmllbGRJdGVtPFQ+IHtcbiAgLyoqIFdoZXRoZXIgaXRlbSBpcyBkaXNhYmxlZC4gKi9cbiAgcmVhZG9ubHkgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAvKiogSWNvbiB0byBzaG93IGlmIGFueS4gKi9cbiAgcmVhZG9ubHkgaWNvbj86IHN0cmluZztcbiAgLyoqIFVuZGVybHlpbmcgdmFsdWUgb2YgdGhlIGl0ZW0uICovXG4gIHJlYWRvbmx5IGRhdGE6IFQ7XG59XG5cbmNsYXNzIEl0ZW1XcmFwcGVyPFQ+IGltcGxlbWVudHMgTGlzdEZpZWxkSXRlbTxUPiwgTWVudUl0ZW0ge1xuICBwcml2YXRlIHJlYWRvbmx5IHNvdXJjZTogTGlzdEZpZWxkSXRlbTxUPjtcbiAgcHJpdmF0ZSByZWFkb25seSBmb3JtYXR0ZXI6IChpdGVtOiBUfHVuZGVmaW5lZCkgPT4gc3RyaW5nO1xuICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLnNvdXJjZS5kaXNhYmxlZDsgfVxuICBnZXQgaWNvbigpIHsgcmV0dXJuIHRoaXMuc291cmNlLmljb247IH1cbiAgZ2V0IGRhdGEoKSB7IHJldHVybiB0aGlzLnNvdXJjZS5kYXRhOyB9XG4gIGdldCB0ZXh0KCkgeyByZXR1cm4gdGhpcy5mb3JtYXR0ZXIodGhpcy5kYXRhKTsgfVxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IExpc3RGaWVsZEl0ZW08VD4sIGZvcm1hdHRlcjogKGl0ZW06IFR8dW5kZWZpbmVkKSA9PiBzdHJpbmcpIHtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB0aGlzLmZvcm1hdHRlciA9IGZvcm1hdHRlcjtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1saXN0LWZpZWxkJylcbmV4cG9ydCBjbGFzcyBMaXN0RmllbGQ8VD4gZXh0ZW5kcyBGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8VHx1bmRlZmluZWQ+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUodGVtcGxhdGUpOyB9XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWUgfSlcbiAgdmFsdWU6IFR8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICB0YWJpbmRleD86IG51bWJlciA9IDA7XG5cbiAgQHByb3BlcnR5KClcbiAgZm9ybWF0dGVyOiAoaXRlbTogVHx1bmRlZmluZWQpID0+IHN0cmluZztcblxuICBAcHJvcGVydHkoKVxuICBlcXVhbGl0eTogKGE6IFR8dW5kZWZpbmVkLCBiOiBUfHVuZGVmaW5lZCkgPT4gYm9vbGVhbiA9IChhLCBiKSA9PiBhID09PSBiXG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSlcbiAgaXRlbXM6IEFycmF5PExpc3RGaWVsZEl0ZW08VD4+ID0gW107XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBCb3VuZCB0byB1bmRlcmx5aW5nIG1lbnUgcHJvcGVydHkuXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIsIG5vdGlmeTogdHJ1ZSB9KVxuICBzZWxlY3RlZEluZGV4OiBudW1iZXIgPSAtMTtcblxuICBAcXVlcnkoJy5maWVsZCcpXG4gIHdyYXBwZXIhOiBIVE1MRGl2RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZW1wdHkgPSB0cnVlO1xuICAgIHRoaXMuZm9ybWF0dGVyID0gKHgpID0+IHggPyB4LnRvU3RyaW5nKCkgOiAnJztcbiAgfVxuXG4gIGFjdGl2YXRlKCkgeyB0aGlzLndyYXBwZXIuZm9jdXMoKTsgfVxuXG4gIG9uQmx1cigpIHsgdGhpcy5mb2N1c2VkID0gZmFsc2U7IH1cblxuICBvbkZvY3VzKCkgeyB0aGlzLmZvY3VzZWQgPSB0cnVlOyB9XG5cbiAgb25NZW51Q2hvb3NlKGU6IEN1c3RvbUV2ZW50PFQ+KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIHRoaXMudmFsdWUgPSBlLmRldGFpbDtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgdG9NZW51SXRlbXMoZm9ybWF0dGVyOiAoaXRlbTogVHx1bmRlZmluZWQpID0+IHN0cmluZywgaXRlbXM6IEFycmF5PExpc3RGaWVsZEl0ZW08VD4+LCByZXF1aXJlZDogYm9vbGVhbnx1bmRlZmluZWQsIHBsYWNlaG9sZGVyOiBzdHJpbmd8dW5kZWZpbmVkKSB7XG4gICAgbGV0IG1hcHBlZDogTWVudUl0ZW1bXTtcbiAgICBpZiAoIWl0ZW1zIHx8ICFmb3JtYXR0ZXIpIHtcbiAgICAgIG1hcHBlZCA9IFtdO1xuICAgIH1cbiAgICBtYXBwZWQgPSBpdGVtcy5tYXAoKGl0ZW0pID0+IG5ldyBJdGVtV3JhcHBlcjxUPihpdGVtLCBmb3JtYXR0ZXIpKTtcbiAgICBpZiAoIXJlcXVpcmVkKSB7XG4gICAgICBtYXBwZWQudW5zaGlmdCh7XG4gICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgdGV4dDogcGxhY2Vob2xkZXIgfHwgJydcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbWFwcGVkO1xuICB9XG5cbiAgQG9ic2VydmUoJ3ZhbHVlJylcbiAgb2JzZXJ2ZUVtcHR5KHZhbHVlOiBUfHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZW1wdHkgPSAhdmFsdWU7XG4gICAgLy8gbW92ZWQgdG8gdmFsaWRhdGlvbi4uLlxuICAgIC8vIGlmICh0aGlzLnJlcXVpcmVkKSB7XG4gICAgLy8gICB0aGlzLmludmFsaWQgPSAhdmFsdWU7XG4gICAgLy8gfVxuICB9XG5cbiAgQG9ic2VydmUoJ3ZhbHVlJywgJ2l0ZW1zJywgJ3JlcXVpcmVkJylcbiAgb2JzZXJ2ZVNlbGVjdGVkSW5kZXgodmFsdWU6IFR8dW5kZWZpbmVkLCBpdGVtczogQXJyYXk8TGlzdEZpZWxkSXRlbTxUPj4sIHJlcXVpcmVkOiBib29sZWFufHVuZGVmaW5lZCkge1xuICAgIGlmICghdmFsdWUgfHwgIWl0ZW1zKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSByZXF1aXJlZCA/IC0xIDogMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmVxdWFsaXR5KGl0ZW0uZGF0YSwgdmFsdWUpO1xuICAgICAgfSkgKyAocmVxdWlyZWQgPyAwIDogMSk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9