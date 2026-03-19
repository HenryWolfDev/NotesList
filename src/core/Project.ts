import type { IProject } from '../types/_project';
import { Section } from './Section';
import { Task } from './Task';

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

  static fromJSON(data: IProject): Project {
    const newProject = new Project(data.title);
    newProject.id = data.id;
    if (data.description) {
      newProject.description = data.description;
    }
    const sections = data.sections.map(section => {
      return Section.fromJSON(section);
    });
    const tasks = data.tasks.map(task => {
      return Task.fromJSON(task);
    });

    newProject.sections = sections;
    newProject.tasks = tasks;

    return newProject;
  }
}
