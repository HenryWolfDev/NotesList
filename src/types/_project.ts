import type { Section } from '../core/Section';

export interface IProject {
  id: string; // UUID
  title: string;
  description: string;
  sections: Section[];
}
