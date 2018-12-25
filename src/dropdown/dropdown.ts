import { PolymerElement } from "@polymer/polymer/polymer-element";
import { customElement, property, observe } from "@polymer/decorators/lib/decorators";
import { mkTemplate } from '../templates';
import view from './dropdown.pug';

@customElement('dope-drop-down')
export class DopeDropDown<T> extends PolymerElement {

  static get template() { return mkTemplate(view); }

  @property({ type: String })
  placeholder?: string;

  @property({ type: Boolean })
  empty: boolean = true;

  @property()
  formatter: (value: T|undefined) => string;

  @property({ type: Boolean, notify: true, reflectToAttribute: true })
  opened: boolean = false;

  @property()
  value: T|undefined;

  @property({ type: Boolean })
  forcedEmpty: boolean = false;

  constructor() {
    super();
    this.formatter = x => x ? x.toString() : (this.placeholder || '');
  }

  __or(...values: boolean[]) { return values.some(Boolean); }

  @observe('value')
  observeValue(value: T|undefined) { this.empty = !value; }

  open() { this.opened = true; }

  close() { this.opened = false; }
}