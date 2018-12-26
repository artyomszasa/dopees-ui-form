import './drop-down';
import { FieldMixin, ValueField } from './field';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { property, query, observe } from '@polymer/decorators/lib/decorators';
import { mkTemplate } from './templates';
import { DopeDropDown } from './drop-down';
import view from './picker/picker.pug';

export interface PickerTemplateOptions {
  implementation: string;
  css?: string;
  arguments?: {}
}

const defaults = {
  slot: 'body',
  tabindex: '[[tabindex]]',
  placeholder: '[[placeholder]]',
  readonly: '[[readonly]]',
  required: '[[required]]',
  dirty: '{{dirty}}',
  invalid: '{{invalid}}',
  focused: '{{implementationFocused}}'
}

const keyTemplate = Symbol('template');
const templateBase = mkTemplate(view);

export class Picker<T> extends FieldMixin(PolymerElement) {
  static createTemplate<T extends { new(...args: any[]): PolymerElement}>(host: T, options: PickerTemplateOptions): HTMLTemplateElement {
    if (!options) {
      throw new TypeError('options must be specified');
    }
    if (!host[keyTemplate]) {
      const template = <HTMLTemplateElement>templateBase.cloneNode(true);
      // inject css
      if (options.css) {
        let style: HTMLStyleElement = <HTMLStyleElement>template.content.querySelector('style');
        if (!style) {
          style = document.createElement('style');
          template.content.appendChild(style);
        }
        style.textContent = (style.textContent + options.css);
      }
      // inject implementation
      const inner = <Node>template.content.querySelector('template[body]');
      const implementationTemplate = mkTemplate(`<${options.implementation}></${options.implementation}>`);
      const implementation = <HTMLElement>implementationTemplate.content.querySelector(options.implementation);
      const args = options.arguments || {};
      const defaultKeys = Object.keys(defaults);
      defaultKeys.forEach(key => {
        const value = args[key] || defaults[key];
        implementation.setAttribute(key, value);
      });
      Object.keys(args).forEach(key => {
        if (-1 === defaultKeys.indexOf(key)) {
          implementation.setAttribute(key, args[key]);
        }
      });
      const res = <HTMLElement>(<Node>inner.parentNode).replaceChild(implementation, inner);
      res.classList.add('.picker--implementation');
      host[keyTemplate] = template;
    }
    return host[keyTemplate];
  }

  private __blurTimeout: any;

  @property({ type: String })
  placeholder?: string;

  @property({ type: Number })
  tabindex?: number = 0;

  @property({ type: Boolean })
  selfFocused: boolean = false;

  @property({ type: Boolean })
  implementationFocused: boolean = false;

  @query('.picker--implementation')
  protected implementation!: ValueField<T|undefined>

  @query('.wrapper')
  protected wrapper!: HTMLElement

  @query('dope-drop-down')
  protected dropDown!: DopeDropDown<T>;

  onFocus() { this.selfFocused = true; }

  onBlur() {
    clearTimeout(this.__blurTimeout);
    // allow implementation to focus...
    this.__blurTimeout = setTimeout(() => this.selfFocused = false, 50);
  }

  @observe('selfFocused', 'implementationFocused')
  observeActive(selfFocused: boolean, implementationFocused: boolean) {
    this.focused = selfFocused || implementationFocused;
  }
}