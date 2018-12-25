import { ListField } from './list-field/list-field';
import { TimeSpan } from 'dopees-core/lib/datetime';
export declare class TimeField extends ListField<TimeSpan> {
    static typeForProperty(propertyName: string): any;
    _deserializeValue(value: string | null, type: any): any;
    startTime: TimeSpan;
    endTime: TimeSpan;
    step: TimeSpan;
    formatter: (time: TimeSpan | undefined) => string;
    constructor();
    computeItems(startTime: TimeSpan, endTime: TimeSpan, step: TimeSpan): void;
}
