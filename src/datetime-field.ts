import './date-field';
import './time-field';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { property, observe, customElement, query } from '@polymer/decorators/lib/decorators';
import { mkTemplate } from './templates';
import { FieldMixin, ValueField } from './field';
import { DateTime, TimeSpan } from 'dopees-core/lib/datetime';
import { DateField } from './date-field';
import view from './datetime-field/datetime-field.pug';

@customElement('dope-datetime-field')
export class DateTimeField extends FieldMixin(PolymerElement) implements ValueField<DateTime|undefined> {
  static get template() { return mkTemplate(view); }

  _deserializeValue(value: string|null, type: any) {
    if (DateTime === type) {
      if (!value) {
        return undefined;
      }
      return new DateTime(value);
    }
    return super._deserializeValue(value, type);
  }

  private __valueChanging = false;

  private __dirtyChanging = false;

  private __focusedTimeout: any;

  @property({ type: <any> DateTime, notify: true })
  value: DateTime|undefined;

  @property({ type: Boolean })
  dateDirty: boolean = false;

  @property({ type: Boolean })
  dateFocused: boolean = false;

  @property({ type: <any> DateTime })
  dateValue?: DateTime;

  @property({ type: Boolean })
  timeDirty: boolean = false;

  @property({ type: Boolean })
  timeFocused: boolean = false;

  @property({ type: <any> TimeSpan })
  timeValue?: TimeSpan;

  @query('dope-date-field')
  dateField!: DateField;

  constructor() {
    super();
    this.empty = true;
  }

  activate() {
    this.dateField.focus();
  }

  @observe('dirty')
  dirtyChanged(dirty: boolean) {
    this.__dirtyChanging = true;
    try {
      this.dateDirty = dirty;
      this.timeDirty = dirty;
    } finally {
      this.__dirtyChanging = false;
    }
  }

  @observe('dateDirty', 'timeDirty')
  innerDirtyChanged(dateDirty: boolean, timeDirty: boolean) {
    if (!this.__dirtyChanging) {
      this.dirty = dateDirty || timeDirty;
    }
  }

  @observe('dateFocused', 'timeFocused')
  observeFocused(dateFocused: boolean, timeFocused: boolean) {
    clearTimeout(this.__focusedTimeout);
    this.__focusedTimeout = setTimeout(() => this.focused = dateFocused || timeFocused, 25);
  }

  @observe('value')
  valueChanged(value: DateTime|undefined) {
    this.__valueChanging = true;
    try {
      if (value) {
        const datePart = new DateTime({ year: value.year, month: value.month, day: value.day });
        this.dateValue = datePart;
        this.timeValue = value.substract(datePart);
        this.empty = false;
      } else {
        this.dateValue = undefined;
        this.timeValue = undefined;
        this.empty = true;
      }
    } finally {
      this.__valueChanging = false;
    }
  }

  @observe('dateValue', 'timeValue')
  valuesChanged(date: DateTime|undefined, time: TimeSpan|undefined) {
    if (!this.__valueChanging) {
      let value: DateTime|undefined;
      if (date) {
        if (time) {
          value = new DateTime({
            year: date.year,
            month: date.month,
            day: date.day,
            hours: time.hours,
            minutes: time.minutes,
            seconds: time.seconds,
            milliseconds: time.milliseconds
          });
        } else {
          value = new DateTime({ year: date.year, month: date.month, day: date.day });
        }
      }
      this.value = value;
    }
  }
}
