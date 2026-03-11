import { Temporal } from 'temporal-polyfill';
export function getTodayTemplate() {
  return `
  <h1>Today</h1>
  <span>${Temporal.Now.plainDateISO().toLocaleString()}</span>
  <div class="info">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 176L217.6 336 160 272"/></svg>
  <span>0</span>
  <span>tasks</span>
  </div>
  <div id="add-task-container">
    <button id="add-task-btn-today" class="add-task">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288M400 256H112"/></svg>
    <span>Add task</span>
    </button>
  </div>
  `;
}

export function getDefaultAddTaskContainer() {
  return `
    <button id="add-task-btn-today" class="add-task">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288M400 256H112"/></svg>
    <span>Add task</span>
    </button>
  `;
}

export function getAddTaskTodayTemplate() {
  return `
   <div class="add-task-container-today">
      <input type="text" placeholder="Task name" />
      <input type="text" placeholder="Description" />
      <div>
        <button id="close-add-task-today-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        </button>
        <button id="send-task-today-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            viewBox="0 0 512 512"
          >
            <path
              d="M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z"
            />
          </svg>
        </button>
      </div>
    </div>
  `;
}
