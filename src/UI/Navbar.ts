import type { ViewManager } from '../core/ViewManager';
import { Views } from '../core/ViewManager';
import addIcon from '../assets/icons/add-circle.svg?raw';
import searchIcon from '../assets/icons/search-outline.svg?raw';
import fileIcon from '../assets/icons/file-tray-outline.svg?raw';
import todayIcon from '../assets/icons/today-outline.svg?raw';
import calendarIcon from '../assets/icons/calendar-outline.svg?raw';

export class Navbar {
  private viewManager: ViewManager;
  private nav = document.createElement('nav');
  private data_attribute_key = 'data-view';

  constructor(viewManager: ViewManager) {
    this.viewManager = viewManager;
  }

  private setupNavigationEvents(): void {
    this.nav.addEventListener('click', e => {
      // closest wandert den Baum hoch, bis es das Element mit dem data-view findet.
      const button = (e.target as HTMLElement).closest(`[${this.data_attribute_key}]`);
      if (!button) return;
      const viewName = button.getAttribute(this.data_attribute_key);
      if (viewName) {
        this.viewManager.renderView(viewName);
      }
    });
  }

  private createNavButton(view: string, icon: string, label: string, extraClass?: string): string {
    return `
    <button ${this.data_attribute_key}="${view}" class="btn ${extraClass ?? ''}">
    ${icon}
    <span>${label}</span>
    </button>
    `;
  }
  render() {
    this.nav.innerHTML = `  
         ${this.createNavButton(Views.ADD_TASK_MODAL, addIcon, 'Add task', 'add-task-btn')}
         ${this.createNavButton(Views.SEARCH_MODAL, searchIcon, 'Search')}
         ${this.createNavButton(Views.HOME, fileIcon, 'Home')} 
         ${this.createNavButton(Views.TODAY, todayIcon, 'Today')} 
         ${this.createNavButton(Views.UPCOMING, calendarIcon, 'Upcoming')} 
    `;

    this.setupNavigationEvents();

    return this.nav;
  }
}
