import './style.scss';
import { ViewManager } from './core/ViewManager.js';
import { Navbar } from './UI/Navbar.js';
import { createDefaultData } from './data/defaultData.js';
import { loadFromStorage } from './utils/storage.js';
import { storeDB } from './core/Store.js';

const viewManager = new ViewManager();
const navbar = new Navbar(viewManager);

// Navbar in den Header hängen
document.getElementById('header-container')?.appendChild(navbar.render());

// Initial-View laden
viewManager.renderView('today');

const default_active = localStorage.getItem('defaultData_active');

if (!default_active) {
  createDefaultData();
  localStorage.setItem('defaultData_active', 'true');
} else {
  const storageData = loadFromStorage();
  if (storageData) {
    storeDB.categorys = storageData.categorys;
    storeDB.unassignedTasks = storageData.unassignedTasks;
  }
}
