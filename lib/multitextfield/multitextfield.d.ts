import { PolymerElement } from '@polymer/polymer/polymer-element';
import { ValueField } from '../field';
declare const MultitextField_base: import("../helpers").Ctor<PolymerElement & import("../field").Field>;
export declare class MultitextField extends MultitextField_base implements ValueField<string> {
    static readonly template: HTMLTemplateElement;
    type?: string;
    placeholder?: string;
    minlength?: number;
    maxlength?: number;
    name?: string;
    value: string;
    native: HTMLTextAreaElement;
    pre: HTMLDivElement;
    private updateHeight;
    activate(): void;
    onKeydown(e: KeyboardEvent): void;
    onChange(e: Event): void;
    onBlur(): void;
    onFocus(): void;
    valueChanged(value: string): void;
}
export {};
