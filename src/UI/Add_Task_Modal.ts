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
    <div class="add-task-modal-content">
      <input type="text" placeholder="Task name" />
      <input type="text" placeholder="Description" />
      <div>
        <button id="btn-close-add-task-modal">
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
        <button id="btn-send-add-task-modal">
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

  private setupEventListener() {
    this.container
      .querySelector('#btn-close-add-task-modal')
      ?.addEventListener('click', () => {
        this.close();
      });
  }
}
