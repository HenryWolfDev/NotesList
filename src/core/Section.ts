import type { ISection } from '../types/_section';
import { Task } from './Task';

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

  static fromJSON(data: ISection): Section {
    const newSection = new Section(data.title);
    newSection.id = data.id;
    if (data.description) {
      newSection.description = data.description;
    }
    const tasks = data.tasks.map(task => {
      return Task.fromJSON(task);
    });
    newSection.tasks = tasks;

    return newSection;
  }
}
