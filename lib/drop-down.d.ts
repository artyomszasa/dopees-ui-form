import { PolymerElement } from '@polymer/polymer/polymer-element';
export declare class DopeDropDown<T> extends PolymerElement {
    static readonly template: HTMLTemplateElement;
    placeholder?: string;
    empty: boolean;
    formatter: (value: T | undefined) => string;
    opened: boolean;
    value: T | undefined;
    forcedEmpty: boolean;
    constructor();
    __or(...values: boolean[]): boolean;
    observeValue(value: T | undefined): void;
    open(): void;
    close(): void;
}
