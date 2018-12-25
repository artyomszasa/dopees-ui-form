import '../calendar/calendar';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { DateTime } from 'dopees-core/lib/datetime';
import { ValueField } from '../field';
declare const DateField_base: import("../helpers").Ctor<PolymerElement & import("../field").Field>;
export declare class DateField extends DateField_base implements ValueField<DateTime | undefined> {
    static readonly template: HTMLTemplateElement;
    private __blurTimeout;
    years: number[];
    months: {
        value: number;
        text: string;
    }[];
    value: DateTime | undefined;
    tabindex?: number;
    selection: (date: DateTime) => boolean;
    calendarFocused: boolean;
    selfFocused: boolean;
    field: HTMLDivElement;
    constructor();
    activate(): void;
    observeFocused(selfFocused: boolean, calendarFocused: boolean): void;
    onBlur(): void;
    onFocus(): void;
    onCalendarChoose(e: CustomEvent<DateTime>): void;
    valueChanged(value: DateTime | null): void;
}
export {};
