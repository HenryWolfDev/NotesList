import { Temporal } from 'temporal-polyfill';

export type PriorityLevel = 1 | 2 | 3 | 4;

export interface ITask {
  id: string; // UUID
  title: string;
  description?: string;
  dueDate: Temporal.PlainDate | undefined;
  priority?: PriorityLevel;
  isCompleted: boolean;
}
