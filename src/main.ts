import './style.scss';

const App = () => {
  const main = document.getElementById('app');

  main!.innerHTML = `
   <aside class="sidebar">
      <div class="sidebar_header">NotesList</div>
      <nav class="sidebar_nav">
      <button class"sidebar-btn" id="nav-add task">Aufgabe hinzufügen</button>
      <button class"sidebar-btn" id="nav-search">Suchen</button>
      <button class"sidebar-btn" id="nav-inbox">Eingang</button>
      <button class"sidebar-btn" id="nav-today">Heute</button>
      <button class"sidebar-btn" id="nav-soon">Demnächst</button>
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
