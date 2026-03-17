import type { Cateory } from '../core/Category';
import type { Project } from '../core/Project';
import type { Section } from '../core/Section';
import type { Task } from '../core/Task';

type UUID = string;

export interface IStore {
  category: Cateory[];
  unassignedTasks: Task[];

  createCategory: (category: Cateory) => Cateory;
  createProject: (project: Project) => Project;
  createSection: (section: Section) => Section;
  createTask: (task: Task) => Task;

  removeCategory: (categoryID: UUID) => boolean;
  removeProject: (projectID: UUID) => boolean;
  removeSection: (sectionID: UUID) => boolean;
  removeTask: (taskID: UUID) => boolean;

  assignUnassignedTaskToProject: (taskID: UUID, projectID: UUID) => boolean;
  assignTaskToSection: (taskID: UUID, sectionID: UUID) => boolean;
}
