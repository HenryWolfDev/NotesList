import type { ICategory } from '../types/_category';

export class Project implements ICategory {
  id: string = crypto.randomUUID();
  title: string;
  projects = [];

  constructor(title: string) {
    this.title = title;
  }

  updateTitle(newTitle: string): void {
    this.title = newTitle;
  }
}
