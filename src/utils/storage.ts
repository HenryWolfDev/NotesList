import type { StorageData } from '../types/_storageData';
import { Category } from '../core/Category';
import { Task } from '../core/Task';

const storageKey = 'noteslist_store';

export const saveToStorage = (data: StorageData): void => {
  localStorage.setItem(storageKey, JSON.stringify(data));
};

export const loadFromStorage = (): StorageData | null => {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return null;

  const data = JSON.parse(raw);
  return {
    categorys: data.categorys.map(Category.fromJSON),
    unassignedTasks: data.unassignedTasks.map(Task.fromJSON),
  };
};
