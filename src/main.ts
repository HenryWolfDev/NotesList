import './style.scss';
import { ViewManager } from './core/ViewManager.js';
import { Navbar } from './UI/Navbar.js';

const viewManager = new ViewManager();
const navbar = new Navbar(viewManager);

// Navbar in den Header hängen
document.getElementById('header-container')?.appendChild(navbar.render());

// Initial-View laden
viewManager.renderView('today');
