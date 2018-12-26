import './date-field';
import { DateTime } from 'dopees-core/lib/datetime';
import { ValueField } from './field';
import { Picker } from './picker';
import { DateField } from './date-field';
export declare class DatePicker extends Picker<DateTime> implements ValueField<DateTime | undefined> {
    static readonly template: HTMLTemplateElement;
    value: DateTime | undefined;
    formatter: (item: DateTime | undefined) => string;
    selection: (date: DateTime) => boolean;
    innerField: DateField;
    constructor();
    activate(): void;
    observeEmpty(value: DateTime | undefined): void;
}
