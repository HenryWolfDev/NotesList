import type { ISection } from '../types/_section';

export class Section implements ISection {
  id: string = crypto.randomUUID();
  title: string;
  description?: string | undefined;
  tasks = [];

  constructor(title: string) {
    this.title = title;
    this.tasks = [];
  }

  updateTitle(newTitle: string): void {
    this.title = newTitle;
  }

  updateDescription(newDesc: string): void {
    this.description = newDesc;
  }
}
