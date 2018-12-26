import './time-field';
import { TimeSpan } from 'dopees-core/lib/datetime';
import { ValueField } from './field';
import { Picker } from './picker';
import { TimeField } from './time-field';
export declare class TimePicker extends Picker<TimeSpan> implements ValueField<TimeSpan | undefined> {
    static readonly template: HTMLTemplateElement;
    _deserializeValue(value: string | null, type: any): any;
    value: TimeSpan | undefined;
    formatter: (item: TimeSpan | undefined) => string;
    startTime: TimeSpan;
    endTime: TimeSpan;
    step: TimeSpan;
    innerField: TimeField;
    constructor();
    activate(): void;
}
