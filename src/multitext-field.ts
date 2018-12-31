import { PolymerElement } from '@polymer/polymer/polymer-element';
import {customElement, property, observe, query} from '@polymer/decorators/lib/decorators';
import { mkTemplate } from './templates';
import { FieldMixin, ValueField } from './field';
import template from './multitext-field/multitext-field.pug';
import { wrapEvent } from './helpers';

@customElement('dope-multitext-field')
export class MultitextField extends FieldMixin(PolymerElement) implements ValueField<string> {
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

  @property({ type: String })
  minlengthMessage?: string;

  @property({ type: String })
  maxlengthMessage?: string;

  @query('textarea')
  native!: HTMLTextAreaElement;

  @query('.pre')
  pre!: HTMLDivElement;

  private updateHeight () {
    let value = this.native.value;
    if (value.endsWith('\n')) {
      value += 'x';
    }
    this.pre.innerHTML = value;
    this.native.style.height = (this.pre.offsetHeight - 12) + 'px';
  }

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
    this.updateHeight();
  }
}