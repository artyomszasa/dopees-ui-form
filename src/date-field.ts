import './calendar';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { customElement, property, observe, query } from '@polymer/decorators/lib/decorators';
import { DateTime } from 'dopees-core/lib/datetime';
import { FieldMixin, ValueField } from './field';
import { months } from './calendar';
import { mkTemplate } from './templates';
import view from './date-field/date-field.pug';

@customElement('dope-date-field')
export class DateField extends FieldMixin(PolymerElement) implements ValueField<DateTime|undefined> {
  static get template() { return mkTemplate(view); }

  private __blurTimeout: any;

  @property({ type: Array })
  years: number[] = Array.apply(null, <any> { length: 50 }).map((_, i) => 1980 + i);

  @property({ type: Array })
  months: Array<{ value: number, text: string }> = months;

  @property({ type: Object, notify: true })
  value: DateTime|undefined;

  @property()
  tabindex?: number = 0;

  @property()
  selection: (date: DateTime) => boolean;

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

  @observe('selfFocused', 'calendarFocused')
  observeFocused(selfFocused: boolean, calendarFocused: boolean) {
    clearTimeout(this.__blurTimeout);
    this.__blurTimeout = setTimeout(() => this.focused = selfFocused || calendarFocused, 0);
  }

  onBlur() { this.selfFocused = false; }

  onFocus() { this.selfFocused = true; }

  onCalendarChoose(e: CustomEvent<DateTime>) {
    this.dirty = true;
    this.value = e.detail;
  }

  @observe('value')
  valueChanged(value: DateTime|null) {
    if (value) {
      this.selection = (date: DateTime) => value.equalsTo(date);
    } else {
      this.selection = () => false;
    }
  }
}
