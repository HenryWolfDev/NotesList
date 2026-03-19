import { Category } from '../core/Category';
import { Task } from '../core/Task';

export interface StorageData {
  categorys: Category[];
  unassignedTasks: Task[];
}
