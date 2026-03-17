import type { Section } from '../core/Section';
import type { Task } from '../core/Task';

export interface IProject {
  id: string; // UUID
  title: string;
  description?: string;
  sections: Section[];
  tasks: Task[];
}
