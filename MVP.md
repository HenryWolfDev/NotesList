# MVP: Advanced Todo List App

# Task Modell und Modal

Das Task-Objekt, ist die Zentrale Dateneinheit, das komplexe Strukturen und Metadaten enthält.

## Eigenschaften eines Tasks:

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

# Sidebar (Navigation)

Sidebar dient als Zugriff auf verschiedene Ansichten.

- Aktionen:
  - Buttons für "Aufgabe hinzufügen" und "Suche" (Öffnen Modals)

- Standard-Ansichten:
  - Eingang:
    - Alle Tasks ohne spezifisches Projekt
  - Heute:
    - Zeigt Titel "Heute", aktuelles Datum und die Anzahl der fälligen Tasks.
  - Demnächst:
    - 4-Tage Boardansicht

- Projekt-Sektion:
  - Aus und Einklappbares Menü.
  - Plus-Icon öffnet das "Projekt hinzufügen" -Modal
  - Standard-Projekte:
    - Privates, Bildung, Arbeit
  - Anzeige:
    - Jedes Projekt zeigt:
      - Raute (in Projektfarbe), Name, Icon (Vordefiniert), Task-Count an.

---

# Dashboar-Ansichten (Views ohne Modal)

## Aufgaben Heute

- Liste aller Tasks, deren Datum der aktuelle Tag ist
- Tasks werden minimmal dargestellt:
  - Icon zum abschließen des Tasks, Titel, Kategorie/Projek
- Interaktion:
  - Icons zum schnellen Abschließen direkt in der Liste
  - Aufgabe hinzufügen Button (Öffnet Modal zum Quick Add)
- Detail-Ansicht:
  - Klick auf Task öffnet das große Task-Modal
    (mit Beschreibung, Unteraufgaben, Kommentaren usw. siehe Task-Modal)

## Aufgaben Demnächst (Board-Ansicht)

- Zeitraum:
  - Heute bis + 4 Tage
  - Layout: Horizontales Board mit Spalten pro Tag
  - Header:
    - Titel "Demnächst" sowie aktueller Monat und Jahr
      Features:
    - Jede Spalte hat einen Button zum schnellen Hinzufügen eines Tasks
      für genau diesen Tag

## Projekt-Ansicht

- Anzeige aller projektspezifischen Aufgaben.
- Strukturierung: Unterteilung in Abschnitte
- Logik:
  - Aufgaben ohne Abschnitt erscheinen ganz oben, danach folgen Abschnitte
- Aktion:
  - Button zum "Abschnitt hinzufügen" zur weiteren Strukturierung des Projekts.
  - Jeder Abschnitt hat einen Button "Aufgabe hinzufügen" (öffnet Quick Add Modal)

---

# Interaktive Komponenten (Modals)

## Quick-Add Modal (Aufgabe hinzufügen)

- Fokus auf Schnelligkeit
- Eingaben: Titel (Pflicht), Beschreibung, Datum, Priorität, Kategorie/Projekt

## Projekt-Modal (Projekt hinzufügen)

- Eingaben: Name des Projekts
- Auswahl einer Farbe für die Raute und eines Icons aus einem vordefinierten Set
- Neues Projekt wird in der Siderbar angezeigt

## Such-Modal

- Echtzeit-Suche über alle Tasks (Titel) und Projektnamen

---
