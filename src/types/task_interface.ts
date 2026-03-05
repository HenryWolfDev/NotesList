export type PriorityLevel = 1 | 2 | 3 | 4;

export interface TaskComment {
  id: string;
  text: string;
  timestamp: Date;
}

export interface Task {
  id: string; // Eindeutige UUID
  title: string; // Pflichpfeld
  description?: string; // Optionaler Detailtext
  dueDate: Date | string;
  priority?: PriorityLevel; // 1 (Rot) bis 4 (Grau)
  isCompleted: boolean;

  // Zuordnung zu einem Projekt
  projectID: string;
  sectionID?: string;

  // Rekursion
  parentID?: string;
  subtasks?: Task[];

  // Metadaten
  comments?: TaskComment[];
  createdAt: Date;
}
