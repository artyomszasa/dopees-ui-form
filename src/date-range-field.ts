import './calendar';
import { PolymerElement } from "@polymer/polymer/polymer-element";
import { customElement, property, observe, query } from "@polymer/decorators/lib/decorators";
import { FieldMixin, ValueField } from "./field";
import { months } from "./calendar";
import { DateTime } from "dopees-core/lib/datetime";
import { mkTemplate } from "./templates";
import view from './date-range-field/date-range-field.pug';

export interface DateTimeRange {
  start?: DateTime
  end?: DateTime
}

enum Target {
  Start = 0,
  End = 1
}

@customElement('dope-date-range-field')
export class DateRangeField extends FieldMixin(PolymerElement) implements ValueField<DateTimeRange> {
  static get template() { return mkTemplate(view); }

  private __blurTimeout: any;

  private __valueChanging = false;

  private __target: Target = Target.Start;

  @property({ type: Array })
  years: number[] = Array.apply(null, <any>{ length: 50 }).map((_, i) => 1980 + i);

  @property({ type: Array })
  months: { value: number, text: string }[] = months;

  @property({ type: Object, notify: true })
  startDate: DateTime|undefined;

  @property({ type: Object, notify: true })
  endDate: DateTime|undefined;

  @property()
  tabindex?: number = 0;

  @property()
  selection: (date: DateTime) => boolean;

  @property({ type: Object, notify: true })
  value: DateTimeRange = {};

  @property({ type: Boolean })
  calendarFocused: boolean = false;

  @property({ type: Boolean })
  selfFocused: boolean = false;

  @query('.field')
  field!: HTMLDivElement;

  constructor() {
    super();
    this.empty = true;
    this.selection = () => false;
  }

  activate() { this.field.focus(); }

  @observe('focused')
  focusedChanged(focused: boolean) {
    if (!focused) {
      this.__target = Target.Start;
    }
  }

  @observe('selfFocused', 'calendarFocused')
  observeFocused(selfFocused: boolean, calendarFocused: boolean) {
    clearTimeout(this.__blurTimeout);
    this.__blurTimeout = setTimeout(() => this.focused = selfFocused || calendarFocused, 0);
  }

  onBlur() { this.selfFocused = false; }

  onFocus() { this.selfFocused = true; }

  onCalendarChoose(e: CustomEvent<DateTime>) {
    if (Target.Start === this.__target) {
      this.startDate = e.detail;
      this.endDate = undefined;
      this.__target = Target.End;
    } else {
      this.endDate = e.detail;
      this.__target = Target.Start;
    }
  }

  @observe('value')
  valueChanged(value: DateTimeRange) {
    this.__valueChanging = true;
    try {
      this.startDate = value.start;
      this.endDate = value.end;
      this.empty = !value || !(value.start || value.end);
    } finally {
      this.__valueChanging = false;
    }
  }

  @observe('startDate', 'endDate')
  valuesChanged(start: DateTime|undefined, end: DateTime|undefined) {
    if (start) {
      if (end) {
        this.selection = (date: DateTime) => 0 <= date.compareTo(start) && 0 >= date.compareTo(end);
      } else {
        this.selection = (date: DateTime) => date.equalsTo(start);
      }
    } else {
      if (end) {
        this.selection = (date: DateTime) => date.equalsTo(end);
      } else {
        this.selection = () => false;
      }
    }
    if (!this.__valueChanging) {
      this.value = { start, end };
    }
  }
}