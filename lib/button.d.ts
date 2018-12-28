import { PolymerElement } from "@polymer/polymer/polymer-element";
export declare class Button extends PolymerElement {
    static readonly template: HTMLTemplateElement;
    label?: string;
    onClick(evt: MouseEvent): void;
}
