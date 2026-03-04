# NotesList – Advanced Dashboard Todoist Clone

Eine hochfunktionale, rekursive To-Do App basierend auf den Anforderungen des [The Odin Project](https://www.theodinproject.com).

## 🛠 Tech Stack

[Vite](https://vite.dev/)
[TypeScript](https://www.typescriptlang.org/)
[Sass](https://sass-lang.com/)

## 🚀 MVP

Das Ziel von **NotesList** ist die Verwaltung komplexer Alltagsstrukturen durch:

- **Rekursives Task-Modell:** Aufgaben können unendlich tief verschachtelte Unteraufgaben enthalten, wobei jede Unteraufgabe ein vollwertiges Task-Objekt mit eigenen Metadaten ist.
- **Intelligentes Dashboard:** Dynamische Filter für "Heute", "Eingang" und eine 4-Tage "Demnächst"-Boardansicht.
- **Projekt-Architektur:** Gruppierung von Aufgaben in Projekten, die wiederum in Abschnitte (Sections) unterteilt werden können.
- **Meta-Daten:** Unterstützung für Prioritäten (1-4), detaillierte Beschreibungen und Kommentarsystem mit Zeitstempeln.
- **Persistenz:** Vollständige Speicherung der verschachtelten Datenstruktur im

## 📅 Roadmap / Meilensteine

- [x] Projekt-Setup mit Vite & TypeScript
- [ ] **SCSS Architektur:** (7-1 Pattern Basis, Variablen für P1-P4)
- [ ] **Daten-Architektur:** Definition der rekursiven Interfaces & Klassen
- [ ] **Core Logic:** TaskManager für CRUD-Operationen & Filter-Logik
- [ ] **Layout:** Dashboard-Shell mit Sidebar & Dynamic Content Area
- [ ] **Views:** Implementierung der "Heute" Liste & des "Demnächst" Boards
- [ ] **Modal-System:** Globales Management für Quick-Add, Task-Details & Suche
- [ ] **Storage:** Serialisierung & Rehydrierung der rekursiven JSON-Daten

## 💻 Installation & Start

1. Repository klonen: `git clone <deine-url>`
2. Abhängigkeiten installieren: `npm install`
3. Entwicklungsserver starten: `npm run dev`
