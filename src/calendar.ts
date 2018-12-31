import { customElement, observe, property, query } from '@polymer/decorators/lib/decorators';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { DateTime } from 'dopees-core/lib/datetime';
import { mkTemplate } from './templates';
// tslint:disable-next-line:ordered-imports
import view from './calendar/calendar.pug';

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
];

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

const regex = /^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})$/;

const dateFromString = (input: string|null|undefined): DateTime|null => {
  if (!input) {
    return null;
  }
  const m = regex.exec(input);
  if (m) {
    return new DateTime({ year: parseInt(m[1], 10), month: parseInt(m[2], 10), day: parseInt(m[3], 10) });
  }
  return null;
};

/**
 * Implements calendar chooser with optionally selected days.
 */
@customElement('dope-calendar')
export class Calandar extends PolymerElement {
  static get template() { return mkTemplate(view); }
  /**
   * Name of the event fired when user clicks some day.
   */
  static readonly chooseEvent = 'choose';

  private __suppressSelectors: any;

  /**
   * Gets or sets the currently selected year.
   */
  @property({ type: Number })
  currentYear?: number;

  /**
   * Gets or sets the currently selected month.
   */
  @property({ type: Number })
  currentMonth?: number;

  /**
   * Gets or sets the currently set year and month as a single object.
   */
  @property({ type: Object })
  shown: YearMonth;

  /**
   * Gets or sets selectable years. Defaults to 1980..2030.
   */
  @property({ type: Array })
  years: number[] = Array.apply(null, <any> { length: 50 }).map((_, i) => 1980 + i);

  /**
   * Gets or sets month strings.
   */
  @property({ type: Array })
  months: Array<{ value: number, text: string }> = months;

  @property({ type: Array })
  private cells!: DayCell[];

  /**
   * Gets ot sets function that determines whether a single day is selected. Usually srt by the wrapping field to
   * visually reflect its state.
   */
  @property()
  selection: (date: DateTime) => boolean = () => false

  /**
   * Is set to _true_ if calendar has focus.
   */
  @property({ type: Boolean, notify: true, reflectToAttribute: true })
  focused: boolean = false;

  @property({ type: Boolean })
  private yearsFocused: boolean = false;

  @property({ type: Boolean })
  private monthsFocused: boolean = false;

  @query('.calendar--year')
  private yearSelector!: HTMLSelectElement;

  @query('.calendar--month')
  private monthSelector!: HTMLSelectElement;

  constructor() {
    super();
    const now = new DateTime();
    this.shown = { year: now.year, month: now.month };
  }

  /**
   * Used to check value strict equality in the polymer bindings.
   */
  protected __eq(a: any, b: any) { return a === b; }

  /**
   * Reevaluates the calendar triggering rerendering.
   */
  @observe('shown', 'selection', 'shown.*')
  computeCells() {
    this.currentYear = this.shown.year;
    this.currentMonth = this.shown.month;
    const fst = new DateTime({ year: this.shown.year, month: this.shown.month });
    const lst = fst.addMonths(1).addDays(-1);
    const cells: DayCell[] = [];

    const today = (function() {
        const dt = new Date();
        return new DateTime({ year: dt.getFullYear(), month: dt.getMonth() + 1, day: dt.getDate() });
    }());

    const mod = (x: number, n: number) => {
        const res = x % n;
        return  res < 0 ? (res + n) : res;
    };

    let rowCount = 0;
    for (let cur = fst.addDays(-mod(fst.dayOfWeek - 1, 7));
        -1 === cur.compareTo(lst) || 1 !== cur.dayOfWeek || rowCount < 6;
        cur = cur.addDays(1)) {
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
  @observe('currentYear, years')
  currentYearChanged(year: number|undefined) {
    if (!year || this.__suppressSelectors) {
      return;
    }
    const options = Array.from(this.yearSelector.querySelectorAll('option'));
    const option = options.find((opt) => parseInt(opt.value, 10) === year);
    if (option) {
      option.selected = true;
    }
  }

  /**
   * Updates the month selector control to the actually selected value.
   *
   * @param year Selected value.
   */
  @observe('currentMonth', 'months')
  currentMonthChanged(month: number|undefined) {
    if (!month || this.__suppressSelectors) {
      return;
    }
    const options = Array.from(this.monthSelector.querySelectorAll('option'));
    const option = options.find((opt) => parseInt(opt.value, 10) === month);
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
  @observe('yearsFocused', 'monthsFocused')
  observeFocused(yearsFocused: boolean, monthsFocused: boolean) {
    this.focused = yearsFocused || monthsFocused;
  }

  /**
   * Handles year selection change.
   */
  protected onYearChange() {
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
  protected onYearsBlur() { this.yearsFocused = false; }

  /**
   * Handles year focus event.
   */
  protected onYearsFocus() { this.yearsFocused = true; }

  /**
   * Handles month selection change.
   */
  protected onMonthChange() {
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
  protected onMonthsBlur() { this.monthsFocused = false; }

  /**
   * Handles months focus event.
   */
  protected onMonthsFocus() { this.monthsFocused = true; }

  /**
   * Handles previous month button click.
   */
  protected onPrevClick(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (1 === this.shown.month) {
      this.shown = { year: this.shown.year - 1, month: 12 };
    } else {
      this.set('shown.month', this.shown.month - 1);
    }
  }

  /**
   * Handles next month button click.
   */
  protected onNextClick(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (12 === this.shown.month) {
      this.shown = { year: this.shown.year + 1, month: 1 };
    } else {
      this.set('shown.month', this.shown.month + 1);
    }
  }

  /**
   * Only stops event propagation.
   *
   * @param e Related event.
   */
  protected onSelectClick(e: MouseEvent) {
    e.stopPropagation();
  }

  /**
   * Handles cell button click. Fires choose event usually consumed by the wrapping field control.
   */
  protected onCellClick(e: MouseEvent) {
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
