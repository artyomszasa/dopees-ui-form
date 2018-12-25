import './time-field';
import { customElement, property, query, observe } from '@polymer/decorators/lib/decorators';
import { TimeSpan } from 'dopees-core/lib/datetime';
import { ValueField } from './field';
import { Picker } from './picker/picker';
import { TimeField } from './time-field';
import { sprintf } from 'dopees-core/lib/string';


@customElement('dope-time-picker')
export class TimePicker extends Picker<TimeSpan> implements ValueField<TimeSpan|undefined> {
  static get template() {
    return Picker.createTemplate(TimePicker, {
      implementation: 'dope-time-field',
      css: 'dope-time-field{height:var(--time-height,12rem)}',
      arguments: {
        'start-time': '[[startTime]]',
        'end-time': '[[endTime]]',
        formatter: '[[formatter]]',
        step: '[[step]]',
        value: '{{value}}',
        empty: '{{empty}}'
      }
    });
  }

  _deserializeValue(value: string|null, type: any) {
    if (TimeSpan === type) {
      if (!value) {
        return undefined;
      }
      return new TimeSpan(value);
    }
    return super._deserializeValue(value, type);
  }

  @property({ type: <any>TimeSpan, notify: true })
  value: TimeSpan|undefined;

  @property()
  formatter: (item: TimeSpan|undefined) => string;

  @property({ type: Object })
  startTime!: TimeSpan;

  @property({ type: Object })
  endTime!: TimeSpan;

  @property({ type: Object })
  step!: TimeSpan;

  @query('dope-time-field')
  innerField!: TimeField;

  constructor() {
    super();
    this.empty = true;
    this.formatter = x => x ? sprintf('%02d:%02d', x.hours, x.minutes) : '';
  }

  activate() {
    this.wrapper.focus();
    this.innerField.activate();
  }

  // @observe('value')
  // observeEmpty(value: TimeSpan|undefined) {
  //   this.empty = !value;
  // }
}