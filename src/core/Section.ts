import type { ISection } from '../types/_section';
import type { Task } from './Task';

export class Section implements ISection {
  id: string = crypto.randomUUID();
  title: string;
  description?: string | undefined;
  tasks: Task[] = [];

  constructor(title: string) {
    this.title = title;
  }

  updateTitle(newTitle: string): void {
    this.title = newTitle;
  }

  updateDescription(newDesc: string): void {
    this.description = newDesc;
  }
}
