import { loadFromStorage } from './utils/storage';
import { createDefaultData } from './data/defaultData';
import { storeDB } from './core/Store';
import { ViewManager } from './core/ViewManager';
import { Navbar } from './UI/Navbar';
import { default_data_key } from './constants/storagekeys';

export class App {
  private header_id_key = 'header-container';
  private inital_view_key = 'today';

  private viewManager = new ViewManager();
  private navbar = new Navbar(this.viewManager);

  init(): void {
    this.loadStorage();
    this.renderNavbar();
    this.loadInitialView();
  }

  loadStorage(): void {
    const default_data_active = localStorage.getItem(default_data_key);

    if (!default_data_active) {
      createDefaultData();
      localStorage.setItem(default_data_key, 'true');
    } else {
      const storageData = loadFromStorage();
      if (storageData) {
        storeDB.categorys = storageData.categorys;
        storeDB.unassignedTasks = storageData.unassignedTasks;
      }
    }
  }

  renderNavbar(): void {
    document.getElementById(this.header_id_key)?.appendChild(this.navbar.render());
  }

  loadInitialView(): void {
    this.viewManager.renderView(this.inital_view_key);
  }
}
