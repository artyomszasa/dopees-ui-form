import '../textfield/textfield';
import '../listfield/listfield';
import 'dopees-ui/lib/material-icon';
import { PolymerElement } from "@polymer/polymer/polymer-element";
import { ValueField } from "../field";
import { MultitextField } from "../multitextfield/multitextfield";
import { ListFieldItem, ListField } from '../listfield/listfield';
import { TextField } from '../textfield/textfield';
declare const BoxField_base: import("../helpers").Ctor<PolymerElement & import("../field").Field & import("../field").FieldWrapper>;
export declare class BoxField extends BoxField_base {
    static readonly template: HTMLTemplateElement;
}
declare const TextBox_base: import("../helpers").Ctor<PolymerElement & import("../field").Field & import("../field").FieldWrapper>;
export declare class TextBox extends TextBox_base implements ValueField<string> {
    static readonly template: HTMLTemplateElement;
    protected field: TextField;
    type?: string;
    placeholder?: string;
    minlength?: number;
    maxlength?: number;
    value: string;
    activate(): void;
    onClearClick(e: MouseEvent): void;
}
declare const MiltitextBox_base: import("../helpers").Ctor<PolymerElement & import("../field").Field & import("../field").FieldWrapper>;
export declare class MiltitextBox extends MiltitextBox_base implements ValueField<string> {
    static readonly template: HTMLTemplateElement;
    protected field: MultitextField;
    type?: string;
    placeholder?: string;
    minlength?: number;
    maxlength?: number;
    value: string;
    activate(): void;
}
declare const ListBox_base: import("../helpers").Ctor<PolymerElement & import("../field").Field & import("../field").FieldWrapper>;
export declare class ListBox<T> extends ListBox_base implements ValueField<T | undefined> {
    static readonly template: HTMLTemplateElement;
    placeholder?: string;
    name?: string;
    value: T | undefined;
    formatter: (item: T | undefined) => string;
    items: ListFieldItem<T>[];
    tabindex: number;
    impl: ListField<T>;
    constructor();
    activate(): void;
    computeEmpty(empty: boolean, placeholder: string | undefined): boolean;
    onIconClick(e: MouseEvent): void;
}
export {};
