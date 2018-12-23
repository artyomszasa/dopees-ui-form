import '@polymer/polymer/lib/elements/dom-if';
import '@polymer/polymer/lib/elements/dom-repeat';
import '../menu/menu';
import '../dropdown/dropdown';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { ValueField } from '../field';
import { DopeDropDown } from 'src/dropdown/dropdown';
import { MenuItem } from 'src/menu/menu';
export interface ListFieldItem<T> {
    disabled?: boolean;
    icon?: string;
    data: T;
}
declare const ListField_base: import("../helpers").Ctor<PolymerElement & import("../field").Field>;
export declare class ListField<T> extends ListField_base implements ValueField<T | undefined> {
    static readonly template: HTMLTemplateElement;
    __blurTimeout: any;
    placeholder?: string;
    name?: string;
    value: T | undefined;
    formatter: (item: T | undefined) => string;
    items: ListFieldItem<T>[];
    tabindex: number;
    dropDown: DopeDropDown<T>;
    wrapper: HTMLDivElement;
    constructor();
    activate(): void;
    focusedChanged(focused: boolean): void;
    onMenuChoose(e: CustomEvent<T>): void;
    onBlur(): void;
    onFocus(): void;
    toMenuItems(formatter: (item: T | undefined) => string, items: ListFieldItem<T>[]): MenuItem[];
    observeEmpty(value: T | undefined, placeholder: string | undefined): void;
    valueChanged(value: T | undefined): void;
}
export {};
