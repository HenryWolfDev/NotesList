# MVP: Advanced Todo List App

## Task und Project Modell und Modal

Das Task-Objekt, ist die Zentrale Dateneinheit, das komplexe Strukturen und Metadaten enthält.

### Eigenschaften eines Tasks:

- Titel:
  - Header der Aufgabe (Pflichtfeld)
- Beschreibung:
  - Detaillierter Text direkt unter dem Titel
- Unteraufgaben:
  - Liste von Tasks, die wiederum eigene Unteraufgaben und Kommentare haben können
    (Rekursion unbegrenzt)
  - Jede Unteraufgabe ist also auch ein Task und somit ein Task-Objekt
    (mit eigener Task-Ansicht per klick darauf)
- Rekursion:
  - Falls Task eine unteraufgabe ist, wird die Hauptaufgabe als klickbarer Reiter angezeigt,
    um einfach den Ursprung herzuleiten
- Kommentare:
  - Liste von Anmerkungen mit automatischer Anzeige von Datum und Uhrzeit
- Priorität:
  - Stufen (1-4) Visualisiert durch Flaggen-Icons in unterschiedlichen Farben
- Datum:
  - Fälligkeitsdatum, jederzeit aktualisierbar
- Projekt-Zuordnung:
  - Jeder Task gehört zu einem Projekt (Standard: Eingang)

---

## Navigation

Sidebar dient als Zugriff auf verschiedene Ansichten.

### Aktionen:

- Buttons für "Aufgabe hinzufügen" und "Suche" (Öffnen Modals)

### Dashboard-Ansichten:

- Inbox:
  - Alle Tasks
- Today:
  - Zeigt Titel "Heute", aktuelles Datum und die Anzahl der fälligen Tasks.
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
- Eingaben: Titel (Pflicht), Beschreibung, Datum, Priorität, Kategorie/Projekt

### Such-Modal

- Echtzeit-Suche über alle Tasks (Titel) und Projektnamen
