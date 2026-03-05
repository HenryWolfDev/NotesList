import './style.scss';

const App = () => {
  const main = document.getElementById('app');

  main!.innerHTML = `
   <aside class="sidebar">
      <div class="sidebar__header">NotesList</div>
      <nav class="sidebar__nav">
        <button id="nav-today">Heute</button>
        <button id="nav-inbox">Eingang</button>
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
