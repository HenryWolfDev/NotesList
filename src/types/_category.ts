import type { Project } from '../core/Project';

export interface ICategory {
  id: string;
  title: string;
  projects: Project[];
}
