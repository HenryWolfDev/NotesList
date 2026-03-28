# NotesList – Advanced Dashboard Todoist Clone

Eine hochfunktionale, rekursive To-Do App basierend auf den Anforderungen des [The Odin Project](https://www.theodinproject.com).

## 🛠 Tech Stack

[Vite](https://vite.dev/)
[TypeScript](https://www.typescriptlang.org/)
[Sass](https://sass-lang.com/)

## 🚀 MVP

Das Ziel von **NotesList** ist die Verwaltung von Alltagsaufgaben durch:

- **Intelligentes Dashboard:** Dynamische Filter für "Today", "Home" und eine 4-Tage "Upcoming"-Boardansicht.
- **Projekt-Architektur:** Gruppierung von Aufgaben in Kategorien -> Projekte -> Tasks --> Sections -> Tasks.
- **Meta-Daten:** Unterstützung für Prioritäten (1-4), mit detaillierte Beschreibungen und Zeitstempeln.
- **Persistenz:** Vollständige Speicherung der verschachtelten Datenstruktur im LocalStorage.

## 💻 Installation & Start

1. Repository klonen: `git clone <deine-url>`
2. Abhängigkeiten installieren: `npm install`
3. Entwicklungsserver starten: `npm run dev`

---

## 🏗️ Architektur

**App.ts** – Composition Root

Initialisiert alles in sauberer Reihenfolge.
Erstellt Navbar, Sidebar und ViewManager und verdrahtet sie miteinander. Besitzt nichts, orchestriert nur den Start.

**UI-Schicht**
Navbar:
– bekommt ViewManager per Constructor, navigiert zwischen statischen Views
Sidebar:
– bekommt ViewManager per Constructor, zeigt Category → Project Hierarchie, importiert storeDB direkt
Add_Task_Modal:
– öffnet sich über Navbar, wird noch an Store angebunden

**View-Schicht**
Today:
– Tasks die heute fällig sind
Home:
– noch zu definieren
Upcoming:
– gruppierte Zukunfts-Tasks
ProjectView:
– dynamischer View, braucht eine Project-ID

**Core-Schicht**
Store:
– Singleton, wird direkt importiert
ViewManager:
– rendert Views, muss bald dynamische Views mit IDs unterstützen
Datenmodell:

- Category → Project → Section → Task
