import './list-field';
import { ListField, ListFieldItem } from './list-field';
import { lessThan } from 'dopees-core/lib/contract';
import { TimeSpan } from 'dopees-core/lib/datetime';
import { property, observe, customElement } from '@polymer/decorators/lib/decorators';
import { sprintf } from 'dopees-core/lib/string';

const min = new TimeSpan("00:00");
const max = new TimeSpan("23:59:59");
const defaultStep = new TimeSpan("00:30:00");

@customElement('dope-time-field')
export class TimeField extends ListField<TimeSpan> {

  static typeForProperty(propertyName: string) {
    if ('value' === propertyName) {
      return TimeSpan;
    }
    return (<any>ListField).typeForProperty(propertyName);
  }

  _deserializeValue(value: string|null, type: any) {
    if (TimeSpan === type) {
      if (!value) {
        return undefined;
      }
      return new TimeSpan(value);
    }
    return super._deserializeValue(value, type);
  }

  @property({ type: Object })
  startTime: TimeSpan = min;

  @property({ type: Object })
  endTime: TimeSpan = max;

  @property({ type: Object })
  step: TimeSpan = defaultStep;

  @property()
  formatter: (time: TimeSpan|undefined) => string;

  constructor() {
    super();
    this.equality = (a, b) => {
      if (!a) {
        return !b;
      }
      if (!b) {
        return !a;
      }
      return a.equalsTo(b);
    }
    this.formatter = x => x ? sprintf('%02d:%02d', x.hours, x.minutes) : '';
  }

  @observe('startTime', 'endTime', 'step')
  computeItems(startTime: TimeSpan, endTime: TimeSpan, step: TimeSpan): void {
    if (!startTime || !endTime || !step) {
      return;
    }
    const items: ListFieldItem<TimeSpan>[] = [];
    for (let curr = startTime; lessThan(curr, endTime); curr = curr.add(step)) {
      items.push({ data: curr })
    }
    this.items = items;
  }
}