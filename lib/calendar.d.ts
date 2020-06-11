import { PolymerElement } from '@polymer/polymer/polymer-element';
import { DateTime } from 'dopees-core/lib/datetime';
export declare const months: {
    value: number;
    text: string;
}[];
interface YearMonth {
    year: number;
    month: number;
}
/**
 * Implements calendar chooser with optionally selected days.
 */
export declare class Calandar extends PolymerElement {
    static get template(): HTMLTemplateElement;
    /**
     * Name of the event fired when user clicks some day.
     */
    static readonly chooseEvent = "choose";
    private __suppressSelectors;
    /**
     * Gets or sets the currently selected year.
     */
    currentYear?: number;
    /**
     * Gets or sets the currently selected month.
     */
    currentMonth?: number;
    /**
     * Gets or sets the currently set year and month as a single object.
     */
    shown: YearMonth;
    /**
     * Gets or sets selectable years. Defaults to 1980..2030.
     */
    years: number[];
    /**
     * Gets or sets month strings.
     */
    months: Array<{
        value: number;
        text: string;
    }>;
    private cells;
    /**
     * Gets ot sets function that determines whether a single day is selected. Usually srt by the wrapping field to
     * visually reflect its state.
     */
    selection: (date: DateTime) => boolean;
    /**
     * Is set to _true_ if calendar has focus.
     */
    focused: boolean;
    private yearsFocused;
    private monthsFocused;
    private yearSelector;
    private monthSelector;
    constructor();
    /**
     * Used to check value strict equality in the polymer bindings.
     */
    protected __eq(a: any, b: any): boolean;
    /**
     * Reevaluates the calendar triggering rerendering.
     */
    computeCells(): void;
    /**
     * Updates the year selector control to the actually selected value.
     *
     * @param year Selected value.
     */
    currentYearChanged(year: number | undefined): void;
    /**
     * Updates the month selector control to the actually selected value.
     *
     * @param year Selected value.
     */
    currentMonthChanged(month: number | undefined): void;
    /**
     * Updates value of the _focused_ field with respect to the focos state of the selectors.
     *
     * @param yearsFocused Whether year selector is focused.
     * @param monthsFocused Whether month selector is focused.
     */
    observeFocused(yearsFocused: boolean, monthsFocused: boolean): void;
    /**
     * Handles year selection change.
     */
    protected onYearChange(): void;
    /**
     * Handles year blur event.
     */
    protected onYearsBlur(): void;
    /**
     * Handles year focus event.
     */
    protected onYearsFocus(): void;
    /**
     * Handles month selection change.
     */
    protected onMonthChange(): void;
    /**
     * Handles months blur event.
     */
    protected onMonthsBlur(): void;
    /**
     * Handles months focus event.
     */
    protected onMonthsFocus(): void;
    /**
     * Handles previous month button click.
     */
    protected onPrevClick(e: MouseEvent): void;
    /**
     * Handles next month button click.
     */
    protected onNextClick(e: MouseEvent): void;
    /**
     * Only stops event propagation.
     *
     * @param e Related event.
     */
    protected onSelectClick(e: MouseEvent): void;
    /**
     * Handles cell button click. Fires choose event usually consumed by the wrapping field control.
     */
    protected onCellClick(e: MouseEvent): void;
}
export {};
