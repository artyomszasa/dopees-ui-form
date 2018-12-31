import { PolymerElement } from '@polymer/polymer/polymer-element';
import { customElement, property, observe, query } from '@polymer/decorators/lib/decorators';
import { mkTemplate } from './templates';
import { FieldMixin, ValueField, ValidationMixin } from './field';
import template from './text-field/text-field.pug';
import { wrapEvent } from './helpers';

@customElement('dope-text-field')
export class TextField extends ValidationMixin(FieldMixin(PolymerElement)) implements ValueField<string> {
  static get template() { return mkTemplate(template); }

  _deserializeValue(value: string|null, type: any) {
    if (RegExp === type) {
      if (!value) {
        return undefined;
      }
      return new RegExp(value);
    }
    return super._deserializeValue(value, type);
  }

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

  onBlur() {
    this.focused = false;
  }

  onFocus() {
    this.activated = true;
    this.focused = true;
  }

  validate() {
    if (this.required && !this.value) {
      return this.requiredMessage || 'Value is required';
    }
    if (this.pattern && this.value && !this.pattern.test(this.value)) {
      return this.patternMessage || 'Value does not match the specified pattern';
    }
    if (this.minlength && this.value && this.value.length < this.minlength) {
      return this.minlengthMessage || 'Value is too short';
    }
    if (this.maxlength && this.value && this.value.length > this.maxlength) {
      return this.maxlengthMessage || 'Value is too long';
    }
  }

  @observe('value')
  valueChanged(value: string) {
    this.native.value = (null === value || undefined === value) ? '' : value;
    this.empty = !value;
  }
}
