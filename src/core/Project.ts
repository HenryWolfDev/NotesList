import type { IProject } from '../types/_project';

export class Project implements IProject {
  id: string = crypto.randomUUID();
  title: string;
  description?: string;
  sections = [];
  tasks = [];

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
