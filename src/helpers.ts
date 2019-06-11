export interface WrapEventInit {
  prefix?: string;
  bubbles?: boolean;
  cancellable?: boolean;
  composed?: boolean;
}

export function wrapEvent<E extends Event>(originalEvent: E, init?: string|WrapEventInit) {
  let type: string;
  let opts: CustomEventInit;
  if ('string' === typeof init) {
    type = `${init}-${originalEvent.type}`;
    opts = {
      bubbles: true,
      cancelable: originalEvent.cancelable,
      composed: true
    };
  } else if (init) {
    type = init.prefix ? `${init.prefix}-${originalEvent.type}` : originalEvent.type;
    opts = {
      bubbles: undefined === init.bubbles ? true : init.bubbles,
      cancelable: undefined === init.cancellable ? originalEvent.cancelable : init.cancellable,
      composed: undefined === init.composed ? true : init.composed
    };
  } else {
    type = originalEvent.type;
    opts = {
      bubbles: true,
      cancelable: originalEvent.cancelable,
      composed: true
    };
  }
  opts.detail = originalEvent;
  return new CustomEvent<E>(type, opts);
}
