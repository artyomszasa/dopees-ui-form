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
let Button = class Button extends PolymerElement {
  static get template() {
    return mkTemplate(view);
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVMsY0FBVCxRQUErQixxQ0FBL0I7QUFDQSxTQUFTLGFBQVQsRUFBd0IsUUFBeEIsUUFBd0MsdUNBQXhDO0FBQ0EsU0FBUyxVQUFULFFBQTJCLGdCQUEzQjtNQUNPLEk7QUFHUCxJQUFhLE1BQU0sR0FBbkIsTUFBYSxNQUFiLFNBQTRCLGNBQTVCLENBQTBDO0FBQ3hDLGFBQVcsUUFBWCxHQUFtQjtBQUFLLFdBQU8sVUFBVSxDQUFDLElBQUQsQ0FBakI7QUFBMEI7O0FBSWxELEVBQUEsT0FBTyxDQUFFLEdBQUYsRUFBaUI7QUFDdEIsSUFBQSxHQUFHLENBQUMsZUFBSjtBQUNBLFNBQUssYUFBTCxDQUFtQixJQUFJLFVBQUosQ0FBZSxPQUFmLEVBQXdCO0FBQ3pDLE1BQUEsT0FBTyxFQUFFLElBRGdDO0FBRXpDLE1BQUEsVUFBVSxFQUFFLElBRjZCO0FBR3pDLE1BQUEsUUFBUSxFQUFFO0FBSCtCLEtBQXhCLENBQW5CO0FBS0Q7O0FBWnVDLENBQTFDOztBQUdFLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFFLEVBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUNULENBQUEsRSxnQkFBQSxFLE9BQUEsRSxLQUFlLENBQWYsQ0FBQTs7QUFIVyxNQUFNLEdBQUEsVUFBQSxDQUFBLENBRGxCLGFBQWEsQ0FBQyxhQUFELENBQ0ssQ0FBQSxFQUFOLE1BQU0sQ0FBTjtTQUFBLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHkgfSBmcm9tIFwiQHBvbHltZXIvZGVjb3JhdG9ycy9saWIvZGVjb3JhdG9yc1wiO1xuaW1wb3J0IHsgbWtUZW1wbGF0ZSB9IGZyb20gXCIuL3RlbXBsYXRlc1wiO1xuaW1wb3J0IHZpZXcgZnJvbSAnYnV0dG9uL2J1dHRvbi5wdWcnO1xuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1idXR0b24nKVxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUodmlldyk7IH1cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIGxhYmVsPzogc3RyaW5nO1xuXG4gIG9uQ2xpY2sgKGV2dDogTW91c2VFdmVudCkge1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICBjb21wb3NlZDogdHJ1ZVxuICAgIH0pKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=