import 'dopees-ui/lib/material-icon';
import './date-picker';
import './datetime-picker';
import './date-range-picker';
import './text-field';
import './list-picker';
import './text-field';
import './multitext-field';
import '@polymer/polymer/lib/elements/dom-if';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { ValueField, Field, FieldWrapper } from './field';
import { MultitextField } from './multitext-field';
import { ListFieldItem } from './list-field';
import { ListPicker } from './list-picker';
import { TextField } from './text-field';
import { DateTime, TimeSpan } from 'dopees-core/lib/datetime';
import { DatePicker } from './date-picker';
import { DateTimeRange } from './date-range-field';
import { DateRangePicker } from './date-range-picker';
import { TimePicker } from './time-picker';
import { DateTimePicker } from './datetime-picker';
export interface ClearablePicker {
    readonly clearable: boolean;
    computeClearable(empty: boolean, required: boolean): boolean;
    computeIconType(clearable: boolean): string;
}
declare type DecoratedFieldElement = PolymerElement & Field & FieldWrapper;
declare const BoxField_base: new (...args: any[]) => DecoratedFieldElement;
export declare class BoxField extends BoxField_base {
    static get template(): HTMLTemplateElement;
    __showHint(error: string | undefined, hint: string | undefined): boolean;
    isNonEmpty(...values: any[]): boolean;
    isEmpty(...values: any[]): boolean;
}
declare const TextBox_base: new (...args: any[]) => DecoratedFieldElement;
export declare class TextBox extends TextBox_base implements ValueField<string> {
    static get template(): HTMLTemplateElement;
    _deserializeValue(value: string | null, type: any): any;
    protected field: TextField;
    type?: string;
    placeholder?: string;
    pattern?: RegExp;
    minlength?: number;
    maxlength?: number;
    value: string;
    patternMessage?: string;
    minlengthMessage?: string;
    maxlengthMessage?: string;
    activate(): void;
    onClearClick(e: MouseEvent): void;
}
declare const MiltitextBox_base: new (...args: any[]) => DecoratedFieldElement;
export declare class MiltitextBox extends MiltitextBox_base implements ValueField<string> {
    static get template(): HTMLTemplateElement;
    protected field: MultitextField;
    type?: string;
    placeholder?: string;
    minlength?: number;
    maxlength?: number;
    value: string;
    minlengthMessage?: string;
    maxlengthMessage?: string;
    activate(): void;
    onClearClick(e: MouseEvent): void;
}
declare const ListBox_base: new (...args: any[]) => DecoratedFieldElement;
export declare class ListBox<T> extends ListBox_base implements ValueField<T | undefined> {
    static get template(): HTMLTemplateElement;
    placeholder?: string;
    name?: string;
    value: T | undefined;
    formatter: (item: T | undefined) => string;
    equality: (a: T | undefined, b: T | undefined) => boolean;
    items: Array<ListFieldItem<T>>;
    tabindex: number;
    impl: ListPicker<T>;
    constructor();
    activate(): void;
    computeEmpty(empty: boolean, placeholder: string | undefined): boolean;
    onIconClick(e: MouseEvent): void;
}
declare const DateBox_base: new (...args: any[]) => DecoratedFieldElement;
export declare class DateBox extends DateBox_base implements ValueField<DateTime | undefined> {
    static get template(): HTMLTemplateElement;
    placeholder?: string;
    name?: string;
    value: DateTime | undefined;
    formatter: (item: DateTime | undefined) => string;
    impl: DatePicker;
    activate(): void;
    computeEmpty(empty: boolean, placeholder: string | undefined): boolean;
    onIconClick(e: MouseEvent): void;
}
declare const TimeBox_base: new (...args: any[]) => PolymerElement & Field & FieldWrapper & ClearablePicker;
export declare class TimeBox extends TimeBox_base implements ValueField<TimeSpan | undefined> {
    static get template(): HTMLTemplateElement;
    placeholder?: string;
    value: TimeSpan | undefined;
    formatter: (item: TimeSpan | undefined) => string;
    startTime: TimeSpan;
    endTime: TimeSpan;
    step: TimeSpan;
    impl: TimePicker;
    constructor();
    activate(): void;
    computeEmpty(empty: boolean, placeholder: string | undefined): boolean;
    onIconClick(e: MouseEvent): void;
}
declare const DateTimeBox_base: new (...args: any[]) => PolymerElement & Field & FieldWrapper & ClearablePicker;
export declare class DateTimeBox extends DateTimeBox_base implements ValueField<DateTime | undefined> {
    static get template(): HTMLTemplateElement;
    placeholder?: string;
    value: DateTime | undefined;
    formatter: (item: DateTime | undefined) => string;
    impl: DateTimePicker;
    constructor();
    activate(): void;
    computeEmpty(empty: boolean, placeholder: string | undefined): boolean;
    onIconClick(e: MouseEvent): void;
}
declare const DateRangeBox_base: new (...args: any[]) => PolymerElement & Field & FieldWrapper & ClearablePicker;
export declare class DateRangeBox extends DateRangeBox_base implements ValueField<DateTimeRange> {
    static get template(): HTMLTemplateElement;
    private __valueChanging;
    placeholder?: string;
    name?: string;
    value: DateTimeRange;
    startDate: DateTime | undefined;
    endDate: DateTime | undefined;
    formatter: (item: DateTime | undefined) => string;
    impl: DateRangePicker;
    activate(): void;
    computeEmpty(empty: boolean, placeholder: string | undefined): boolean;
    onIconClick(e: MouseEvent): void;
}
export {};
