import type { ViewManager } from '../core/ViewManager';

export class Navbar {
  private viewManager: ViewManager;

  constructor(viewManager: ViewManager) {
    this.viewManager = viewManager;
  }
  render() {
    const nav = document.createElement('nav');

    nav.innerHTML = `
        <button data-view="add-task-modal" class="btn add-task-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            viewBox="0 0 512 512"
          >
            <path
              d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z"
              fill="currentColor"
              stroke="currentColor"
            />
          </svg>
          <span>Add task</span>
        </button>
        <button data-view="search-modal" class="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            viewBox="0 0 512 512"
          >
            <path
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M338.29 338.29L448 448"
            />
          </svg>
          <span>Search</span>
        </button>
        <button data-view="inbox" class="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            viewBox="0 0 512 512"
          >
            <path
              d="M384 80H128c-26 0-43 14-48 40L48 272v112a48.14 48.14 0 0048 48h320a48.14 48.14 0 0048-48V272l-32-152c-5-27-23-40-48-40z"
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M48 272h144M320 272h144M192 272a64 64 0 00128 0"
            />
          </svg>
          <span>Inbox</span>
        </button>
        <button data-view="today" class="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            viewBox="0 0 512 512"
          >
            <rect
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="32"
              x="48"
              y="80"
              width="416"
              height="384"
              rx="48"
            />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="32"
              stroke-linecap="round"
              d="M128 48v32M384 48v32"
            />
            <rect
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="32"
              stroke-linecap="round"
              x="112"
              y="224"
              width="96"
              height="96"
              rx="13"
            />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="32"
              stroke-linecap="round"
              d="M464 160H48"
            />
          </svg>
          <span>Today</span>
        </button>
        <button data-view="upcoming" class="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            viewBox="0 0 512 512"
          >
            <rect
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="32"
              x="48"
              y="80"
              width="416"
              height="384"
              rx="48"
            />
            <circle cx="296" cy="232" r="24" />
            <circle cx="376" cy="232" r="24" />
            <circle cx="296" cy="312" r="24" />
            <circle cx="376" cy="312" r="24" />
            <circle cx="136" cy="312" r="24" />
            <circle cx="216" cy="312" r="24" />
            <circle cx="136" cy="392" r="24" />
            <circle cx="216" cy="392" r="24" />
            <circle cx="296" cy="392" r="24" />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="32"
              stroke-linecap="round"
              d="M128 48v32M384 48v32"
            />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="32"
              d="M464 160H48"
            />
          </svg>
          <span>Upcoming</span>
        </button>
    `;

    nav.addEventListener('click', e => {
      // closest wandert den Baum hoch, bis es das Element mit dem data-view findet.
      const button = (e.target as HTMLElement).closest('[data-view]');
      if (!button) return;

      const viewName = button.getAttribute('data-view');
      console.log(viewName);
      if (viewName) {
        this.viewManager.renderView(viewName);
        // this.setActiveButton(button as HTMLElement);   // Optional: Hier könntest du eine CSS-Klasse "active" verwalten
      }
    });

    return nav;
  }
}
