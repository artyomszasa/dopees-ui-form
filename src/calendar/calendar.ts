import { PolymerElement } from '@polymer/polymer/polymer-element';
import { property, customElement, observe, query } from '@polymer/decorators/lib/decorators';
import { DateTime } from 'dopees-core/lib/datetime';
import { mkTemplate } from "../templates";
import view from './calendar.pug';

export const months = [
  { value: 1, text: 'Január'},
  { value: 2, text: 'Február'},
  { value: 3, text: 'Március'},
  { value: 4, text: 'Április'},
  { value: 5, text: 'Május'},
  { value: 6, text: 'Június'},
  { value: 7, text: 'Július'},
  { value: 8, text: 'Augusztus'},
  { value: 9, text: 'Szeptember'},
  { value: 10, text: 'Október'},
  { value: 11, text: 'November'},
  { value: 12, text: 'December'}
]

interface DayCell {
  date: DateTime;
  active: boolean;
  selected: boolean;
  today: boolean;
}

interface YearMonth {
  year: number;
  month: number;
}

const regex = /^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})$/

const dateFromString = (input: string|null|undefined): DateTime|null => {
  if (!input) {
    return null;
  }
  const m = regex.exec(input);
  if (m) {
    return new DateTime({ year: parseInt(m[1], 10), month: parseInt(m[2], 10), day: parseInt(m[3], 10) });
  }
  return null;
}

@customElement('dope-calendar')
export class Calandar extends PolymerElement {
  static readonly chooseEvent = 'choose';
  static get template() { return mkTemplate(view); }

  __suppressSelectors: any;

  @property({ type: Number })
  currentYear?: number;

  @property({ type: Number })
  currentMonth?: number;

  @property({ type: Object })
  shown: YearMonth;

  @property({ type: Array })
  years: number[] = Array.apply(null, <any>{ length: 50 }).map((_, i) => 1980 + i);

  @property({ type: Array })
  months: { value: number, text: string }[] = months;

  @property({ type: Array })
  cells!: DayCell[];

  @property()
  selection: (date: DateTime) => boolean = () => false;

  @property({ type: Boolean, notify: true, reflectToAttribute: true })
  focused: boolean = false;

  @property({ type: Boolean })
  yearsFocused: boolean = false;

  @property({ type: Boolean })
  monthsFocused: boolean = false;

  @query('.calendar--year')
  yearSelector!: HTMLSelectElement;

  @query('.calendar--month')
  monthSelector!: HTMLSelectElement;

  constructor() {
    super();
    const now = new DateTime();
    this.shown = { year: now.year, month: now.month };
  }

  __eq(a: any, b: any) { return a === b; }

  @observe('shown', 'selection', 'shown.*')
  computeCells() {
    this.currentYear = this.shown.year;
    this.currentMonth = this.shown.month;
    const fst = new DateTime({ year: this.shown.year, month: this.shown.month });
    const lst = fst.addMonths(1).addDays(-1);
    const cells: DayCell[] = [];

    const today = (function () {
        const dt = new Date();
        return new DateTime({ year: dt.getFullYear(), month: dt.getMonth() + 1, day: dt.getDate() });
    }());

    const mod = (x: number, n: number) => {
        const res = x % n;
        return  res < 0 ? (res + n) : res;
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

  @observe('currentYear, years')
  currentYearChanged(year: number|undefined) {
    if (!year || this.__suppressSelectors) {
      return;
    }
    const options = Array.from(this.yearSelector.querySelectorAll('option'));
    const option = options.find(option => parseInt(option.value, 10) === year);
    if (option) {
      option.selected = true;
    }
  }

  @observe('currentMonth', 'months')
  currentMonthChanged(month: number|undefined) {
    if (!month || this.__suppressSelectors) {
      return;
    }
    const options = Array.from(this.monthSelector.querySelectorAll('option'));
    const option = options.find(option => parseInt(option.value, 10) === month);
    if (option) {
      option.selected = true;
    }
  }

  @observe('yearsFocused', 'monthsFocused')
  observeFocused(yearsFocused: boolean, monthsFocused: boolean) {
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

  onYearsBlur() { this.yearsFocused = false; }

  onYearsFocus() { this.yearsFocused = true; }

  onMonthChange() {
    this.__suppressSelectors = true;
    try {
      this.set('shown.month', parseInt(this.monthSelector.value, 10));
    } finally {
      this.__suppressSelectors = false;
    }
  }

  onMonthsBlur() { this.monthsFocused = false; }

  onMonthsFocus() { this.monthsFocused = true; }

  onPrevClick(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (1 === this.shown.month) {
      this.shown = { year: this.shown.year - 1, month: 12 };
    } else {
      this.set('shown.month', this.shown.month - 1);
    }
  }

  onNextClick (e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (12 === this.shown.month) {
      this.shown = { year: this.shown.year + 1, month: 1 };
    } else {
      this.set('shown.month', this.shown.month + 1);
    }
  }

  onSelectClick(e: MouseEvent) {
    e.stopPropagation();
  }

  onCellClick(e: MouseEvent) {
    let target: Element|null;
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
    this.dispatchEvent(new CustomEvent<DateTime>(Calandar.chooseEvent, {
      bubbles: false,
      cancelable: false,
      detail: date
    }));
  }
}