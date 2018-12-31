var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Calandar_1;
import { customElement, observe, property, query } from "@polymer/decorators/lib/decorators.js";
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { DateTime } from "dopees-core/lib/datetime.js";
import { mkTemplate } from "./templates.js"; // tslint:disable-next-line:ordered-imports

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
/**
 * Implements calendar chooser with optionally selected days.
 */


let Calandar = Calandar_1 = class Calandar extends PolymerElement {
  constructor() {
    super();
    /**
     * Gets or sets selectable years. Defaults to 1980..2030.
     */

    this.years = Array.apply(null, {
      length: 50
    }).map((_, i) => 1980 + i);
    /**
     * Gets or sets month strings.
     */

    this.months = months;
    /**
     * Gets ot sets function that determines whether a single day is selected. Usually srt by the wrapping field to
     * visually reflect its state.
     */

    this.selection = () => false;
    /**
     * Is set to _true_ if calendar has focus.
     */


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
  /**
   * Used to check value strict equality in the polymer bindings.
   */


  __eq(a, b) {
    return a === b;
  }
  /**
   * Reevaluates the calendar triggering rerendering.
   */


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
  /**
   * Updates the year selector control to the actually selected value.
   *
   * @param year Selected value.
   */


  currentYearChanged(year) {
    if (!year || this.__suppressSelectors) {
      return;
    }

    const options = Array.from(this.yearSelector.querySelectorAll('option'));
    const option = options.find(opt => parseInt(opt.value, 10) === year);

    if (option) {
      option.selected = true;
    }
  }
  /**
   * Updates the month selector control to the actually selected value.
   *
   * @param year Selected value.
   */


  currentMonthChanged(month) {
    if (!month || this.__suppressSelectors) {
      return;
    }

    const options = Array.from(this.monthSelector.querySelectorAll('option'));
    const option = options.find(opt => parseInt(opt.value, 10) === month);

    if (option) {
      option.selected = true;
    }
  }
  /**
   * Updates value of the _focused_ field with respect to the focos state of the selectors.
   *
   * @param yearsFocused Whether year selector is focused.
   * @param monthsFocused Whether month selector is focused.
   */


  observeFocused(yearsFocused, monthsFocused) {
    this.focused = yearsFocused || monthsFocused;
  }
  /**
   * Handles year selection change.
   */


  onYearChange() {
    this.__suppressSelectors = true;

    try {
      this.set('shown.year', parseInt(this.yearSelector.value, 10));
    } finally {
      this.__suppressSelectors = false;
    }
  }
  /**
   * Handles year blur event.
   */


  onYearsBlur() {
    this.yearsFocused = false;
  }
  /**
   * Handles year focus event.
   */


  onYearsFocus() {
    this.yearsFocused = true;
  }
  /**
   * Handles month selection change.
   */


  onMonthChange() {
    this.__suppressSelectors = true;

    try {
      this.set('shown.month', parseInt(this.monthSelector.value, 10));
    } finally {
      this.__suppressSelectors = false;
    }
  }
  /**
   * Handles months blur event.
   */


  onMonthsBlur() {
    this.monthsFocused = false;
  }
  /**
   * Handles months focus event.
   */


  onMonthsFocus() {
    this.monthsFocused = true;
  }
  /**
   * Handles previous month button click.
   */


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
  /**
   * Handles next month button click.
   */


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
  /**
   * Only stops event propagation.
   *
   * @param e Related event.
   */


  onSelectClick(e) {
    e.stopPropagation();
  }
  /**
   * Handles cell button click. Fires choose event usually consumed by the wrapping field control.
   */


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
/**
 * Name of the event fired when user clicks some day.
 */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQXNDLENBQXRDLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUUsRUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELENBQ1QsQ0FBQSxFLGtCQUFBLEUsZUFBQSxFLEtBQXVDLENBQXZDLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsS0FBSyxDQUFDLGlCQUFELENBQ04sQ0FBQSxFLGtCQUFBLEUsY0FBQSxFLEtBQXlDLENBQXpDLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsS0FBSyxDQUFDLGtCQUFELENBQ04sQ0FBQSxFLGtCQUFBLEUsZUFBQSxFLEtBQTBDLENBQTFDLENBQUE7O0FBaUJBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxPQUFELEVBQVUsV0FBVixFQUF1QixTQUF2QixDQUNSLENBQUEsRSxrQkFBQSxFLGNBQUEsRUFnQ0MsSUFoQ0QsQ0FBQTs7QUF3Q0EsVUFBQSxDQUFBLENBREMsT0FBTyxDQUFDLG9CQUFELENBQ1IsQ0FBQSxFLGtCQUFBLEUsb0JBQUEsRUFTQyxJQVRELENBQUE7O0FBaUJBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxjQUFELEVBQWlCLFFBQWpCLENBQ1IsQ0FBQSxFLGtCQUFBLEUscUJBQUEsRUFTQyxJQVRELENBQUE7O0FBa0JBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxjQUFELEVBQWlCLGVBQWpCLENBQ1IsQ0FBQSxFLGtCQUFBLEUsZ0JBQUEsRUFFQyxJQUZELENBQUE7O0FBN0pXLFFBQVEsR0FBQSxVQUFBLEdBQUEsVUFBQSxDQUFBLENBRHBCLGFBQWEsQ0FBQyxlQUFELENBQ08sQ0FBQSxFQUFSLFFBQVEsQ0FBUjtTQUFBLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBvYnNlcnZlLCBwcm9wZXJ0eSwgcXVlcnkgfSBmcm9tICdAcG9seW1lci9kZWNvcmF0b3JzL2xpYi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQnO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdkb3BlZXMtY29yZS9saWIvZGF0ZXRpbWUnO1xuaW1wb3J0IHsgbWtUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGVzJztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpvcmRlcmVkLWltcG9ydHNcbmltcG9ydCB2aWV3IGZyb20gJy4vY2FsZW5kYXIvY2FsZW5kYXIucHVnJztcblxuZXhwb3J0IGNvbnN0IG1vbnRocyA9IFtcbiAgeyB2YWx1ZTogMSwgdGV4dDogJ0phbnXDoXInfSxcbiAgeyB2YWx1ZTogMiwgdGV4dDogJ0ZlYnJ1w6FyJ30sXG4gIHsgdmFsdWU6IDMsIHRleHQ6ICdNw6FyY2l1cyd9LFxuICB7IHZhbHVlOiA0LCB0ZXh0OiAnw4FwcmlsaXMnfSxcbiAgeyB2YWx1ZTogNSwgdGV4dDogJ03DoWp1cyd9LFxuICB7IHZhbHVlOiA2LCB0ZXh0OiAnSsO6bml1cyd9LFxuICB7IHZhbHVlOiA3LCB0ZXh0OiAnSsO6bGl1cyd9LFxuICB7IHZhbHVlOiA4LCB0ZXh0OiAnQXVndXN6dHVzJ30sXG4gIHsgdmFsdWU6IDksIHRleHQ6ICdTemVwdGVtYmVyJ30sXG4gIHsgdmFsdWU6IDEwLCB0ZXh0OiAnT2t0w7NiZXInfSxcbiAgeyB2YWx1ZTogMTEsIHRleHQ6ICdOb3ZlbWJlcid9LFxuICB7IHZhbHVlOiAxMiwgdGV4dDogJ0RlY2VtYmVyJ31cbl07XG5cbmludGVyZmFjZSBEYXlDZWxsIHtcbiAgZGF0ZTogRGF0ZVRpbWU7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gIHRvZGF5OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgWWVhck1vbnRoIHtcbiAgeWVhcjogbnVtYmVyO1xuICBtb250aDogbnVtYmVyO1xufVxuXG5jb25zdCByZWdleCA9IC9eKFswLTldezR9KS0oWzAtOV17MSwyfSktKFswLTldezEsMn0pJC87XG5cbmNvbnN0IGRhdGVGcm9tU3RyaW5nID0gKGlucHV0OiBzdHJpbmd8bnVsbHx1bmRlZmluZWQpOiBEYXRlVGltZXxudWxsID0+IHtcbiAgaWYgKCFpbnB1dCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IG0gPSByZWdleC5leGVjKGlucHV0KTtcbiAgaWYgKG0pIHtcbiAgICByZXR1cm4gbmV3IERhdGVUaW1lKHsgeWVhcjogcGFyc2VJbnQobVsxXSwgMTApLCBtb250aDogcGFyc2VJbnQobVsyXSwgMTApLCBkYXk6IHBhcnNlSW50KG1bM10sIDEwKSB9KTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogSW1wbGVtZW50cyBjYWxlbmRhciBjaG9vc2VyIHdpdGggb3B0aW9uYWxseSBzZWxlY3RlZCBkYXlzLlxuICovXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1jYWxlbmRhcicpXG5leHBvcnQgY2xhc3MgQ2FsYW5kYXIgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiBta1RlbXBsYXRlKHZpZXcpOyB9XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBldmVudCBmaXJlZCB3aGVuIHVzZXIgY2xpY2tzIHNvbWUgZGF5LlxuICAgKi9cbiAgc3RhdGljIHJlYWRvbmx5IGNob29zZUV2ZW50ID0gJ2Nob29zZSc7XG5cbiAgcHJpdmF0ZSBfX3N1cHByZXNzU2VsZWN0b3JzOiBhbnk7XG5cbiAgLyoqXG4gICAqIEdldHMgb3Igc2V0cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHllYXIuXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbiAgY3VycmVudFllYXI/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEdldHMgb3Igc2V0cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG1vbnRoLlxuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIGN1cnJlbnRNb250aD86IG51bWJlcjtcblxuICAvKipcbiAgICogR2V0cyBvciBzZXRzIHRoZSBjdXJyZW50bHkgc2V0IHllYXIgYW5kIG1vbnRoIGFzIGEgc2luZ2xlIG9iamVjdC5cbiAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCB9KVxuICBzaG93bjogWWVhck1vbnRoO1xuXG4gIC8qKlxuICAgKiBHZXRzIG9yIHNldHMgc2VsZWN0YWJsZSB5ZWFycy4gRGVmYXVsdHMgdG8gMTk4MC4uMjAzMC5cbiAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gIHllYXJzOiBudW1iZXJbXSA9IEFycmF5LmFwcGx5KG51bGwsIDxhbnk+IHsgbGVuZ3RoOiA1MCB9KS5tYXAoKF8sIGkpID0+IDE5ODAgKyBpKTtcblxuICAvKipcbiAgICogR2V0cyBvciBzZXRzIG1vbnRoIHN0cmluZ3MuXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICBtb250aHM6IEFycmF5PHsgdmFsdWU6IG51bWJlciwgdGV4dDogc3RyaW5nIH0+ID0gbW9udGhzO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gIHByaXZhdGUgY2VsbHMhOiBEYXlDZWxsW107XG5cbiAgLyoqXG4gICAqIEdldHMgb3Qgc2V0cyBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgd2hldGhlciBhIHNpbmdsZSBkYXkgaXMgc2VsZWN0ZWQuIFVzdWFsbHkgc3J0IGJ5IHRoZSB3cmFwcGluZyBmaWVsZCB0b1xuICAgKiB2aXN1YWxseSByZWZsZWN0IGl0cyBzdGF0ZS5cbiAgICovXG4gIEBwcm9wZXJ0eSgpXG4gIHNlbGVjdGlvbjogKGRhdGU6IERhdGVUaW1lKSA9PiBib29sZWFuID0gKCkgPT4gZmFsc2VcblxuICAvKipcbiAgICogSXMgc2V0IHRvIF90cnVlXyBpZiBjYWxlbmRhciBoYXMgZm9jdXMuXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBub3RpZnk6IHRydWUsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSB9KVxuICBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBwcml2YXRlIHllYXJzRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgcHJpdmF0ZSBtb250aHNGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQHF1ZXJ5KCcuY2FsZW5kYXItLXllYXInKVxuICBwcml2YXRlIHllYXJTZWxlY3RvciE6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gIEBxdWVyeSgnLmNhbGVuZGFyLS1tb250aCcpXG4gIHByaXZhdGUgbW9udGhTZWxlY3RvciE6IEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGVUaW1lKCk7XG4gICAgdGhpcy5zaG93biA9IHsgeWVhcjogbm93LnllYXIsIG1vbnRoOiBub3cubW9udGggfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGNoZWNrIHZhbHVlIHN0cmljdCBlcXVhbGl0eSBpbiB0aGUgcG9seW1lciBiaW5kaW5ncy5cbiAgICovXG4gIHByb3RlY3RlZCBfX2VxKGE6IGFueSwgYjogYW55KSB7IHJldHVybiBhID09PSBiOyB9XG5cbiAgLyoqXG4gICAqIFJlZXZhbHVhdGVzIHRoZSBjYWxlbmRhciB0cmlnZ2VyaW5nIHJlcmVuZGVyaW5nLlxuICAgKi9cbiAgQG9ic2VydmUoJ3Nob3duJywgJ3NlbGVjdGlvbicsICdzaG93bi4qJylcbiAgY29tcHV0ZUNlbGxzKCkge1xuICAgIHRoaXMuY3VycmVudFllYXIgPSB0aGlzLnNob3duLnllYXI7XG4gICAgdGhpcy5jdXJyZW50TW9udGggPSB0aGlzLnNob3duLm1vbnRoO1xuICAgIGNvbnN0IGZzdCA9IG5ldyBEYXRlVGltZSh7IHllYXI6IHRoaXMuc2hvd24ueWVhciwgbW9udGg6IHRoaXMuc2hvd24ubW9udGggfSk7XG4gICAgY29uc3QgbHN0ID0gZnN0LmFkZE1vbnRocygxKS5hZGREYXlzKC0xKTtcbiAgICBjb25zdCBjZWxsczogRGF5Q2VsbFtdID0gW107XG5cbiAgICBjb25zdCB0b2RheSA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZHQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHsgeWVhcjogZHQuZ2V0RnVsbFllYXIoKSwgbW9udGg6IGR0LmdldE1vbnRoKCkgKyAxLCBkYXk6IGR0LmdldERhdGUoKSB9KTtcbiAgICB9KCkpO1xuXG4gICAgY29uc3QgbW9kID0gKHg6IG51bWJlciwgbjogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHggJSBuO1xuICAgICAgICByZXR1cm4gIHJlcyA8IDAgPyAocmVzICsgbikgOiByZXM7XG4gICAgfTtcblxuICAgIGxldCByb3dDb3VudCA9IDA7XG4gICAgZm9yIChsZXQgY3VyID0gZnN0LmFkZERheXMoLW1vZChmc3QuZGF5T2ZXZWVrIC0gMSwgNykpO1xuICAgICAgICAtMSA9PT0gY3VyLmNvbXBhcmVUbyhsc3QpIHx8IDEgIT09IGN1ci5kYXlPZldlZWsgfHwgcm93Q291bnQgPCA2O1xuICAgICAgICBjdXIgPSBjdXIuYWRkRGF5cygxKSkge1xuICAgICAgaWYgKDEgPT09IGN1ci5kYXlPZldlZWspIHtcbiAgICAgICAgcm93Q291bnQgPSByb3dDb3VudCArIDE7XG4gICAgICB9XG4gICAgICBjZWxscy5wdXNoKHtcbiAgICAgICAgZGF0ZTogY3VyLFxuICAgICAgICBhY3RpdmU6IGN1ci5tb250aCA9PT0gdGhpcy5zaG93bi5tb250aCxcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0aW9uKGN1ciksXG4gICAgICAgIHRvZGF5OiBjdXIuZXF1YWxzVG8odG9kYXkpXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5jZWxscyA9IGNlbGxzO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHllYXIgc2VsZWN0b3IgY29udHJvbCB0byB0aGUgYWN0dWFsbHkgc2VsZWN0ZWQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB5ZWFyIFNlbGVjdGVkIHZhbHVlLlxuICAgKi9cbiAgQG9ic2VydmUoJ2N1cnJlbnRZZWFyLCB5ZWFycycpXG4gIGN1cnJlbnRZZWFyQ2hhbmdlZCh5ZWFyOiBudW1iZXJ8dW5kZWZpbmVkKSB7XG4gICAgaWYgKCF5ZWFyIHx8IHRoaXMuX19zdXBwcmVzc1NlbGVjdG9ycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvcHRpb25zID0gQXJyYXkuZnJvbSh0aGlzLnllYXJTZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSk7XG4gICAgY29uc3Qgb3B0aW9uID0gb3B0aW9ucy5maW5kKChvcHQpID0+IHBhcnNlSW50KG9wdC52YWx1ZSwgMTApID09PSB5ZWFyKTtcbiAgICBpZiAob3B0aW9uKSB7XG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBtb250aCBzZWxlY3RvciBjb250cm9sIHRvIHRoZSBhY3R1YWxseSBzZWxlY3RlZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHllYXIgU2VsZWN0ZWQgdmFsdWUuXG4gICAqL1xuICBAb2JzZXJ2ZSgnY3VycmVudE1vbnRoJywgJ21vbnRocycpXG4gIGN1cnJlbnRNb250aENoYW5nZWQobW9udGg6IG51bWJlcnx1bmRlZmluZWQpIHtcbiAgICBpZiAoIW1vbnRoIHx8IHRoaXMuX19zdXBwcmVzc1NlbGVjdG9ycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvcHRpb25zID0gQXJyYXkuZnJvbSh0aGlzLm1vbnRoU2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJykpO1xuICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbnMuZmluZCgob3B0KSA9PiBwYXJzZUludChvcHQudmFsdWUsIDEwKSA9PT0gbW9udGgpO1xuICAgIGlmIChvcHRpb24pIHtcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdmFsdWUgb2YgdGhlIF9mb2N1c2VkXyBmaWVsZCB3aXRoIHJlc3BlY3QgdG8gdGhlIGZvY29zIHN0YXRlIG9mIHRoZSBzZWxlY3RvcnMuXG4gICAqXG4gICAqIEBwYXJhbSB5ZWFyc0ZvY3VzZWQgV2hldGhlciB5ZWFyIHNlbGVjdG9yIGlzIGZvY3VzZWQuXG4gICAqIEBwYXJhbSBtb250aHNGb2N1c2VkIFdoZXRoZXIgbW9udGggc2VsZWN0b3IgaXMgZm9jdXNlZC5cbiAgICovXG4gIEBvYnNlcnZlKCd5ZWFyc0ZvY3VzZWQnLCAnbW9udGhzRm9jdXNlZCcpXG4gIG9ic2VydmVGb2N1c2VkKHllYXJzRm9jdXNlZDogYm9vbGVhbiwgbW9udGhzRm9jdXNlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZm9jdXNlZCA9IHllYXJzRm9jdXNlZCB8fCBtb250aHNGb2N1c2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgeWVhciBzZWxlY3Rpb24gY2hhbmdlLlxuICAgKi9cbiAgcHJvdGVjdGVkIG9uWWVhckNoYW5nZSgpIHtcbiAgICB0aGlzLl9fc3VwcHJlc3NTZWxlY3RvcnMgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnNldCgnc2hvd24ueWVhcicsIHBhcnNlSW50KHRoaXMueWVhclNlbGVjdG9yLnZhbHVlLCAxMCkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9fc3VwcHJlc3NTZWxlY3RvcnMgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB5ZWFyIGJsdXIgZXZlbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgb25ZZWFyc0JsdXIoKSB7IHRoaXMueWVhcnNGb2N1c2VkID0gZmFsc2U7IH1cblxuICAvKipcbiAgICogSGFuZGxlcyB5ZWFyIGZvY3VzIGV2ZW50LlxuICAgKi9cbiAgcHJvdGVjdGVkIG9uWWVhcnNGb2N1cygpIHsgdGhpcy55ZWFyc0ZvY3VzZWQgPSB0cnVlOyB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgbW9udGggc2VsZWN0aW9uIGNoYW5nZS5cbiAgICovXG4gIHByb3RlY3RlZCBvbk1vbnRoQ2hhbmdlKCkge1xuICAgIHRoaXMuX19zdXBwcmVzc1NlbGVjdG9ycyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc2V0KCdzaG93bi5tb250aCcsIHBhcnNlSW50KHRoaXMubW9udGhTZWxlY3Rvci52YWx1ZSwgMTApKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fX3N1cHByZXNzU2VsZWN0b3JzID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgbW9udGhzIGJsdXIgZXZlbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgb25Nb250aHNCbHVyKCkgeyB0aGlzLm1vbnRoc0ZvY3VzZWQgPSBmYWxzZTsgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIG1vbnRocyBmb2N1cyBldmVudC5cbiAgICovXG4gIHByb3RlY3RlZCBvbk1vbnRoc0ZvY3VzKCkgeyB0aGlzLm1vbnRoc0ZvY3VzZWQgPSB0cnVlOyB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgcHJldmlvdXMgbW9udGggYnV0dG9uIGNsaWNrLlxuICAgKi9cbiAgcHJvdGVjdGVkIG9uUHJldkNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoMSA9PT0gdGhpcy5zaG93bi5tb250aCkge1xuICAgICAgdGhpcy5zaG93biA9IHsgeWVhcjogdGhpcy5zaG93bi55ZWFyIC0gMSwgbW9udGg6IDEyIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0KCdzaG93bi5tb250aCcsIHRoaXMuc2hvd24ubW9udGggLSAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBuZXh0IG1vbnRoIGJ1dHRvbiBjbGljay5cbiAgICovXG4gIHByb3RlY3RlZCBvbk5leHRDbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKDEyID09PSB0aGlzLnNob3duLm1vbnRoKSB7XG4gICAgICB0aGlzLnNob3duID0geyB5ZWFyOiB0aGlzLnNob3duLnllYXIgKyAxLCBtb250aDogMSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldCgnc2hvd24ubW9udGgnLCB0aGlzLnNob3duLm1vbnRoICsgMSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9ubHkgc3RvcHMgZXZlbnQgcHJvcGFnYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBlIFJlbGF0ZWQgZXZlbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgb25TZWxlY3RDbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGNlbGwgYnV0dG9uIGNsaWNrLiBGaXJlcyBjaG9vc2UgZXZlbnQgdXN1YWxseSBjb25zdW1lZCBieSB0aGUgd3JhcHBpbmcgZmllbGQgY29udHJvbC5cbiAgICovXG4gIHByb3RlY3RlZCBvbkNlbGxDbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgbGV0IHRhcmdldDogRWxlbWVudHxudWxsO1xuICAgIGlmICghKGUudGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGFyZ2V0ID0gZS50YXJnZXQuY2xvc2VzdCgnLmNhbGVuZGFyLS1kYXknKTtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkYXRlID0gZGF0ZUZyb21TdHJpbmcodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1kYXRlJykpO1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50PERhdGVUaW1lPihDYWxhbmRhci5jaG9vc2VFdmVudCwge1xuICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgIGRldGFpbDogZGF0ZVxuICAgIH0pKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==