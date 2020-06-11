var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import "dopees-ui/lib/material-icon.js";
import "./date-picker.js";
import "./datetime-picker.js";
import "./date-range-picker.js";
import "./text-field.js";
import "./list-picker.js";
import "./text-field.js";
import "./multitext-field.js";
import "@polymer/polymer/lib/elements/dom-if.js";
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { customElement, property, query } from "@polymer/decorators/lib/decorators.js";
import { DecoratedFieldMixin } from "./field.js";
import { mkTemplate } from "./templates.js";
import { TimeSpan } from "dopees-core/lib/datetime.js";
import { sprintf } from "dopees-core/lib/string.js";
const wrapperView = "<style>:host{display:block}:host[focused]{position:relative;z-index:2}.field{cursor:pointer;padding-top:0.375rem}.field--box{display:flex;position:relative;flex-direction:column;align-items:stretch;transition:border 350ms ease-in-out;border:0.0625rem solid var(--border-color, rgba(0,0,0,0.25));border-radius:var(--border-radius, 0.25rem);background:var(--background-color, #fff);padding:0.5rem 0.625rem 0.5rem 0.375rem}.field--hint{color:var(--border-hover-color, rgba(0,0,0,0.5));font-size:var(--hint-font-size, 0.75rem)}.field--error{color:var(--border-error-color, #ff1744);font-size:var(--error-font-size, var(--hint-font-size, 0.75rem))}.field--label{display:block;position:relative;align-self:flex-start;transform:translateZ(0);transition:all 350ms ease-in-out;opacity:.38;z-index:1;margin:0;padding:0 .5rem 0 0;width:auto;height:var(--height, 1.75rem);line-height:var(--height, 1.75rem);color:var(--text-color, #000);font-family:inherit;font-size:inherit;pointer-events:none}.field--label:empty{display:none}.field--inner{display:flex;transition:margin 350ms ease-in-out;margin-top:calc(-1 * var(--height, 1.75rem))}.field[no-label] .field--inner{margin-top:0}.field--icon::slotted(dope-material-icon){align-self:center;padding:.25rem;width:1rem;height:1rem;fill:var(--text-color, #000)}.field--icon::slotted(dope-material-icon) svg{width:1rem;height:1rem}.field--body::slotted(*){flex:1}.field:not([empty]) .field--label,.field[focused] .field--label{transform:translate3d(-0.25rem, -0.875rem, 0);opacity:1;background:var(--background-color, #fff);cursor:text;padding:0 .25rem;height:.75rem;line-height:.75rem;color:var(--border-color, rgba(0,0,0,0.25));font-size:.75rem;transform-origin:top left}.field:not([empty]) .field--label:empty,.field[focused] .field--label:empty{display:none}.field:not([empty]) .field--inner,.field[focused] .field--inner{margin-top:-0.75rem}.field:not([empty])[no-label] .field--inner,.field[focused][no-label] .field--inner{margin-top:0}.field:not([empty]):hover:not([focused]):not([invalid]) .field--label,.field[focused]:hover:not([focused]):not([invalid]) .field--label{color:var(--border-hover-color, rgba(0,0,0,0.5))}.field:hover .field--box{border:0.0625rem solid var(--border-hover-color, rgba(0,0,0,0.5))}.field[focused] .field--box{border-color:var(--color-primary-A700, blue)}.field[focused] .field--label{color:var(--color-primary-A700, blue);filter:none}.field[invalid] .field--box{border-color:var(--border-error-color, #ff1744)}.field[invalid] .field--label{color:var(--border-error-color, #ff1744)}\n\n/*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJImZpbGUiOiAiYm94LmNzcyIsCgkic291cmNlcyI6IFsKCQkiLi4vLi4vc3JjL2JveC9ib3guc2NzcyIKCV0sCgkic291cmNlc0NvbnRlbnQiOiBbCgkJIi8vLyBEZWZhdWx0IGJhY2tncm91bmQgY29sb3Jcbi8vLyBAdHlwZSBDb2xvclxuJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuLy8vIERlZmF1bHQgdGV4dCBjb2xvclxuLy8vIEB0eXBlIENvbG9yXG4kZGVmYXVsdC10ZXh0LWNvbG9yOiAjMDAwO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gICZbZm9jdXNlZF0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG59XG5cbi5maWVsZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLy8gRklYTUU6IFbDoWx0b3rDs1xuICBwYWRkaW5nLXRvcDogMC4zNzVyZW07XG5cbiAgJi0tYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIC8vIEZJWE1FOiBWw6FsdG96w7NcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMzUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgLy8gRklYTUU6IFbDoWx0b3rDs1xuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwgcmdiYSgwLCAwLCAwLCAwLjI1KSk7XG4gICAgLy8gRklYTUU6IFbDoWx0b3rDs1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMsIC4yNXJlbSk7XG4gICAgLy8gRklYTUU6IFbDoWx0b3rDs1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IsICRkZWZhdWx0LWJhY2tncm91bmQtY29sb3IpO1xuICAgIC8vIEZJWE1FOiBWw6FsdG96w7NcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC42MjVyZW0gMC41cmVtIDAuMzc1cmVtO1xuICB9XG5cbiAgJi0taGludCB7XG4gICAgLy8gRklYTUU6IFbDoWx0b3rDs1xuICAgIGNvbG9yOiB2YXIoLS1ib3JkZXItaG92ZXItY29sb3IsIHJnYmEoMCwgMCwgMCwgMC41KSk7XG4gICAgLy8gRklYTUU6IFbDoWx0b3rDs1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taGludC1mb250LXNpemUsIDAuNzVyZW0pO1xuICB9XG5cbiAgJi0tZXJyb3Ige1xuICAgIC8vIEZJWE1FOiBWw6FsdG96w7NcbiAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWVycm9yLWNvbG9yLCAjZmYxNzQ0KTtcbiAgICAvLyBGSVhNRTogVsOhbHRvesOzXG4gICAgZm9udC1zaXplOiB2YXIoLS1lcnJvci1mb250LXNpemUsIHZhcigtLWhpbnQtZm9udC1zaXplLCAuNzVyZW0pKTtcbiAgfVxuXG4gICYtLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDM1MG1zIGVhc2UtaW4tb3V0O1xuICAgIG9wYWNpdHk6IC4zODtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIC41cmVtIDAgMDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCwgMS43NXJlbSk7XG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWhlaWdodCwgMS43NXJlbSk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IsICRkZWZhdWx0LXRleHQtY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICY6ZW1wdHkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmLS1pbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMzUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLWhlaWdodCwgMS43NXJlbSkpO1xuICB9XG5cbiAgJltuby1sYWJlbF0ge1xuICAgIC5maWVsZC0taW5uZXIge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gIH1cblxuICAvLyAmLS1pY29uIHtcbiAgLy8gICBzdmcsXG4gIC8vIH1cblxuICAmLS1pY29uOjpzbG90dGVkKGRvcGUtbWF0ZXJpYWwtaWNvbikge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAvLyBGSVhNRTogVsOhbHRvesOzXG4gICAgcGFkZGluZzogLjI1cmVtO1xuICAgIC8vIEZJWE1FOiBWw6FsdG96w7NcbiAgICB3aWR0aDogMXJlbTtcbiAgICAvLyBGSVhNRTogVsOhbHRvesOzXG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIGZpbGw6IHZhcigtLXRleHQtY29sb3IsICRkZWZhdWx0LXRleHQtY29sb3IpO1xuXG4gICAgLy8gRklYTUU6IFbDoWx0b3rDs1xuICAgIHN2ZyB7XG4gICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGhlaWdodDogMXJlbTtcbiAgICB9XG4gIH1cblxuICAmLS1ib2R5OjpzbG90dGVkKCopIHtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgJjpub3QoW2VtcHR5XSksICZbZm9jdXNlZF0ge1xuICAgIC5maWVsZCB7XG4gICAgICAmLS1sYWJlbCB7XG4gICAgICAgIC8vIEZJWE1FOiBWw6FsdG96w7MvQ2FsY1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjI1cmVtLCAtMC44NzVyZW0sIDApO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLCAkZGVmYXVsdC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgICAgICAvLyBGSVhNRTogVsOhbHRvesOzXG4gICAgICAgIHBhZGRpbmc6IDAgLjI1cmVtO1xuICAgICAgICAvLyBGSVhNRTogVsOhbHRvesOzXG4gICAgICAgIGhlaWdodDogLjc1cmVtO1xuICAgICAgICAvLyBGSVhNRTogVsOhbHRvesOzXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAuNzVyZW07XG4gICAgICAgIC8vIEZJWE1FOiBWw6FsdG96w7NcbiAgICAgICAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvciwgcmdiYSgwLCAwLCAwLCAwLjI1KSk7XG4gICAgICAgIC8vIEZJWE1FOiBWw6FsdG96w7NcbiAgICAgICAgZm9udC1zaXplOiAuNzVyZW07XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuXG4gICAgICAgICY6ZW1wdHkge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi0taW5uZXIge1xuICAgICAgICAvLyBGSVhNRTogVsOhbHRvesOzXG4gICAgICAgIG1hcmdpbi10b3A6IC0wLjc1cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgICZbbm8tbGFiZWxdIHtcbiAgICAgIC5maWVsZC0taW5uZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXI6bm90KFtmb2N1c2VkXSk6bm90KFtpbnZhbGlkXSkge1xuICAgICAgLmZpZWxkLS1sYWJlbCB7XG4gICAgICAgIC8vIEZJWE1FOiBWw6FsdG96w7NcbiAgICAgICAgY29sb3I6IHZhcigtLWJvcmRlci1ob3Zlci1jb2xvciwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICAuZmllbGQtLWJveCB7XG4gICAgICAvLyBGSVhNRTogVsOhbHRvesOzXG4gICAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1ib3JkZXItaG92ZXItY29sb3IsIHJnYmEoMCwgMCwgMCwgMC41KSk7XG4gICAgfVxuICB9XG5cbiAgJltmb2N1c2VkXSB7XG4gICAgLmZpZWxkIHtcbiAgICAgICYtLWJveCB7XG4gICAgICAgIC8vIEZJWE1FOiBWw6FsdG96w7NcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LUE3MDAsIGJsdWUpO1xuICAgICAgfVxuXG4gICAgICAmLS1sYWJlbCB7XG4gICAgICAgIC8vIEZJWE1FOiBWw6FsdG96w7NcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktQTcwMCwgYmx1ZSk7XG4gICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmW2ludmFsaWRdIHtcbiAgICAuZmllbGQge1xuICAgICAgJi0tYm94IHtcbiAgICAgICAgLy8gRklYTUU6IFbDoWx0b3rDs1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1lcnJvci1jb2xvciwgI2ZmMTc0NCk7XG4gICAgICB9XG5cbiAgICAgICYtLWxhYmVsIHtcbiAgICAgICAgLy8gRklYTUU6IFbDoWx0b3rDs1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWVycm9yLWNvbG9yLCAjZmYxNzQ0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIKCV0sCgkibmFtZXMiOiBbXSwKCSJtYXBwaW5ncyI6ICJBQVFBLEFBQUEsS0FBSyxBQUFDLENBQ0osT0FBTyxDQUFFLEtBQUssQ0FNZixBQVBELEFBR0UsS0FIRyxDQUdGLEFBQUEsT0FBQyxBQUFBLENBQVMsQ0FDVCxRQUFRLENBQUUsUUFBUSxDQUNsQixPQUFPLENBQUUsQ0FBQyxDQUNYLEFBR0gsQUFBQSxNQUFNLEFBQUMsQ0FDTCxNQUFNLENBQUUsT0FBTyxDQUVmLFdBQVcsQ0FBRSxRQUFRLENBNkt0QixBQTNLRSxBQUFELFdBQU0sQUFB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 */</style><div class=\"field\" focused$=\"[[focused]]\" empty$=\"[[empty]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" invalid$=\"[[invalid]]\" no-label$=\"[[isEmpty(label)]]\"><div class=\"field--box\"><label class=\"field--label\">[[label]]</label><div class=\"field--inner\"><slot class=\"field--body\" name=\"implementation\"></slot><slot class=\"field--icon\" name=\"icon\"></slot></div></div><div class=\"field--under\"><template is=\"dom-if\" if=\"[[__showHint(validationMessage, hint)]]\"><span class=\"field--hint\">[[hint]]</span></template><template is=\"dom-if\" if=\"[[validationMessage]]\"><span class=\"field--error\">[[validationMessage]]</span></template></div></div>";
const textBoxView = "<style>:host{display:var(--field-display, inline-block);vertical-align:middle}:host([focused]){position:relative;z-index:2}dope-material-icon{transition:background 300ms ease-in-out;border-radius:50%}dope-material-icon:hover{background:var(--color-primary-50, rgba(0,0,0,0.05))}[empty] dope-material-icon,[required] dope-material-icon,[readonly] dope-material-icon{display:none}\n\n/*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJImZpbGUiOiAidGV4dC1ib3guY3NzIiwKCSJzb3VyY2VzIjogWwoJCSIuLi8uLi9zcmMvYm94L3RleHQtYm94LnNjc3MiLAoJCSIuLi8uLi9zcmMvYm94L19maWVsZC5zY3NzIgoJXSwKCSJzb3VyY2VzQ29udGVudCI6IFsKCQkiQGltcG9ydCAnZmllbGQnO1xuXG5kb3BlLW1hdGVyaWFsLWljb24ge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDMwMG1zIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgJjpob3ZlciB7XG4gICAgLy8gRklYTUU6IFbDoWx0b3rDs1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnktNTAsIHJnYmEoMCwgMCwgMCwgMC4wNSkpO1xuICB9XG59XG5cbltlbXB0eV0sXG5bcmVxdWlyZWRdLFxuW3JlYWRvbmx5XSB7XG4gIGRvcGUtbWF0ZXJpYWwtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwKCQkiOmhvc3Qge1xuICBkaXNwbGF5OiB2YXIoLS1maWVsZC1kaXNwbGF5LCBpbmxpbmUtYmxvY2spO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG46aG9zdChbZm9jdXNlZF0pIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuIgoJXSwKCSJuYW1lcyI6IFtdLAoJIm1hcHBpbmdzIjogIkFDQUEsQUFBQSxLQUFLLEFBQUMsQ0FDSixPQUFPLENBQUUsa0NBQWtDLENBQzNDLGNBQWMsQ0FBRSxNQUFNLENBQ3ZCLEFBRUQsQUFBQSxLQUFNLEVBQUEsQUFBQSxPQUFDLEFBQUEsRUFBVSxDQUNmLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLE9BQU8sQ0FBRSxDQUFDLENBQ1gsQURORCxBQUFBLGtCQUFrQixBQUFDLENBQ2pCLFVBQVUsQ0FBRSw0QkFBNEIsQ0FDeEMsYUFBYSxDQUFFLEdBQUcsQ0FNbkIsQUFSRCxBQUlFLGtCQUpnQixBQUlmLE1BQU0sQUFBQyxDQUVOLFVBQVUsQ0FBRSx5Q0FBNEMsQ0FDekQsQ0FHSCxBQUFBLEFBR0UsS0FIRCxBQUFBLEVBR0Msa0JBQWtCLEVBRnBCLEFBQUEsUUFBQyxBQUFBLEVBRUMsa0JBQWtCLEVBRHBCLEFBQUEsUUFBQyxBQUFBLEVBQ0Msa0JBQWtCLEFBQUMsQ0FDakIsT0FBTyxDQUFFLElBQUksQ0FDZCIKfQ== */</style><dope-box label=\"[[label]]\" hint=\"[[hint]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" empty=\"[[empty]]\" placeholder=\"[[placeholder]]\" validation-message=\"[[validationMessage]]\" on-click=\"activate\"><dope-text-field class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" pattern=\"[[pattern]]\" maxlength=\"[[maxlength]]\" minlength=\"[[minlength]]\" maxlength-message=\"[[maxlengthMessage]]\" minlength-message=\"[[minlengthMessage]]\" pattern-message=\"[[patternMessage]]\" required-message=\"[[requiredMessage]]\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" validation-message=\"{{validationMessage}}\" value=\"{{value}}\"></dope-text-field><dope-material-icon slot=\"icon\" type=\"close\" on-click=\"onClearClick\"></dope-material-icon></dope-box>";
const multitextBoxView = "<style>:host{display:var(--field-display, inline-block);vertical-align:middle}:host([focused]){position:relative;z-index:2}dope-material-icon{transition:background 300ms ease-in-out;border-radius:50%}dope-material-icon:hover{background:var(--color-primary-50, rgba(0,0,0,0.05))}[empty] dope-material-icon,[required] dope-material-icon{display:none}\n\n/*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJImZpbGUiOiAibXVsdGl0ZXh0LWJveC5jc3MiLAoJInNvdXJjZXMiOiBbCgkJIi4uLy4uL3NyYy9ib3gvbXVsdGl0ZXh0LWJveC5zY3NzIiwKCQkiLi4vLi4vc3JjL2JveC9fZmllbGQuc2NzcyIKCV0sCgkic291cmNlc0NvbnRlbnQiOiBbCgkJIkBpbXBvcnQgJ2ZpZWxkJztcblxuLy8gVE9ETzogQSBob3ZlciBiYWNrZ3JvdW5kb3Qgw6F0YWxha2HDrXRhbmkgYSBza2FwZS1mcm9ub3RlbmQgaWtvbmhveiBoYXNvbmzDs2FuIChhZnRlci9iZy9vcGFjaXR5LCBjdXJyZW50Q29sb3IpXG5cbmRvcGUtbWF0ZXJpYWwtaWNvbiB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMzAwbXMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAmOmhvdmVyIHtcbiAgICAvLyBGSVhNRTogVsOhbHRvesOzXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeS01MCwgcmdiYSgwLCAwLCAwLCAwLjA1KSk7XG4gIH1cbn1cblxuW2VtcHR5XSwgW3JlcXVpcmVkXSB7XG4gIGRvcGUtbWF0ZXJpYWwtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwKCQkiOmhvc3Qge1xuICBkaXNwbGF5OiB2YXIoLS1maWVsZC1kaXNwbGF5LCBpbmxpbmUtYmxvY2spO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG46aG9zdChbZm9jdXNlZF0pIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuIgoJXSwKCSJuYW1lcyI6IFtdLAoJIm1hcHBpbmdzIjogIkFDQUEsQUFBQSxLQUFLLEFBQUMsQ0FDSixPQUFPLENBQUUsa0NBQWtDLENBQzNDLGNBQWMsQ0FBRSxNQUFNLENBQ3ZCLEFBRUQsQUFBQSxLQUFNLEVBQUEsQUFBQSxPQUFDLEFBQUEsRUFBVSxDQUNmLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLE9BQU8sQ0FBRSxDQUFDLENBQ1gsQURKRCxBQUFBLGtCQUFrQixBQUFDLENBQ2pCLFVBQVUsQ0FBRSw0QkFBNEIsQ0FDeEMsYUFBYSxDQUFFLEdBQUcsQ0FNbkIsQUFSRCxBQUlFLGtCQUpnQixBQUlmLE1BQU0sQUFBQyxDQUVOLFVBQVUsQ0FBRSx5Q0FBNEMsQ0FDekQsQ0FHSCxBQUFBLEFBQ0UsS0FERCxBQUFBLEVBQ0Msa0JBQWtCLEVBRFgsQUFBQSxRQUFDLEFBQUEsRUFDUixrQkFBa0IsQUFBQyxDQUNqQixPQUFPLENBQUUsSUFBSSxDQUNkIgp9 */</style><dope-box label=\"[[label]]\" hint=\"[[hint]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" empty=\"[[empty]]\" placeholder=\"[[placeholder]]\" validation-message=\"[[validationMessage]]\" on-click=\"activate\"><dope-multitext-field class=\"raw\" slot=\"implementation\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" maxlength=\"[[maxlength]]\" minlength=\"[[minlength]]\" maxlength-message=\"[[maxlengthMessage]]\" minlength-message=\"[[minlengthMessage]]\" required-message=\"[[requiredMessage]]\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" validation-message=\"{{validationMessage}}\" dirty=\"{{dirty}}\" value=\"{{value}}\"></dope-multitext-field><dope-material-icon slot=\"icon\" type=\"close\" on-click=\"onClearClick\"></dope-material-icon></dope-box>";
const listBoxView = "<style>:host{display:var(--field-display, inline-block);vertical-align:middle}:host([focused]){position:relative;z-index:2}\n\n/*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJImZpbGUiOiAibGlzdC1ib3guY3NzIiwKCSJzb3VyY2VzIjogWwoJCSIuLi8uLi9zcmMvYm94L2xpc3QtYm94LnNjc3MiLAoJCSIuLi8uLi9zcmMvYm94L19maWVsZC5zY3NzIgoJXSwKCSJzb3VyY2VzQ29udGVudCI6IFsKCQkiQGltcG9ydCAnZmllbGQnO1xuIiwKCQkiOmhvc3Qge1xuICBkaXNwbGF5OiB2YXIoLS1maWVsZC1kaXNwbGF5LCBpbmxpbmUtYmxvY2spO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG46aG9zdChbZm9jdXNlZF0pIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuIgoJXSwKCSJuYW1lcyI6IFtdLAoJIm1hcHBpbmdzIjogIkFDQUEsQUFBQSxLQUFLLEFBQUMsQ0FDSixPQUFPLENBQUUsa0NBQWtDLENBQzNDLGNBQWMsQ0FBRSxNQUFNLENBQ3ZCLEFBRUQsQUFBQSxLQUFNLEVBQUEsQUFBQSxPQUFDLEFBQUEsRUFBVSxDQUNmLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLE9BQU8sQ0FBRSxDQUFDLENBQ1giCn0= */</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-list-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" equality=\"[[equality]]\" formatter=\"[[formatter]]\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\"></dope-list-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
const dateBoxView = "<style>:host{display:var(--field-display, inline-block);vertical-align:middle}:host([focused]){position:relative;z-index:2}\n\n/*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJImZpbGUiOiAiZGF0ZS1ib3guY3NzIiwKCSJzb3VyY2VzIjogWwoJCSIuLi8uLi9zcmMvYm94L2RhdGUtYm94LnNjc3MiLAoJCSIuLi8uLi9zcmMvYm94L19maWVsZC5zY3NzIgoJXSwKCSJzb3VyY2VzQ29udGVudCI6IFsKCQkiQGltcG9ydCAnZmllbGQnO1xuIiwKCQkiOmhvc3Qge1xuICBkaXNwbGF5OiB2YXIoLS1maWVsZC1kaXNwbGF5LCBpbmxpbmUtYmxvY2spO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG46aG9zdChbZm9jdXNlZF0pIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuIgoJXSwKCSJuYW1lcyI6IFtdLAoJIm1hcHBpbmdzIjogIkFDQUEsQUFBQSxLQUFLLEFBQUMsQ0FDSixPQUFPLENBQUUsa0NBQWtDLENBQzNDLGNBQWMsQ0FBRSxNQUFNLENBQ3ZCLEFBRUQsQUFBQSxLQUFNLEVBQUEsQUFBQSxPQUFDLEFBQUEsRUFBVSxDQUNmLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLE9BQU8sQ0FBRSxDQUFDLENBQ1giCn0= */</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-date-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" formatter=\"{{formatter}}\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\"></dope-date-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
const dateTimeBoxView = "<style>:host{display:var(--field-display, inline-block);vertical-align:middle}:host([focused]){position:relative;z-index:2}\n\n/*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJImZpbGUiOiAiZGF0ZXRpbWUtYm94LmNzcyIsCgkic291cmNlcyI6IFsKCQkiLi4vLi4vc3JjL2JveC9kYXRldGltZS1ib3guc2NzcyIsCgkJIi4uLy4uL3NyYy9ib3gvX2ZpZWxkLnNjc3MiCgldLAoJInNvdXJjZXNDb250ZW50IjogWwoJCSJAaW1wb3J0ICdmaWVsZCc7XG4iLAoJCSI6aG9zdCB7XG4gIGRpc3BsYXk6IHZhcigtLWZpZWxkLWRpc3BsYXksIGlubGluZS1ibG9jayk7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbjpob3N0KFtmb2N1c2VkXSkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG4iCgldLAoJIm5hbWVzIjogW10sCgkibWFwcGluZ3MiOiAiQUNBQSxBQUFBLEtBQUssQUFBQyxDQUNKLE9BQU8sQ0FBRSxrQ0FBa0MsQ0FDM0MsY0FBYyxDQUFFLE1BQU0sQ0FDdkIsQUFFRCxBQUFBLEtBQU0sRUFBQSxBQUFBLE9BQUMsQUFBQSxFQUFVLENBQ2YsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsT0FBTyxDQUFFLENBQUMsQ0FDWCIKfQ== */</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-datetime-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" formatter=\"{{formatter}}\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\"></dope-datetime-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
const dateRangeBoxView = "<style>:host{display:var(--field-display, inline-block);vertical-align:middle}:host([focused]){position:relative;z-index:2}\n\n/*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJImZpbGUiOiAiZGF0ZS1yYW5nZS1ib3guY3NzIiwKCSJzb3VyY2VzIjogWwoJCSIuLi8uLi9zcmMvYm94L2RhdGUtcmFuZ2UtYm94LnNjc3MiLAoJCSIuLi8uLi9zcmMvYm94L19maWVsZC5zY3NzIgoJXSwKCSJzb3VyY2VzQ29udGVudCI6IFsKCQkiQGltcG9ydCAnZmllbGQnO1xuIiwKCQkiOmhvc3Qge1xuICBkaXNwbGF5OiB2YXIoLS1maWVsZC1kaXNwbGF5LCBpbmxpbmUtYmxvY2spO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG46aG9zdChbZm9jdXNlZF0pIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuIgoJXSwKCSJuYW1lcyI6IFtdLAoJIm1hcHBpbmdzIjogIkFDQUEsQUFBQSxLQUFLLEFBQUMsQ0FDSixPQUFPLENBQUUsa0NBQWtDLENBQzNDLGNBQWMsQ0FBRSxNQUFNLENBQ3ZCLEFBRUQsQUFBQSxLQUFNLEVBQUEsQUFBQSxPQUFDLEFBQUEsRUFBVSxDQUNmLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLE9BQU8sQ0FBRSxDQUFDLENBQ1giCn0= */</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-date-range-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" formatter=\"{{formatter}}\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\" start-date=\"{{startDate}}\" end-date=\"{{endDate}}\"></dope-date-range-picker><dope-material-icon class=\"icon\" slot=\"icon\" type$=\"[[computeIconType(clearable)]]\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";
const timeBoxView = "<style>:host{display:inline-block;vertical-align:middle}:host([focused]){position:relative;z-index:2;}</style><dope-box label=\"[[label]]\" dirty=\"[[dirty]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" focused=\"[[focused]]\" invalid=\"[[invalid]]\" placeholder=\"[[placeholder]]\" empty=\"[[computeEmpty(empty, placeholder)]]\" on-click=\"activate\"><dope-time-picker class=\"raw\" slot=\"implementation\" type=\"[[type]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" required=\"[[required]]\" items=\"[[items]]\" formatter=\"{{formatter}}\" invalid=\"{{invalid}}\" focused=\"{{focused}}\" empty=\"{{empty}}\" dirty=\"{{dirty}}\" value=\"{{value}}\" start-time=\"{{startTime}}\" end-time=\"{{endTime}}\" step=\"{{step}}\"></dope-time-picker><dope-material-icon class=\"icon\" slot=\"icon\" type=\"expand more\" on-click=\"onIconClick\"></dope-material-icon></dope-box>";

const ClearablePickerMixin = base => {
  class SomeClearablePicker extends base {
    constructor() {
      super(...arguments);
      this.clearable = false;
    }

    computeClearable(empty, required) {
      return !empty && !required;
    }

    computeIconType(clearable) {
      return clearable ? 'close' : 'expand more';
    }

  }

  __decorate([property({
    type: Boolean,
    computed: 'computeClearable(empty, required)'
  })], SomeClearablePicker.prototype, "clearable", void 0);

  return SomeClearablePicker;
};

let BoxField = class BoxField extends DecoratedFieldMixin(PolymerElement) {
  static get template() {
    return mkTemplate(wrapperView);
  }

  __showHint(error, hint) {
    return !!(!error && hint);
  }

  isNonEmpty(...values) {
    return values.some(Boolean);
  }

  isEmpty(...values) {
    return !values.some(Boolean);
  }

};
BoxField = __decorate([customElement('dope-box')], BoxField);
export { BoxField };
let TextBox = class TextBox extends DecoratedFieldMixin(PolymerElement) {
  constructor() {
    super(...arguments);
    this.value = '';
  }

  static get template() {
    return mkTemplate(textBoxView);
  }

  _deserializeValue(value, type) {
    if (RegExp === type) {
      if (!value) {
        return undefined;
      }

      return new RegExp(value);
    }

    return super._deserializeValue(value, type);
  }

  activate() {
    this.field.activate();
  }

  onClearClick(e) {
    e.stopPropagation();
    e.preventDefault();
    this.value = '';
  }

};

__decorate([query('.raw')], TextBox.prototype, "field", void 0);

__decorate([property({
  type: String
})], TextBox.prototype, "type", void 0);

__decorate([property({
  type: String
})], TextBox.prototype, "placeholder", void 0);

__decorate([property({
  type: RegExp
})], TextBox.prototype, "pattern", void 0);

__decorate([property({
  type: Number,
  reflectToAttribute: true
})], TextBox.prototype, "minlength", void 0);

__decorate([property({
  type: Number,
  reflectToAttribute: true
})], TextBox.prototype, "maxlength", void 0);

__decorate([property({
  type: String,
  notify: true
})], TextBox.prototype, "value", void 0);

__decorate([property({
  type: String
})], TextBox.prototype, "patternMessage", void 0);

__decorate([property({
  type: String
})], TextBox.prototype, "minlengthMessage", void 0);

__decorate([property({
  type: String
})], TextBox.prototype, "maxlengthMessage", void 0);

TextBox = __decorate([customElement('dope-text-box')], TextBox);
export { TextBox };
let MiltitextBox = class MiltitextBox extends DecoratedFieldMixin(PolymerElement) {
  constructor() {
    super(...arguments);
    this.value = '';
  }

  static get template() {
    return mkTemplate(multitextBoxView);
  }

  activate() {
    this.field.activate();
  }

  onClearClick(e) {
    e.stopPropagation();
    e.preventDefault();
    this.value = '';
  }

};

__decorate([query('.raw')], MiltitextBox.prototype, "field", void 0);

__decorate([property({
  type: String
})], MiltitextBox.prototype, "type", void 0);

__decorate([property({
  type: String
})], MiltitextBox.prototype, "placeholder", void 0);

__decorate([property({
  type: Number,
  reflectToAttribute: true
})], MiltitextBox.prototype, "minlength", void 0);

__decorate([property({
  type: Number,
  reflectToAttribute: true
})], MiltitextBox.prototype, "maxlength", void 0);

__decorate([property({
  type: String,
  notify: true
})], MiltitextBox.prototype, "value", void 0);

__decorate([property({
  type: String
})], MiltitextBox.prototype, "minlengthMessage", void 0);

__decorate([property({
  type: String
})], MiltitextBox.prototype, "maxlengthMessage", void 0);

MiltitextBox = __decorate([customElement('dope-multitext-box')], MiltitextBox);
export { MiltitextBox };
let ListBox = class ListBox extends DecoratedFieldMixin(PolymerElement) {
  constructor() {
    super();

    this.equality = (a, b) => a === b;

    this.items = [];
    this.tabindex = 0;
    this.empty = true;

    this.formatter = x => x ? x.toString() : this.placeholder || '';
  }

  static get template() {
    return mkTemplate(listBoxView);
  }

  activate() {
    this.impl.activate();
  }

  computeEmpty(empty, placeholder) {
    return empty && !placeholder;
  }

  onIconClick(e) {
    e.preventDefault();
    e.stopPropagation();
    setTimeout(() => this.activate(), 10);
  }

};

__decorate([property({
  type: String
})], ListBox.prototype, "placeholder", void 0);

__decorate([property({
  type: String
})], ListBox.prototype, "name", void 0);

__decorate([property({
  type: Object,
  notify: true
})], ListBox.prototype, "value", void 0);

__decorate([property()], ListBox.prototype, "formatter", void 0);

__decorate([property()], ListBox.prototype, "equality", void 0);

__decorate([property({
  type: Array
})], ListBox.prototype, "items", void 0);

__decorate([property({
  type: Number
})], ListBox.prototype, "tabindex", void 0);

__decorate([query('dope-list-picker')], ListBox.prototype, "impl", void 0);

ListBox = __decorate([customElement('dope-list-box')], ListBox);
export { ListBox };
let DateBox = class DateBox extends DecoratedFieldMixin(PolymerElement) {
  static get template() {
    return mkTemplate(dateBoxView);
  }

  activate() {
    this.impl.activate();
  }

  computeEmpty(empty, placeholder) {
    return empty && !placeholder;
  }

  onIconClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.activate();
  }

};

__decorate([property({
  type: String
})], DateBox.prototype, "placeholder", void 0);

__decorate([property({
  type: String
})], DateBox.prototype, "name", void 0);

__decorate([property({
  type: Object,
  notify: true
})], DateBox.prototype, "value", void 0);

__decorate([property()], DateBox.prototype, "formatter", void 0);

__decorate([query('dope-date-picker')], DateBox.prototype, "impl", void 0);

DateBox = __decorate([customElement('dope-date-box')], DateBox);
export { DateBox };
let TimeBox = class TimeBox extends ClearablePickerMixin(DecoratedFieldMixin(PolymerElement)) {
  constructor() {
    super();

    this.formatter = x => x ? sprintf('%02d:%02d', x.hours, x.minutes) : this.placeholder || '';
  }

  static get template() {
    return mkTemplate(timeBoxView);
  }

  activate() {
    this.impl.activate();
  }

  computeEmpty(empty, placeholder) {
    return empty && !placeholder;
  }

  onIconClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (this.clearable) {
      this.value = undefined;
      this.dirty = true;
    } else {
      this.activate();
    }
  }

};

__decorate([property({
  type: String
})], TimeBox.prototype, "placeholder", void 0);

__decorate([property({
  type: TimeSpan,
  notify: true
})], TimeBox.prototype, "value", void 0);

__decorate([property()], TimeBox.prototype, "formatter", void 0);

__decorate([property({
  type: TimeSpan
})], TimeBox.prototype, "startTime", void 0);

__decorate([property({
  type: TimeSpan
})], TimeBox.prototype, "endTime", void 0);

__decorate([property({
  type: TimeSpan
})], TimeBox.prototype, "step", void 0);

__decorate([query('dope-time-picker')], TimeBox.prototype, "impl", void 0);

TimeBox = __decorate([customElement('dope-time-box')], TimeBox);
export { TimeBox };
let DateTimeBox = class DateTimeBox extends ClearablePickerMixin(DecoratedFieldMixin(PolymerElement)) {
  constructor() {
    super();

    this.formatter = x => {
      if (x) {
        return sprintf('%04d. %02d. %02d %02d:%02d', x.year, x.month, x.day, x.hours, x.minutes);
      }

      return this.placeholder || '';
    };
  }

  static get template() {
    return mkTemplate(dateTimeBoxView);
  }

  activate() {
    this.impl.activate();
  }

  computeEmpty(empty, placeholder) {
    return empty && !placeholder;
  }

  onIconClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (this.clearable) {
      this.value = undefined;
      this.dirty = true;
    } else {
      this.activate();
    }
  }

};

__decorate([property({
  type: String
})], DateTimeBox.prototype, "placeholder", void 0);

__decorate([property({
  type: Object,
  notify: true
})], DateTimeBox.prototype, "value", void 0);

__decorate([property()], DateTimeBox.prototype, "formatter", void 0);

__decorate([query('dope-datetime-picker')], DateTimeBox.prototype, "impl", void 0);

DateTimeBox = __decorate([customElement('dope-datetime-box')], DateTimeBox);
export { DateTimeBox };
let DateRangeBox = class DateRangeBox extends ClearablePickerMixin(DecoratedFieldMixin(PolymerElement)) {
  constructor() {
    super(...arguments);
    this.__valueChanging = false;
    this.value = {};
  }

  static get template() {
    return mkTemplate(dateRangeBoxView);
  }

  activate() {
    this.impl.activate();
  }

  computeEmpty(empty, placeholder) {
    return empty && !placeholder;
  }

  onIconClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (this.clearable) {
      this.value = {};
      this.dirty = true;
    } else {
      this.activate();
    }
  }

};

__decorate([property({
  type: String
})], DateRangeBox.prototype, "placeholder", void 0);

__decorate([property({
  type: String
})], DateRangeBox.prototype, "name", void 0);

__decorate([property({
  type: Object,
  notify: true
})], DateRangeBox.prototype, "value", void 0);

__decorate([property({
  type: Object,
  notify: true
})], DateRangeBox.prototype, "startDate", void 0);

__decorate([property({
  type: Object,
  notify: true
})], DateRangeBox.prototype, "endDate", void 0);

__decorate([property()], DateRangeBox.prototype, "formatter", void 0);

__decorate([query('dope-date-range-picker')], DateRangeBox.prototype, "impl", void 0);

DateRangeBox = __decorate([customElement('dope-date-range-box')], DateRangeBox);
export { DateRangeBox };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixFQUFBLE1BQU0sRUFBRTtBQUF4QixDQUFELENBQ1QsQ0FBQSxFLHNCQUFBLEUsU0FBQSxFLEtBQTRCLENBQTVCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxFQUNULENBQUEsRSxzQkFBQSxFLFdBQUEsRSxLQUFpRCxDQUFqRCxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLEtBQUssQ0FBQyx3QkFBRCxDQUNOLENBQUEsRSxzQkFBQSxFLE1BQUEsRSxLQUF1QixDQUF2QixDQUFBOztBQTNCVyxZQUFZLEdBQUEsVUFBQSxDQUFBLENBRHhCLGFBQWEsQ0FBQyxxQkFBRCxDQUNXLENBQUEsRUFBWixZQUFZLENBQVo7U0FBQSxZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdkb3BlZXMtdWkvbGliL21hdGVyaWFsLWljb24nO1xuaW1wb3J0ICcuL2RhdGUtcGlja2VyJztcbmltcG9ydCAnLi9kYXRldGltZS1waWNrZXInO1xuaW1wb3J0ICcuL2RhdGUtcmFuZ2UtcGlja2VyJztcbmltcG9ydCAnLi90ZXh0LWZpZWxkJztcbmltcG9ydCAnLi9saXN0LXBpY2tlcic7XG5pbXBvcnQgJy4vdGV4dC1maWVsZCc7XG5pbXBvcnQgJy4vbXVsdGl0ZXh0LWZpZWxkJztcbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9saWIvZWxlbWVudHMvZG9tLWlmJztcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQnO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIHF1ZXJ5LCBvYnNlcnZlIH0gZnJvbSAnQHBvbHltZXIvZGVjb3JhdG9ycy9saWIvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBWYWx1ZUZpZWxkLCBEZWNvcmF0ZWRGaWVsZE1peGluLCBGaWVsZCwgRmllbGRXcmFwcGVyIH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQgeyBNdWx0aXRleHRGaWVsZCB9IGZyb20gJy4vbXVsdGl0ZXh0LWZpZWxkJztcbmltcG9ydCB7IExpc3RGaWVsZEl0ZW0gfSBmcm9tICcuL2xpc3QtZmllbGQnO1xuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gJy4vbGlzdC1waWNrZXInO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAnLi90ZXh0LWZpZWxkJztcbmltcG9ydCB7IG1rVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlcyc7XG5pbXBvcnQgeyBEYXRlVGltZSwgVGltZVNwYW4gfSBmcm9tICdkb3BlZXMtY29yZS9saWIvZGF0ZXRpbWUnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJy4vZGF0ZS1waWNrZXInO1xuaW1wb3J0IHsgRGF0ZVRpbWVSYW5nZSB9IGZyb20gJy4vZGF0ZS1yYW5nZS1maWVsZCc7XG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXIgfSBmcm9tICcuL2RhdGUtcmFuZ2UtcGlja2VyJztcbmltcG9ydCB7IFRpbWVQaWNrZXIgfSBmcm9tICcuL3RpbWUtcGlja2VyJztcbmltcG9ydCB7IERhdGVUaW1lUGlja2VyIH0gZnJvbSAnLi9kYXRldGltZS1waWNrZXInO1xuaW1wb3J0IHsgc3ByaW50ZiB9IGZyb20gJ2RvcGVlcy1jb3JlL2xpYi9zdHJpbmcnO1xuaW1wb3J0IHdyYXBwZXJWaWV3IGZyb20gJy4vYm94L2JveC5wdWcnO1xuaW1wb3J0IHRleHRCb3hWaWV3IGZyb20gJy4vYm94L3RleHQtYm94LnB1Zyc7XG5pbXBvcnQgbXVsdGl0ZXh0Qm94VmlldyBmcm9tICcuL2JveC9tdWx0aXRleHQtYm94LnB1Zyc7XG5pbXBvcnQgbGlzdEJveFZpZXcgZnJvbSAnLi9ib3gvbGlzdC1ib3gucHVnJztcbmltcG9ydCBkYXRlQm94VmlldyBmcm9tICcuL2JveC9kYXRlLWJveC5wdWcnO1xuaW1wb3J0IGRhdGVUaW1lQm94VmlldyBmcm9tICcuL2JveC9kYXRldGltZS1ib3gucHVnJztcbmltcG9ydCBkYXRlUmFuZ2VCb3hWaWV3IGZyb20gJy4vYm94L2RhdGUtcmFuZ2UtYm94LnB1Zyc7XG5pbXBvcnQgdGltZUJveFZpZXcgZnJvbSAnLi9ib3gvdGltZS1ib3gucHVnJztcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhcmFibGVQaWNrZXIge1xuICByZWFkb25seSBjbGVhcmFibGU6IGJvb2xlYW47XG4gIGNvbXB1dGVDbGVhcmFibGUoZW1wdHk6IGJvb2xlYW4sIHJlcXVpcmVkOiBib29sZWFuKTogYm9vbGVhbjtcbiAgY29tcHV0ZUljb25UeXBlKGNsZWFyYWJsZTogYm9vbGVhbik6IHN0cmluZztcbn1cblxudHlwZSBEZWNvcmF0ZWRGaWVsZEVsZW1lbnQgPSBQb2x5bWVyRWxlbWVudCZGaWVsZCZGaWVsZFdyYXBwZXI7XG5cbmNvbnN0IENsZWFyYWJsZVBpY2tlck1peGluID0gPFQgZXh0ZW5kcyBEZWNvcmF0ZWRGaWVsZEVsZW1lbnQ+IChiYXNlOiBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBUKSA9PiB7XG4gIGNsYXNzIFNvbWVDbGVhcmFibGVQaWNrZXIgZXh0ZW5kcyAoPG5ldyAoLi4uYXJnczogYW55W10pID0+IERlY29yYXRlZEZpZWxkRWxlbWVudD4gYmFzZSkgaW1wbGVtZW50cyBDbGVhcmFibGVQaWNrZXIge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIGNvbXB1dGVkOiAnY29tcHV0ZUNsZWFyYWJsZShlbXB0eSwgcmVxdWlyZWQpJyB9KVxuICAgIGNsZWFyYWJsZSA9IGZhbHNlO1xuXG4gICAgY29tcHV0ZUNsZWFyYWJsZShlbXB0eTogYm9vbGVhbiwgcmVxdWlyZWQ6IGJvb2xlYW4pIHtcbiAgICAgIHJldHVybiAhZW1wdHkgJiYgIXJlcXVpcmVkO1xuICAgIH1cblxuICAgIGNvbXB1dGVJY29uVHlwZShjbGVhcmFibGU6IGJvb2xlYW4pIHtcbiAgICAgIHJldHVybiBjbGVhcmFibGUgPyAnY2xvc2UnIDogJ2V4cGFuZCBtb3JlJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIDxuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBUJkNsZWFyYWJsZVBpY2tlcj4gPHVua25vd24+IFNvbWVDbGVhcmFibGVQaWNrZXI7XG59O1xuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1ib3gnKVxuZXhwb3J0IGNsYXNzIEJveEZpZWxkIGV4dGVuZHMgRGVjb3JhdGVkRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gbWtUZW1wbGF0ZSh3cmFwcGVyVmlldyk7IH1cblxuICBfX3Nob3dIaW50KGVycm9yOiBzdHJpbmd8dW5kZWZpbmVkLCBoaW50OiBzdHJpbmd8dW5kZWZpbmVkKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKCFlcnJvciAmJiBoaW50KTtcbiAgfVxuXG4gIGlzTm9uRW1wdHkoLi4udmFsdWVzOiBhbnlbXSkgeyByZXR1cm4gdmFsdWVzLnNvbWUoQm9vbGVhbik7IH1cblxuICBpc0VtcHR5KC4uLnZhbHVlczogYW55W10pIHsgcmV0dXJuICF2YWx1ZXMuc29tZShCb29sZWFuKTsgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS10ZXh0LWJveCcpXG5leHBvcnQgY2xhc3MgVGV4dEJveCBleHRlbmRzIERlY29yYXRlZEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpIGltcGxlbWVudHMgVmFsdWVGaWVsZDxzdHJpbmc+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUodGV4dEJveFZpZXcpOyB9XG5cbiAgX2Rlc2VyaWFsaXplVmFsdWUodmFsdWU6IHN0cmluZ3xudWxsLCB0eXBlOiBhbnkpIHtcbiAgICBpZiAoUmVnRXhwID09PSB0eXBlKSB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cCh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5fZGVzZXJpYWxpemVWYWx1ZSh2YWx1ZSwgdHlwZSk7XG4gIH1cblxuICBAcXVlcnkoJy5yYXcnKVxuICBwcm90ZWN0ZWQgZmllbGQhOiBUZXh0RmllbGQ7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHR5cGU/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IDxhbnk+IFJlZ0V4cCB9KVxuICBwYXR0ZXJuPzogUmVnRXhwO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlIH0pXG4gIG1pbmxlbmd0aD86IG51bWJlcjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSB9KVxuICBtYXhsZW5ndGg/OiBudW1iZXI7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nLCBub3RpZnk6IHRydWUgfSlcbiAgdmFsdWU6IHN0cmluZyA9ICcnO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwYXR0ZXJuTWVzc2FnZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbWlubGVuZ3RoTWVzc2FnZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbWF4bGVuZ3RoTWVzc2FnZT86IHN0cmluZztcblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5maWVsZC5hY3RpdmF0ZSgpOyB9XG5cbiAgb25DbGVhckNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtbXVsdGl0ZXh0LWJveCcpXG5leHBvcnQgY2xhc3MgTWlsdGl0ZXh0Qm94IGV4dGVuZHMgRGVjb3JhdGVkRmllbGRNaXhpbihQb2x5bWVyRWxlbWVudCkgaW1wbGVtZW50cyBWYWx1ZUZpZWxkPHN0cmluZz4ge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gbWtUZW1wbGF0ZShtdWx0aXRleHRCb3hWaWV3KTsgfVxuXG4gIEBxdWVyeSgnLnJhdycpXG4gIHByb3RlY3RlZCBmaWVsZCE6IE11bHRpdGV4dEZpZWxkO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICB0eXBlPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSB9KVxuICBtaW5sZW5ndGg/OiBudW1iZXI7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUgfSlcbiAgbWF4bGVuZ3RoPzogbnVtYmVyO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZywgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBzdHJpbmcgPSAnJztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbWlubGVuZ3RoTWVzc2FnZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbWF4bGVuZ3RoTWVzc2FnZT86IHN0cmluZztcblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5maWVsZC5hY3RpdmF0ZSgpOyB9XG5cbiAgb25DbGVhckNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtbGlzdC1ib3gnKVxuZXhwb3J0IGNsYXNzIExpc3RCb3g8VD4gZXh0ZW5kcyBEZWNvcmF0ZWRGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8VHx1bmRlZmluZWQ+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUobGlzdEJveFZpZXcpOyB9XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbmFtZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogVHx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KClcbiAgZm9ybWF0dGVyOiAoaXRlbTogVHx1bmRlZmluZWQpID0+IHN0cmluZztcblxuICBAcHJvcGVydHkoKVxuICBlcXVhbGl0eTogKGE6IFR8dW5kZWZpbmVkLCBiOiBUfHVuZGVmaW5lZCkgPT4gYm9vbGVhbiA9IChhLCBiKSA9PiBhID09PSBiXG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSlcbiAgaXRlbXM6IEFycmF5PExpc3RGaWVsZEl0ZW08VD4+ID0gW107XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIHRhYmluZGV4OiBudW1iZXIgPSAwO1xuXG4gIEBxdWVyeSgnZG9wZS1saXN0LXBpY2tlcicpXG4gIGltcGwhOiBMaXN0UGlja2VyPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5lbXB0eSA9IHRydWU7XG4gICAgdGhpcy5mb3JtYXR0ZXIgPSAoeCkgPT4geCA/ICg8YW55PiB4KS50b1N0cmluZygpIDogKHRoaXMucGxhY2Vob2xkZXIgfHwgJycpO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7IHRoaXMuaW1wbC5hY3RpdmF0ZSgpOyB9XG5cbiAgY29tcHV0ZUVtcHR5KGVtcHR5OiBib29sZWFuLCBwbGFjZWhvbGRlcjogc3RyaW5nfHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBlbXB0eSAmJiAhcGxhY2Vob2xkZXI7XG4gIH1cblxuICBvbkljb25DbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFjdGl2YXRlKCksIDEwKTtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnZG9wZS1kYXRlLWJveCcpXG5leHBvcnQgY2xhc3MgRGF0ZUJveCBleHRlbmRzIERlY29yYXRlZEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpIGltcGxlbWVudHMgVmFsdWVGaWVsZDxEYXRlVGltZXx1bmRlZmluZWQ+IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUoZGF0ZUJveFZpZXcpOyB9XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbmFtZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogRGF0ZVRpbWV8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIGZvcm1hdHRlciE6IChpdGVtOiBEYXRlVGltZXx1bmRlZmluZWQpID0+IHN0cmluZztcblxuICBAcXVlcnkoJ2RvcGUtZGF0ZS1waWNrZXInKVxuICBpbXBsITogRGF0ZVBpY2tlcjtcblxuICBhY3RpdmF0ZSgpIHsgdGhpcy5pbXBsLmFjdGl2YXRlKCk7IH1cblxuICBjb21wdXRlRW1wdHkoZW1wdHk6IGJvb2xlYW4sIHBsYWNlaG9sZGVyOiBzdHJpbmd8dW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGVtcHR5ICYmICFwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIG9uSWNvbkNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmFjdGl2YXRlKCk7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtdGltZS1ib3gnKVxuZXhwb3J0IGNsYXNzIFRpbWVCb3hcbiAgZXh0ZW5kcyBDbGVhcmFibGVQaWNrZXJNaXhpbihEZWNvcmF0ZWRGaWVsZE1peGluKFBvbHltZXJFbGVtZW50KSlcbiAgaW1wbGVtZW50cyBWYWx1ZUZpZWxkPFRpbWVTcGFufHVuZGVmaW5lZD4ge1xuXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiBta1RlbXBsYXRlKHRpbWVCb3hWaWV3KTsgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiA8YW55PiBUaW1lU3Bhbiwgbm90aWZ5OiB0cnVlIH0pXG4gIHZhbHVlOiBUaW1lU3Bhbnx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KClcbiAgZm9ybWF0dGVyOiAoaXRlbTogVGltZVNwYW58dW5kZWZpbmVkKSA9PiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogPGFueT4gVGltZVNwYW4gfSlcbiAgc3RhcnRUaW1lITogVGltZVNwYW47XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogPGFueT4gVGltZVNwYW4gfSlcbiAgZW5kVGltZSE6IFRpbWVTcGFuO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IDxhbnk+IFRpbWVTcGFuIH0pXG4gIHN0ZXAhOiBUaW1lU3BhbjtcblxuICBAcXVlcnkoJ2RvcGUtdGltZS1waWNrZXInKVxuICBpbXBsITogVGltZVBpY2tlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZm9ybWF0dGVyID0gKHgpID0+IHggPyBzcHJpbnRmKCclMDJkOiUwMmQnLCB4LmhvdXJzLCB4Lm1pbnV0ZXMpIDogKHRoaXMucGxhY2Vob2xkZXIgfHwgJycpO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7IHRoaXMuaW1wbC5hY3RpdmF0ZSgpOyB9XG5cbiAgY29tcHV0ZUVtcHR5KGVtcHR5OiBib29sZWFuLCBwbGFjZWhvbGRlcjogc3RyaW5nfHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBlbXB0eSAmJiAhcGxhY2Vob2xkZXI7XG4gIH1cblxuICBvbkljb25DbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuY2xlYXJhYmxlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICB9XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtZGF0ZXRpbWUtYm94JylcbmV4cG9ydCBjbGFzcyBEYXRlVGltZUJveFxuICBleHRlbmRzIENsZWFyYWJsZVBpY2tlck1peGluKERlY29yYXRlZEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpKVxuICBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8RGF0ZVRpbWV8dW5kZWZpbmVkPiB7XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIG1rVGVtcGxhdGUoZGF0ZVRpbWVCb3hWaWV3KTsgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICB2YWx1ZTogRGF0ZVRpbWV8dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIGZvcm1hdHRlcjogKGl0ZW06IERhdGVUaW1lfHVuZGVmaW5lZCkgPT4gc3RyaW5nO1xuXG4gIEBxdWVyeSgnZG9wZS1kYXRldGltZS1waWNrZXInKVxuICBpbXBsITogRGF0ZVRpbWVQaWNrZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmZvcm1hdHRlciA9ICh4KSA9PiB7XG4gICAgICBpZiAoeCkge1xuICAgICAgICByZXR1cm4gc3ByaW50ZignJTA0ZC4gJTAyZC4gJTAyZCAlMDJkOiUwMmQnLCB4LnllYXIsIHgubW9udGgsIHguZGF5LCB4LmhvdXJzLCB4Lm1pbnV0ZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICh0aGlzLnBsYWNlaG9sZGVyIHx8ICcnKTtcbiAgICB9O1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7IHRoaXMuaW1wbC5hY3RpdmF0ZSgpOyB9XG5cbiAgY29tcHV0ZUVtcHR5KGVtcHR5OiBib29sZWFuLCBwbGFjZWhvbGRlcjogc3RyaW5nfHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBlbXB0eSAmJiAhcGxhY2Vob2xkZXI7XG4gIH1cblxuICBvbkljb25DbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuY2xlYXJhYmxlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICB9XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2RvcGUtZGF0ZS1yYW5nZS1ib3gnKVxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZUJveFxuICBleHRlbmRzIENsZWFyYWJsZVBpY2tlck1peGluKERlY29yYXRlZEZpZWxkTWl4aW4oUG9seW1lckVsZW1lbnQpKVxuICBpbXBsZW1lbnRzIFZhbHVlRmllbGQ8RGF0ZVRpbWVSYW5nZT4ge1xuXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiBta1RlbXBsYXRlKGRhdGVSYW5nZUJveFZpZXcpOyB9XG5cbiAgcHJpdmF0ZSBfX3ZhbHVlQ2hhbmdpbmcgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWUgfSlcbiAgdmFsdWU6IERhdGVUaW1lUmFuZ2UgPSB7fTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICBzdGFydERhdGU6IERhdGVUaW1lfHVuZGVmaW5lZDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSB9KVxuICBlbmREYXRlOiBEYXRlVGltZXx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KClcbiAgZm9ybWF0dGVyITogKGl0ZW06IERhdGVUaW1lfHVuZGVmaW5lZCkgPT4gc3RyaW5nO1xuXG4gIEBxdWVyeSgnZG9wZS1kYXRlLXJhbmdlLXBpY2tlcicpXG4gIGltcGwhOiBEYXRlUmFuZ2VQaWNrZXI7XG5cbiAgYWN0aXZhdGUoKSB7IHRoaXMuaW1wbC5hY3RpdmF0ZSgpOyB9XG5cbiAgY29tcHV0ZUVtcHR5KGVtcHR5OiBib29sZWFuLCBwbGFjZWhvbGRlcjogc3RyaW5nfHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBlbXB0eSAmJiAhcGxhY2Vob2xkZXI7XG4gIH1cblxuICBvbkljb25DbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuY2xlYXJhYmxlKSB7XG4gICAgICB0aGlzLnZhbHVlID0geyB9O1xuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=