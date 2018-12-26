import './datetime-field';
import { DateTime } from 'dopees-core/lib/datetime';
import { ValueField } from './field';
import { Picker } from './picker';
import { DateTimeField } from './datetime-field';
export declare class DateTimePicker extends Picker<DateTime> implements ValueField<DateTime | undefined> {
    static readonly template: HTMLTemplateElement;
    _deserializeValue(value: string | null, type: any): any;
    value: DateTime | undefined;
    formatter: (item: DateTime | undefined) => string;
    innerField: DateTimeField;
    constructor();
    activate(): void;
}
