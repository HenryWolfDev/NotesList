import { sectionTemplate, taskCard, getAddTaskTodayTemplate, getDefaultAddTaskContainer } from '../UI/Today_Templates';
import type { Task } from '../core/Task';
import { getAllFilteredTasksForToday } from '../core/TaskService';

export class Today {
  section: HTMLElement = document.createElement('section');

  tasks = getAllFilteredTasksForToday();

  init(containerID: string) {
    this.renderUI(containerID);

    this.addTaskContainer();
  }

  addTaskContainer() {
    const addTaskBtn = this.section.querySelector('#add-task-btn-today');
    const container = this.section.querySelector('#add-task-container');
    addTaskBtn?.addEventListener('click', () => {
      container!.innerHTML = getAddTaskTodayTemplate();

      const closeBtn = container?.querySelector('#close-add-task-today-btn');

      closeBtn?.addEventListener('click', () => {
        container!.innerHTML = getDefaultAddTaskContainer();
        this.addTaskContainer();
      });
    });
  }

  renderUI(containerID: string) {
    console.log(this.tasks.projectTasks);
    const container = document.getElementById(containerID);
    if (!container) return;
    container.innerHTML = '';

    this.section.classList.add('today-section');
    this.section.innerHTML = sectionTemplate();

    const unassignedTasksList = this.section.querySelector('.unassignedTasks-list-today');
    const projectTasksList = this.section.querySelector('.project-tasks-list-today');

    if (unassignedTasksList) {
      this.renderUnassignedTasks(unassignedTasksList);
    }
    if (projectTasksList) {
      this.renderProjectTasks(projectTasksList);
    }

    container.appendChild(this.section);
  }
  private renderUnassignedTasks(unassignedTasksList: Element) {
    this.tasks.unassignedTasks.forEach(task => {
      const div = document.createElement('div');
      div.innerHTML = taskCard(task);
      const firstChild = div.firstElementChild;
      if (firstChild && unassignedTasksList) {
        unassignedTasksList.appendChild(firstChild);
      }
    });
  }
  private renderProjectTasks(projectTasksList: Element) {
    this.tasks.projectTasks.forEach(projectTask => {
      const div = document.createElement('div');

      const titleDiv = document.createElement('h3');
      titleDiv.innerHTML = projectTask.project.title;
      div?.appendChild(titleDiv);

      projectTask.tasks.forEach(task => {
        const divCard = document.createElement('div');
        divCard.innerHTML = taskCard(task);
        div?.appendChild(divCard);
      });

      if (projectTasksList) {
        projectTasksList.append(div);
      }
    });
  }
}
