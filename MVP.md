# MVP: Advanced Todo List App

Ein Nutzer soll tägliche Aufgaben, einzelne Projekte und Tasks anlegen und verwalten können.
Verschiedene Ansichten sollen dabei helfen eine einfacherere Übersicht zu haben und Aufgaben
dynamisch abschließen zu können. Man soll jederzeit wissen auf welchen stand ein projekt ist,
was noch getan werden muss, was allgemein für die nächsten Tage ansteht, was routine aufgaben sind
und wann sich diese wiederholen.
Der Nutzer soll dabei freiheiten haben, sich seine projekte und Aufgaben selbst zusammenzustellen,
zu gliedern und zu verwalten.

## Datenmodelle

### Eigenschaften eines Tasks:

Ein Task kann entweder einem Projekt angehören , einer Section (Abschnitt) innerhalb eines Projekts
oder offen sein und weder einem Projekt noch Section angehören.

- Titel:
  - Name der Aufgabe (Pflichtfeld)
- Beschreibung:
  - Detaillierter Text zum Task (optional)
- Priorität:
  - Stufen (1-4) Visualisiert durch Flaggen-Icons in unterschiedlichen Farben
  - Standard: Stufe 4 (niedrigste)
- Datum:
  - Fälligkeitsdatum, jederzeit aktualisierbar
- Abgeschlossen:
  - Kann abgeschlossen werden per klick
- Projekt-Zurordnung:
  - Tasks können allgemein zum Projekt angehören
  - Listet alle Tasks dazu auf
- Section-Zuordnung:
  - Tasks können Sections im Projekt angehören
  - Section listet alle Tasks in ihrem Abschnitt auf

### Eigenschaften einer Section:

Eine Section ist immer ein Abschnitt innerhalb eines Projekts.

- Titel
  - Name der Section (Pflichtfeld)
- Beschreibung
  - Beschreibung der Section (optional)
- Tasks
  - Liste aller Tasks für diese Section

### Eigenschaften eines Projekts:

Ein Projekt gehört immer einer Kategorie an.

- Titel
  - Name des Projekts
- Beschreibung
  - Beschreibung des Projekts (optional)
- Sections
  - Kann ich Abschnitte unterteilt werden
  - Listet alle Sections auf
- Tasks
  - Liste aller Tasks die keiner Section angehören

### Eigenschaften einer Kategorie:

Eine Kategorie ist die Oberste Ebene.
Projekte werden in Kategorien unterteilt.

Beispiel:
Kategorie: Personal -> Projekte: Sport
Kategorie: Education -> Projekte: TypeScript
Kategorie: Job -> Projekte: Portfolio

- Titel
  - Name der Kategorie
- Projekte
  - Listet alle Projekte die dieser Kategorie angehören

---

## Navigation

### Navbar:

- "Aufgabe hinzufügen" öffnet Modal
  - Schnelles hinzufügen eines Tasks
- "Suche" öffnet Modal
- "Home" öffnet Ansicht
- "Today" öffnet Ansicht
  -- Zeigt Titel "Heute", aktuelles Datum und die Anzahl der fälligen Tasks.
- "Upcoming" öffnet Ansicht

### Dashboard-Ansichten:

- Inbox:
  - Alle Tasks
- Today:
- Upcoming:
  - 4-Tage Boardansicht

---

## Dashboard-Ansichten (Views ohne Modal)

### Today

- Liste aller Tasks, deren Datum der aktuelle Tag ist
- Tasks werden minimmal dargestellt:
  - Icon zum abschließen des Tasks, Titel, Kategorie/Projek
- Interaktion:
  - Icons zum schnellen Abschließen direkt in der Liste
  - Aufgabe hinzufügen Button (Öffnet Modal zum Quick Add)
- Detail-Ansicht:
  - Klick auf Task öffnet das große Task-Modal
    (mit Beschreibung, Unteraufgaben, Kommentaren usw. siehe Task-Modal)

### Upcoming (Board-Ansicht)

- Zeitraum:
  - Heute bis + 4 Tage
  - Layout: Horizontales Board mit Spalten pro Tag
  - Header:
    - Titel "Demnächst" sowie aktueller Monat und Jahr
      Features:
    - Jede Spalte hat einen Button zum schnellen Hinzufügen eines Tasks
      für genau diesen Tag

---

## Interaktive Komponenten (Modals)

### Quick-Add Modal (Aufgabe hinzufügen)

- Fokus auf Schnelligkeit
- Eingaben: Titel (Pflicht), Beschreibung, Datum, Priorität

### Such-Modal

- Echtzeit-Suche über alle Tasks (Titel)
