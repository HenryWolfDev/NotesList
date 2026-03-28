import { Today } from '../views/Today';
import { Add_Task_Modal } from '../UI/Add_Task_Modal';

export const Views = {
  HOME: 'home',
  TODAY: 'today',
  UPCOMING: 'upcoming',
  ADD_TASK_MODAL: 'add-task-modal',
  SEARCH_MODAL: 'search-modal',
} as const;

export class ViewManager {
  private containerId: string = 'content-view';

  renderView(viewName: string) {
    if (viewName === Views.SEARCH_MODAL || viewName === Views.ADD_TASK_MODAL) {
      this.openModal(viewName);
      return;
    }

    const container = document.getElementById(this.containerId);
    if (!container) return;

    container.innerHTML = '';

    switch (viewName) {
      case Views.TODAY:
        new Today().init(this.containerId);
        break;
      case Views.UPCOMING:
        break;
      case Views.HOME:
        break;
      default:
        console.error(`View ${viewName} nicht gefunden`);
    }
  }

  private openModal(modalName: string) {
    if (modalName === Views.ADD_TASK_MODAL) {
      new Add_Task_Modal().open();
    }
  }
}
