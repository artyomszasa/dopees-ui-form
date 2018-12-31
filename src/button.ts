import { PolymerElement } from '@polymer/polymer/polymer-element';
import { customElement, property } from '@polymer/decorators/lib/decorators';
import { mkTemplate } from './templates';
import view from 'button/button.pug';

/**
 * Simple button implementation.
 */
@customElement('dope-button')
export class Button extends PolymerElement {
  static get template() { return mkTemplate(view); }

  /**
   * Gets or sets label of the button. Label is the text shown within the button.
   */
  @property({ type: String })
  label?: string;

  /**
   * Triggered when users clicks the button. Fires composed click event on the button itself.
   *
   * @param evt Related mouse event.
   */
  onClick(evt: MouseEvent) {
    evt.stopPropagation();
    this.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      composed: true
    }));
  }
}
