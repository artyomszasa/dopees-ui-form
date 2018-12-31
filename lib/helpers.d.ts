export declare type Ctor<T> = new (...args: any[]) => T;
export interface WrapEventInit {
    prefix?: string;
    bubbles?: boolean;
    cancellable?: boolean;
    composed?: boolean;
}
export declare function wrapEvent<E extends Event>(originalEvent: E, init?: string | WrapEventInit): CustomEvent<E>;
