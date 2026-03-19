import type { ICategory } from '../types/_category';
import { Project } from './Project';

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

  static fromJSON(data: ICategory): Category {
    const newCategory = new Category(data.title);
    newCategory.id = data.id;
    const projects = data.projects.map(project => {
      return Project.fromJSON(project);
    });
    newCategory.projects = projects;
    return newCategory;
  }
}
