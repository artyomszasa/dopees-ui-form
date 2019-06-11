import { PolymerElement } from '@polymer/polymer/polymer-element';
import { ValueField } from './field';
declare const TextField_base: new (...args: any[]) => PolymerElement & import("./field").Field & import("./field").HasValidation;
export declare class TextField extends TextField_base implements ValueField<string> {
    static readonly template: HTMLTemplateElement;
    _deserializeValue(value: string | null, type: any): any;
    type?: string;
    placeholder?: string;
    pattern?: RegExp;
    minlength?: number;
    maxlength?: number;
    value: string;
    patternMessage?: string;
    minlengthMessage?: string;
    maxlengthMessage?: string;
    native: HTMLInputElement;
    activate(): void;
    onKeydown(e: KeyboardEvent): void;
    onChange(e: Event): void;
    onBlur(): void;
    onFocus(): void;
    validate(): string | undefined;
    valueChanged(value: string): void;
}
export {};
