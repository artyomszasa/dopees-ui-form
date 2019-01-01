# DopeES ui form components

Provides polymer3 components for building forms.

Component anatomy:
![Anatomy](/anatomy.png)

## Definitions

**Field**
Inline (display: inline-block) elements that inherits all formatting from the context, contains no border/outline.

**Picker**
Contains placeholder or empty value. Usually the wrapped field shown in dropdown activated on focus/click.

**Box**
Picker or field wrapped in a material design-like box. Contains label, hint and error messages.

## Common interfaces and fields

Each field (including pickers and boxes) implements field interface:
```typescript
export interface Field {
  activated: boolean;
  dirty: boolean;
  readonly: boolean;
  required: boolean;
  focused: boolean;
  invalid: boolean;
  empty: boolean;
  requiredMessage?: string;
  validationMessage?: string;
  activate(): void;
  validate(): string|undefined;
}
```
where
* activated \[OUT\] -- set to true once field has received focus, otherwise false.
* dirty \[IN/OUT\] -- set to true once value has been changed due to user interaction (setting value does not affect
  this property).
* readonly \[IN\] -- when set the field is considered readonly.
* required \[IN\] -- when set the field is considered required i.e. will trigger validation error is has been activated
  and value of the field is falsy.
* invalid \[OUT\] -- set to true if validation has reported error(s).
* empty \[OUT\] -- set to true if the field has no value set.
* requiredMessage \[IN\] -- message to show if the field is required and value has not been set.
* validationMessage \[OUT\] -- contains non-empty string if field validation has failed.
* activate() -- activates the control.
* validate() -- when overridden can be used to implement custom validation.

additionally each field usually implements value-field interface:
```typescript
export interface ValueField<T> extends Field {
  value: T;
}
```
where value is the value of the field.

Each box also implments decorator interface:
```typescript
export interface FieldWrapper {
  label?: string;
  hint?: string;
}
```
where
* label \[IN\] -- label to show.
* hint \[IN\] -- hint to show.


Each real field (not wrappers like boxes) also implements validation interface:
```typescript
export interface HasValidation {
  performValidation(): void;
  validateOnFocusChange(focused: boolean): void;
}
```
yet its implementation is used internally and should not be overridden is most cases.