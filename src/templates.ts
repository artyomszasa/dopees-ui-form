import '@polymer/polymer/lib/elements/dom-bind';

export function mkTemplate(html: string) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template;
}
