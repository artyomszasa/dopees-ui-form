import './datetime-field';
import { customElement, property, query, observe } from '@polymer/decorators/lib/decorators';
import { DateTime } from 'dopees-core/lib/datetime';
import { ValueField } from './field';
import { Picker } from './picker/picker';
import { DateTimeField } from './datetime-field';
import { sprintf } from 'dopees-core/lib/string';


@customElement('dope-datetime-picker')
export class DateTimePicker extends Picker<DateTime> implements ValueField<DateTime|undefined> {
  static get template() {
    return Picker.createTemplate(DateTimePicker, {
      implementation: 'dope-datetime-field',
      css: 'dope-datetime-field{height:var(--time-height,14rem)}',
      arguments: {
        formatter: '[[formatter]]',
        empty: '{{empty}}',
        value: '{{value}}'
      }
    });
  }

  _deserializeValue(value: string|null, type: any) {
    if (DateTime === type) {
      if (!value) {
        return undefined;
      }
      return new DateTime(value);
    }
    return super._deserializeValue(value, type);
  }

  @property({ type: <any>DateTime, notify: true })
  value: DateTime|undefined;

  @property()
  formatter: (item: DateTime|undefined) => string;

  @query('dope-datetime-field')
  innerField!: DateTimeField;

  constructor() {
    super();
    this.empty = true;
    this.formatter = x => x ? sprintf('%04d. %02d. %02d %02d:%02d', x.year, x.month, x.day, x.hours, x.minutes) : '';
  }

  activate() {
    this.wrapper.focus();
    this.innerField.activate();
  }
}