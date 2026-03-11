import './style.scss';
import { Task } from './core/Task.js';

const App = () => {
  const main = document.getElementById('app');

  main!.innerHTML = `
   <aside class="sidebar">
      <div class="sidebar_header">NotesList</div>
      <nav class="sidebar_nav">
      </nav>
      <div class="sidebar__projects">
        <h3>Projekte</h3>
        <ul id="project-list"></ul>
      </div>
    </aside>
    <section id="main-content">
    </section>
  `;
};

App();

const testTAsk = new Task('test');

console.log(testTAsk);
console.log(testTAsk.createdAt.toLocaleString());
console.log(testTAsk.addComment('test test'));
console.log(testTAsk.addComment('test test 3'));
console.log(testTAsk.comments);
