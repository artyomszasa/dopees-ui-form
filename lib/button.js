var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { customElement, property } from "@polymer/decorators/lib/decorators.js";
import { mkTemplate } from "./templates.js";
const view = "<style>.body{min-width:4rem;height:2.25rem;line-height:2.25rem;font-size:0.875rem;background:transparent;color:var(--color-primary, blue);text-transform:uppercase;padding:0 .5rem;border-radius:0.125rem;cursor:pointer;border:none;outline:none;font:inherit;transition:background .35s cubic-bezier(0, 0, 0.2, 1)}.body:hover,.body:focus{background:var(--color-primary-hover, rgba(153,153,153,0.2))}.body:active{background:var(--color-primary-active, rgba(153,153,153,0.4))}\n\n/*# sourceMappingURL=button.css.map */</style><button class=\"body\" type=\"button\" on-click=\"onClick\">[[label]]</button>";
/**
 * Simple button implementation.
 */

let Button = class Button extends PolymerElement {
  static get template() {
    return mkTemplate(view);
  }
  /**
   * Triggered when users clicks the button. Fires composed click event on the button itself.
   *
   * @param evt Related mouse event.
   */


  onClick(evt) {
    evt.stopPropagation();
    this.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      composed: true
    }));
  }

};

__decorate([property({
  type: String
})], Button.prototype, "label", void 0);

Button = __decorate([customElement('dope-button')], Button);
export { Button };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVMsY0FBVCxRQUErQixxQ0FBL0I7QUFDQSxTQUFTLGFBQVQsRUFBd0IsUUFBeEIsUUFBd0MsdUNBQXhDO0FBQ0EsU0FBUyxVQUFULFFBQTJCLGdCQUEzQjtNQUNPLEk7QUFFUDs7OztBQUlBLElBQWEsTUFBTSxHQUFuQixNQUFhLE1BQWIsU0FBNEIsY0FBNUIsQ0FBMEM7QUFDeEMsYUFBVyxRQUFYLEdBQW1CO0FBQUssV0FBTyxVQUFVLENBQUMsSUFBRCxDQUFqQjtBQUEwQjtBQVFsRDs7Ozs7OztBQUtBLEVBQUEsT0FBTyxDQUFDLEdBQUQsRUFBZ0I7QUFDckIsSUFBQSxHQUFHLENBQUMsZUFBSjtBQUNBLFNBQUssYUFBTCxDQUFtQixJQUFJLFVBQUosQ0FBZSxPQUFmLEVBQXdCO0FBQ3pDLE1BQUEsT0FBTyxFQUFFLElBRGdDO0FBRXpDLE1BQUEsVUFBVSxFQUFFLElBRjZCO0FBR3pDLE1BQUEsUUFBUSxFQUFFO0FBSCtCLEtBQXhCLENBQW5CO0FBS0Q7O0FBckJ1QyxDQUExQzs7QUFPRSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBRSxFQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FDVCxDQUFBLEUsZ0JBQUEsRSxPQUFBLEUsS0FBZSxDQUFmLENBQUE7O0FBUFcsTUFBTSxHQUFBLFVBQUEsQ0FBQSxDQURsQixhQUFhLENBQUMsYUFBRCxDQUNLLENBQUEsRUFBTixNQUFNLENBQU47U0FBQSxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudCc7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJ0Bwb2x5bWVyL2RlY29yYXRvcnMvbGliL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgbWtUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGVzJztcbmltcG9ydCB2aWV3IGZyb20gJ2J1dHRvbi9idXR0b24ucHVnJztcblxuLyoqXG4gKiBTaW1wbGUgYnV0dG9uIGltcGxlbWVudGF0aW9uLlxuICovXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1idXR0b24nKVxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUodmlldyk7IH1cblxuICAvKipcbiAgICogR2V0cyBvciBzZXRzIGxhYmVsIG9mIHRoZSBidXR0b24uIExhYmVsIGlzIHRoZSB0ZXh0IHNob3duIHdpdGhpbiB0aGUgYnV0dG9uLlxuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIGxhYmVsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUcmlnZ2VyZWQgd2hlbiB1c2VycyBjbGlja3MgdGhlIGJ1dHRvbi4gRmlyZXMgY29tcG9zZWQgY2xpY2sgZXZlbnQgb24gdGhlIGJ1dHRvbiBpdHNlbGYuXG4gICAqXG4gICAqIEBwYXJhbSBldnQgUmVsYXRlZCBtb3VzZSBldmVudC5cbiAgICovXG4gIG9uQ2xpY2soZXZ0OiBNb3VzZUV2ZW50KSB7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudCgnY2xpY2snLCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgIGNvbXBvc2VkOiB0cnVlXG4gICAgfSkpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9