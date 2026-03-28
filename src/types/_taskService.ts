import type { Project } from '../core/Project';
import type { Task } from '../core/Task';

export interface IGroupedTasks {
  unassignedTasks: Task[];
  projectTasks: { project: Project; tasks: Task[] }[];
}
