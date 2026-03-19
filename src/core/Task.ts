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

  static fromJSON(data: ITask): Task {
    const newTask = new Task(data.title);
    newTask.id = data.id;
    newTask.isCompleted = data.isCompleted;
    newTask.priority = data.priority;
    if (data.description) {
      newTask.description = data.description;
    }
    if (data.dueDate) {
      newTask.dueDate = Temporal.PlainDate.from(data.dueDate);
    }

    return newTask;
  }
}
