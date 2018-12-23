import { PolymerElement } from '@polymer/polymer/polymer-element';
import { Ctor } from 'src/helpers';
export interface Field {
    /** Denotes field dirtiness. Field is considered dirty if its value has changed since last commit. */
    dirty: boolean;
    /** Defines whether field value is readonly. Usually defined by the container element. */
    readonly: boolean;
    /** Defines whether field value is required. Usually defined by the container element. */
    required: boolean;
    /** Denotes field activeness. _true_ is the field is focused, _false_ otherwise. */
    focused: boolean;
    /** Denotes field validity computed using field specific constraint validation. */
    invalid: boolean;
    /** Denotes field emptiness. Concerete field implementation defines when field is considered empty. */
    empty: boolean;
    /** Activates field. */
    activate(): void;
}
export interface FieldWrapper {
    label?: string;
    hint?: string;
}
export interface ValueField<T> extends Field {
    value: T;
}
export declare const FieldMixin: <T extends PolymerElement>(base: Ctor<T>) => Ctor<T & Field>;
export declare const DecoratedWrapperMixin: <T extends PolymerElement>(base: Ctor<T>) => Ctor<T & FieldWrapper>;
export declare const DecoratedFieldMixin: <T extends PolymerElement>(base: Ctor<T>) => Ctor<T & Field & FieldWrapper>;
