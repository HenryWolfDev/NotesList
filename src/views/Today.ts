import {
  getTodayTemplate,
  getAddTaskTodayTemplate,
  getDefaultAddTaskContainer,
} from '../UI/Today_Templates';
export class Today {
  section: HTMLElement = document.createElement('section');

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
    this.section.innerHTML = getTodayTemplate();

    container.appendChild(this.section);
  }
}
