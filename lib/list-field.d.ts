import './menu';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { ValueField } from './field';
import { MenuItem } from './menu';
export interface ListFieldItem<T> {
    /** Whether item is disabled. */
    readonly disabled?: boolean;
    /** Icon to show if any. */
    readonly icon?: string;
    /** Underlying value of the item. */
    readonly data: T;
}
declare const ListField_base: new (...args: any[]) => PolymerElement & import("./field").Field;
export declare class ListField<T> extends ListField_base implements ValueField<T | undefined> {
    static get template(): HTMLTemplateElement;
    value: T | undefined;
    tabindex?: number;
    formatter: (item: T | undefined) => string;
    equality: (a: T | undefined, b: T | undefined) => boolean;
    items: Array<ListFieldItem<T>>;
    placeholder?: string;
    /**
     * Bound to underlying menu property.
     */
    selectedIndex: number;
    wrapper: HTMLDivElement;
    constructor();
    activate(): void;
    onBlur(): void;
    onFocus(): void;
    onMenuChoose(e: CustomEvent<T>): void;
    toMenuItems(formatter: (item: T | undefined) => string, items: Array<ListFieldItem<T>>, required: boolean | undefined, placeholder: string | undefined): MenuItem[];
    observeEmpty(value: T | undefined): void;
    observeSelectedIndex(value: T | undefined, items: Array<ListFieldItem<T>>, required: boolean | undefined): void;
}
export {};
