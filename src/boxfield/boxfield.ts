import '../textfield/textfield';
import '../list-field/list-field';
// import '../datepicker/datepicker';
import 'dopees-ui/lib/material-icon';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { customElement, property, query, observe } from '@polymer/decorators/lib/decorators';
import { ValueField, DecoratedFieldMixin } from '../field';
import { MultitextField } from '../multitextfield/multitextfield';
import { ListFieldItem } from '../list-field/list-field';
import { ListPicker } from '../list-picker/list-picker';
import { TextField } from '../textfield/textfield';
import { mkTemplate } from '../templates';
import { DateTime } from 'dopees-core/lib/datetime';
import { DatePicker } from '../date-picker';
import { DateTimeRange } from '../date-range-field/date-range-field';
import { DateRangePicker } from '../date-range-picker';
import wrapperView from './boxfield.pug';
import textBoxView from './textbox.pug';
import multitextBoxView from './multitextbox.pug';
import listBoxView from './listbox.pug';
import dateBoxView from './datebox.pug';
import dateRangeBoxView from './date-range-box.pug';

@customElement('dope-box')
export class BoxField extends DecoratedFieldMixin(PolymerElement) {
  static get template () { return mkTemplate(wrapperView); }

  isNonEmpty(...values: any[]) { return values.some(Boolean); }

  isEmpty(...values: any[]) { return !values.some(Boolean); }
}

@customElement('dope-text-box')
export class TextBox extends DecoratedFieldMixin(PolymerElement) implements ValueField<string> {
  static get template () { return mkTemplate(textBoxView); }

  @query('.raw')
  protected field!: TextField;

  @property({ type: String })
  type?: string;

  @property({ type: String })
  placeholder?: string;

  @property({ type: Number, reflectToAttribute: true })
  minlength?: number;

  @property({ type: Number, reflectToAttribute: true })
  maxlength?: number;

  @property({ type: String, notify: true })
  value: string = '';

  activate() { this.field.activate(); }

  onClearClick(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    this.value = '';
  }
}

@customElement('dope-multitext-box')
export class MiltitextBox extends DecoratedFieldMixin(PolymerElement) implements ValueField<string> {
  static get template () { return mkTemplate(multitextBoxView); }

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

  activate() { this.field.activate(); }
}

@customElement('dope-list-box')
export class ListBox<T> extends DecoratedFieldMixin(PolymerElement) implements ValueField<T|undefined> {
  static get template () { return mkTemplate(listBoxView); }
  @property({ type: String })
  placeholder?: string;

  @property({ type: String })
  name?: string;

  @property({ type: Object, notify: true })
  value: T|undefined;

  @property()
  formatter: (item: T|undefined) => string;

  @property({ type: Array })
  items: ListFieldItem<T>[] = [];

  @property({ type: Number })
  tabindex: number = 0;

  @query('dope-list-picker')
  impl!: ListPicker<T>;

  constructor() {
    super();
    this.formatter = x => x ? x.toString() : (this.placeholder || '');
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
  static get template () { return mkTemplate(dateBoxView); }
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

@customElement('dope-date-range-box')
export class DateRangeBox extends DecoratedFieldMixin(PolymerElement) implements ValueField<DateTimeRange> {
  static get template () { return mkTemplate(dateRangeBoxView); }

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