import { loadFromStorage } from './utils/storage';
import { createDefaultData } from './data/defaultData';
import { storeDB } from './core/Store';
import { ViewManager } from './core/ViewManager';
import { Navbar } from './UI/Navbar';

export class App {
  private default_data_key = 'defaultData_active';
  private header_id_key = 'header-container';

  private viewManager = new ViewManager();
  private navbar = new Navbar(this.viewManager);

  init(): void {
    this.loadStorage();
    this.renderNavbar();
    this.loadInitialView();
  }

  loadStorage(): void {
    const default_data_active = localStorage.getItem(this.default_data_key);

    if (!default_data_active) {
      createDefaultData();
      localStorage.setItem(this.default_data_key, 'true');
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
    this.viewManager.renderView('today');
  }
}
