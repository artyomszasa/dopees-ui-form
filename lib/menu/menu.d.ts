import '@polymer/polymer/lib/elements/dom-if';
import '@polymer/polymer/lib/elements/dom-repeat';
import { PolymerElement } from "@polymer/polymer/polymer-element";
export interface MenuItem {
    text: string;
    disabled?: boolean;
    icon?: string;
    data: any;
}
export declare class Menu extends PolymerElement {
    static readonly chooseEvent = "choose";
    static readonly template: HTMLTemplateElement;
    items: MenuItem[];
    selectedIndex?: number;
    __eq(a: any, b: any): boolean;
    isThruthy(a: any): boolean;
    isFalsy(a: any): boolean;
    onItemClick(e: MouseEvent): void;
}
