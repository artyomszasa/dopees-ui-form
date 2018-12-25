import './date-range-field/date-range-field';
import { customElement, property, query, observe } from '@polymer/decorators/lib/decorators';
import { DateTime } from 'dopees-core/lib/datetime';
import { sprintf } from 'dopees-core/lib/string';
import { ValueField } from './field';
import { Picker } from './picker/picker';
import { DateField } from './date-field/date-field';
import { DateTimeRange } from './date-range-field/date-range-field';

@customElement('dope-date-range-picker')
export class DateRangePicker extends Picker<DateTimeRange> implements ValueField<DateTimeRange> {
  static get template() {
    return Picker.createTemplate(DateRangePicker, {
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

  private __valueChanging: any;

  @property({ type: Object, notify: true })
  value: DateTimeRange = {};

  @property({type: Object, notify: true })
  startDate: DateTime|undefined;

  @property({type: Object, notify: true })
  endDate: DateTime|undefined;

  @property()
  formatter: (item: DateTimeRange) => string;

  @property()
  selection: (date: DateTime) => boolean = () => false;

  @query('dope-date-range-field')
  innerField!: DateField;

  constructor() {
    super();
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

  activate() {
    this.wrapper.focus();
    this.innerField.activate();
  }

  @observe('value')
  observeEmpty(value: DateTime|undefined) {
    this.empty = !value;
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