var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Calandar_1;
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { property, customElement, observe, query } from "@polymer/decorators/lib/decorators.js";
import { DateTime } from "dopees-core/lib/datetime.js";
import { mkTemplate } from "../templates.js";
const view = "<style>:host{display:block}.calendar{display:flex;flex-direction:column;height:100%}.calendar--head{display:flex;height:2rem}.calendar--left,.calendar--right{flex:0 0 1.5rem;display:flex;align-items:center;justify-content:center}.calendar--left dope-material-icon,.calendar--right dope-material-icon{width:1rem;height:1rem}.calendar--left svg,.calendar--right svg{width:1rem;height:1rem}.calendar--year{flex:1}.calendar--month{flex:2}.calendar--body{flex:1;display:grid;grid-template-columns:repeat(7, 1fr);height:calc(100% - 2.875rem)}.calendar--day{display:flex;align-items:center;justify-content:center;color:rgba(0,0,0,0.87);text-align:center;flex:1 1 14.285%;box-sizing:border-box;border-top:1px solid rgba(0,0,0,0.1);border-right:1px solid rgba(0,0,0,0.1);transition:background .3s}.calendar--day:hover{background:var(--color-primary-opacity-04, rgba(0,0,0,0.04))}.calendar--day:nth-child(7n+7){border-right:none}.calendar--day:not([active]){color:rgba(0,0,0,0.37)}.calendar--day[active]{cursor:pointer}.calendar--day[selected]{background:var(--color-primary-opacity-21, rgba(0,0,0,0.21))}.calendar--day[today]{font-weight:bold}\n\n/*# sourceMappingURL=calendar.css.map */</style><div class=\"calendar\"><div class=\"calendar--head\"><span class=\"calendar--left\" href=\"#\" title=\"El\u0151z\u0151 h\xF3nap\" on-click=\"onPrevClick\"><dope-material-icon type=\"arrow back\"></dope-material-icon></span><select class=\"calendar--year\" id=\"year\" on-change=\"onYearChange\" on-click=\"onSelectClick\" on-focus=\"onYearsFocus\" on-blur=\"onYearsBlur\"><template is=\"dom-repeat\" items=\"[[years]]\"><option value$=\"[[item]]\" selected=\"[[__eq(item, currentYear)]]\">[[item]]</option></template></select><select class=\"calendar--month\" id=\"month\" on-change=\"onMonthChange\" on-click=\"onSelectClick\" on-focus=\"onMonthsFocus\" on-blur=\"onMonthsBlur\"><template is=\"dom-repeat\" items=\"[[months]]\"><option value$=\"[[item.value]]\" selected=\"[[__eq(item.value, currentMonth)]]\">[[item.text]]</option></template></select><span class=\"calendar--right\" href=\"#\" title=\"K\xF6vetkez\u0151 h\xF3nap\" on-click=\"onNextClick\"><dope-material-icon type=\"arrow forward\"></dope-material-icon></span></div><div class=\"calendar--body\"><div class=\"calendar--day\"><span>H</span></div><div class=\"calendar--day\"><span>K</span></div><div class=\"calendar--day\"><span>Sz</span></div><div class=\"calendar--day\"><span>Cs</span></div><div class=\"calendar--day\"><span>P</span></div><div class=\"calendar--day\"><span>Sz</span></div><div class=\"calendar--day\"><span>V</span></div><template is=\"dom-repeat\" items=\"[[cells]]\"><div class=\"calendar--day\" active$=\"[[item.active]]\" selected$=\"[[item.selected]]\" today$=\"[[item.today]]\" data-date$=\"[[item.date.year]]-[[item.date.month]]-[[item.date.day]]\" on-click=\"onCellClick\"><span>[[item.date.day]]</span></div></template></div></div>";
export const months = [{
  value: 1,
  text: 'Január'
}, {
  value: 2,
  text: 'Február'
}, {
  value: 3,
  text: 'Március'
}, {
  value: 4,
  text: 'Április'
}, {
  value: 5,
  text: 'Május'
}, {
  value: 6,
  text: 'Június'
}, {
  value: 7,
  text: 'Július'
}, {
  value: 8,
  text: 'Augusztus'
}, {
  value: 9,
  text: 'Szeptember'
}, {
  value: 10,
  text: 'Október'
}, {
  value: 11,
  text: 'November'
}, {
  value: 12,
  text: 'December'
}];
const regex = /^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})$/;

const dateFromString = input => {
  if (!input) {
    return null;
  }

  const m = regex.exec(input);

  if (m) {
    return new DateTime({
      year: parseInt(m[1], 10),
      month: parseInt(m[2], 10),
      day: parseInt(m[3], 10)
    });
  }

  return null;
};

let Calandar = Calandar_1 = class Calandar extends PolymerElement {
  constructor() {
    super();
    this.years = Array.apply(null, {
      length: 50
    }).map((_, i) => 1980 + i);
    this.months = months;

    this.selection = () => false;

    this.focused = false;
    this.yearsFocused = false;
    this.monthsFocused = false;
    const now = new DateTime();
    this.shown = {
      year: now.year,
      month: now.month
    };
  }

  static get template() {
    return mkTemplate(view);
  }

  __eq(a, b) {
    return a === b;
  }

  computeCells() {
    this.currentYear = this.shown.year;
    this.currentMonth = this.shown.month;
    const fst = new DateTime({
      year: this.shown.year,
      month: this.shown.month
    });
    const lst = fst.addMonths(1).addDays(-1);
    const cells = [];

    const today = function () {
      const dt = new Date();
      return new DateTime({
        year: dt.getFullYear(),
        month: dt.getMonth() + 1,
        day: dt.getDate()
      });
    }();

    const mod = (x, n) => {
      const res = x % n;
      return res < 0 ? res + n : res;
    };

    let rowCount = 0;

    for (let cur = fst.addDays(-mod(fst.dayOfWeek - 1, 7)); -1 === cur.compareTo(lst) || 1 !== cur.dayOfWeek || rowCount < 6; cur = cur.addDays(1)) {
      if (1 === cur.dayOfWeek) {
        rowCount = rowCount + 1;
      }

      cells.push({
        date: cur,
        active: cur.month === this.shown.month,
        selected: this.selection(cur),
        today: cur.equalsTo(today)
      });
    }

    this.cells = cells;
  }

  currentYearChanged(year) {
    if (!year || this.__suppressSelectors) {
      return;
    }

    const options = Array.from(this.yearSelector.querySelectorAll('option'));
    const option = options.find(option => parseInt(option.value, 10) === year);

    if (option) {
      option.selected = true;
    }
  }

  currentMonthChanged(month) {
    if (!month || this.__suppressSelectors) {
      return;
    }

    const options = Array.from(this.monthSelector.querySelectorAll('option'));
    const option = options.find(option => parseInt(option.value, 10) === month);

    if (option) {
      option.selected = true;
    }
  }

  observeFocused(yearsFocused, monthsFocused) {
    this.focused = yearsFocused || monthsFocused;
  }

  onYearChange() {
    this.__suppressSelectors = true;

    try {
      this.set('shown.year', parseInt(this.yearSelector.value, 10));
    } finally {
      this.__suppressSelectors = false;
    }
  }

  onYearsBlur() {
    this.yearsFocused = false;
  }

  onYearsFocus() {
    this.yearsFocused = true;
  }

  onMonthChange() {
    this.__suppressSelectors = true;

    try {
      this.set('shown.month', parseInt(this.monthSelector.value, 10));
    } finally {
      this.__suppressSelectors = false;
    }
  }

  onMonthsBlur() {
    this.monthsFocused = false;
  }

  onMonthsFocus() {
    this.monthsFocused = true;
  }

  onPrevClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (1 === this.shown.month) {
      this.shown = {
        year: this.shown.year - 1,
        month: 12
      };
    } else {
      this.set('shown.month', this.shown.month - 1);
    }
  }

  onNextClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (12 === this.shown.month) {
      this.shown = {
        year: this.shown.year + 1,
        month: 1
      };
    } else {
      this.set('shown.month', this.shown.month + 1);
    }
  }

  onSelectClick(e) {
    e.stopPropagation();
  }

  onCellClick(e) {
    let target;

    if (!(e.target instanceof Element)) {
      return;
    }

    target = e.target.closest('.calendar--day');

    if (!target) {
      return;
    }

    const date = dateFromString(target.getAttribute('data-date'));

    if (!date) {
      return;
    }

    this.dispatchEvent(new CustomEvent(Calandar_1.chooseEvent, {
      bubbles: false,
      cancelable: false,
      detail: date
    }));
  }

};
Calandar.chooseEvent = 'choose';

__decorate([property({
  type: Number
})], Calandar.prototype, "currentYear", void 0);

__decorate([property({
  type: Number
})], Calandar.prototype, "currentMonth", void 0);

__decorate([property({
  type: Object
})], Calandar.prototype, "shown", void 0);

__decorate([property({
  type: Array
})], Calandar.prototype, "years", void 0);

__decorate([property({
  type: Array
})], Calandar.prototype, "months", void 0);

__decorate([property({
  type: Array
})], Calandar.prototype, "cells", void 0);

__decorate([property()], Calandar.prototype, "selection", void 0);

__decorate([property({
  type: Boolean,
  notify: true,
  reflectToAttribute: true
})], Calandar.prototype, "focused", void 0);

__decorate([property({
  type: Boolean
})], Calandar.prototype, "yearsFocused", void 0);

__decorate([property({
  type: Boolean
})], Calandar.prototype, "monthsFocused", void 0);

__decorate([query('.calendar--year')], Calandar.prototype, "yearSelector", void 0);

__decorate([query('.calendar--month')], Calandar.prototype, "monthSelector", void 0);

__decorate([observe('shown', 'selection', 'shown.*')], Calandar.prototype, "computeCells", null);

__decorate([observe('currentYear, years')], Calandar.prototype, "currentYearChanged", null);

__decorate([observe('currentMonth', 'months')], Calandar.prototype, "currentMonthChanged", null);

__decorate([observe('yearsFocused', 'monthsFocused')], Calandar.prototype, "observeFocused", null);

Calandar = Calandar_1 = __decorate([customElement('dope-calendar')], Calandar);
export { Calandar };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEUsS0FBaUMsQ0FBakMsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxLQUFLLENBQUMsa0JBQUQsQ0FDTixDQUFBLEUsa0JBQUEsRSxlQUFBLEUsS0FBa0MsQ0FBbEMsQ0FBQTs7QUFXQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsT0FBRCxFQUFVLFdBQVYsRUFBdUIsU0FBdkIsQ0FDUixDQUFBLEUsa0JBQUEsRSxjQUFBLEVBOEJDLElBOUJELENBQUE7O0FBaUNBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxvQkFBRCxDQUNSLENBQUEsRSxrQkFBQSxFLG9CQUFBLEVBU0MsSUFURCxDQUFBOztBQVlBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxjQUFELEVBQWlCLFFBQWpCLENBQ1IsQ0FBQSxFLGtCQUFBLEUscUJBQUEsRUFTQyxJQVRELENBQUE7O0FBWUEsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLGNBQUQsRUFBaUIsZUFBakIsQ0FDUixDQUFBLEUsa0JBQUEsRSxnQkFBQSxFQUVDLElBRkQsQ0FBQTs7QUE1R1csUUFBUSxHQUFBLFVBQUEsR0FBQSxVQUFBLENBQUEsQ0FEcEIsYUFBYSxDQUFDLGVBQUQsQ0FDTyxDQUFBLEVBQVIsUUFBUSxDQUFSO1NBQUEsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQnO1xuaW1wb3J0IHsgcHJvcGVydHksIGN1c3RvbUVsZW1lbnQsIG9ic2VydmUsIHF1ZXJ5IH0gZnJvbSAnQHBvbHltZXIvZGVjb3JhdG9ycy9saWIvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2RvcGVlcy1jb3JlL2xpYi9kYXRldGltZSc7XG5pbXBvcnQgeyBta1RlbXBsYXRlIH0gZnJvbSBcIi4uL3RlbXBsYXRlc1wiO1xuaW1wb3J0IHZpZXcgZnJvbSAnLi9jYWxlbmRhci5wdWcnO1xuXG5leHBvcnQgY29uc3QgbW9udGhzID0gW1xuICB7IHZhbHVlOiAxLCB0ZXh0OiAnSmFudcOhcid9LFxuICB7IHZhbHVlOiAyLCB0ZXh0OiAnRmVicnXDoXInfSxcbiAgeyB2YWx1ZTogMywgdGV4dDogJ03DoXJjaXVzJ30sXG4gIHsgdmFsdWU6IDQsIHRleHQ6ICfDgXByaWxpcyd9LFxuICB7IHZhbHVlOiA1LCB0ZXh0OiAnTcOhanVzJ30sXG4gIHsgdmFsdWU6IDYsIHRleHQ6ICdKw7puaXVzJ30sXG4gIHsgdmFsdWU6IDcsIHRleHQ6ICdKw7psaXVzJ30sXG4gIHsgdmFsdWU6IDgsIHRleHQ6ICdBdWd1c3p0dXMnfSxcbiAgeyB2YWx1ZTogOSwgdGV4dDogJ1N6ZXB0ZW1iZXInfSxcbiAgeyB2YWx1ZTogMTAsIHRleHQ6ICdPa3TDs2Jlcid9LFxuICB7IHZhbHVlOiAxMSwgdGV4dDogJ05vdmVtYmVyJ30sXG4gIHsgdmFsdWU6IDEyLCB0ZXh0OiAnRGVjZW1iZXInfVxuXVxuXG5pbnRlcmZhY2UgRGF5Q2VsbCB7XG4gIGRhdGU6IERhdGVUaW1lO1xuICBhY3RpdmU6IGJvb2xlYW47XG4gIHNlbGVjdGVkOiBib29sZWFuO1xuICB0b2RheTogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFllYXJNb250aCB7XG4gIHllYXI6IG51bWJlcjtcbiAgbW9udGg6IG51bWJlcjtcbn1cblxuY29uc3QgcmVnZXggPSAvXihbMC05XXs0fSktKFswLTldezEsMn0pLShbMC05XXsxLDJ9KSQvXG5cbmNvbnN0IGRhdGVGcm9tU3RyaW5nID0gKGlucHV0OiBzdHJpbmd8bnVsbHx1bmRlZmluZWQpOiBEYXRlVGltZXxudWxsID0+IHtcbiAgaWYgKCFpbnB1dCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IG0gPSByZWdleC5leGVjKGlucHV0KTtcbiAgaWYgKG0pIHtcbiAgICByZXR1cm4gbmV3IERhdGVUaW1lKHsgeWVhcjogcGFyc2VJbnQobVsxXSwgMTApLCBtb250aDogcGFyc2VJbnQobVsyXSwgMTApLCBkYXk6IHBhcnNlSW50KG1bM10sIDEwKSB9KTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtY2FsZW5kYXInKVxuZXhwb3J0IGNsYXNzIENhbGFuZGFyIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgcmVhZG9ubHkgY2hvb3NlRXZlbnQgPSAnY2hvb3NlJztcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUodmlldyk7IH1cblxuICBfX3N1cHByZXNzU2VsZWN0b3JzOiBhbnk7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIGN1cnJlbnRZZWFyPzogbnVtYmVyO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICBjdXJyZW50TW9udGg/OiBudW1iZXI7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0IH0pXG4gIHNob3duOiBZZWFyTW9udGg7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSlcbiAgeWVhcnM6IG51bWJlcltdID0gQXJyYXkuYXBwbHkobnVsbCwgPGFueT57IGxlbmd0aDogNTAgfSkubWFwKChfLCBpKSA9PiAxOTgwICsgaSk7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSlcbiAgbW9udGhzOiB7IHZhbHVlOiBudW1iZXIsIHRleHQ6IHN0cmluZyB9W10gPSBtb250aHM7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSlcbiAgY2VsbHMhOiBEYXlDZWxsW107XG5cbiAgQHByb3BlcnR5KClcbiAgc2VsZWN0aW9uOiAoZGF0ZTogRGF0ZVRpbWUpID0+IGJvb2xlYW4gPSAoKSA9PiBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBub3RpZnk6IHRydWUsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSB9KVxuICBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICB5ZWFyc0ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIG1vbnRoc0ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAcXVlcnkoJy5jYWxlbmRhci0teWVhcicpXG4gIHllYXJTZWxlY3RvciE6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gIEBxdWVyeSgnLmNhbGVuZGFyLS1tb250aCcpXG4gIG1vbnRoU2VsZWN0b3IhOiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlVGltZSgpO1xuICAgIHRoaXMuc2hvd24gPSB7IHllYXI6IG5vdy55ZWFyLCBtb250aDogbm93Lm1vbnRoIH07XG4gIH1cblxuICBfX2VxKGE6IGFueSwgYjogYW55KSB7IHJldHVybiBhID09PSBiOyB9XG5cbiAgQG9ic2VydmUoJ3Nob3duJywgJ3NlbGVjdGlvbicsICdzaG93bi4qJylcbiAgY29tcHV0ZUNlbGxzKCkge1xuICAgIHRoaXMuY3VycmVudFllYXIgPSB0aGlzLnNob3duLnllYXI7XG4gICAgdGhpcy5jdXJyZW50TW9udGggPSB0aGlzLnNob3duLm1vbnRoO1xuICAgIGNvbnN0IGZzdCA9IG5ldyBEYXRlVGltZSh7IHllYXI6IHRoaXMuc2hvd24ueWVhciwgbW9udGg6IHRoaXMuc2hvd24ubW9udGggfSk7XG4gICAgY29uc3QgbHN0ID0gZnN0LmFkZE1vbnRocygxKS5hZGREYXlzKC0xKTtcbiAgICBjb25zdCBjZWxsczogRGF5Q2VsbFtdID0gW107XG5cbiAgICBjb25zdCB0b2RheSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGR0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7IHllYXI6IGR0LmdldEZ1bGxZZWFyKCksIG1vbnRoOiBkdC5nZXRNb250aCgpICsgMSwgZGF5OiBkdC5nZXREYXRlKCkgfSk7XG4gICAgfSgpKTtcblxuICAgIGNvbnN0IG1vZCA9ICh4OiBudW1iZXIsIG46IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSB4ICUgbjtcbiAgICAgICAgcmV0dXJuICByZXMgPCAwID8gKHJlcyArIG4pIDogcmVzO1xuICAgIH07XG5cbiAgICBsZXQgcm93Q291bnQgPSAwO1xuICAgIGZvciAobGV0IGN1ciA9IGZzdC5hZGREYXlzKC1tb2QoZnN0LmRheU9mV2VlayAtIDEsIDcpKTsgLTEgPT09IGN1ci5jb21wYXJlVG8obHN0KSB8fCAxICE9PSBjdXIuZGF5T2ZXZWVrIHx8IHJvd0NvdW50IDwgNjsgY3VyID0gY3VyLmFkZERheXMoMSkpIHtcbiAgICAgIGlmICgxID09PSBjdXIuZGF5T2ZXZWVrKSB7XG4gICAgICAgIHJvd0NvdW50ID0gcm93Q291bnQgKyAxO1xuICAgICAgfVxuICAgICAgY2VsbHMucHVzaCh7XG4gICAgICAgIGRhdGU6IGN1cixcbiAgICAgICAgYWN0aXZlOiBjdXIubW9udGggPT09IHRoaXMuc2hvd24ubW9udGgsXG4gICAgICAgIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGlvbihjdXIpLFxuICAgICAgICB0b2RheTogY3VyLmVxdWFsc1RvKHRvZGF5KVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuY2VsbHMgPSBjZWxscztcbiAgfVxuXG4gIEBvYnNlcnZlKCdjdXJyZW50WWVhciwgeWVhcnMnKVxuICBjdXJyZW50WWVhckNoYW5nZWQoeWVhcjogbnVtYmVyfHVuZGVmaW5lZCkge1xuICAgIGlmICgheWVhciB8fCB0aGlzLl9fc3VwcHJlc3NTZWxlY3RvcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9ucyA9IEFycmF5LmZyb20odGhpcy55ZWFyU2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJykpO1xuICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbnMuZmluZChvcHRpb24gPT4gcGFyc2VJbnQob3B0aW9uLnZhbHVlLCAxMCkgPT09IHllYXIpO1xuICAgIGlmIChvcHRpb24pIHtcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgQG9ic2VydmUoJ2N1cnJlbnRNb250aCcsICdtb250aHMnKVxuICBjdXJyZW50TW9udGhDaGFuZ2VkKG1vbnRoOiBudW1iZXJ8dW5kZWZpbmVkKSB7XG4gICAgaWYgKCFtb250aCB8fCB0aGlzLl9fc3VwcHJlc3NTZWxlY3RvcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9ucyA9IEFycmF5LmZyb20odGhpcy5tb250aFNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpKTtcbiAgICBjb25zdCBvcHRpb24gPSBvcHRpb25zLmZpbmQob3B0aW9uID0+IHBhcnNlSW50KG9wdGlvbi52YWx1ZSwgMTApID09PSBtb250aCk7XG4gICAgaWYgKG9wdGlvbikge1xuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBAb2JzZXJ2ZSgneWVhcnNGb2N1c2VkJywgJ21vbnRoc0ZvY3VzZWQnKVxuICBvYnNlcnZlRm9jdXNlZCh5ZWFyc0ZvY3VzZWQ6IGJvb2xlYW4sIG1vbnRoc0ZvY3VzZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzZWQgPSB5ZWFyc0ZvY3VzZWQgfHwgbW9udGhzRm9jdXNlZDtcbiAgfVxuXG4gIG9uWWVhckNoYW5nZSgpIHtcbiAgICB0aGlzLl9fc3VwcHJlc3NTZWxlY3RvcnMgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnNldCgnc2hvd24ueWVhcicsIHBhcnNlSW50KHRoaXMueWVhclNlbGVjdG9yLnZhbHVlLCAxMCkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9fc3VwcHJlc3NTZWxlY3RvcnMgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvblllYXJzQmx1cigpIHsgdGhpcy55ZWFyc0ZvY3VzZWQgPSBmYWxzZTsgfVxuXG4gIG9uWWVhcnNGb2N1cygpIHsgdGhpcy55ZWFyc0ZvY3VzZWQgPSB0cnVlOyB9XG5cbiAgb25Nb250aENoYW5nZSgpIHtcbiAgICB0aGlzLl9fc3VwcHJlc3NTZWxlY3RvcnMgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnNldCgnc2hvd24ubW9udGgnLCBwYXJzZUludCh0aGlzLm1vbnRoU2VsZWN0b3IudmFsdWUsIDEwKSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX19zdXBwcmVzc1NlbGVjdG9ycyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG9uTW9udGhzQmx1cigpIHsgdGhpcy5tb250aHNGb2N1c2VkID0gZmFsc2U7IH1cblxuICBvbk1vbnRoc0ZvY3VzKCkgeyB0aGlzLm1vbnRoc0ZvY3VzZWQgPSB0cnVlOyB9XG5cbiAgb25QcmV2Q2xpY2soZTogTW91c2VFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICgxID09PSB0aGlzLnNob3duLm1vbnRoKSB7XG4gICAgICB0aGlzLnNob3duID0geyB5ZWFyOiB0aGlzLnNob3duLnllYXIgLSAxLCBtb250aDogMTIgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXQoJ3Nob3duLm1vbnRoJywgdGhpcy5zaG93bi5tb250aCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIG9uTmV4dENsaWNrIChlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKDEyID09PSB0aGlzLnNob3duLm1vbnRoKSB7XG4gICAgICB0aGlzLnNob3duID0geyB5ZWFyOiB0aGlzLnNob3duLnllYXIgKyAxLCBtb250aDogMSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldCgnc2hvd24ubW9udGgnLCB0aGlzLnNob3duLm1vbnRoICsgMSk7XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RDbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIG9uQ2VsbENsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBsZXQgdGFyZ2V0OiBFbGVtZW50fG51bGw7XG4gICAgaWYgKCEoZS50YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2FsZW5kYXItLWRheScpO1xuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRhdGUgPSBkYXRlRnJvbVN0cmluZyh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWRhdGUnKSk7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQ8RGF0ZVRpbWU+KENhbGFuZGFyLmNob29zZUV2ZW50LCB7XG4gICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgZGV0YWlsOiBkYXRlXG4gICAgfSkpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==