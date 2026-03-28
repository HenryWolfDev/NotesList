import { Temporal } from 'temporal-polyfill';
import type { IGroupedTasks } from '../types/_taskService';
import { storeDB } from './Store';
import type { Task } from './Task';

export function getAllFilteredTasksForToday(): IGroupedTasks {
  const dueDate = Temporal.Now.plainDateISO();
  const allUnassignedTasks = storeDB.unassignedTasks.filter(task => isDueToday(task, dueDate));
  const allProjectsTasks = storeDB.categorys.flatMap(category => {
    return category.projects.map(project => {
      const tasks = [
        ...project.tasks.filter(task => isDueToday(task, dueDate)),
        ...project.sections.flatMap(section => section.tasks.filter(task => isDueToday(task, dueDate))),
      ];
      return { project, tasks };
    });
  });

  return {
    unassignedTasks: allUnassignedTasks,
    projectTasks: allProjectsTasks,
  };
}

function isDueToday(task: Task, dueDate: Temporal.PlainDate): boolean {
  return !!(task.dueDate && task.dueDate.equals(dueDate));
}
