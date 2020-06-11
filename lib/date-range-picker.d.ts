import './date-range-field';
import { DateTime } from 'dopees-core/lib/datetime';
import { ValueField } from './field';
import { Picker } from './picker';
import { DateTimeRange, DateRangeField } from './date-range-field';
export declare class DateRangePicker extends Picker<DateTimeRange> implements ValueField<DateTimeRange> {
    static get template(): HTMLTemplateElement;
    private __valueChanging;
    value: DateTimeRange;
    startDate: DateTime | undefined;
    endDate: DateTime | undefined;
    formatter: (item: DateTimeRange) => string;
    selection: (date: DateTime) => boolean;
    innerField: DateRangeField;
    constructor();
    activate(): void;
    forceEmpty(empty: boolean): void;
    observeEmpty(value: DateTimeRange | undefined): void;
    valuesChanged(start: DateTime | undefined, end: DateTime | undefined): void;
}
