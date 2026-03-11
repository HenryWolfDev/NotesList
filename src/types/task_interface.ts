import { Temporal } from 'temporal-polyfill';

export type PriorityLevel = 1 | 2 | 3 | 4;

export interface ITaskComment {
  id: string;
  text: string;
  timestamp?: string;
}

export interface ITask {
  id: string; // Eindeutige UUID
  title: string; // Pflichpfeld
  description?: string; // Optionaler Detailtext
  dueDate: Temporal.PlainDate | undefined;
  priority?: PriorityLevel; // 1 (Rot) bis 4 (Grau)
  isCompleted: boolean;

  // Zuordnung zu einem Projekt
  projectID: string;
  sectionID?: string;

  // Rekursion
  parentID?: string;
  subtasks?: ITask[];

  // Metadaten
  comments?: ITaskComment[];
  createdAt: Temporal.PlainDateTime;
}
