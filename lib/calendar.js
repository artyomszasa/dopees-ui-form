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
import { mkTemplate } from "./templates.js";
const view = "<style>:host{display:block}.calendar{display:flex;flex-direction:column;height:100%;background:var(--background-color, #fff)}.calendar--head{display:flex;height:2rem}.calendar--left,.calendar--right{flex:0 0 1.5rem;display:flex;align-items:center;justify-content:center}.calendar--left dope-material-icon,.calendar--right dope-material-icon{width:1rem;height:1rem}.calendar--left svg,.calendar--right svg{width:1rem;height:1rem}.calendar--year{flex:1}.calendar--month{flex:2}.calendar--body{flex:1;display:grid;grid-template-columns:repeat(7, 1fr);height:calc(100% - 2.875rem)}.calendar--day{display:flex;align-items:center;justify-content:center;color:rgba(0,0,0,0.87);text-align:center;flex:1 1 14.285%;box-sizing:border-box;border-top:1px solid rgba(0,0,0,0.1);border-right:1px solid rgba(0,0,0,0.1);transition:background .3s}.calendar--day:hover{background:var(--color-primary-opacity-04, rgba(0,0,0,0.04))}.calendar--day:nth-child(7n+7){border-right:none}.calendar--day:not([active]){color:rgba(0,0,0,0.37)}.calendar--day[active]{cursor:pointer}.calendar--day[selected]{background:var(--color-primary-opacity-21, rgba(0,0,0,0.21))}.calendar--day[today]{font-weight:bold}\n\n/*# sourceMappingURL=calendar.css.map */</style><div class=\"calendar\"><div class=\"calendar--head\"><span class=\"calendar--left\" href=\"#\" title=\"El\u0151z\u0151 h\xF3nap\" on-click=\"onPrevClick\"><dope-material-icon type=\"arrow back\"></dope-material-icon></span><select class=\"calendar--year\" id=\"year\" on-change=\"onYearChange\" on-click=\"onSelectClick\" on-focus=\"onYearsFocus\" on-blur=\"onYearsBlur\"><template is=\"dom-repeat\" items=\"[[years]]\"><option value$=\"[[item]]\" selected=\"[[__eq(item, currentYear)]]\">[[item]]</option></template></select><select class=\"calendar--month\" id=\"month\" on-change=\"onMonthChange\" on-click=\"onSelectClick\" on-focus=\"onMonthsFocus\" on-blur=\"onMonthsBlur\"><template is=\"dom-repeat\" items=\"[[months]]\"><option value$=\"[[item.value]]\" selected=\"[[__eq(item.value, currentMonth)]]\">[[item.text]]</option></template></select><span class=\"calendar--right\" href=\"#\" title=\"K\xF6vetkez\u0151 h\xF3nap\" on-click=\"onNextClick\"><dope-material-icon type=\"arrow forward\"></dope-material-icon></span></div><div class=\"calendar--body\"><div class=\"calendar--day\"><span>H</span></div><div class=\"calendar--day\"><span>K</span></div><div class=\"calendar--day\"><span>Sz</span></div><div class=\"calendar--day\"><span>Cs</span></div><div class=\"calendar--day\"><span>P</span></div><div class=\"calendar--day\"><span>Sz</span></div><div class=\"calendar--day\"><span>V</span></div><template is=\"dom-repeat\" items=\"[[cells]]\"><div class=\"calendar--day\" active$=\"[[item.active]]\" selected$=\"[[item.selected]]\" today$=\"[[item.today]]\" data-date$=\"[[item.date.year]]-[[item.date.month]]-[[item.date.day]]\" on-click=\"onCellClick\"><span>[[item.date.day]]</span></div></template></div></div>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEUsS0FBaUMsQ0FBakMsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxLQUFLLENBQUMsa0JBQUQsQ0FDTixDQUFBLEUsa0JBQUEsRSxlQUFBLEUsS0FBa0MsQ0FBbEMsQ0FBQTs7QUFXQSxVQUFBLENBQUEsQ0FEQyxPQUFPLENBQUMsT0FBRCxFQUFVLFdBQVYsRUFBdUIsU0FBdkIsQ0FDUixDQUFBLEUsa0JBQUEsRSxjQUFBLEVBOEJDLElBOUJELENBQUE7O0FBaUNBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxvQkFBRCxDQUNSLENBQUEsRSxrQkFBQSxFLG9CQUFBLEVBU0MsSUFURCxDQUFBOztBQVlBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxjQUFELEVBQWlCLFFBQWpCLENBQ1IsQ0FBQSxFLGtCQUFBLEUscUJBQUEsRUFTQyxJQVRELENBQUE7O0FBWUEsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLGNBQUQsRUFBaUIsZUFBakIsQ0FDUixDQUFBLEUsa0JBQUEsRSxnQkFBQSxFQUVDLElBRkQsQ0FBQTs7QUE1R1csUUFBUSxHQUFBLFVBQUEsR0FBQSxVQUFBLENBQUEsQ0FEcEIsYUFBYSxDQUFDLGVBQUQsQ0FDTyxDQUFBLEVBQVIsUUFBUSxDQUFSO1NBQUEsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQnO1xuaW1wb3J0IHsgcHJvcGVydHksIGN1c3RvbUVsZW1lbnQsIG9ic2VydmUsIHF1ZXJ5IH0gZnJvbSAnQHBvbHltZXIvZGVjb3JhdG9ycy9saWIvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2RvcGVlcy1jb3JlL2xpYi9kYXRldGltZSc7XG5pbXBvcnQgeyBta1RlbXBsYXRlIH0gZnJvbSBcIi4vdGVtcGxhdGVzXCI7XG5pbXBvcnQgdmlldyBmcm9tICcuL2NhbGVuZGFyL2NhbGVuZGFyLnB1Zyc7XG5cbmV4cG9ydCBjb25zdCBtb250aHMgPSBbXG4gIHsgdmFsdWU6IDEsIHRleHQ6ICdKYW51w6FyJ30sXG4gIHsgdmFsdWU6IDIsIHRleHQ6ICdGZWJydcOhcid9LFxuICB7IHZhbHVlOiAzLCB0ZXh0OiAnTcOhcmNpdXMnfSxcbiAgeyB2YWx1ZTogNCwgdGV4dDogJ8OBcHJpbGlzJ30sXG4gIHsgdmFsdWU6IDUsIHRleHQ6ICdNw6FqdXMnfSxcbiAgeyB2YWx1ZTogNiwgdGV4dDogJ0rDum5pdXMnfSxcbiAgeyB2YWx1ZTogNywgdGV4dDogJ0rDumxpdXMnfSxcbiAgeyB2YWx1ZTogOCwgdGV4dDogJ0F1Z3VzenR1cyd9LFxuICB7IHZhbHVlOiA5LCB0ZXh0OiAnU3plcHRlbWJlcid9LFxuICB7IHZhbHVlOiAxMCwgdGV4dDogJ09rdMOzYmVyJ30sXG4gIHsgdmFsdWU6IDExLCB0ZXh0OiAnTm92ZW1iZXInfSxcbiAgeyB2YWx1ZTogMTIsIHRleHQ6ICdEZWNlbWJlcid9XG5dXG5cbmludGVyZmFjZSBEYXlDZWxsIHtcbiAgZGF0ZTogRGF0ZVRpbWU7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gIHRvZGF5OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgWWVhck1vbnRoIHtcbiAgeWVhcjogbnVtYmVyO1xuICBtb250aDogbnVtYmVyO1xufVxuXG5jb25zdCByZWdleCA9IC9eKFswLTldezR9KS0oWzAtOV17MSwyfSktKFswLTldezEsMn0pJC9cblxuY29uc3QgZGF0ZUZyb21TdHJpbmcgPSAoaW5wdXQ6IHN0cmluZ3xudWxsfHVuZGVmaW5lZCk6IERhdGVUaW1lfG51bGwgPT4ge1xuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgbSA9IHJlZ2V4LmV4ZWMoaW5wdXQpO1xuICBpZiAobSkge1xuICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoeyB5ZWFyOiBwYXJzZUludChtWzFdLCAxMCksIG1vbnRoOiBwYXJzZUludChtWzJdLCAxMCksIGRheTogcGFyc2VJbnQobVszXSwgMTApIH0pO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1jYWxlbmRhcicpXG5leHBvcnQgY2xhc3MgQ2FsYW5kYXIgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyByZWFkb25seSBjaG9vc2VFdmVudCA9ICdjaG9vc2UnO1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gbWtUZW1wbGF0ZSh2aWV3KTsgfVxuXG4gIF9fc3VwcHJlc3NTZWxlY3RvcnM6IGFueTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbiAgY3VycmVudFllYXI/OiBudW1iZXI7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIGN1cnJlbnRNb250aD86IG51bWJlcjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QgfSlcbiAgc2hvd246IFllYXJNb250aDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICB5ZWFyczogbnVtYmVyW10gPSBBcnJheS5hcHBseShudWxsLCA8YW55PnsgbGVuZ3RoOiA1MCB9KS5tYXAoKF8sIGkpID0+IDE5ODAgKyBpKTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICBtb250aHM6IHsgdmFsdWU6IG51bWJlciwgdGV4dDogc3RyaW5nIH1bXSA9IG1vbnRocztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICBjZWxscyE6IERheUNlbGxbXTtcblxuICBAcHJvcGVydHkoKVxuICBzZWxlY3Rpb246IChkYXRlOiBEYXRlVGltZSkgPT4gYm9vbGVhbiA9ICgpID0+IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIG5vdGlmeTogdHJ1ZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlIH0pXG4gIGZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIHllYXJzRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgbW9udGhzRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBxdWVyeSgnLmNhbGVuZGFyLS15ZWFyJylcbiAgeWVhclNlbGVjdG9yITogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgQHF1ZXJ5KCcuY2FsZW5kYXItLW1vbnRoJylcbiAgbW9udGhTZWxlY3RvciE6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGVUaW1lKCk7XG4gICAgdGhpcy5zaG93biA9IHsgeWVhcjogbm93LnllYXIsIG1vbnRoOiBub3cubW9udGggfTtcbiAgfVxuXG4gIF9fZXEoYTogYW55LCBiOiBhbnkpIHsgcmV0dXJuIGEgPT09IGI7IH1cblxuICBAb2JzZXJ2ZSgnc2hvd24nLCAnc2VsZWN0aW9uJywgJ3Nob3duLionKVxuICBjb21wdXRlQ2VsbHMoKSB7XG4gICAgdGhpcy5jdXJyZW50WWVhciA9IHRoaXMuc2hvd24ueWVhcjtcbiAgICB0aGlzLmN1cnJlbnRNb250aCA9IHRoaXMuc2hvd24ubW9udGg7XG4gICAgY29uc3QgZnN0ID0gbmV3IERhdGVUaW1lKHsgeWVhcjogdGhpcy5zaG93bi55ZWFyLCBtb250aDogdGhpcy5zaG93bi5tb250aCB9KTtcbiAgICBjb25zdCBsc3QgPSBmc3QuYWRkTW9udGhzKDEpLmFkZERheXMoLTEpO1xuICAgIGNvbnN0IGNlbGxzOiBEYXlDZWxsW10gPSBbXTtcblxuICAgIGNvbnN0IHRvZGF5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZHQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHsgeWVhcjogZHQuZ2V0RnVsbFllYXIoKSwgbW9udGg6IGR0LmdldE1vbnRoKCkgKyAxLCBkYXk6IGR0LmdldERhdGUoKSB9KTtcbiAgICB9KCkpO1xuXG4gICAgY29uc3QgbW9kID0gKHg6IG51bWJlciwgbjogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHggJSBuO1xuICAgICAgICByZXR1cm4gIHJlcyA8IDAgPyAocmVzICsgbikgOiByZXM7XG4gICAgfTtcblxuICAgIGxldCByb3dDb3VudCA9IDA7XG4gICAgZm9yIChsZXQgY3VyID0gZnN0LmFkZERheXMoLW1vZChmc3QuZGF5T2ZXZWVrIC0gMSwgNykpOyAtMSA9PT0gY3VyLmNvbXBhcmVUbyhsc3QpIHx8IDEgIT09IGN1ci5kYXlPZldlZWsgfHwgcm93Q291bnQgPCA2OyBjdXIgPSBjdXIuYWRkRGF5cygxKSkge1xuICAgICAgaWYgKDEgPT09IGN1ci5kYXlPZldlZWspIHtcbiAgICAgICAgcm93Q291bnQgPSByb3dDb3VudCArIDE7XG4gICAgICB9XG4gICAgICBjZWxscy5wdXNoKHtcbiAgICAgICAgZGF0ZTogY3VyLFxuICAgICAgICBhY3RpdmU6IGN1ci5tb250aCA9PT0gdGhpcy5zaG93bi5tb250aCxcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0aW9uKGN1ciksXG4gICAgICAgIHRvZGF5OiBjdXIuZXF1YWxzVG8odG9kYXkpXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5jZWxscyA9IGNlbGxzO1xuICB9XG5cbiAgQG9ic2VydmUoJ2N1cnJlbnRZZWFyLCB5ZWFycycpXG4gIGN1cnJlbnRZZWFyQ2hhbmdlZCh5ZWFyOiBudW1iZXJ8dW5kZWZpbmVkKSB7XG4gICAgaWYgKCF5ZWFyIHx8IHRoaXMuX19zdXBwcmVzc1NlbGVjdG9ycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvcHRpb25zID0gQXJyYXkuZnJvbSh0aGlzLnllYXJTZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSk7XG4gICAgY29uc3Qgb3B0aW9uID0gb3B0aW9ucy5maW5kKG9wdGlvbiA9PiBwYXJzZUludChvcHRpb24udmFsdWUsIDEwKSA9PT0geWVhcik7XG4gICAgaWYgKG9wdGlvbikge1xuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBAb2JzZXJ2ZSgnY3VycmVudE1vbnRoJywgJ21vbnRocycpXG4gIGN1cnJlbnRNb250aENoYW5nZWQobW9udGg6IG51bWJlcnx1bmRlZmluZWQpIHtcbiAgICBpZiAoIW1vbnRoIHx8IHRoaXMuX19zdXBwcmVzc1NlbGVjdG9ycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvcHRpb25zID0gQXJyYXkuZnJvbSh0aGlzLm1vbnRoU2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJykpO1xuICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbnMuZmluZChvcHRpb24gPT4gcGFyc2VJbnQob3B0aW9uLnZhbHVlLCAxMCkgPT09IG1vbnRoKTtcbiAgICBpZiAob3B0aW9uKSB7XG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIEBvYnNlcnZlKCd5ZWFyc0ZvY3VzZWQnLCAnbW9udGhzRm9jdXNlZCcpXG4gIG9ic2VydmVGb2N1c2VkKHllYXJzRm9jdXNlZDogYm9vbGVhbiwgbW9udGhzRm9jdXNlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZm9jdXNlZCA9IHllYXJzRm9jdXNlZCB8fCBtb250aHNGb2N1c2VkO1xuICB9XG5cbiAgb25ZZWFyQ2hhbmdlKCkge1xuICAgIHRoaXMuX19zdXBwcmVzc1NlbGVjdG9ycyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc2V0KCdzaG93bi55ZWFyJywgcGFyc2VJbnQodGhpcy55ZWFyU2VsZWN0b3IudmFsdWUsIDEwKSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX19zdXBwcmVzc1NlbGVjdG9ycyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG9uWWVhcnNCbHVyKCkgeyB0aGlzLnllYXJzRm9jdXNlZCA9IGZhbHNlOyB9XG5cbiAgb25ZZWFyc0ZvY3VzKCkgeyB0aGlzLnllYXJzRm9jdXNlZCA9IHRydWU7IH1cblxuICBvbk1vbnRoQ2hhbmdlKCkge1xuICAgIHRoaXMuX19zdXBwcmVzc1NlbGVjdG9ycyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc2V0KCdzaG93bi5tb250aCcsIHBhcnNlSW50KHRoaXMubW9udGhTZWxlY3Rvci52YWx1ZSwgMTApKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fX3N1cHByZXNzU2VsZWN0b3JzID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb25Nb250aHNCbHVyKCkgeyB0aGlzLm1vbnRoc0ZvY3VzZWQgPSBmYWxzZTsgfVxuXG4gIG9uTW9udGhzRm9jdXMoKSB7IHRoaXMubW9udGhzRm9jdXNlZCA9IHRydWU7IH1cblxuICBvblByZXZDbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKDEgPT09IHRoaXMuc2hvd24ubW9udGgpIHtcbiAgICAgIHRoaXMuc2hvd24gPSB7IHllYXI6IHRoaXMuc2hvd24ueWVhciAtIDEsIG1vbnRoOiAxMiB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldCgnc2hvd24ubW9udGgnLCB0aGlzLnNob3duLm1vbnRoIC0gMSk7XG4gICAgfVxuICB9XG5cbiAgb25OZXh0Q2xpY2sgKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoMTIgPT09IHRoaXMuc2hvd24ubW9udGgpIHtcbiAgICAgIHRoaXMuc2hvd24gPSB7IHllYXI6IHRoaXMuc2hvd24ueWVhciArIDEsIG1vbnRoOiAxIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0KCdzaG93bi5tb250aCcsIHRoaXMuc2hvd24ubW9udGggKyAxKTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdENsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgb25DZWxsQ2xpY2soZTogTW91c2VFdmVudCkge1xuICAgIGxldCB0YXJnZXQ6IEVsZW1lbnR8bnVsbDtcbiAgICBpZiAoIShlLnRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5jYWxlbmRhci0tZGF5Jyk7XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGF0ZSA9IGRhdGVGcm9tU3RyaW5nKHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGF0ZScpKTtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudDxEYXRlVGltZT4oQ2FsYW5kYXIuY2hvb3NlRXZlbnQsIHtcbiAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICBkZXRhaWw6IGRhdGVcbiAgICB9KSk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9