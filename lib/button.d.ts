import { PolymerElement } from '@polymer/polymer/polymer-element';
/**
 * Simple button implementation.
 */
export declare class Button extends PolymerElement {
    static readonly template: HTMLTemplateElement;
    /**
     * Gets or sets label of the button. Label is the text shown within the button.
     */
    label?: string;
    /**
     * Triggered when users clicks the button. Fires composed click event on the button itself.
     *
     * @param evt Related mouse event.
     */
    onClick(evt: MouseEvent): void;
}
