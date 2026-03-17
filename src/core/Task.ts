import { Temporal } from 'temporal-polyfill';
import type { ITask, PriorityLevel } from '../types/_task.ts';

export class Task implements ITask {
  id: string = crypto.randomUUID();

  title: string;
  description?: string | undefined;

  dueDate: Temporal.PlainDate = Temporal.Now.plainDateISO();

  priority: PriorityLevel = 4;
  isCompleted: boolean = false;

  constructor(title: string) {
    this.title = title;
  }

  updateTitle(newTitle: string): void {
    this.title = newTitle;
  }
  updateDescription(newDesc: string): void {
    this.description = newDesc;
  }
  updatePriority(newPriority: PriorityLevel): void {
    this.priority = newPriority;
  }

  toggleCompleted(): void {
    this.isCompleted = !this.isCompleted;
  }

  setPriority(newPrio: PriorityLevel): void {
    this.priority = newPrio;
  }
}
