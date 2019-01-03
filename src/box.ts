import 'dopees-ui/lib/material-icon';
import './datetime-picker';
import './date-range-picker';
import './text-field';
import './list-picker';
import './text-field';
import './multitext-field';
import '@polymer/polymer/lib/elements/dom-if';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { customElement, property, query, observe } from '@polymer/decorators/lib/decorators';
import { ValueField, DecoratedFieldMixin } from './field';
import { MultitextField } from './multitext-field';
import { ListFieldItem } from './list-field';
import { ListPicker } from './list-picker';
import { TextField } from './text-field';
import { mkTemplate } from './templates';
import { DateTime, TimeSpan } from 'dopees-core/lib/datetime';
import { DatePicker } from './date-picker';
import { DateTimeRange } from './date-range-field';
import { DateRangePicker } from './date-range-picker';
import { TimePicker } from './time-picker';
import { DateTimePicker } from './datetime-picker';
import { sprintf } from 'dopees-core/lib/string';
import wrapperView from './box/box.pug';
import textBoxView from './box/text-box.pug';
import multitextBoxView from './box/multitext-box.pug';
import listBoxView from './box/list-box.pug';
import dateBoxView from './box/date-box.pug';
import dateTimeBoxView from './box/datetime-box.pug';
import dateRangeBoxView from './box/date-range-box.pug';
import timeBoxView from './box/time-box.pug';

@customElement('dope-box')
export class BoxField extends DecoratedFieldMixin(PolymerElement) {
  static get template() { return mkTemplate(wrapperView); }

  __showHint(error: string|undefined, hint: string|undefined): boolean {
    return !!(!error && hint);
  }

  isNonEmpty(...values: any[]) { return values.some(Boolean); }

  isEmpty(...values: any[]) { return !values.some(Boolean); }
}

@customElement('dope-text-box')
export class TextBox extends DecoratedFieldMixin(PolymerElement) implements ValueField<string> {
  static get template() { return mkTemplate(textBoxView); }

  _deserializeValue(value: string|null, type: any) {
    if (RegExp === type) {
      if (!value) {
        return undefined;
      }
      return new RegExp(value);
    }
    return super._deserializeValue(value, type);
  }

  @query('.raw')
  protected field!: TextField;

  @property({ type: String })
  type?: string;

  @property({ type: String })
  placeholder?: string;

  @property({ type: <any> RegExp })
  pattern?: RegExp;

  @property({ type: Number, reflectToAttribute: true })
  minlength?: number;

  @property({ type: Number, reflectToAttribute: true })
  maxlength?: number;

  @property({ type: String, notify: true })
  value: string = '';

  @property({ type: String })
  patternMessage?: string;

  @property({ type: String })
  minlengthMessage?: string;

  @property({ type: String })
  maxlengthMessage?: string;

  activate() { this.field.activate(); }

  onClearClick(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    this.value = '';
  }
}

@customElement('dope-multitext-box')
export class MiltitextBox extends DecoratedFieldMixin(PolymerElement) implements ValueField<string> {
  static get template() { return mkTemplate(multitextBoxView); }

  @query('.raw')
  protected field!: MultitextField;

  @property({ type: String })
  type?: string;

  @property({ type: String })
  placeholder?: string;

  @property({ type: Number, reflectToAttribute: true })
  minlength?: number;

  @property({ type: Number, reflectToAttribute: true })
  maxlength?: number;

  @property({ type: String })
  value: string = '';

  @property({ type: String })
  minlengthMessage?: string;

  @property({ type: String })
  maxlengthMessage?: string;

  activate() { this.field.activate(); }

  onClearClick(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    this.value = '';
  }
}

@customElement('dope-list-box')
export class ListBox<T> extends DecoratedFieldMixin(PolymerElement) implements ValueField<T|undefined> {
  static get template() { return mkTemplate(listBoxView); }
  @property({ type: String })
  placeholder?: string;

  @property({ type: String })
  name?: string;

  @property({ type: Object, notify: true })
  value: T|undefined;

  @property()
  formatter: (item: T|undefined) => string;

  @property()
  equality: (a: T|undefined, b: T|undefined) => boolean = (a, b) => a === b

  @property({ type: Array })
  items: Array<ListFieldItem<T>> = [];

  @property({ type: Number })
  tabindex: number = 0;

  @query('dope-list-picker')
  impl!: ListPicker<T>;

  constructor() {
    super();
    this.formatter = (x) => x ? x.toString() : (this.placeholder || '');
  }

  activate() { this.impl.activate(); }

  computeEmpty(empty: boolean, placeholder: string|undefined) {
    return empty && !placeholder;
  }

  onIconClick(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setTimeout(() => this.activate(), 10);
  }
}

@customElement('dope-date-box')
export class DateBox extends DecoratedFieldMixin(PolymerElement) implements ValueField<DateTime|undefined> {
  static get template() { return mkTemplate(dateBoxView); }
  @property({ type: String })
  placeholder?: string;

  @property({ type: String })
  name?: string;

  @property({ type: Object, notify: true })
  value: DateTime|undefined;

  @property()
  formatter!: (item: DateTime|undefined) => string;

  @query('dope-date-picker')
  impl!: DatePicker;

  activate() { this.impl.activate(); }

  computeEmpty(empty: boolean, placeholder: string|undefined) {
    return empty && !placeholder;
  }

  onIconClick(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    this.activate();
  }
}

@customElement('dope-time-box')
export class TimeBox extends DecoratedFieldMixin(PolymerElement) implements ValueField<TimeSpan|undefined> {
  static get template() { return mkTemplate(timeBoxView); }
  @property({ type: String })
  placeholder?: string;

  @property({ type: <any> TimeSpan, notify: true })
  value: TimeSpan|undefined;

  @property()
  formatter: (item: TimeSpan|undefined) => string;

  @property({ type: <any> TimeSpan })
  startTime!: TimeSpan;

  @property({ type: <any> TimeSpan })
  endTime!: TimeSpan;

  @property({ type: <any> TimeSpan })
  step!: TimeSpan;

  @query('dope-time-picker')
  impl!: TimePicker;

  constructor() {
    super();
    this.formatter = (x) => x ? sprintf('%02d:%02d', x.hours, x.minutes) : (this.placeholder || '');
  }

  activate() { this.impl.activate(); }

  computeEmpty(empty: boolean, placeholder: string|undefined) {
    return empty && !placeholder;
  }

  onIconClick(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    this.activate();
  }
}

@customElement('dope-datetime-box')
export class DateTimeBox extends DecoratedFieldMixin(PolymerElement) implements ValueField<DateTime|undefined> {
  static get template() { return mkTemplate(dateTimeBoxView); }
  @property({ type: String })
  placeholder?: string;

  @property({ type: Object, notify: true })
  value: DateTime|undefined;

  @property()
  formatter: (item: DateTime|undefined) => string;

  @query('dope-datetime-picker')
  impl!: DateTimePicker;

  constructor() {
    super();
    this.formatter = (x) => {
      if (x) {
        return sprintf('%04d. %02d. %02d %02d:%02d', x.year, x.month, x.day, x.hours, x.minutes);
      }
      return (this.placeholder || '');
    };
  }

  activate() { this.impl.activate(); }

  computeEmpty(empty: boolean, placeholder: string|undefined) {
    return empty && !placeholder;
  }

  onIconClick(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    this.activate();
  }
}

@customElement('dope-date-range-box')
export class DateRangeBox extends DecoratedFieldMixin(PolymerElement) implements ValueField<DateTimeRange> {
  static get template() { return mkTemplate(dateRangeBoxView); }

  private __valueChanging = false;

  @property({ type: String })
  placeholder?: string;

  @property({ type: String })
  name?: string;

  @property({ type: Object, notify: true })
  value: DateTimeRange = {};

  @property({ type: Object, notify: true })
  startDate: DateTime|undefined;

  @property({ type: Object, notify: true })
  endDate: DateTime|undefined;

  @property()
  formatter!: (item: DateTime|undefined) => string;

  @query('dope-date-range-picker')
  impl!: DateRangePicker;

  activate() { this.impl.activate(); }

  computeEmpty(empty: boolean, placeholder: string|undefined) {
    return empty && !placeholder;
  }

  onIconClick(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    this.activate();
  }

  @observe('value')
  valueChanged(value: DateTimeRange) {
    this.__valueChanging = true;
    try {
      this.startDate = value.start;
      this.endDate = value.end;
    } finally {
      this.__valueChanging = false;
    }
  }

  @observe('startDate', 'endDate')
  valuesChanged(start: DateTime|undefined, end: DateTime|undefined) {
    if (!this.__valueChanging) {
      this.value = { start, end };
    }
  }
}
