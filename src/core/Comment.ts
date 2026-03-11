import { Temporal } from 'temporal-polyfill';
import type { ITaskComment } from '../types/task_interface';

export class Comment implements ITaskComment {
  id: string = crypto.randomUUID();
  timestamp: string = Temporal.Now.plainDateTimeISO().toLocaleString();
  text: string;

  constructor(text: string) {
    this.text = text;
  }
}
