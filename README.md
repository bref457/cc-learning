# Claude Code Lernwiki

Deutsche Lernseite zur Claude-Code-Doku (https://code.claude.com/docs/de/overview).
Einfach `index.html` im Browser öffnen, kein Server nötig.

## Aufbau

```
index.html            Startseite mit allen Kapiteln
kapitel-1.html        Kapitel 1 · Grundlagen
assets/style.css      gemeinsames Design (hell/dunkel)
assets/app.js         Suche, Fortschritt, Tabs, Kopieren, Quiz, Merkkarten
assets/search-index.js  Suchindex (automatisch erzeugt)
tools/build-index.py  erzeugt den Suchindex aus allen kapitel-*.html
```

## Neues Kapitel hinzufügen

1. `kapitel-1.html` kopieren, z. B. als `kapitel-2.html`, und `data-page="kapitel-2"` im `<body>` setzen.
2. Jeder Abschnitt ist ein `<section class="lesson" id="..." data-keywords="...">` und bekommt einen Eintrag in der Seitenleiste (`.toc`).
3. Bausteine: `.box.merke|tipp|achtung|info|beispiel`, `.grid.c2/.c3` mit `.card`, `.tabs`, `.steps`, `.code`, `details.acc`, `.compare`, `figure.diagram` mit Inline-SVG.
4. Quiz und Merkkarten stehen als JSON in `#quiz-data` und `#cards-data` am Seitenende.
5. In `index.html` und in allen Seitenleisten das Kapitel freischalten.
6. Suchindex neu bauen: `python tools/build-index.py`
