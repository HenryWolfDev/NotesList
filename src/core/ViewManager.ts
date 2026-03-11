import { Today } from '../views/Today';
import { Add_Task_Modal } from '../UI/Add_Task_Modal';
export class ViewManager {
  private containerId: string = 'content-area';

  renderView(viewName: string) {
    // 1. Logik für Modals
    if (viewName === 'search-modal' || viewName === 'add-task-modal') {
      this.openModal(viewName);
      return;
    }

    // 2. Logik für Views
    const container = document.getElementById(this.containerId);
    if (!container) return;

    // 1. Container leeren
    container.innerHTML = '';

    // 2. Entscheidung, welche View geladen wird
    switch (viewName) {
      case 'today':
        new Today().init(this.containerId);
        break;
      case 'upcoming':
        // new Upcoming().init(this.containerId);
        break;
      case 'inbox':
        // new Inbox().init(this.containerId);
        break;
      default:
        console.error(`View ${viewName} nicht gefunden`);
    }
  }

  private openModal(modalName: string) {
    if (modalName === 'add-task-modal') {
      new Add_Task_Modal().open();
    }
  }
}
