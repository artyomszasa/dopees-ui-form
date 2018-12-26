import { PolymerElement } from '@polymer/polymer/polymer-element';
import { customElement, property, observe, query } from '@polymer/decorators/lib/decorators';
import { mkTemplate } from './templates';
import { FieldMixin, ValueField } from './field';
import template from './text-field/text-field.pug';
import { wrapEvent } from './helpers';

@customElement('dope-text-field')
export class TextField extends FieldMixin(PolymerElement) implements ValueField<string> {
  static get template() { return mkTemplate(template); }

  @property({ type: String })
  type?: string;

  @property({ type: String })
  placeholder?: string;

  @property({ type: Number, reflectToAttribute: true })
  minlength?: number;

  @property({ type: Number, reflectToAttribute: true })
  maxlength?: number;

  @property({ type: String })
  name?: string;

  @property({ type: String, notify: true })
  value: string = '';

  @query('input')
  native!: HTMLInputElement;

  activate() { this.native.focus(); }

  onKeydown(e: KeyboardEvent) {
    const ew = wrapEvent(e, 'dope');
    this.dispatchEvent(ew);
    if (ew.defaultPrevented) {
      e.preventDefault();
    }
  }

  onChange(e: Event) {
    const ew = wrapEvent(e, 'dope');
    this.dispatchEvent(ew);
    this.dirty = true;
    this.value = this.native.value;
  }

  onBlur() { this.focused = false; }

  onFocus() { this.focused = true; }

  @observe('value')
  valueChanged(value: string) {
    this.native.value = value;
    this.empty = !value;
  }
}