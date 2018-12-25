import './date-range-field/date-range-field';
import { DateTime } from 'dopees-core/lib/datetime';
import { ValueField } from './field';
import { Picker } from './picker/picker';
import { DateField } from './date-field/date-field';
import { DateTimeRange } from './date-range-field/date-range-field';
export declare class DateRangePicker extends Picker<DateTimeRange> implements ValueField<DateTimeRange> {
    static readonly template: HTMLTemplateElement;
    private __valueChanging;
    value: DateTimeRange;
    startDate: DateTime | undefined;
    endDate: DateTime | undefined;
    formatter: (item: DateTimeRange) => string;
    selection: (date: DateTime) => boolean;
    innerField: DateField;
    constructor();
    activate(): void;
    forceEmpty(empty: boolean): void;
    observeEmpty(value: DateTimeRange | undefined): void;
    valueChanged(value: DateTimeRange): void;
    valuesChanged(start: DateTime | undefined, end: DateTime | undefined): void;
}
