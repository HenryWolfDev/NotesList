import type { ICategory } from '../types/_category';
import type { Project } from './Project';

export class Category implements ICategory {
  id: string = crypto.randomUUID();
  title: string;
  projects: Project[] = [];

  constructor(title: string) {
    this.title = title;
  }

  updateTitle(newTitle: string): void {
    this.title = newTitle;
  }
}
