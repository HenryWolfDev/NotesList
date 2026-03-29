import { sectionTemplate, taskCard, getAddTaskTodayTemplate, getDefaultAddTaskContainer } from '../UI/Today_Templates';
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

    this.renderTotalNumberofTasks();

    container.appendChild(this.section);
  }

  private renderUnassignedTasks(unassignedTasksList: Element) {
    this.tasks.unassignedTasks.forEach(task => {
      if (unassignedTasksList) {
        unassignedTasksList.appendChild(taskCard(task));
      }
    });
  }

  private renderProjectTasks(projectTasksList: Element) {
    this.tasks.projectTasks.forEach(projectTask => {
      const div = document.createElement('div');
      div.classList.add('project-card-today');

      const titleDiv = document.createElement('h3');
      titleDiv.classList.add('project-title-today');
      titleDiv.innerHTML = projectTask.project.title;
      div?.appendChild(titleDiv);

      projectTask.tasks.forEach(task => {
        if (projectTasksList) {
          projectTasksList.appendChild(taskCard(task));
        }
      });
    });
  }

  private renderTotalNumberofTasks() {
    const openTasksProjects = this.section.querySelector('.open-tasks-project-tasks');
    const openTasksUnassigned = this.section.querySelector('.open-tasks-unassigned');

    if (openTasksProjects) {
      openTasksProjects.textContent = this.getTotalNumberOfTasks('projectTasks');
    }
    if (openTasksUnassigned) {
      openTasksUnassigned.textContent = this.getTotalNumberOfTasks('unassignedTasks');
    }
  }

  private getTotalNumberOfTasks(tasksListName: string): string {
    let listNumber = '0';
    if (tasksListName === 'unassignedTasks') {
      listNumber = String(this.tasks.unassignedTasks.length);
    }
    if (tasksListName === 'projectTasks') {
      const numbers = this.tasks.projectTasks.reduce((current, projectTask) => current + projectTask.tasks.length, 0);
      listNumber = String(numbers);
    }

    return listNumber;
  }
}
