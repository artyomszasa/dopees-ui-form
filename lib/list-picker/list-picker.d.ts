import '../list-field/list-field';
import '../picker/picker';
import { ValueField } from '../field';
import { ListField } from '../list-field/list-field';
import { Picker } from '../picker/picker';
export interface ListFieldItem<T> {
    disabled?: boolean;
    icon?: string;
    data: T;
}
export declare class ListPicker<T> extends Picker<T> implements ValueField<T | undefined> {
    static readonly template: HTMLTemplateElement;
    value: T | undefined;
    formatter: (item: T | undefined) => string;
    items: ListFieldItem<T>[];
    innerField: ListField<T>;
    constructor();
    activate(): void;
    observeEmpty(value: T | undefined): void;
}
