import { Today } from '../views/Today';
export class ViewManager {
  private containerId: string = 'content-area';

  renderView(viewName: string) {
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

      case 'add-task-modal':
        // new Inbox().init(this.containerId);
        break;

      case 'search':
        // new Inbox().init(this.containerId);
        break;
      default:
        console.error(`View ${viewName} nicht gefunden`);
    }
  }
}
