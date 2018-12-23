import '@polymer/polymer/lib/elements/dom-if';
import '@polymer/polymer/lib/elements/dom-repeat';
import { PolymerElement } from "@polymer/polymer/polymer-element";
import { customElement, property } from "@polymer/decorators/lib/decorators";
import { mkTemplate } from '../templates';
import view from './menu.pug';

export interface MenuItem {
  text: string;
  disabled?: boolean;
  icon?: string;
  data: any;
}

@customElement('dope-menu')
export class Menu extends PolymerElement {
  static readonly chooseEvent = 'choose';

  static get template() { return mkTemplate(view); }

  @property({ type: Array })
  items: MenuItem[] = []

  @property({ type: Boolean, notify: true })
  selectedIndex?: number;

  __eq(a: any, b: any) { return a === b; }

  isThruthy(a: any) { return !!a; }

  isFalsy(a: any) { return !a; }

  onItemClick(e: MouseEvent) {
    let target: Element|null;
    if (!(e.target instanceof Element)) {
      return;
    }
    target = e.target;
    target = target.closest('.item');
    if (!target) {
      return;
    }
    const indexString = target.getAttribute('data-index');
    const index = indexString ? parseInt(indexString, 10) : null;
    if (!index && 0 !== index) {
      return;
    }
    const item = this.items[index];
    if (!item || item.disabled) {
      return;
    }
    e.stopPropagation();
    const ex = new CustomEvent<MenuItem>(Menu.chooseEvent, {
      bubbles: false,
      cancelable: true,
      detail: item.data
    });
    this.dispatchEvent(ex);
    if (ex.defaultPrevented) {
      e.preventDefault();
    }
  }
}