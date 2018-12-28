import { PolymerElement } from "@polymer/polymer/polymer-element";
import { customElement, property } from "@polymer/decorators/lib/decorators";
import { mkTemplate } from "./templates";
import view from 'button/button.pug';

@customElement('dope-button')
export class Button extends PolymerElement {
  static get template() { return mkTemplate(view); }
  @property({ type: String })
  label?: string;

  onClick (evt: MouseEvent) {
    evt.stopPropagation();
    this.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      composed: true
    }));
  }
}