import { PolymerElement } from '@polymer/polymer/polymer-element';
import { DateTime } from 'dopees-core/lib/datetime';
export declare const months: {
    value: number;
    text: string;
}[];
interface DayCell {
    date: DateTime;
    active: boolean;
    selected: boolean;
    today: boolean;
}
interface YearMonth {
    year: number;
    month: number;
}
export declare class Calandar extends PolymerElement {
    static readonly chooseEvent = "choose";
    static readonly template: HTMLTemplateElement;
    __suppressSelectors: any;
    currentYear?: number;
    currentMonth?: number;
    shown: YearMonth;
    years: number[];
    months: {
        value: number;
        text: string;
    }[];
    cells: DayCell[];
    selection: (date: DateTime) => boolean;
    focused: boolean;
    yearsFocused: boolean;
    monthsFocused: boolean;
    yearSelector: HTMLSelectElement;
    monthSelector: HTMLSelectElement;
    constructor();
    __eq(a: any, b: any): boolean;
    computeCells(): void;
    currentYearChanged(year: number | undefined): void;
    currentMonthChanged(month: number | undefined): void;
    observeFocused(yearsFocused: boolean, monthsFocused: boolean): void;
    onYearChange(): void;
    onYearsBlur(): void;
    onYearsFocus(): void;
    onMonthChange(): void;
    onMonthsBlur(): void;
    onMonthsFocus(): void;
    onPrevClick(e: MouseEvent): void;
    onNextClick(e: MouseEvent): void;
    onSelectClick(e: MouseEvent): void;
    onCellClick(e: MouseEvent): void;
}
export {};
