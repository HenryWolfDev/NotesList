import { Temporal } from 'temporal-polyfill';
import type { Task } from '../core/Task';
import { priorityColors } from '../constants/priorities';

export function sectionTemplate() {
  return `
  <h1>Today</h1>
  <span>${Temporal.Now.plainDateISO().toLocaleString()}</span>
  <div class="info">
  
  </div>
  <div id="add-task-container">
    <button id="add-task-btn-today" class="add-task-btn">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288M400 256H112"/></svg>
    <span>Add task</span>
    </button>
  </div>
  <div class="tasks-lists">
    <div class="unassignedTasks-list-today">
      <div class="tasks-list-title">
        <h2>Unassigned Tasks</h2>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 176L217.6 336 160 272"/></svg>
          <span>0</span>
          <span>tasks</span>
        </div>
      </div>
    </div>
    <div class="project-tasks-list-today">
      <div class="tasks-list-title">
        <h2>Project Tasks</h2>
        <div class="tasks-list-open-tasks">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 176L217.6 336 160 272"/></svg>
          <span>0</span>
          <span>tasks</span>
        </div>
      </div>  
    </div>
  </div>
  `;
}

export function taskCard(task: Task) {
  return `
    <div class="task-card-today-head">
      <button class="toggle-task-today-btn">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon toggle-icon-default" viewBox="0 0 512 512"><circle cx="256" cy="256" r="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon toggle-icon-complete hidden" viewBox="0 0 512 512"><path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" fill="currentColor" stroke="currentColor"/></svg>
        </button>
      <h4>${task.title}</h4> 
    </div>
    <p class="task-card-today-desc">${task.description ?? 'No description'}</p>
    <div class="task-card-today-bottom">
      <svg style="color: ${priorityColors[task.priority]}" xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512"><path d="M80 464V68.14a8 8 0 014-6.9C91.81 56.66 112.92 48 160 48c64 0 145 48 192 48a199.53 199.53 0 0077.23-15.77 2 2 0 012.77 1.85v219.36a4 4 0 01-2.39 3.65C421.37 308.7 392.33 320 352 320c-48 0-128-32-192-32s-80 16-80 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>
      <div class="task-card-today-date">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512"><rect fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" x="48" y="80" width="416" height="384" rx="48"/><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" d="M128 48v32M384 48v32"/><rect fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" x="112" y="224" width="96" height="96" rx="13"/><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" d="M464 160H48"/></svg>
        <span>${task.dueDate}</span>
      </div>
    </div>
  `;
}

export function getDefaultAddTaskContainer() {
  return `
    <button id="add-task-btn-today" class="add-task-btn">
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
