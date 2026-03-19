import { Category } from '../core/Category';
import { Task } from '../core/Task';

const storageKey = 'noteslist_store';
interface StorageData {
  categorys: Category[];
  unassignedTasks: Task[];
}

export const saveToStorage = (data: StorageData): void => {
  localStorage.setItem(storageKey, JSON.stringify(data));
};

export const loadFromStorage = (): StorageData | null => {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return null;

  const data = JSON.parse(raw);
  return data as StorageData;
};
