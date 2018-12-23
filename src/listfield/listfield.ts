import '@polymer/polymer/lib/elements/dom-if';
import '@polymer/polymer/lib/elements/dom-repeat';
import '../menu/menu';
import '../dropdown/dropdown';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { customElement, property, observe, query } from '@polymer/decorators/lib/decorators';
import { mkTemplate } from '../templates';
import { FieldMixin, ValueField } from '../field';
import { DopeDropDown } from 'src/dropdown/dropdown';
import { MenuItem } from 'src/menu/menu';
import template from './listfield.pug';

export interface ListFieldItem<T> {
  disabled?: boolean;
  icon?: string;
  data: T
}

@customElement('dope-list-field')
export class ListField<T> extends FieldMixin(PolymerElement) implements ValueField<T|undefined> {
  static get template() { return mkTemplate(template); }

  __blurTimeout: any;

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

  @query('dope-drop-down')
  dropDown!: DopeDropDown<T>;

  @query('.wrapper')
  wrapper!: HTMLDivElement;

  constructor() {
    super();
    this.formatter = x => x ? x.toString() : (this.placeholder || '');
    this.observeEmpty(this.value, this.placeholder);
  }

  activate() { this.wrapper.focus(); }

  @observe('focused')
  focusedChanged(focused: boolean) {
    clearTimeout(this.__blurTimeout);
    if (!focused) {
      this.__blurTimeout = setTimeout(() => this.dropDown.close(), 100);
    } else {
      this.dropDown.open();
    }
  }

  onMenuChoose(e: CustomEvent<T>) {
    e.preventDefault();
    this.dirty = true;
    this.value = e.detail;
    this.wrapper.blur();
  }

  onBlur() { this.focused = false; }

  onFocus() { this.focused = true; }

  toMenuItems(formatter: (item: T|undefined) => string, items: ListFieldItem<T>[]) {
    const menuItems = items.map(item => {
      return <MenuItem>{
        text: formatter(item.data),
        data: item.data,
        disabled: item.disabled,
        icon: item.icon
      };
    });
    if (!this.required) {
      menuItems.unshift({
        text: formatter(undefined),
        data: undefined
      });
    }
    return menuItems;
  }

  @observe('value', 'placeholder')
  observeEmpty(value: T|undefined, placeholder: string|undefined) {
    this.empty = !value && !placeholder;
  }

  @observe('value')
  valueChanged(value: T|undefined) {
    this.empty = !value;
  }
}