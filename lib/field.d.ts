import { PolymerElement } from '@polymer/polymer/polymer-element';
export declare const keyIsField: unique symbol;
export declare const instanceofField: <T extends HTMLElement>(node: T) => node is T & Field;
export interface Field {
    /** Denotes whether the field has been activated at leat once. */
    activated: boolean;
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
    /** Default message to show if the input is required and no value is present. */
    requiredMessage?: string;
    /** A message describing the validation constraints that the control does not satisfy (if any). */
    validationMessage?: string;
    /** Activates field. */
    activate(): void;
    /**
     * Triggered on validation. Returns a message describing the validation constraints that the control does not satisfy
     * if any.
     */
    validate(): string | undefined;
}
export interface FieldWrapper {
    label?: string;
    hint?: string;
}
export interface ValueField<T> extends Field {
    value: T;
}
export interface HasValidation {
    performValidation(): void;
    validateOnFocusChange(focused: boolean): void;
}
declare type PolymerField = PolymerElement & Field;
export declare const ValidationMixin: <T extends PolymerField>(base: new (...args: any[]) => T) => new (...args: any[]) => T & HasValidation;
export declare const FieldMixin: <T extends PolymerElement>(base: new (...args: any[]) => T) => new (...args: any[]) => T & Field;
export declare const DecoratedWrapperMixin: <T extends PolymerElement>(base: new (...args: any[]) => T) => new (...args: any[]) => T & FieldWrapper;
export declare const DecoratedFieldMixin: <T extends PolymerElement>(base: new (...args: any[]) => T) => new (...args: any[]) => T & Field & FieldWrapper;
export {};
