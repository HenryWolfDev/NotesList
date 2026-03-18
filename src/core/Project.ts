import type { IProject } from '../types/_project';
import type { Section } from './Section';
import type { Task } from './Task';

export class Project implements IProject {
  id: string = crypto.randomUUID();
  title: string;
  description?: string;
  sections: Section[] = [];
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
