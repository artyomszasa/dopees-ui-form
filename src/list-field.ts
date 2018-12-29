import './menu';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { property, customElement, observe, query } from '@polymer/decorators/lib/decorators';
import { FieldMixin, ValueField } from './field';
import { mkTemplate } from './templates';
import { MenuItem } from './menu';
import template from './list-field/list-field.pug';

export interface ListFieldItem<T> {
  /** Whether item is disabled. */
  readonly disabled?: boolean;
  /** Icon to show if any. */
  readonly icon?: string;
  /** Underlying value of the item. */
  readonly data: T
}

class ItemWrapper<T> implements ListFieldItem<T>, MenuItem {
  private readonly source: ListFieldItem<T>;
  private readonly formatter: (item: T|undefined) => string;
  get disabled() { return this.source.disabled; }
  get icon() { return this.source.icon; }
  get data() { return this.source.data; }
  get text() { return this.formatter(this.data); }
  constructor(source: ListFieldItem<T>, formatter: (item: T|undefined) => string) {
    this.source = source;
    this.formatter = formatter;
  }
}

@customElement('dope-list-field')
export class ListField<T> extends FieldMixin(PolymerElement) implements ValueField<T|undefined> {
  static get template() { return mkTemplate(template); }

  @property({ type: Object, notify: true })
  value: T|undefined;

  @property({ type: Number })
  tabindex?: number = 0;

  @property()
  formatter: (item: T|undefined) => string;

  @property()
  equality: (a: T|undefined, b: T|undefined) => boolean = (a, b) => a === b;

  @property({ type: Array })
  items: ListFieldItem<T>[] = [];

  @property({ type: String })
  placeholder?: string;

  /**
   * Bound to underlying menu property.
   */
  @property({ type: Number, notify: true })
  selectedIndex: number = -1;

  @query('.field')
  wrapper!: HTMLDivElement;

  constructor() {
    super();
    this.empty = true;
    this.formatter = x => x ? x.toString() : '';
  }

  activate() { this.wrapper.focus(); }

  onBlur() { this.focused = false; }

  onFocus() { this.focused = true; }

  onMenuChoose(e: CustomEvent<T>) {
    e.preventDefault();
    this.dirty = true;
    this.value = e.detail;
  }

  toMenuItems(formatter: (item: T|undefined) => string, items: ListFieldItem<T>[], required: boolean|undefined, placeholder: string|undefined) {
    let mapped: MenuItem[];
    if (!items || !formatter) {
      mapped = [];
    }
    mapped = items.map(item => new ItemWrapper<T>(item, formatter));
    if (!required) {
      mapped.unshift({
        data: undefined,
        text: placeholder || ''
      });
    }
    return mapped;
  }

  @observe('value')
  observeEmpty(value: T|undefined) {
    this.empty = !value;
    // moved to validation...
    // if (this.required) {
    //   this.invalid = !value;
    // }
  }

  @observe('value', 'items', 'required')
  observeSelectedIndex(value: T|undefined, items: ListFieldItem<T>[], required: boolean|undefined) {
    if (!value || !items) {
      this.selectedIndex = required ? -1 : 0;
    } else {
      this.selectedIndex = items.findIndex(item => {
        return this.equality(item.data, value);
      }) + (required ? 0 : 1);
    }
  }
}