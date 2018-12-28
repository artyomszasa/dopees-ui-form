import './list-field';
import './picker';
import { ValueField } from './field';
import { ListField } from './list-field';
import { Picker } from './picker';
export interface ListFieldItem<T> {
    disabled?: boolean;
    icon?: string;
    data: T;
}
export declare class ListPicker<T> extends Picker<T> implements ValueField<T | undefined> {
    static readonly template: HTMLTemplateElement;
    value: T | undefined;
    equality: (a: T | undefined, b: T | undefined) => boolean;
    formatter: (item: T | undefined) => string;
    items: ListFieldItem<T>[];
    innerField: ListField<T>;
    constructor();
    activate(): void;
    observeEmpty(value: T | undefined): void;
}
