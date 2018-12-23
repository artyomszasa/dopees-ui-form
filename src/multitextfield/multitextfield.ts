import { PolymerElement } from '@polymer/polymer/polymer-element';
import {customElement, property, observe, query} from '@polymer/decorators/lib/decorators';
import { mkTemplate } from '../templates';
import { FieldMixin, ValueField } from '../field';
import template from './multitextfield.pug';

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

  @property({ type: String })
  value: string = '';

  @query('textarea')
  native!: HTMLTextAreaElement;

  @query('pre')
  pre!: HTMLDivElement;

  private updateHeight () {
    this.pre.innerHTML = this.native.value;
    this.native.style.height = this.pre.offsetHeight + 'px';
  }

  activate() { this.native.focus(); }

  onKeydown(e: KeyboardEvent) {
    this.dispatchEvent(e);
  }

  onChange(e: Event) {
    this.dirty = true;
    this.dispatchEvent(e);
    if (!e.defaultPrevented) {
      this.value = this.native.value;
      this.updateHeight();
    }
  }

  onBlur() { this.focused = false; }

  onFocus() { this.focused = true; }

  @observe('value')
  valueChanged(value: string) {
    this.native.value = value;
    this.updateHeight();
  }
}