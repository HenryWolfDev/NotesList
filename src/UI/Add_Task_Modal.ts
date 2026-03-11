export class Add_Task_Modal {
  private container = document.getElementById('modal-container')!;

  open() {
    this.container.classList.remove('hidden');
    this.render();
    this.setupEventListener();
  }

  close() {
    this.container.classList.add('hidden');
    this.container.innerHTML = '';
  }

  render() {
    this.container.innerHTML = `
    <form class="add-task-modal-content">
      <div class="add-task-modal-input-bar">
        <input type="text" placeholder="Task name" required/>
        <input type="text" placeholder="Description"/>
      </div>
      <div class="add-task-modal-settings-bar">
        <button class="btn">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512"><rect fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" x="48" y="80" width="416" height="384" rx="48"/><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" d="M128 48v32M384 48v32"/><rect fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" x="112" y="224" width="96" height="96" rx="13"/><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" d="M464 160H48"/></svg>
          <span>Date</span>
        </button>

        <div class="priority-dropdown">
         <button class="btn">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="icon" 
            viewBox="0 0 512 512"
          >
            <path 
            d="M80 464V68.14a8 8 0 014-6.9C91.81 56.66 112.92 48 160 48c64 0 145 48 192 48a199.53 199.53 0 0077.23-15.77 2 2 0 012.77 1.85v219.36a4 4 0 01-2.39 3.65C421.37 308.7 392.33 320 352 320c-48 0-128-32-192-32s-80 16-80 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>
          <span>Priority</span>
        </button>
         <ul class="prio-menu" id="prioMenu">
          <li><span class="red">🚩</span> Priority 1</li>
          <li><span class="orange">🚩</span> Priority 2</li>
          <li><span class="blue">🚩</span> Priority 3</li>
          <li><span class="grey">🚩</span> Priority 4</li>
        </ul>
        </div>
       
      </div>
      <div class="add-task-modal-action-bar">
        <button id="btn-close-add-task-modal" class="btn">       
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg> 
          <span>Cancel</span>        
        </button>
        <button id="btn-send-add-task-modal" class="btn">       
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            viewBox="0 0 512 512"
          >
            <path
              d="M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z"
              fill="currentColor"
              />
          </svg>
          <span>Add task</span>
        </button>
      </div>
    </form>
    `;
  }

  private setupEventListener() {
    this.container
      .querySelector('#btn-close-add-task-modal')
      ?.addEventListener('click', () => {
        this.close();
      });
  }
}
