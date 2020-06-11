import { PolymerElement } from '@polymer/polymer/polymer-element';
import { ValueField } from './field';
declare const MultitextField_base: new (...args: any[]) => PolymerElement & import("./field").Field;
export declare class MultitextField extends MultitextField_base implements ValueField<string> {
    static get template(): HTMLTemplateElement;
    type?: string;
    placeholder?: string;
    minlength?: number;
    maxlength?: number;
    name?: string;
    value: string;
    minlengthMessage?: string;
    maxlengthMessage?: string;
    native: HTMLTextAreaElement;
    pre: HTMLDivElement;
    private updateHeight;
    activate(): void;
    onKeydown(e: KeyboardEvent): void;
    onChange(e: Event): void;
    onBlur(): void;
    onFocus(): void;
    validate(): string | undefined;
    valueChanged(value: string): void;
}
export {};
