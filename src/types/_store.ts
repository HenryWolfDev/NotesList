import type { Category } from '../core/Category';
import type { Project } from '../core/Project';
import type { Section } from '../core/Section';
import type { Task } from '../core/Task';

export type UUID = string;

export interface IStore {
  categorys: Category[];
  unassignedTasks: Task[];

  createCategory: (title: string) => Category;
  createProject: (title: string, categoryID: UUID) => Project;
  createSection: (title: string, projectID: UUID) => Section;
  createUnassignedTask: (title: string) => Task;
  createProjectTask: (title: string, projectID: UUID) => Task;
  createSectionTask: (title: string, projectID: UUID, sectionID: UUID) => Task;

  removeCategory: (categoryID: UUID) => boolean;
  removeProject: (projectID: UUID) => boolean;
  removeSection: (sectionID: UUID) => boolean;
  removeTask: (taskID: UUID) => boolean;

  assignUnassignedTaskToProject: (taskID: UUID, projectID: UUID) => boolean;
  assignTaskToSection: (taskID: UUID, sectionID: UUID) => boolean;
}
