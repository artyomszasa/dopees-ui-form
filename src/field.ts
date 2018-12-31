import { property, observe } from '@polymer/decorators/lib/decorators';
import { dedupingMixin } from '@polymer/polymer/lib/utils/mixin';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { Ctor } from 'src/helpers';

export const keyIsField = Symbol('isField');

export const instanceofField = <T extends HTMLElement>(node: T): node is T&Field => {
  let proto = node.constructor;
  while (proto) {
    if (true === proto[keyIsField]) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
};

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
  validate(): string|undefined;
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

const keyLastFocused = Symbol('lastFocused');

type PolymerField = PolymerElement&Field;

export const ValidationMixin = dedupingMixin(<T extends PolymerField>(base: Ctor<T>) => {
  class SomeFieldWithValidation extends (<Ctor<PolymerField>> base) implements HasValidation {

    @observe('value')
    performValidation() {
      if (this.activated) {
        this.validationMessage = this.validate();
      }
    }

    @observe('focused')
    validateOnFocusChange(focused: boolean) {
      const lastFocused = this[keyLastFocused] || false;
      if (focused || !lastFocused) {
        return;
      }
      this.validationMessage = this.validate();
    }
  }
  return <Ctor<T&HasValidation>> <unknown> SomeFieldWithValidation;
});

export const FieldMixin = dedupingMixin(<T extends PolymerElement>(base: Ctor<T>) => {
  class SomeField extends (<Ctor<PolymerElement>> base) implements Field {

    @property({ type: Boolean, notify: true, reflectToAttribute: true })
    activated: boolean = false;

    @property({ type: Boolean, notify: true, reflectToAttribute: true })
    dirty: boolean = false;

    @property({ type: Boolean, reflectToAttribute: true })
    readonly: boolean = false;

    @property({ type: Boolean, reflectToAttribute: true })
    required: boolean = false;

    @property({ type: Boolean, notify: true, reflectToAttribute: true })
    focused: boolean = false;

    @property({ type: Boolean, notify: true, reflectToAttribute: true })
    invalid: boolean = false;

    @property({ type: Boolean, notify: true, reflectToAttribute: true })
    empty!: boolean;

    @property({ type: String })
    requiredMessage?: string;

    @property({ type: String, notify: true })
    validationMessage?: string;

    activate(): void { throw new Error('activate not implemented'); }

    validate() { return undefined; }

    @observe('validationMessage')
    validationMessageChanged(validationMessage: string|undefined) {
      this.invalid = !!(validationMessage);
    }
  }
  SomeField.constructor[keyIsField] = true;
  return <Ctor<T & Field>> <unknown> SomeField;
});

export const DecoratedWrapperMixin = dedupingMixin(<T extends PolymerElement>(base: Ctor<T>) => {
  class SomeDecoratedField extends (<Ctor<PolymerElement>> base) implements FieldWrapper {

    @property({ type: String })
    label?: string = '';

    @property({ type: String })
    hint?: string;
  }
  return <Ctor<T & FieldWrapper>> <unknown> SomeDecoratedField;
});

export const DecoratedFieldMixin = <T extends PolymerElement>(base: Ctor<T>) => DecoratedWrapperMixin(FieldMixin(base));
