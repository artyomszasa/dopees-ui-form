import '../dropdown/dropdown';
import { ValueField } from '../field';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { DopeDropDown } from '../dropdown/dropdown';
export interface PickerTemplateOptions {
    implementation: string;
    css?: string;
    arguments?: {};
}
declare const Picker_base: import("../helpers").Ctor<PolymerElement & import("../field").Field>;
export declare class Picker<T> extends Picker_base {
    static createTemplate<T extends {
        new (...args: any[]): PolymerElement;
    }>(host: T, options: PickerTemplateOptions): HTMLTemplateElement;
    private __blurTimeout;
    placeholder?: string;
    tabindex?: number;
    selfFocused: boolean;
    implementationFocused: boolean;
    protected implementation: ValueField<T | undefined>;
    protected wrapper: HTMLElement;
    protected dropDown: DopeDropDown<T>;
    onFocus(): void;
    onBlur(): void;
    observeActive(selfFocused: boolean, implementationFocused: boolean): void;
}
export {};
