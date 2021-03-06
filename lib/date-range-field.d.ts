import './calendar';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { ValueField } from './field';
import { DateTime } from 'dopees-core/lib/datetime';
export interface DateTimeRange {
    start?: DateTime;
    end?: DateTime;
}
declare const DateRangeField_base: new (...args: any[]) => PolymerElement & import("./field").Field;
export declare class DateRangeField extends DateRangeField_base implements ValueField<DateTimeRange> {
    static get template(): HTMLTemplateElement;
    private __blurTimeout;
    private __valueChanging;
    private __target;
    years: number[];
    months: Array<{
        value: number;
        text: string;
    }>;
    startDate: DateTime | undefined;
    endDate: DateTime | undefined;
    tabindex?: number;
    selection: (date: DateTime) => boolean;
    value: DateTimeRange;
    calendarFocused: boolean;
    selfFocused: boolean;
    field: HTMLDivElement;
    constructor();
    activate(): void;
    focusedChanged(focused: boolean): void;
    observeFocused(selfFocused: boolean, calendarFocused: boolean): void;
    onBlur(): void;
    onFocus(): void;
    onCalendarChoose(e: CustomEvent<DateTime>): void;
    valueChanged(value: DateTimeRange): void;
    valuesChanged(start: DateTime | undefined, end: DateTime | undefined): void;
}
export {};
