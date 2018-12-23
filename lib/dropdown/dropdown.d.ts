import { PolymerElement } from "@polymer/polymer/polymer-element";
export declare class DopeDropDown<T> extends PolymerElement {
    static readonly template: HTMLTemplateElement;
    placeholder?: string;
    empty: boolean;
    formatter: (value: T | undefined) => string;
    opened: boolean;
    value: T | undefined;
    constructor();
    observeValue(value: T | undefined): void;
    open(): void;
    close(): void;
}
