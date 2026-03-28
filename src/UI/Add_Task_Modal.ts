import todayIcon from '../assets/icons/today-outline.svg?raw';
import flagIcon from '../assets/icons/flag-outline.svg?raw';
import closeIcon from '../assets/icons/close-outline.svg?raw';
import sendIcon from '../assets/icons/send.svg?raw';
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

  private createModalButton(icon: string, label: string, id?: string): string {
    return `
    <button ${id ? `id="${id}"` : ''} class="btn">
    ${icon}
    <span>${label}</span>
    </button>
    `;
  }

  render() {
    this.container.innerHTML = `
    <form class="add-task-modal-content">
      <div class="add-task-modal-input-bar">
        <input type="text" placeholder="Task name" required/>
        <input type="text" placeholder="Description"/>
      </div>
      <div class="add-task-modal-settings-bar">
        ${this.createModalButton(todayIcon, 'Date')}
        <div class="priority-dropdown">
        ${this.createModalButton(flagIcon, 'Priority')}
         <ul class="prio-menu" id="prioMenu">
          <li><span class="red">🚩</span> Priority 1</li>
          <li><span class="orange">🚩</span> Priority 2</li>
          <li><span class="blue">🚩</span> Priority 3</li>
          <li><span class="grey">🚩</span> Priority 4</li>
        </ul>
        </div>
       
      </div>
      <div class="add-task-modal-action-bar">
      ${this.createModalButton(closeIcon, 'Cancel', 'btn-close-add-task-modal')}
      ${this.createModalButton(sendIcon, 'Add task', 'btn-send-add-task-modal')}
      </div>
    </form>
    `;
  }

  private setupEventListener() {
    this.container.querySelector('#btn-close-add-task-modal')?.addEventListener('click', () => {
      this.close();
    });
  }
}
