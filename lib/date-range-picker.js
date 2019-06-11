var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateRangePicker_1;
import "./date-range-field.js";
import { customElement, property, query, observe } from "@polymer/decorators/lib/decorators.js";
import { sprintf } from "dopees-core/lib/string.js";
import { Picker } from "./picker.js";
let DateRangePicker = DateRangePicker_1 = class DateRangePicker extends Picker {
  constructor() {
    super();
    this.value = {};

    this.selection = () => false;

    this.formatter = x => {
      if (!x) {
        return this.placeholder || '';
      }

      if (x.start) {
        if (x.end) {
          return sprintf('%04d. %02d. %02d -- %04d. %02d. %02d', x.start.year, x.start.month, x.start.day, x.end.year, x.end.month, x.end.day);
        }

        return sprintf('%04d. %02d. %02d', x.start.year, x.start.month, x.start.day);
      }

      if (x.end) {
        return sprintf('%04d. %02d. %02d', x.end.year, x.end.month, x.end.day);
      }

      return this.placeholder || '';
    };
  }

  static get template() {
    return Picker.createTemplate(DateRangePicker_1, {
      implementation: 'dope-date-range-field',
      arguments: {
        years: '[[years]]',
        months: '[[months]]',
        selection: '[[selection]]',
        value: '{{value}}',
        'start-date': '{{startDate}}',
        'end-date': '{{endDate}}'
      }
    });
  }

  activate() {
    this.wrapper.focus();
    this.innerField.activate();
  }

  forceEmpty(empty) {
    this.dropDown.forcedEmpty = empty;
  }

  observeEmpty(value) {
    this.empty = !value || !(value.start || value.end);
  } // @observe('value')
  // valueChanged(value: DateTimeRange) {
  //   this.__valueChanging = true;
  //   try {
  //     this.startDate = value.start;
  //     this.endDate = value.end;
  //   } finally {
  //     this.__valueChanging = false;
  //   }
  // }


  valuesChanged(start, end) {
    if (start) {
      if (end) {
        this.selection = date => 0 <= date.compareTo(start) && 0 >= date.compareTo(end);
      } else {
        this.selection = date => date.equalsTo(start);
      }
    } else {
      if (end) {
        this.selection = date => date.equalsTo(end);
      } else {
        this.selection = () => false;
      }
    } // if (!this.__valueChanging) {
    //   this.value = { start, end };
    // }

  }

};

__decorate([property({
  type: Object,
  notify: true
})], DateRangePicker.prototype, "value", void 0);

__decorate([property({
  type: Object,
  notify: true
})], DateRangePicker.prototype, "startDate", void 0);

__decorate([property({
  type: Object,
  notify: true
})], DateRangePicker.prototype, "endDate", void 0);

__decorate([property()], DateRangePicker.prototype, "formatter", void 0);

__decorate([property()], DateRangePicker.prototype, "selection", void 0);

__decorate([query('dope-date-range-field')], DateRangePicker.prototype, "innerField", void 0);

__decorate([observe('empty')], DateRangePicker.prototype, "forceEmpty", null);

__decorate([observe('value')], DateRangePicker.prototype, "observeEmpty", null);

__decorate([observe('startDate', 'endDate')], DateRangePicker.prototype, "valuesChanged", null);

DateRangePicker = DateRangePicker_1 = __decorate([customElement('dope-date-range-picker')], DateRangePicker);
export { DateRangePicker };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQUEsQ0FBQSxDQURDLEtBQUssQ0FBQyx1QkFBRCxDQUNOLENBQUEsRSx5QkFBQSxFLFlBQUEsRSxLQUE0QixDQUE1QixDQUFBOztBQWtDQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsT0FBRCxDQUNSLENBQUEsRSx5QkFBQSxFLFlBQUEsRUFFQyxJQUZELENBQUE7O0FBS0EsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLE9BQUQsQ0FDUixDQUFBLEUseUJBQUEsRSxjQUFBLEVBRUMsSUFGRCxDQUFBOztBQWdCQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsV0FBRCxFQUFjLFNBQWQsQ0FDUixDQUFBLEUseUJBQUEsRSxlQUFBLEVBaUJDLElBakJELENBQUE7O0FBeEZXLGVBQWUsR0FBQSxpQkFBQSxHQUFBLFVBQUEsQ0FBQSxDQUQzQixhQUFhLENBQUMsd0JBQUQsQ0FDYyxDQUFBLEVBQWYsZUFBZSxDQUFmO1NBQUEsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9kYXRlLXJhbmdlLWZpZWxkJztcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBxdWVyeSwgb2JzZXJ2ZSB9IGZyb20gJ0Bwb2x5bWVyL2RlY29yYXRvcnMvbGliL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdkb3BlZXMtY29yZS9saWIvZGF0ZXRpbWUnO1xuaW1wb3J0IHsgc3ByaW50ZiB9IGZyb20gJ2RvcGVlcy1jb3JlL2xpYi9zdHJpbmcnO1xuaW1wb3J0IHsgVmFsdWVGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgUGlja2VyIH0gZnJvbSAnLi9waWNrZXInO1xuaW1wb3J0IHsgRGF0ZVRpbWVSYW5nZSwgRGF0ZVJhbmdlRmllbGQgfSBmcm9tICcuL2RhdGUtcmFuZ2UtZmllbGQnO1xuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1kYXRlLXJhbmdlLXBpY2tlcicpXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyIGV4dGVuZHMgUGlja2VyPERhdGVUaW1lUmFuZ2U+IGltcGxlbWVudHMgVmFsdWVGaWVsZDxEYXRlVGltZVJhbmdlPiB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIFBpY2tlci5jcmVhdGVUZW1wbGF0ZShEYXRlUmFuZ2VQaWNrZXIsIHtcbiAgICAgIGltcGxlbWVudGF0aW9uOiAnZG9wZS1kYXRlLXJhbmdlLWZpZWxkJyxcbiAgICAgIGFyZ3VtZW50czoge1xuICAgICAgICB5ZWFyczogJ1tbeWVhcnNdXScsXG4gICAgICAgIG1vbnRoczogJ1tbbW9udGhzXV0nLFxuICAgICAgICBzZWxlY3Rpb246ICdbW3NlbGVjdGlvbl1dJyxcbiAgICAgICAgdmFsdWU6ICd7e3ZhbHVlfX0nLFxuICAgICAgICAnc3RhcnQtZGF0ZSc6ICd7e3N0YXJ0RGF0ZX19JyxcbiAgICAgICAgJ2VuZC1kYXRlJzogJ3t7ZW5kRGF0ZX19J1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfX3ZhbHVlQ2hhbmdpbmc6IGFueTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogRGF0ZVRpbWVSYW5nZSA9IHt9O1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWUgfSlcbiAgc3RhcnREYXRlOiBEYXRlVGltZXx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICBlbmREYXRlOiBEYXRlVGltZXx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KClcbiAgZm9ybWF0dGVyOiAoaXRlbTogRGF0ZVRpbWVSYW5nZSkgPT4gc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHNlbGVjdGlvbjogKGRhdGU6IERhdGVUaW1lKSA9PiBib29sZWFuID0gKCkgPT4gZmFsc2VcblxuICBAcXVlcnkoJ2RvcGUtZGF0ZS1yYW5nZS1maWVsZCcpXG4gIGlubmVyRmllbGQhOiBEYXRlUmFuZ2VGaWVsZDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZm9ybWF0dGVyID0gKHgpID0+IHtcbiAgICAgIGlmICgheCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGFjZWhvbGRlciB8fCAnJztcbiAgICAgIH1cbiAgICAgIGlmICh4LnN0YXJ0KSB7XG4gICAgICAgIGlmICh4LmVuZCkge1xuICAgICAgICAgIHJldHVybiBzcHJpbnRmKFxuICAgICAgICAgICAgJyUwNGQuICUwMmQuICUwMmQgLS0gJTA0ZC4gJTAyZC4gJTAyZCcsXG4gICAgICAgICAgICB4LnN0YXJ0LnllYXIsXG4gICAgICAgICAgICB4LnN0YXJ0Lm1vbnRoLFxuICAgICAgICAgICAgeC5zdGFydC5kYXksXG4gICAgICAgICAgICB4LmVuZC55ZWFyLFxuICAgICAgICAgICAgeC5lbmQubW9udGgsXG4gICAgICAgICAgICB4LmVuZC5kYXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcHJpbnRmKCclMDRkLiAlMDJkLiAlMDJkJywgeC5zdGFydC55ZWFyLCB4LnN0YXJ0Lm1vbnRoLCB4LnN0YXJ0LmRheSk7XG4gICAgICB9XG4gICAgICBpZiAoeC5lbmQpIHtcbiAgICAgICAgcmV0dXJuIHNwcmludGYoJyUwNGQuICUwMmQuICUwMmQnLCB4LmVuZC55ZWFyLCB4LmVuZC5tb250aCwgeC5lbmQuZGF5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyIHx8ICcnO1xuICAgIH07XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLndyYXBwZXIuZm9jdXMoKTtcbiAgICB0aGlzLmlubmVyRmllbGQuYWN0aXZhdGUoKTtcbiAgfVxuXG4gIEBvYnNlcnZlKCdlbXB0eScpXG4gIGZvcmNlRW1wdHkoZW1wdHk6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRyb3BEb3duLmZvcmNlZEVtcHR5ID0gZW1wdHk7XG4gIH1cblxuICBAb2JzZXJ2ZSgndmFsdWUnKVxuICBvYnNlcnZlRW1wdHkodmFsdWU6IERhdGVUaW1lUmFuZ2V8dW5kZWZpbmVkKSB7XG4gICAgdGhpcy5lbXB0eSA9ICF2YWx1ZSB8fCAhKHZhbHVlLnN0YXJ0IHx8IHZhbHVlLmVuZCk7XG4gIH1cblxuICAvLyBAb2JzZXJ2ZSgndmFsdWUnKVxuICAvLyB2YWx1ZUNoYW5nZWQodmFsdWU6IERhdGVUaW1lUmFuZ2UpIHtcbiAgLy8gICB0aGlzLl9fdmFsdWVDaGFuZ2luZyA9IHRydWU7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICAgIHRoaXMuc3RhcnREYXRlID0gdmFsdWUuc3RhcnQ7XG4gIC8vICAgICB0aGlzLmVuZERhdGUgPSB2YWx1ZS5lbmQ7XG4gIC8vICAgfSBmaW5hbGx5IHtcbiAgLy8gICAgIHRoaXMuX192YWx1ZUNoYW5naW5nID0gZmFsc2U7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgQG9ic2VydmUoJ3N0YXJ0RGF0ZScsICdlbmREYXRlJylcbiAgdmFsdWVzQ2hhbmdlZChzdGFydDogRGF0ZVRpbWV8dW5kZWZpbmVkLCBlbmQ6IERhdGVUaW1lfHVuZGVmaW5lZCkge1xuICAgIGlmIChzdGFydCkge1xuICAgICAgaWYgKGVuZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IChkYXRlOiBEYXRlVGltZSkgPT4gMCA8PSBkYXRlLmNvbXBhcmVUbyhzdGFydCkgJiYgMCA+PSBkYXRlLmNvbXBhcmVUbyhlbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSAoZGF0ZTogRGF0ZVRpbWUpID0+IGRhdGUuZXF1YWxzVG8oc3RhcnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZW5kKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gKGRhdGU6IERhdGVUaW1lKSA9PiBkYXRlLmVxdWFsc1RvKGVuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9ICgpID0+IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBpZiAoIXRoaXMuX192YWx1ZUNoYW5naW5nKSB7XG4gICAgLy8gICB0aGlzLnZhbHVlID0geyBzdGFydCwgZW5kIH07XG4gICAgLy8gfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9