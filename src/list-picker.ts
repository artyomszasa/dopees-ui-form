import './list-field';
import './picker';
import { customElement, property, observe, query } from '@polymer/decorators/lib/decorators';
import { ValueField } from './field';
import { ListField } from './list-field';
import { Picker } from './picker';

export interface ListFieldItem<T> {
  disabled?: boolean;
  icon?: string;
  data: T;
}

@customElement('dope-list-picker')
export class ListPicker<T> extends Picker<T> implements ValueField<T|undefined> {
  static get template() {
    return Picker.createTemplate(ListPicker, {
      implementation: 'dope-list-field',
      arguments: {
        items: '[[items]]',
        equality: '[[equality]]',
        formatter: '[[formatter]]',
        value: '{{value}}'
      }
    });
  }

  @property({ type: Object, notify: true })
  value: T|undefined;

  @property()
  equality: (a: T|undefined, b: T|undefined) => boolean = (a, b) => a === b

  @property()
  formatter: (item: T|undefined) => string;

  @property({ type: Array })
  items: Array<ListFieldItem<T>> = [];

  @query('dope-list-field')
  innerField!: ListField<T>;

  constructor() {
    super();
    this.formatter = (x) => x ? x.toString() : (this.placeholder || '');
  }

  activate() {
    this.wrapper.focus();
    this.innerField.activate();
  }

  @observe('value')
  observeEmpty(value: T|undefined) {
    this.empty = 0 !== <any> value && !value;
  }
}
