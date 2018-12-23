var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { property } from "@polymer/decorators/lib/decorators.js";
import { dedupingMixin } from "@polymer/polymer/lib/utils/mixin.js";
export const FieldMixin = dedupingMixin(base => {
  class SomeField extends base {
    constructor() {
      super(...arguments);
      this.dirty = false;
      this.readonly = false;
      this.required = false;
      this.focused = false;
      this.invalid = false;
    }

    activate() {
      throw new Error('activate not implemented');
    }

  }

  __decorate([property({
    type: Boolean,
    notify: true,
    reflectToAttribute: true
  })], SomeField.prototype, "dirty", void 0);

  __decorate([property({
    type: Boolean,
    reflectToAttribute: true
  })], SomeField.prototype, "readonly", void 0);

  __decorate([property({
    type: Boolean,
    reflectToAttribute: true
  })], SomeField.prototype, "required", void 0);

  __decorate([property({
    type: Boolean,
    notify: true,
    reflectToAttribute: true
  })], SomeField.prototype, "focused", void 0);

  __decorate([property({
    type: Boolean,
    notify: true,
    reflectToAttribute: true
  })], SomeField.prototype, "invalid", void 0);

  __decorate([property({
    type: Boolean,
    notify: true,
    reflectToAttribute: true
  })], SomeField.prototype, "empty", void 0);

  ;
  return SomeField;
});
export const DecoratedWrapperMixin = dedupingMixin(base => {
  class SomeDecoratedField extends base {
    constructor() {
      super(...arguments);
      this.label = '';
    }

  }

  __decorate([property({
    type: String
  })], SomeDecoratedField.prototype, "label", void 0);

  __decorate([property({
    type: String
  })], SomeDecoratedField.prototype, "hist", void 0);

  ;
  return SomeDecoratedField;
});
export const DecoratedFieldMixin = base => DecoratedWrapperMixin(FieldMixin(base));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3QyxrQkFBeEM7QUFDRCxDQVhpRCxDQUEzQztBQWFQLE9BQU8sTUFBTSxtQkFBbUIsR0FBOEIsSUFBM0IsSUFBNkMscUJBQXFCLENBQUMsVUFBVSxDQUFDLElBQUQsQ0FBWCxDQUE5RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnQHBvbHltZXIvZGVjb3JhdG9ycy9saWIvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW4nO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudCc7XG5pbXBvcnQgeyBDdG9yIH0gZnJvbSAnc3JjL2hlbHBlcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkIHtcbiAgLyoqIERlbm90ZXMgZmllbGQgZGlydGluZXNzLiBGaWVsZCBpcyBjb25zaWRlcmVkIGRpcnR5IGlmIGl0cyB2YWx1ZSBoYXMgY2hhbmdlZCBzaW5jZSBsYXN0IGNvbW1pdC4gKi9cbiAgZGlydHk6IGJvb2xlYW47XG4gIC8qKiBEZWZpbmVzIHdoZXRoZXIgZmllbGQgdmFsdWUgaXMgcmVhZG9ubHkuIFVzdWFsbHkgZGVmaW5lZCBieSB0aGUgY29udGFpbmVyIGVsZW1lbnQuICovXG4gIHJlYWRvbmx5OiBib29sZWFuO1xuICAvKiogRGVmaW5lcyB3aGV0aGVyIGZpZWxkIHZhbHVlIGlzIHJlcXVpcmVkLiBVc3VhbGx5IGRlZmluZWQgYnkgdGhlIGNvbnRhaW5lciBlbGVtZW50LiAqL1xuICByZXF1aXJlZDogYm9vbGVhbjtcbiAgLyoqIERlbm90ZXMgZmllbGQgYWN0aXZlbmVzcy4gX3RydWVfIGlzIHRoZSBmaWVsZCBpcyBmb2N1c2VkLCBfZmFsc2VfIG90aGVyd2lzZS4gKi9cbiAgZm9jdXNlZDogYm9vbGVhbjtcbiAgLyoqIERlbm90ZXMgZmllbGQgdmFsaWRpdHkgY29tcHV0ZWQgdXNpbmcgZmllbGQgc3BlY2lmaWMgY29uc3RyYWludCB2YWxpZGF0aW9uLiAqL1xuICBpbnZhbGlkOiBib29sZWFuO1xuICAvKiogRGVub3RlcyBmaWVsZCBlbXB0aW5lc3MuIENvbmNlcmV0ZSBmaWVsZCBpbXBsZW1lbnRhdGlvbiBkZWZpbmVzIHdoZW4gZmllbGQgaXMgY29uc2lkZXJlZCBlbXB0eS4gKi9cbiAgZW1wdHk6IGJvb2xlYW47XG4gIC8qKiBBY3RpdmF0ZXMgZmllbGQuICovXG4gIGFjdGl2YXRlKCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGRXcmFwcGVyIHtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGhpbnQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFsdWVGaWVsZDxUPiBleHRlbmRzIEZpZWxkIHtcbiAgdmFsdWU6IFRcbn1cblxuZXhwb3J0IGNvbnN0IEZpZWxkTWl4aW4gPSBkZWR1cGluZ01peGluKDxUIGV4dGVuZHMgUG9seW1lckVsZW1lbnQ+KGJhc2U6IEN0b3I8VD4pID0+IHtcbiAgY2xhc3MgU29tZUZpZWxkIGV4dGVuZHMgKDxDdG9yPFBvbHltZXJFbGVtZW50Pj5iYXNlKSBpbXBsZW1lbnRzIEZpZWxkIHtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIG5vdGlmeTogdHJ1ZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlIH0pXG4gICAgZGlydHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSB9KVxuICAgIHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUgfSlcbiAgICByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgbm90aWZ5OiB0cnVlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUgfSlcbiAgICBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBub3RpZnk6IHRydWUsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSB9KVxuICAgIGludmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIG5vdGlmeTogdHJ1ZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlIH0pXG4gICAgZW1wdHkhOiBib29sZWFuO1xuXG4gICAgYWN0aXZhdGUoKTogdm9pZCB7IHRocm93IG5ldyBFcnJvcignYWN0aXZhdGUgbm90IGltcGxlbWVudGVkJyk7IH1cblxuICB9O1xuICByZXR1cm4gPEN0b3I8VCAmIEZpZWxkPj48dW5rbm93bj5Tb21lRmllbGQ7XG59KTtcblxuZXhwb3J0IGNvbnN0IERlY29yYXRlZFdyYXBwZXJNaXhpbiA9IGRlZHVwaW5nTWl4aW4oPFQgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudD4oYmFzZTogQ3RvcjxUPikgPT4ge1xuICBjbGFzcyBTb21lRGVjb3JhdGVkRmllbGQgZXh0ZW5kcyAoPEN0b3I8UG9seW1lckVsZW1lbnQ+PmJhc2UpIGltcGxlbWVudHMgRmllbGRXcmFwcGVyIHtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICAgIGxhYmVsPzogc3RyaW5nID0gJyc7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgICBoaXN0Pzogc3RyaW5nO1xuXG4gIH07XG4gIHJldHVybiA8Q3RvcjxUICYgRmllbGRXcmFwcGVyPj48dW5rbm93bj5Tb21lRGVjb3JhdGVkRmllbGQ7XG59KTtcblxuZXhwb3J0IGNvbnN0IERlY29yYXRlZEZpZWxkTWl4aW4gPSA8VCBleHRlbmRzIFBvbHltZXJFbGVtZW50PihiYXNlOiBDdG9yPFQ+KSA9PiBEZWNvcmF0ZWRXcmFwcGVyTWl4aW4oRmllbGRNaXhpbihiYXNlKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==