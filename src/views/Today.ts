import { getTodayTemplate } from '../UI/Today_Template';
export class Today {
  renderUI(containerID: string) {
    const container = document.getElementById(containerID);
    if (!container) return;
    container.innerHTML = '';

    const section = document.createElement('section');
    section.classList.add('today-section');

    section.innerHTML = getTodayTemplate();

    container.appendChild(section);
  }
}
