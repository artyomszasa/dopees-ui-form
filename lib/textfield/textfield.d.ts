import { PolymerElement } from '@polymer/polymer/polymer-element';
import { ValueField } from '../field';
declare const TextField_base: import("../helpers").Ctor<PolymerElement & import("../field").Field>;
export declare class TextField extends TextField_base implements ValueField<string> {
    static readonly template: HTMLTemplateElement;
    type?: string;
    placeholder?: string;
    minlength?: number;
    maxlength?: number;
    name?: string;
    value: string;
    native: HTMLInputElement;
    activate(): void;
    onKeydown(e: KeyboardEvent): void;
    onChange(e: Event): void;
    onBlur(): void;
    onFocus(): void;
    valueChanged(value: string): void;
}
export {};
