import '../textfield/textfield';
import '../listfield/listfield';
import 'dopees-ui/lib/material-icon';
import { PolymerElement } from "@polymer/polymer/polymer-element";
import { customElement, property, query } from "@polymer/decorators/lib/decorators";
import { FieldMixin, ValueField, DecoratedFieldMixin } from "../field";
import { MultitextField } from "../multitextfield/multitextfield";
import { ListFieldItem, ListField } from '../listfield/listfield';
import { TextField } from '../textfield/textfield';
import { mkTemplate } from "../templates";
import wrapperView from './boxfield.pug';
import textBoxView from './textbox.pug';
import multitextBoxView from './multitextbox.pug';
import listBoxView from './listbox.pug';

@customElement('dope-box')
export class BoxField extends DecoratedFieldMixin(PolymerElement) {
  static get template () { return mkTemplate(wrapperView); }
}

@customElement('dope-text-box')
export class TextBox extends DecoratedFieldMixin(PolymerElement) implements ValueField<string> {
  static get template () { return mkTemplate(textBoxView); }

  @query('.raw')
  protected field!: TextField;

  @property({ type: String })
  type?: string;

  @property({ type: String })
  placeholder?: string;

  @property({ type: Number, reflectToAttribute: true })
  minlength?: number;

  @property({ type: Number, reflectToAttribute: true })
  maxlength?: number;

  @property({ type: String, notify: true })
  value: string = '';

  activate() { this.field.activate(); }

  onClearClick(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    this.value = '';
  }
}

@customElement('dope-multitext-box')
export class MiltitextBox extends DecoratedFieldMixin(PolymerElement) implements ValueField<string> {
  static get template () { return mkTemplate(multitextBoxView); }

  @query('.raw')
  protected field!: MultitextField;

  @property({ type: String })
  type?: string;

  @property({ type: String })
  placeholder?: string;

  @property({ type: Number, reflectToAttribute: true })
  minlength?: number;

  @property({ type: Number, reflectToAttribute: true })
  maxlength?: number;

  @property({ type: String })
  value: string = '';

  activate() { this.field.activate(); }
}

@customElement('dope-list-box')
export class ListBox<T> extends DecoratedFieldMixin(PolymerElement) implements ValueField<T|undefined> {
  static get template () { return mkTemplate(listBoxView); }
  @property({ type: String })
  placeholder?: string;

  @property({ type: String })
  name?: string;

  @property({ type: Object, notify: true })
  value: T|undefined;

  @property()
  formatter: (item: T|undefined) => string;

  @property({ type: Array })
  items: ListFieldItem<T>[] = [];

  @property({ type: Number })
  tabindex: number = 0;

  @query('dope-list-field')
  impl!: ListField<T>;

  constructor() {
    super();
    this.formatter = x => x ? x.toString() : (this.placeholder || '');
  }

  activate() { this.impl.activate(); }

  computeEmpty(empty: boolean, placeholder: string|undefined) {
    return empty && !placeholder;
  }

  onIconClick(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    this.activate();
  }
}