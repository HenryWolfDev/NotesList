import type { Task } from '../core/Task';

export interface ISection {
  id: string; // UUID
  title: string;
  description?: string;
  tasks: Task[];
}
