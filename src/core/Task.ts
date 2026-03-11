import { Temporal } from 'temporal-polyfill';
import type {
  ITask,
  PriorityLevel,
  ITaskComment,
} from '../types/task_interface.ts';
import { Comment } from './Comment.ts';

export class Task implements ITask {
  id: string = crypto.randomUUID();

  title: string;
  description?: string | undefined;

  dueDate: Temporal.PlainDate = Temporal.Now.plainDateISO();
  createdAt: Temporal.PlainDateTime = Temporal.Now.plainDateTimeISO();

  priority: PriorityLevel = 4;
  isCompleted: boolean = false;

  projectID: string = 'Inbox';
  sectionID?: undefined;
  parentID?: undefined;

  subtasks: Task[] = [];
  comments: Comment[] = [];

  constructor(title: string) {
    this.title = title;
  }

  toggleCompleted(): void {
    this.isCompleted = !this.isCompleted;
  }

  // #region ADD FUNCTIONS
  addSubtask(task: Task) {
    this.subtasks.push(task);
  }

  addComment(text: string) {
    this.comments.push(new Comment(text));
  }
  // #endregion ADD FUNCTIONS

  // #region SET FUNCTIONS
  setPriority(newPrio: PriorityLevel): void {
    this.priority = newPrio;
  }
  // #endregion

  // #region UPDATE FUNCTIONS
  updateTitle(newTitle: string): void {
    this.title = newTitle;
  }
  updateDescription(newDesc: string): void {
    this.description = newDesc;
  }
  updatePriority(newPriority: PriorityLevel): void {
    this.priority = newPriority;
  }
}
