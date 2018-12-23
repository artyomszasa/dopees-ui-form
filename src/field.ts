import { property } from '@polymer/decorators/lib/decorators';
import { dedupingMixin } from '@polymer/polymer/lib/utils/mixin';
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
  value: T
}

export const FieldMixin = dedupingMixin(<T extends PolymerElement>(base: Ctor<T>) => {
  class SomeField extends (<Ctor<PolymerElement>>base) implements Field {

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

    activate(): void { throw new Error('activate not implemented'); }

  };
  return <Ctor<T & Field>><unknown>SomeField;
});

export const DecoratedWrapperMixin = dedupingMixin(<T extends PolymerElement>(base: Ctor<T>) => {
  class SomeDecoratedField extends (<Ctor<PolymerElement>>base) implements FieldWrapper {

    @property({ type: String })
    label?: string = '';

    @property({ type: String })
    hist?: string;

  };
  return <Ctor<T & FieldWrapper>><unknown>SomeDecoratedField;
});

export const DecoratedFieldMixin = <T extends PolymerElement>(base: Ctor<T>) => DecoratedWrapperMixin(FieldMixin(base));