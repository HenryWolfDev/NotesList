import './style.scss';

const App = () => {
  const main = document.getElementById('app');

  main!.innerHTML = `
   <aside class="sidebar">
      <div class="sidebar_header">NotesList</div>
      <nav class="sidebar_nav">
      <button id="nav-today">Aufgabe hinzufügen</button>
      <button id="nav-today">Suchen</button>
      <button id="nav-inbox">Eingang</button>
      <button id="nav-today">Heute</button>
      <button id="nav-today">Demnächst</button>
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
