import 'dopees-ui/lib/material-icon';
import './text-field';
import './list-picker';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { ValueField } from './field';
import { MultitextField } from './multitextfield/multitextfield';
import { ListFieldItem } from './list-field';
import { ListPicker } from './list-picker';
import { TextField } from './text-field';
import { DateTime, TimeSpan } from 'dopees-core/lib/datetime';
import { DatePicker } from './date-picker';
import { DateTimeRange } from './date-range-field';
import { DateRangePicker } from './date-range-picker';
import { TimePicker } from './time-picker';
import { DateTimePicker } from './datetime-picker';
declare const BoxField_base: import("./helpers").Ctor<PolymerElement & import("./field").Field & import("./field").FieldWrapper>;
export declare class BoxField extends BoxField_base {
    static readonly template: HTMLTemplateElement;
    isNonEmpty(...values: any[]): boolean;
    isEmpty(...values: any[]): boolean;
}
declare const TextBox_base: import("./helpers").Ctor<PolymerElement & import("./field").Field & import("./field").FieldWrapper>;
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
declare const MiltitextBox_base: import("./helpers").Ctor<PolymerElement & import("./field").Field & import("./field").FieldWrapper>;
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
declare const ListBox_base: import("./helpers").Ctor<PolymerElement & import("./field").Field & import("./field").FieldWrapper>;
export declare class ListBox<T> extends ListBox_base implements ValueField<T | undefined> {
    static readonly template: HTMLTemplateElement;
    placeholder?: string;
    name?: string;
    value: T | undefined;
    formatter: (item: T | undefined) => string;
    equality: (a: T | undefined, b: T | undefined) => boolean;
    items: ListFieldItem<T>[];
    tabindex: number;
    impl: ListPicker<T>;
    constructor();
    activate(): void;
    computeEmpty(empty: boolean, placeholder: string | undefined): boolean;
    onIconClick(e: MouseEvent): void;
}
declare const DateBox_base: import("./helpers").Ctor<PolymerElement & import("./field").Field & import("./field").FieldWrapper>;
export declare class DateBox extends DateBox_base implements ValueField<DateTime | undefined> {
    static readonly template: HTMLTemplateElement;
    placeholder?: string;
    name?: string;
    value: DateTime | undefined;
    formatter: (item: DateTime | undefined) => string;
    impl: DatePicker;
    activate(): void;
    computeEmpty(empty: boolean, placeholder: string | undefined): boolean;
    onIconClick(e: MouseEvent): void;
}
declare const TimeBox_base: import("./helpers").Ctor<PolymerElement & import("./field").Field & import("./field").FieldWrapper>;
export declare class TimeBox extends TimeBox_base implements ValueField<TimeSpan | undefined> {
    static readonly template: HTMLTemplateElement;
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
declare const DateTimeBox_base: import("./helpers").Ctor<PolymerElement & import("./field").Field & import("./field").FieldWrapper>;
export declare class DateTimeBox extends DateTimeBox_base implements ValueField<DateTime | undefined> {
    static readonly template: HTMLTemplateElement;
    placeholder?: string;
    value: DateTime | undefined;
    formatter: (item: DateTime | undefined) => string;
    impl: DateTimePicker;
    constructor();
    activate(): void;
    computeEmpty(empty: boolean, placeholder: string | undefined): boolean;
    onIconClick(e: MouseEvent): void;
}
declare const DateRangeBox_base: import("./helpers").Ctor<PolymerElement & import("./field").Field & import("./field").FieldWrapper>;
export declare class DateRangeBox extends DateRangeBox_base implements ValueField<DateTimeRange> {
    static readonly template: HTMLTemplateElement;
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
    valueChanged(value: DateTimeRange): void;
    valuesChanged(start: DateTime | undefined, end: DateTime | undefined): void;
}
export {};
