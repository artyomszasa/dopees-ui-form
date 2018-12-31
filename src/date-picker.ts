import './date-field';
import { customElement, property, query, observe } from '@polymer/decorators/lib/decorators';
import { DateTime } from 'dopees-core/lib/datetime';
import { sprintf } from 'dopees-core/lib/string';
import { ValueField } from './field';
import { Picker } from './picker';
import { DateField } from './date-field';

@customElement('dope-date-picker')
export class DatePicker extends Picker<DateTime> implements ValueField<DateTime|undefined> {
  static get template() {
    return Picker.createTemplate(DatePicker, {
      implementation: 'dope-date-field',
      arguments: {
        years: '[[years]]',
        months: '[[months]]',
        selection: '[[selection]]',
        value: '{{value}}'
      }
    });
  }

  @property({ type: Object, notify: true })
  value: DateTime|undefined;

  @property()
  formatter: (item: DateTime|undefined) => string;

  @property()
  selection: (date: DateTime) => boolean = () => false

  @query('dope-date-field')
  innerField!: DateField;

  constructor() {
    super();
    this.formatter = (x) => x ? sprintf('%04d. %02d. %02d', x.year, x.month, x.day) : (this.placeholder || '');
  }

  activate() {
    this.wrapper.focus();
    this.innerField.activate();
  }

  @observe('value')
  observeEmpty(value: DateTime|undefined) {
    this.empty = !value;
  }
}
