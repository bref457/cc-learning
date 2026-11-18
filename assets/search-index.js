/* Automatisch erzeugt von tools/build-index.py – nicht von Hand ändern. */
window.WIKI_INDEX = [
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen",
"id": "was-ist",
"title": "Was ist Claude Code?",
"keywords": "agent assistent ki chatbot definition überblick",
"text": "Claude Code ist ein KI-Assistent, der nicht nur redet, sondern selbst anpackt: Er liest dein Projekt, ändert Dateien, führt Befehle aus und prüft, ob alles funktioniert. Stell dir einen erfahrenen Kollegen vor, der sich an deinen Rechner setzen darf. Du sagst ihm, was du willst, zum Beispiel „Die Anmeldung zeigt nach einem falschen Passwort eine leere Seite, bitte reparieren“. Er sucht die passenden Dateien, liest den Code, macht die Änderung, startet die Tests und sagt dir, was er gemacht hat. Genau das ist Claude Code. Man nennt so etwas einen Agenten . Ein normaler Chatbot gibt dir nur Text zurück, den du selbst kopieren und ausprobieren musst. Ein Agent erledigt die Schritte selbst. 💬 Chatbot Beantwortet Fragen. Du kopierst den Code selbst und probierst ihn aus. sieht nur, was du einfügst ⌨️ Autovervollständigung Schlägt die nächste Zeile in der offenen Datei vor. sieht nur die aktuelle Datei 🤖 Claude Code (Agent) Plant, liest, ändert mehrere Dateien, führt Befehle aus und prüft das Ergebnis. sieht das ganze Projekt 🛠️ Funktionen bauen & Fehler beheben Beschreib in normaler Sprache, was du willst, oder füge eine Fehlermeldung ein. 🧹 Lästige Routinearbeit Tests schreiben, Lint-Fehler aufräumen, Abhängigkeiten aktualisieren, Merge-Konflikte lösen. 🌿 Git & Pull Requests Commits mit guter Nachricht, neue Branches, Pull Requests öffnen. 🔌 Andere Tools anbinden Über MCP kann Claude z. B. Google Drive, Jira oder Slack nutzen. 📜 Skripte & Automatisierung Logs hineinleiten, in CI "
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen · Was ist Claude Code?",
"id": "was-ist",
"title": "Wofür du es nutzen kannst",
"keywords": "",
"text": "🛠️ Funktionen bauen & Fehler beheben Beschreib in normaler Sprache, was du willst, oder füge eine Fehlermeldung ein. 🧹 Lästige Routinearbeit Tests schreiben, Lint-Fehler aufräumen, Abhängigkeiten aktualisieren, Merge-Konflikte lösen. 🌿 Git & Pull Requests Commits mit guter Nachricht, neue Branches, Pull Requests öffnen. 🔌 Andere Tools anbinden Über MCP kann Claude z. B. Google Drive, Jira oder Slack nutzen. 📜 Skripte & Automatisierung Logs hineinleiten, in CI laufen lassen, mit anderen Tools verketten. ⏰ Wiederkehrende Aufgaben Z. B. jeden Morgen offene Pull Requests prüfen lassen. 📌 Merke Cla"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen",
"id": "schleife",
"title": "Die Arbeitsschleife: so denkt und handelt Claude",
"keywords": "agentic loop agentische schleife kontext handeln prüfen modell tools harness sonnet opus",
"text": "Jede Aufgabe läuft in einer Schleife aus drei Phasen ab, bis das Ziel erreicht ist. Du kannst jederzeit eingreifen. 1 · Aufgabe 2 · Kontext 3 · Handeln 4 · Prüfen 5 · Fertig ✋ Eingreifen Klick auf die Schritte, um sie nacheinander zu sehen. 🧠 Das Modell Das Claude-Modell versteht Code in jeder Sprache, plant die Schritte und entscheidet, was als Nächstes passiert. Es gibt mehrere Modelle: Sonnet reicht für die meisten Aufgaben, Opus denkt bei schwierigen Architekturfragen gründlicher. Wechseln mit /model . 🧰 Die Tools Ohne Tools könnte Claude nur Text schreiben. Mit Tools kann es Dateien lesen und bearbeiten, Befehle ausführen, im Web suchen und andere Dienste ansprechen. Claude Code selbst ist die Schicht dazwischen: Es stellt dem Modell die Tools bereit und entscheidet, welchen Kontext das Modell sieht. Diese Schicht nennt man auch Harness (Geschirr, wie beim Pferd). Tool-Art Was Claude damit tun kann 📄 Dateien lesen, bearbeiten, neu anlegen, umbenennen, umsortieren 🔎 Suche Dateien nach Namen finden, Inhalte durchsuchen, ein Projekt erkunden ▶️ Ausführen Kommandozeilenbefehle, Server starten, Tests laufen lassen, git 🌐 Web im Internet suchen, Dokumentation abrufen, Fehlermeldungen nachschlagen 🧩 Code-Intelligenz Typfehler sehen, zur Definition springen (braucht ein Plugin) 💡 Tipp Die eingebauten Tools sind nur die Basis. Mit Skills, MCP, Hooks und Subagenten kannst du Claude später erweitern. Das ist Thema in Kapitel 5 und 6 . 📖 Original: So funktioniert Claude Code ↗ Zwei "
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen · Die Arbeitsschleife: so denkt und handelt Claude",
"id": "schleife",
"title": "Zwei Zutaten: ein Modell, das denkt, und Tools, die handeln",
"keywords": "",
"text": "🧠 Das Modell Das Claude-Modell versteht Code in jeder Sprache, plant die Schritte und entscheidet, was als Nächstes passiert. Es gibt mehrere Modelle: Sonnet reicht für die meisten Aufgaben, Opus denkt bei schwierigen Architekturfragen gründlicher. Wechseln mit /model . 🧰 Die Tools Ohne Tools könnte Claude nur Text schreiben. Mit Tools kann es Dateien lesen und bearbeiten, Befehle ausführen, im Web suchen und andere Dienste ansprechen. Claude Code selbst ist die Schicht dazwischen: Es stellt dem Modell die Tools bereit und entscheidet, welchen Kontext das Modell sieht. Diese Schicht nennt man "
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen",
"id": "zugriff",
"title": "Worauf Claude zugreifen kann",
"keywords": "zugriff projekt terminal git claude.md auto memory gedächtnis agents.md",
"text": "Wenn du claude in einem Ordner startest, ist dieser Ordner Claudes Arbeitsplatz. 📁 Dein Projekt Alle Dateien im Ordner und in Unterordnern. Dateien woanders nur mit deiner Erlaubnis. 🖥️ Dein Terminal Jeder Befehl, den du selbst ausführen könntest: Build-Tools, git, Paketmanager, Skripte. 🌿 Dein Git-Stand Aktueller Branch, nicht gespeicherte Änderungen, letzte Commits. 📝 CLAUDE.md Eine Textdatei mit Regeln und Hinweisen zu deinem Projekt, die Claude bei jedem Start liest. 🧠 Auto-Memory Notizen, die Claude sich selbst macht, z. B. deine Vorlieben. Werden beim Start geladen. 🔌 Erweiterungen MCP-Server, Skills, Subagenten und Claude in Chrome, sofern du sie eingerichtet hast. ℹ️ Warum das wichtig ist Weil Claude das ganze Projekt sieht, kann es Änderungen über viele Dateien hinweg abstimmen. Ein Assistent, der nur die offene Datei kennt, kann das nicht. Mehr zu CLAUDE.md und dem Gedächtnis kommt in Kapitel 3 . 📖 Original: Worauf Claude zugreifen kann ↗"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen",
"id": "installation",
"title": "Installation",
"keywords": "installieren install windows powershell cmd winget mac linux homebrew wsl path git für windows version update",
"text": "Ein einziger Befehl im Terminal genügt. Wähle dein System. ℹ️ Was du brauchst Ein Terminal (unter Windows: PowerShell oder CMD) Ein Projekt oder einen Ordner zum Arbeiten Ein Claude-Abo (Pro, Max, Ultra, Team oder Enterprise) oder ein Konto in der Claude Console 🪟 Windows PowerShell 🪟 Windows CMD 🪟 WinGet 🍎 macOS / 🐧 Linux / WSL 🍺 Homebrew Du bist in PowerShell, wenn vorne PS C:\\ steht. PowerShell irm https://claude.ai/install.ps1 | iex ✔ Aktualisiert sich danach automatisch im Hintergrund. Du bist in CMD, wenn vorne nur C:\\ ohne „PS“ steht. CMD curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd ✔ Aktualisiert sich danach automatisch im Hintergrund. PowerShell winget install Anthropic.ClaudeCode ⚠ Kein automatisches Update. Ab und zu ausführen: winget upgrade Anthropic.ClaudeCode Bash curl -fsSL https://claude.ai/install.sh | bash ✔ Aktualisiert sich danach automatisch im Hintergrund. Bash brew install --cask claude-code claude-code ist der stabile Kanal (etwa eine Woche hinter dem neuesten Stand), claude-code@latest bekommt jede neue Version sofort. ⚠ Kein automatisches Update: brew upgrade claude-code Der Installer zeigt keinen Fortschritt an, also nicht wundern. Öffne danach ein neues Terminal-Fenster und tippe: Terminal claude --version Wenn eine Versionsnummer mit „(Claude Code)“ erscheint, ist alles bereit. ❌ „claude“ wird nicht gefunden oder nicht erkannt Der Installationsordner ist noch nicht im PATH , der Liste der Orte, an dene"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen · Installation",
"id": "installation",
"title": "Prüfen, ob es geklappt hat",
"keywords": "",
"text": "Der Installer zeigt keinen Fortschritt an, also nicht wundern. Öffne danach ein neues Terminal-Fenster und tippe: Terminal claude --version Wenn eine Versionsnummer mit „(Claude Code)“ erscheint, ist alles bereit. ❌ „claude“ wird nicht gefunden oder nicht erkannt Der Installationsordner ist noch nicht im PATH , der Liste der Orte, an denen das System nach Programmen sucht. Zuerst ein neues Terminal öffnen. Hilft das nicht, folge der Anleitung PATH reparieren ↗ . ❌ „The token '&&' is not a valid statement separator“ Du hast den CMD-Befehl in PowerShell eingegeben. Nimm den PowerShell-Befehl. ❌ "
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen",
"id": "erste-sitzung",
"title": "Deine erste Sitzung",
"keywords": "anmelden login erste schritte quickstart sitzung starten prompt git commit api key",
"text": "In sieben kleinen Schritten von der leeren Kommandozeile zur ersten echten Änderung. In den Projektordner wechseln und starten Terminal cd C:\\Dev\\mein-projekt claude Anmelden Beim ersten Start öffnet sich der Browser zur Anmeldung. Danach bleibst du angemeldet. Konto wechseln geht später mit /login . Kontoart Für wen Claude Pro, Max, Ultra, Team, Enterprise Empfohlen. Läuft über dein Abo. Claude Console Bezahlung pro Nutzung mit vorab gekauftem Guthaben (API). Erste Frage stellen Oben siehst du Version, Modell und Ordner. Frag einfach: Prompt Was macht dieses Projekt? Welche Technologien werden verwendet? Erklär mir die Ordnerstruktur. Du musst keine Dateien angeben. Claude liest selbst, was es braucht. Erste Änderung Prompt Füge der Hauptdatei eine Hallo-Welt-Funktion hinzu. Claude zeigt dir die Änderung. Wenn es fragt, bestätige mit Yes . Git im Gespräch nutzen Prompt Welche Dateien habe ich geändert? Committe meine Änderungen mit einer passenden Nachricht. Leg einen neuen Branch feature/start an. Einen Fehler beheben Prompt Man kann das Formular leer absenden. Bitte beheben. Weitere Ideen ausprobieren Code umbauen, Tests schreiben, die README ergänzen oder „Prüf meine Änderungen und schlag Verbesserungen vor“. 💡 Sprache Du kannst mit Claude auf Deutsch schreiben. Die Beispiele in der Originaldoku sind auf Englisch, funktionieren aber genauso auf Deutsch. 📌 Merke Sprich mit Claude wie mit einem hilfsbereiten Kollegen: Sag, was du erreichen willst, nicht jeden einzelnen Hand"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen",
"id": "befehle",
"title": "Die wichtigsten Befehle",
"keywords": "befehle commands cli claude -p -c -r clear help exit model init doctor slash spickzettel shortcuts tastenkürzel",
"text": "Es gibt zwei Arten: Befehle fürs Terminal (zum Starten) und Befehle in der laufenden Sitzung (beginnen mit / ). Befehl Was er tut claude Startet eine Sitzung im aktuellen Ordner claude \"Aufgabe\" Startet und schickt gleich die erste Aufgabe claude -p \"Frage\" Einmalige Antwort, danach Ende (gut für Skripte) claude -c Setzt das letzte Gespräch in diesem Ordner fort claude -r Zeigt frühere Gespräche zur Auswahl claude --version Zeigt die installierte Version Im Terminal Befehl / Taste Was er tut / Zeigt alle Befehle und Skills /help Hilfe anzeigen /clear Neues Gespräch beginnen (altes bleibt über /resume erreichbar) /resume Früheres Gespräch fortsetzen /model Modell wechseln /init Erstellt eine erste CLAUDE.md für dein Projekt /doctor Prüft Installation und Einstellungen und hilft beim Reparieren /context Zeigt, was gerade Platz im Kontext belegt /login Neu anmelden oder Konto wechseln /exit oder 2× Ctrl + D Claude Code beenden Esc Claude sofort stoppen 2× Esc Zurückspulen zu einem früheren Stand Shift + Tab Berechtigungsmodus wechseln ↑ / Tab Frühere Eingaben / Befehl vervollständigen 📖 Original: Alle Befehle ↗ In der Sitzung"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen · Die wichtigsten Befehle",
"id": "befehle",
"title": "Im Terminal",
"keywords": "",
"text": "Befehl Was er tut claude Startet eine Sitzung im aktuellen Ordner claude \"Aufgabe\" Startet und schickt gleich die erste Aufgabe claude -p \"Frage\" Einmalige Antwort, danach Ende (gut für Skripte) claude -c Setzt das letzte Gespräch in diesem Ordner fort claude -r Zeigt frühere Gespräche zur Auswahl claude --version Zeigt die installierte Version"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen · Die wichtigsten Befehle",
"id": "befehle",
"title": "In der Sitzung",
"keywords": "",
"text": "Befehl / Taste Was er tut / Zeigt alle Befehle und Skills /help Hilfe anzeigen /clear Neues Gespräch beginnen (altes bleibt über /resume erreichbar) /resume Früheres Gespräch fortsetzen /model Modell wechseln /init Erstellt eine erste CLAUDE.md für dein Projekt /doctor Prüft Installation und Einstellungen und hilft beim Reparieren /context Zeigt, was gerade Platz im Kontext belegt /login Neu anmelden oder Konto wechseln /exit oder 2× Ctrl + D Claude Code beenden Esc Claude sofort stoppen 2× Esc Zurückspulen zu einem früheren Stand Shift + Tab Berechtigungsmodus wechseln ↑ / Tab Frühere Eingabe"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen",
"id": "sicherheit",
"title": "Sicherheitsnetz: Checkpoints und Berechtigungsmodi",
"keywords": "checkpoint rückgängig zurückspulen rewind esc berechtigungen berechtigungsmodus auto manual accept edits plan shift+tab sicherheit",
"text": "Zwei Mechanismen sorgen dafür, dass du die Kontrolle behältst. ⏪ Checkpoints Bevor Claude eine Datei ändert, merkt es sich den alten Inhalt. Mit Esc Esc spulst du zurück, oder du sagst einfach „mach das rückgängig“. 🚦 Berechtigungen Legen fest, was Claude ohne Nachfrage tun darf. Wechseln mit Shift + Tab . ⚠️ Achtung Checkpoints decken nur Dateien ab. Was Claude außerhalb deines Rechners auslöst (Datenbank, E-Mail, Deployment), lässt sich nicht zurückspulen. Dafür sind die Berechtigungen da. Mit Shift + Tab wechselst du zwischen den Modi. Modus Wann sinnvoll Plan Du willst erst sehen, wie Claude vorgehen würde, bevor etwas geändert wird. Manual Du willst jeden Schritt selbst absegnen, z. B. am Anfang zum Lernen. Accept edits Du vertraust den Dateiänderungen, willst aber bei Befehlen gefragt werden. Auto Standard in neueren Versionen. Ein Prüfer schaut im Hintergrund jede Aktion an und stoppt die riskanten. Für Befehle, denen du immer vertraust (z. B. npm test ), kannst du eine feste Erlaubnis in den Einstellungen hinterlegen. Das vertiefen wir in Kapitel 4 . 📖 Original: Berechtigungsmodi ↗ Die Berechtigungsmodi"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen · Sicherheitsnetz: Checkpoints und Berechtigungsmodi",
"id": "sicherheit",
"title": "Die Berechtigungsmodi",
"keywords": "",
"text": "Mit Shift + Tab wechselst du zwischen den Modi. Modus Wann sinnvoll Plan Du willst erst sehen, wie Claude vorgehen würde, bevor etwas geändert wird. Manual Du willst jeden Schritt selbst absegnen, z. B. am Anfang zum Lernen. Accept edits Du vertraust den Dateiänderungen, willst aber bei Befehlen gefragt werden. Auto Standard in neueren Versionen. Ein Prüfer schaut im Hintergrund jede Aktion an und stoppt die riskanten. Für Befehle, denen du immer vertraust (z. B. npm test ), kannst du eine feste Erlaubnis in den Einstellungen hinterlegen. Das vertiefen wir in Kapitel 4 . 📖 Original: Berechtigu"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen",
"id": "sitzungen",
"title": "Sitzungen und das Kontextfenster",
"keywords": "sitzung session fortsetzen resume continue fork branch verzweigen kontextfenster context compact komprimieren",
"text": "Ein Gespräch mit Claude heißt Sitzung. Jede Sitzung hat ein begrenztes „Arbeitsgedächtnis“: das Kontextfenster. Claude speichert jedes Gespräch lokal auf deinem Rechner (im Ordner ~/.claude/projects/ ). Jede neue Sitzung beginnt frisch, ohne das alte Gespräch. Was dauerhaft gelten soll, gehört in die CLAUDE.md . Eine Sitzung gehört zu dem Ordner, in dem du sie gestartet hast. Sitzungen Alles, was Claude in einer Sitzung „im Kopf“ hat, liegt im Kontextfenster. Es ist groß, aber nicht unendlich. Vereinfachtes Beispiel. Mit /context siehst du die echte Belegung. Wird es voll, fasst Claude das Gespräch automatisch zusammen ( Komprimieren ). Dabei können frühe Detail-Anweisungen verloren gehen. Mit /compact Fokus auf die API-Änderungen steuerst du, was beim Zusammenfassen erhalten bleibt. Für eine neue, andere Aufgabe lieber /clear : Ein frischer Kontext liefert bessere Ergebnisse. 📌 Merke Regeln, die immer gelten sollen, gehören in die CLAUDE.md , nicht nur ins Gespräch. Das Gespräch kann beim Komprimieren gekürzt werden, die CLAUDE.md wird jedes Mal neu geladen. 📖 Original: Mit Sitzungen arbeiten ↗ Das Kontextfenster"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen · Sitzungen und das Kontextfenster",
"id": "sitzungen",
"title": "Sitzungen",
"keywords": "",
"text": "Claude speichert jedes Gespräch lokal auf deinem Rechner (im Ordner ~/.claude/projects/ ). Jede neue Sitzung beginnt frisch, ohne das alte Gespräch. Was dauerhaft gelten soll, gehört in die CLAUDE.md . Eine Sitzung gehört zu dem Ordner, in dem du sie gestartet hast."
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen · Sitzungen und das Kontextfenster",
"id": "sitzungen",
"title": "Das Kontextfenster",
"keywords": "",
"text": "Alles, was Claude in einer Sitzung „im Kopf“ hat, liegt im Kontextfenster. Es ist groß, aber nicht unendlich. Vereinfachtes Beispiel. Mit /context siehst du die echte Belegung. Wird es voll, fasst Claude das Gespräch automatisch zusammen ( Komprimieren ). Dabei können frühe Detail-Anweisungen verloren gehen. Mit /compact Fokus auf die API-Änderungen steuerst du, was beim Zusammenfassen erhalten bleibt. Für eine neue, andere Aufgabe lieber /clear : Ein frischer Kontext liefert bessere Ergebnisse. 📌 Merke Regeln, die immer gelten sollen, gehören in die CLAUDE.md , nicht nur ins Gespräch. Das Ges"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen",
"id": "lokal-cloud",
"title": "Lokal, Cloud oder Remote Control?",
"keywords": "lokal cloud remote control vm ausführungsumgebung pc laptop teleport --cloud wo läuft code",
"text": "Claude arbeitet überall gleich. Der Unterschied ist, auf welchem Rechner der Code läuft und wie du zuschaust. 💻 Lokal ☁️ Cloud 📡 Remote Control Wo läuft der Code? Auf deinem PC Auf einem Server (VM) von Anthropic Auf deinem PC Wie bedienst du es? Terminal, VS Code, Desktop-App Browser, Handy, Desktop-App, claude --cloud Browser oder Handy-App Zugriff auf alle deine Dateien und Programme GitHub-Repos und hochgeladene Dateien alle deine Dateien und Programme Läuft weiter, wenn der Laptop zu ist? ❌ Nein ✅ Ja ❌ Nein, der PC muss an sein Gut für tägliche Arbeit am eigenen Projekt lange Aufgaben, mehrere parallel, Repos ohne lokale Kopie vom Sofa oder unterwegs an der laufenden PC-Sitzung weitermachen 💻 → ☁️ claude --cloud Startet eine Aufgabe aus dem Terminal direkt in der Cloud. Danach kannst du sie auf dem Handy weiterverfolgen. ☁️ → 💻 claude --teleport Holt eine Cloud-Sitzung zurück in dein Terminal. 💻 → 📱 /remote-control Macht deine laufende Sitzung im Browser und auf dem Handy erreichbar. ⌨️ → 🖼️ /desktop Übergibt die Terminal-Sitzung an die Desktop-App, wo du Änderungen visuell prüfst. ℹ️ Gut zu wissen Cloud-Sitzungen brauchen einen Plan wie Pro, Max, Ultra oder Team und eine Verbindung zu GitHub. Sie zählen zu den normalen Nutzungslimits deines Plans. Für den Cloud-Server zahlst du nichts extra. In der Cloud hat Claude nicht deine lokale Einrichtung (lokale Skills, Einstellungen). Die CLAUDE.md im Repo liest es aber schon. 📖 Original: Claude Code in der Cloud ↗ Zwischen den"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen · Lokal, Cloud oder Remote Control?",
"id": "lokal-cloud",
"title": "Zwischen den Welten wechseln",
"keywords": "",
"text": "💻 → ☁️ claude --cloud Startet eine Aufgabe aus dem Terminal direkt in der Cloud. Danach kannst du sie auf dem Handy weiterverfolgen. ☁️ → 💻 claude --teleport Holt eine Cloud-Sitzung zurück in dein Terminal. 💻 → 📱 /remote-control Macht deine laufende Sitzung im Browser und auf dem Handy erreichbar. ⌨️ → 🖼️ /desktop Übergibt die Terminal-Sitzung an die Desktop-App, wo du Änderungen visuell prüfst. ℹ️ Gut zu wissen Cloud-Sitzungen brauchen einen Plan wie Pro, Max, Ultra oder Team und eine Verbindung zu GitHub. Sie zählen zu den normalen Nutzungslimits deines Plans. Für den Cloud-Server zahlst du "
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen",
"id": "plattformen",
"title": "Die Oberflächen: wo du Claude Code benutzt",
"keywords": "plattformen oberflächen cli terminal desktop app vs code jetbrains web mobile handy ios android chrome slack github actions",
"text": "Überall steckt dieselbe „Maschine“ dahinter. Deine CLAUDE.md , Einstellungen und MCP-Server gelten auf allen lokalen Oberflächen. ⌨️ Terminal (CLI) Der volle Funktionsumfang. Nur hier: Skripte mit claude -p und das Agent SDK. für Terminal-Fans & Server 🖼️ Desktop-App Grafische Oberfläche mit Diff-Ansicht, mehreren Sitzungen nebeneinander, App-Vorschau und geplanten Aufgaben. ohne Terminal 🧩 VS Code / Cursor Als Erweiterung direkt im Editor, mit Änderungen inline und @-Erwähnungen von Dateien. im Editor 🧠 JetBrains Plugin für IntelliJ, PyCharm, WebStorm & Co. Braucht zusätzlich die CLI. im Editor 🌐 Web Unter claude.ai/code , läuft in der Cloud, nichts zu installieren. Cloud 📱 Handy-App Claude-App für iOS und Android: Cloud-Aufgaben starten und verfolgen, lokale Sitzungen per Remote Control steuern. unterwegs Ich arbeite gern im Terminal oder will Abläufe automatisieren ➡ CLI . Am vollständigsten und für Skripte die einzige Wahl. Ich will kein Terminal und lieber Änderungen visuell prüfen ➡ Desktop-App , Tab Code . Enthält Claude Code schon, keine Extra-Installation nötig (bezahltes Abo erforderlich). Ich programmiere sowieso in VS Code ➡ VS-Code-Erweiterung . In der Erweiterungsansicht nach „Claude Code“ suchen. Ich will eine lange Aufgabe starten und den Laptop zuklappen ➡ Web oder Handy (Cloud-Sitzung). Läuft weiter, auch wenn du offline bist. Welche Oberfläche passt zu mir? Integration Wofür 🌍 Chrome Claude steuert deinen Browser, z. B. um eine Web-App zu testen 🐙 GitHub Ac"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen · Die Oberflächen: wo du Claude Code benutzt",
"id": "plattformen",
"title": "Welche Oberfläche passt zu mir?",
"keywords": "",
"text": "Ich arbeite gern im Terminal oder will Abläufe automatisieren ➡ CLI . Am vollständigsten und für Skripte die einzige Wahl. Ich will kein Terminal und lieber Änderungen visuell prüfen ➡ Desktop-App , Tab Code . Enthält Claude Code schon, keine Extra-Installation nötig (bezahltes Abo erforderlich). Ich programmiere sowieso in VS Code ➡ VS-Code-Erweiterung . In der Erweiterungsansicht nach „Claude Code“ suchen. Ich will eine lange Aufgabe starten und den Laptop zuklappen ➡ Web oder Handy (Cloud-Sitzung). Läuft weiter, auch wenn du offline bist."
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen · Die Oberflächen: wo du Claude Code benutzt",
"id": "plattformen",
"title": "Integrationen",
"keywords": "",
"text": "Integration Wofür 🌍 Chrome Claude steuert deinen Browser, z. B. um eine Web-App zu testen 🐙 GitHub Actions / GitLab CI Claude läuft automatisch in deiner CI, z. B. für Reviews 🔍 Code Review Prüft jeden Pull Request automatisch 💬 Slack @Claude im Kanal erwähnen, Pull Request zurückbekommen 🔌 MCP & Konnektoren Fast alles andere: Notion, Linear, Google Drive, eigene APIs 📖 Original: Plattformen und Integrationen ↗"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen",
"id": "unterwegs",
"title": "Arbeiten, wenn du nicht am PC sitzt",
"keywords": "unterwegs dispatch remote control channels telegram discord slack geplante aufgaben schedule loop routinen",
"text": "Es gibt mehrere Wege, Claude arbeiten zu lassen, während du weg bist. Sie unterscheiden sich darin, was sie auslöst und wo Claude läuft. Weg Auslöser Claude läuft auf Ideal für 📨 Dispatch Aufgabe aus der Handy-App senden deinem PC (Desktop-App) schnell etwas delegieren 📡 Remote Control laufende Sitzung vom Handy/Browser steuern deinem PC Arbeit am PC von unterwegs weiterführen 📣 Channels Nachricht aus Telegram, Discord o. ä. deinem PC auf Ereignisse reagieren 💬 Slack @Claude im Kanal Cloud Fehlerberichte aus dem Team-Chat ⏰ Geplante Aufgaben Zeitplan CLI, Desktop oder Cloud z. B. tägliche Reviews 💡 Tipp Geplante Aufgaben in der Cloud laufen auch bei ausgeschaltetem PC. Die in der Desktop-App laufen auf deinem Rechner und kommen dafür an deine lokalen Dateien. Mehr dazu in Kapitel 7 . 📖 Original: Arbeiten ohne Terminal ↗"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen",
"id": "projekte-mods",
"title": "Projekte, Mods & Erweiterungen im Überblick",
"keywords": "projekte projects threads koordinator overview mods plugin skills hooks mcp subagenten erweitern",
"text": "Ein erster Blick auf Funktionen, die über eine einzelne Sitzung hinausgehen. Jede bekommt später ihr eigenes Kapitel. Ein Projekt ist ein langes Gespräch, in dem Claude als Koordinator arbeitet. Du wirfst Aufgaben hinein, und Claude startet für jede einen eigenen Thread : eine eigene Cloud-Sitzung, die parallel arbeitet und danach Bericht erstattet. Kontext einmal festlegen: Anweisungen und Gedächtnis des Projekts gelten für jeden neuen Thread. Weggehen und zurückkommen: In der Übersicht siehst du, was fertig ist und was auf deine Antwort wartet. Nicht nur Code: Du kannst auch Dokumente hochladen und dazu Fragen stellen. Projekte sind im Moment eine Beta für Pro, Max und Ultra und kommen nach und nach bei allen an. 🧭 Beispiel Genau so entsteht dieses Lernwiki: In einem Projekt „CC_Learning“ bekommt jedes Kapitel seinen eigenen Thread. 📖 Original: Projekte ↗ 🗂️ Projekte Ein Mod verändert, wie Claude Code selbst aussieht und sich verhält. Er ist ein kleines Plugin in JavaScript oder TypeScript, das innerhalb von Claude Code läuft. Damit kann er zum Beispiel: eigene Bereiche mit Knöpfen und Feldern in die Oberfläche zeichnen (etwa eine Anzeige, wie voll der Kontext ist), einen riskanten Befehl wie rm -rf anhalten und nachfragen, eigene /befehle hinzufügen, die sofort laufen. Du musst Mods nicht selbst programmieren: Beschreib Claude, was du willst, und es schreibt den Mod für dich. Mods laufen in der CLI, der Desktop-App und VS Code. ⚠️ Achtung Ein Mod läuft mit deinen Rechten: "
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen · Projekte, Mods & Erweiterungen im Überblick",
"id": "projekte-mods",
"title": "🗂️ Projekte",
"keywords": "",
"text": "Ein Projekt ist ein langes Gespräch, in dem Claude als Koordinator arbeitet. Du wirfst Aufgaben hinein, und Claude startet für jede einen eigenen Thread : eine eigene Cloud-Sitzung, die parallel arbeitet und danach Bericht erstattet. Kontext einmal festlegen: Anweisungen und Gedächtnis des Projekts gelten für jeden neuen Thread. Weggehen und zurückkommen: In der Übersicht siehst du, was fertig ist und was auf deine Antwort wartet. Nicht nur Code: Du kannst auch Dokumente hochladen und dazu Fragen stellen. Projekte sind im Moment eine Beta für Pro, Max und Ultra und kommen nach und nach bei all"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen · Projekte, Mods & Erweiterungen im Überblick",
"id": "projekte-mods",
"title": "🎨 Mods",
"keywords": "",
"text": "Ein Mod verändert, wie Claude Code selbst aussieht und sich verhält. Er ist ein kleines Plugin in JavaScript oder TypeScript, das innerhalb von Claude Code läuft. Damit kann er zum Beispiel: eigene Bereiche mit Knöpfen und Feldern in die Oberfläche zeichnen (etwa eine Anzeige, wie voll der Kontext ist), einen riskanten Befehl wie rm -rf anhalten und nachfragen, eigene /befehle hinzufügen, die sofort laufen. Du musst Mods nicht selbst programmieren: Beschreib Claude, was du willst, und es schreibt den Mod für dich. Mods laufen in der CLI, der Desktop-App und VS Code. ⚠️ Achtung Ein Mod läuft mi"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen · Projekte, Mods & Erweiterungen im Überblick",
"id": "projekte-mods",
"title": "🧩 Die Erweiterungs-Familie auf einen Blick",
"keywords": "",
"text": "Baustein Kurz gesagt Kapitel CLAUDE.md Dauerhafte Hinweise zu deinem Projekt 3 Skills Wiederverwendbare Abläufe, z. B. /review-pr 5 Hooks Befehle, die automatisch vor oder nach Aktionen laufen 5 MCP Anbindung an externe Dienste und Daten 5 Plugins & Mods Pakete aus Skills, Hooks usw. bzw. Umbau der Oberfläche 5 Subagenten Helfer mit eigenem Kontext für Teilaufgaben 6"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen",
"id": "tipps",
"title": "Tipps für den Start",
"keywords": "tipps anfänger prompt konkret schritt für schritt erkunden delegieren korrigieren",
"text": "Fünf Gewohnheiten, die von Anfang an bessere Ergebnisse bringen. ❌ Unklar „Behebe den Fehler.“ ✅ Konkret „Behebe den Login-Fehler: Nach einem falschen Passwort sehen Nutzer eine leere Seite.“ 1. Sei konkret Prompt 1. Leg eine Datenbanktabelle für Benutzerprofile an. 2. Bau eine Schnittstelle, um Profile zu lesen und zu ändern. 3. Erstell eine Seite, auf der Nutzer ihr Profil bearbeiten können. 2. Große Aufgaben in Schritte teilen „Analysiere zuerst das Datenbankschema und erklär es mir“ ist ein guter Start, bevor du etwas umbauen lässt. Der Plan-Modus ist genau dafür da. 3. Erst erkunden lassen, dann ändern Gib Ziel und Hintergrund, nicht jeden Handgriff. Welche Dateien es lesen muss, findet Claude selbst heraus. Prompt Der Bezahlvorgang klappt nicht bei abgelaufenen Karten. Der Code liegt in src/payments/. Kannst du das untersuchen und beheben? 4. Delegieren statt diktieren Der erste Versuch ist nicht perfekt? Kein Neustart nötig, sag einfach: „Nicht ganz, das Problem liegt in der Sitzungsverwaltung.“ Wenn Claude nach zwei Korrekturen immer noch danebenliegt, ist ein frischer Start mit /clear und einem besseren Prompt meist schneller. 💡 Claude kann dir Claude Code erklären Frag direkt in der Sitzung: „Wie richte ich Hooks ein?“ oder „Wie sollte ich meine CLAUDE.md aufbauen?“. Und /doctor findet Probleme in deiner Einrichtung. 📖 Original: Best Practices ↗ 5. Im Gespräch korrigieren"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen · Tipps für den Start",
"id": "tipps",
"title": "1. Sei konkret",
"keywords": "",
"text": "❌ Unklar „Behebe den Fehler.“ ✅ Konkret „Behebe den Login-Fehler: Nach einem falschen Passwort sehen Nutzer eine leere Seite.“"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen · Tipps für den Start",
"id": "tipps",
"title": "2. Große Aufgaben in Schritte teilen",
"keywords": "",
"text": "Prompt 1. Leg eine Datenbanktabelle für Benutzerprofile an. 2. Bau eine Schnittstelle, um Profile zu lesen und zu ändern. 3. Erstell eine Seite, auf der Nutzer ihr Profil bearbeiten können."
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen · Tipps für den Start",
"id": "tipps",
"title": "3. Erst erkunden lassen, dann ändern",
"keywords": "",
"text": "„Analysiere zuerst das Datenbankschema und erklär es mir“ ist ein guter Start, bevor du etwas umbauen lässt. Der Plan-Modus ist genau dafür da."
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen · Tipps für den Start",
"id": "tipps",
"title": "4. Delegieren statt diktieren",
"keywords": "",
"text": "Gib Ziel und Hintergrund, nicht jeden Handgriff. Welche Dateien es lesen muss, findet Claude selbst heraus. Prompt Der Bezahlvorgang klappt nicht bei abgelaufenen Karten. Der Code liegt in src/payments/. Kannst du das untersuchen und beheben?"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen · Tipps für den Start",
"id": "tipps",
"title": "5. Im Gespräch korrigieren",
"keywords": "",
"text": "Der erste Versuch ist nicht perfekt? Kein Neustart nötig, sag einfach: „Nicht ganz, das Problem liegt in der Sitzungsverwaltung.“ Wenn Claude nach zwei Korrekturen immer noch danebenliegt, ist ein frischer Start mit /clear und einem besseren Prompt meist schneller. 💡 Claude kann dir Claude Code erklären Frag direkt in der Sitzung: „Wie richte ich Hooks ein?“ oder „Wie sollte ich meine CLAUDE.md aufbauen?“. Und /doctor findet Probleme in deiner Einrichtung. 📖 Original: Best Practices ↗"
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen",
"id": "faq",
"title": "Häufige Fragen",
"keywords": "fragen faq kosten kostenlos abo deutsch offline daten sicher",
"text": "Kostet Claude Code etwas? Ja. Du brauchst ein Claude-Abo (Pro, Max, Ultra, Team oder Enterprise) oder ein Console-Konto, bei dem du pro Nutzung zahlst. Die Nutzung zählt zu den Limits deines Plans, auch Cloud-Sitzungen. Kann ich auf Deutsch mit Claude reden? Ja, ganz normal. Claude antwortet dann auch auf Deutsch. Brauche ich Programmierkenntnisse? Für den Einstieg nicht unbedingt. Du solltest aber verstehen, was Claude ändert, bevor du es übernimmst. Der Plan-Modus und das Nachfragen („Erklär mir, was du geändert hast“) helfen dabei. Kann Claude etwas kaputt machen? Dateiänderungen kannst du mit Esc Esc zurückspulen. Bei Aktionen nach außen (Datenbanken, Deployments) schützen dich die Berechtigungsmodi. Nutze außerdem git, dann ist jeder Stand sicher. Wo ist der Unterschied zwischen Claude im Chat und Claude Code? Der Chat auf claude.ai beantwortet Fragen. Claude Code arbeitet direkt in deinem Projekt: Es liest und ändert Dateien und führt Befehle aus. Was ist der Unterschied zwischen Desktop-App und Terminal? Dieselbe Maschine, andere Bedienung. Das Terminal kann am meisten (z. B. Skripte), die Desktop-App ist grafisch und zeigt Änderungen übersichtlich an."
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen",
"id": "quiz-sec",
"title": "Quiz: Was hast du behalten?",
"keywords": "quiz test fragen prüfen",
"text": "12 Fragen. Nach jeder Antwort siehst du die Erklärung."
},
{
"page": "kapitel-1",
"url": "kapitel-1.html",
"chapter": "Kapitel 1 · Grundlagen",
"id": "karten",
"title": "Merkkarten",
"keywords": "merkkarten karteikarten lernkarten flashcards wiederholen",
"text": "Begriff ansehen, kurz überlegen, Karte umdrehen. Pfeiltasten blättern, Leertaste dreht um."
}
];
