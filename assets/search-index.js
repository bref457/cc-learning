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
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten",
"id": "warum",
"title": "Warum es manchmal hakt",
"keywords": "best practices grundidee standard warum fehler ursachen überblick",
"text": "Claude Code ist so gebaut, dass schon ein einfacher erster Prompt meistens das Richtige tut. Wenn nicht, steckt fast immer einer von vier Gründen dahinter. Ohne dass du etwas einrichtest, erledigt Claude Code schon vieles von selbst: Neue Sitzungen im Terminal und in VS Code starten im Auto-Modus, sodass du nicht jeden Befehl absegnen musst. Unabhängige Teilarbeit gibt Claude an Helfer (Subagenten) ab. Und lange Gespräche werden automatisch zusammengefasst, bevor das Kontextfenster voll ist. Schwierig wird es dort, wo dein Projekt Wissen, Regeln oder Grenzen hat, die nicht im Code stehen. Kein Standard kann das erraten. 🙈 Es fehlt Wissen Claude baut etwas anderes als gedacht oder muss in jeder Sitzung dieselbe Sache neu herausfinden. Lösung: sag, was es nicht sehen kann 🤷 „Fertig“, aber nicht ganz Claude meldet Erfolg, doch es funktioniert nicht. Meist hatte es keine Möglichkeit, sich selbst zu prüfen. Lösung: gib ihm eine Prüfung 🚫 Eine Regel wurde gebrochen Claude tut etwas, das nie passieren darf, oder lässt einen Pflichtschritt aus. Lösung: Regeln fest durchsetzen 💸 Zu teuer erkauft Das Ergebnis stimmt, aber es hat mehr Zeit, Token oder Rückfragen gekostet als nötig. Lösung: eine Voreinstellung ändern 📌 Merke Bevor du an Einstellungen schraubst, frag dich: Fehlte Claude Wissen , eine Prüfung , eine feste Regel oder passte eine Voreinstellung nicht? Dieses Kapitel geht alle vier durch. 📖 Original: Best Practices ↗"
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten",
"id": "prompts",
"title": "Gute Prompts schreiben",
"keywords": "prompt prompten formulieren spezifisch konkret @ datei bild screenshot pipe ambitioniert be ambitious think step by step schlüsselwort",
"text": "Ein guter Prompt gibt Claude genau das, was es nicht selbst im Code findet. Mehr nicht. Claude beginnt jede Aufgabe damit, deinen Code zu lesen, und darin ist es sehr gut. Dateistruktur, Konventionen, Test-Framework: das findet es meist schneller, als du es erklären könntest. Was es nicht finden kann, ist alles, was nie im Repo stand: eine Entscheidung aus einem Meeting, ein Ablauf, den nur eine Person im Kopf hat, oder welche von zwei guten Lösungen du bevorzugst. Nenne wo du suchen würdest, was genau passiert und woran man erkennt, dass es gelöst ist. Das spart fast immer eine Korrekturrunde. ❌ Vage „Behebe den Login-Bug.“ ✅ Spezifisch „Nutzer melden, dass der Login nach einem Sitzungs-Timeout fehlschlägt. Schau dir den Token-Refresh in src/auth/ an, schreib einen Test, der den Fehler nachstellt, und behebe ihn dann.“ ❌ Vage „Füg ein Kalender-Widget hinzu.“ ✅ Spezifisch „Bau nach dem Muster von HotDogWidget.php ein Kalender-Widget, mit dem man einen Monat wählen und zwischen Jahren blättern kann. Keine neuen Bibliotheken.“ Die Faustregel: Ort, Symptom, Ziel 📄 Datei mit @ Tippe @ und den Pfad, z. B. @src/utils/auth.js . Der Inhalt landet direkt in deiner Nachricht. Mit @ordner/ geht es auch für Verzeichnisse. 🖼️ Bild Screenshot eines Fehlers oder Designs per Drag & Drop, oder einfügen mit Ctrl + V (unter Windows Alt + V ). 📜 Befehlsausgabe Aus der Shell hineinleiten: cat error.log | claude -p \"Was ist hier los?\" Material direkt mitgeben statt beschreiben Sätze wie „denk grün"
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten · Gute Prompts schreiben",
"id": "prompts",
"title": "Die Faustregel: Ort, Symptom, Ziel",
"keywords": "",
"text": "Nenne wo du suchen würdest, was genau passiert und woran man erkennt, dass es gelöst ist. Das spart fast immer eine Korrekturrunde. ❌ Vage „Behebe den Login-Bug.“ ✅ Spezifisch „Nutzer melden, dass der Login nach einem Sitzungs-Timeout fehlschlägt. Schau dir den Token-Refresh in src/auth/ an, schreib einen Test, der den Fehler nachstellt, und behebe ihn dann.“ ❌ Vage „Füg ein Kalender-Widget hinzu.“ ✅ Spezifisch „Bau nach dem Muster von HotDogWidget.php ein Kalender-Widget, mit dem man einen Monat wählen und zwischen Jahren blättern kann. Keine neuen Bibliotheken.“"
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten · Gute Prompts schreiben",
"id": "prompts",
"title": "Material direkt mitgeben statt beschreiben",
"keywords": "",
"text": "📄 Datei mit @ Tippe @ und den Pfad, z. B. @src/utils/auth.js . Der Inhalt landet direkt in deiner Nachricht. Mit @ordner/ geht es auch für Verzeichnisse. 🖼️ Bild Screenshot eines Fehlers oder Designs per Drag & Drop, oder einfügen mit Ctrl + V (unter Windows Alt + V ). 📜 Befehlsausgabe Aus der Shell hineinleiten: cat error.log | claude -p \"Was ist hier los?\""
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten · Gute Prompts schreiben",
"id": "prompts",
"title": "„Denk Schritt für Schritt“ ist kein Zauberwort",
"keywords": "",
"text": "Sätze wie „denk gründlich nach“ oder „think step by step“ sind ganz normaler Text. Sie stupsen Claude höchstens leicht an. Wie viel Claude wirklich nachdenkt, steuerst du mit der Effort-Stufe (siehe Abschnitt 10 ). Die einzige Ausnahme ist das Schlüsselwort ultrathink . 💡 Tipp: „Sei ambitioniert“ Claude liest eine Anfrage eher zurückhaltend und baut das Kleinste, was sie erfüllt. Es kann ja nicht sehen, wie viel du dir erhoffst. Willst du die umfassende Version, sag es: Prompt Bau die Einstellungsseite nach dem Mockup. Sei ambitioniert: leere Zustände und Fehlerzustände, Speichern funktioniert"
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten",
"id": "interview",
"title": "Unklar, was du willst? Lass dich interviewen",
"keywords": "brainstorming interview spezifikation spec.md anforderungen unklar idee multiple choice",
"text": "Du musst nicht alles fertig durchdacht haben, bevor du anfängst. Dreh den Spieß um und lass Claude die Fragen stellen. Prompt Ich will für die öffentliche API ein Rate-Limit einbauen, habe es mir aber noch nicht genau überlegt. Interview mich, bis du daraus eine Spezifikation schreiben kannst, und speichere sie dann in SPEC.md. Claude fragt nach Es stellt dir Multiple-Choice-Fragen zu allem, was noch offen ist: Limit pro Nutzer oder pro Schlüssel? Was passiert mit Anfragen über dem Limit? Was gehört ausdrücklich nicht dazu? Die Spezifikation entsteht Aus deinen Antworten schreibt Claude SPEC.md : eine schriftliche Definition von „fertig“. Frisch starten und bauen Starte für die Umsetzung eine neue Sitzung (oder /clear ). So beginnt die Arbeit mit sauberem Kontext und klarem Ziel. Später dagegen prüfen Dieselbe Datei nutzt du am Ende, um das Ergebnis prüfen zu lassen (siehe Abschnitt 7 ). 🧭 Beispiel außerhalb von Code Das klappt auch für Nicht-Programmier-Aufgaben: „Ich will meine Fotosammlung neu ordnen. Interview mich zu meinen Wünschen und schreib dann einen Plan in PLAN.md.“ 📖 Original: Brainstormen Sie zuerst mit Claude ↗"
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten",
"id": "ablauf",
"title": "Der bewährte Ablauf: erkunden, planen, umsetzen, prüfen",
"keywords": "workflow ablauf erkunden planen umsetzen prüfen commit explore plan code vorgehen",
"text": "Bei größeren Aufgaben lohnt es sich, nicht gleich „Bau mal“ zu sagen, sondern in vier Etappen zu arbeiten. 1 · Erkunden 2 · Planen 3 · Umsetzen 4 · Prüfen 5 · Abschluss Klick auf die Schritte, um sie nacheinander zu sehen. 💡 Nicht für jede Aufgabe Planen kostet Zeit. Für eine kleine, klare Änderung (Tippfehler, Umbenennung, eine Zeile Log) sag einfach direkt, was du willst. Den vollen Ablauf brauchst du, wenn du dir beim Weg unsicher bist, mehrere Dateien betroffen sind oder du den Code nicht gut kennst. 📖 Original: Häufige Workflows ↗"
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten",
"id": "plan-modus",
"title": "Der Plan-Modus im Detail",
"keywords": "plan modus plan mode shift+tab /plan ctrl+g plan genehmigen ablehnen keep planning permission-mode plan",
"text": "Im Plan-Modus darf Claude lesen, suchen und erkunden, aber keine Dateien ändern, bis du den Plan freigibst. ⌨️ Während der Sitzung ✏️ Für einen einzelnen Prompt 🚀 Schon beim Start Drück Shift + Tab , bis unten ⏸ plan mode on steht. Nochmal Shift + Tab verlässt den Modus wieder. Stell dem Prompt /plan voran: Prompt /plan Wie würdest du die Benutzerverwaltung auf die neue Datenbank umziehen? Terminal claude --permission-mode plan Wer immer mit einem Plan starten will, kann den Plan-Modus pro Projekt als Standard festlegen. Das zeigen wir in Kapitel 4 . So kommst du hinein Ist der Plan fertig, zeigt Claude ihn und fragt, wie es weitergehen soll: Auswahl Was dann passiert Yes, and use auto mode Plan genehmigt, Claude setzt ihn im Auto-Modus um, ohne bei Alltäglichem zu fragen. Yes, manually approve edits Plan genehmigt, du bestätigst aber jede einzelne Änderung. No, keep planning Du bleibst im Plan-Modus und sagst Claude, was am Plan anders werden soll. 💡 Plan selbst bearbeiten Drück Ctrl + G , um den Plan in deinem Texteditor zu öffnen. Streich Schritte, ergänze Hinweise, speichere, und Claude arbeitet mit deiner Fassung weiter. ⚠️ Achtung bei Shift+Tab Wenn die Genehmigungsabfrage offen ist, genehmigt Shift + Tab den Plan. Willst du nur raus, drück zuerst Esc . 📖 Original: Plan-Modus ↗ Den Plan prüfen und freigeben"
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten · Der Plan-Modus im Detail",
"id": "plan-modus",
"title": "So kommst du hinein",
"keywords": "",
"text": "⌨️ Während der Sitzung ✏️ Für einen einzelnen Prompt 🚀 Schon beim Start Drück Shift + Tab , bis unten ⏸ plan mode on steht. Nochmal Shift + Tab verlässt den Modus wieder. Stell dem Prompt /plan voran: Prompt /plan Wie würdest du die Benutzerverwaltung auf die neue Datenbank umziehen? Terminal claude --permission-mode plan Wer immer mit einem Plan starten will, kann den Plan-Modus pro Projekt als Standard festlegen. Das zeigen wir in Kapitel 4 ."
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten · Der Plan-Modus im Detail",
"id": "plan-modus",
"title": "Den Plan prüfen und freigeben",
"keywords": "",
"text": "Ist der Plan fertig, zeigt Claude ihn und fragt, wie es weitergehen soll: Auswahl Was dann passiert Yes, and use auto mode Plan genehmigt, Claude setzt ihn im Auto-Modus um, ohne bei Alltäglichem zu fragen. Yes, manually approve edits Plan genehmigt, du bestätigst aber jede einzelne Änderung. No, keep planning Du bleibst im Plan-Modus und sagst Claude, was am Plan anders werden soll. 💡 Plan selbst bearbeiten Drück Ctrl + G , um den Plan in deinem Texteditor zu öffnen. Streich Schritte, ergänze Hinweise, speichere, und Claude arbeitet mit deiner Fassung weiter. ⚠️ Achtung bei Shift+Tab Wenn die"
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten",
"id": "rezepte",
"title": "Typische Abläufe als Prompt-Rezepte",
"keywords": "rezepte prompt beispiele codebase verstehen fehler beheben debuggen refaktorieren tests pull request dokumentation workflows",
"text": "Für die häufigsten Aufgaben gibt es bewährte Formulierungen. Nimm sie als Startpunkt und pass sie an. 🗺️ Projekt verstehen 🐞 Fehler beheben 🧹 Umbauen 🧪 Tests 🌿 Pull Request 📝 Doku Erst den Überblick, dann immer genauer werden. Prompts Gib mir einen Überblick über dieses Projekt. Erklär mir die wichtigsten Muster in der Architektur. Wo wird die Benutzer-Anmeldung behandelt? Verfolge den Ablauf beim Login vom Frontend bis zur Datenbank. Tipp: Frag nach Begriffen aus deinem Fachgebiet. Claude findet die passenden Stellen. Gib die Fehlermeldung und, wenn möglich, wie man den Fehler auslöst. Prompts Beim Ausführen von npm test kommt ein Fehler. Hier ist er: [Fehler einfügen] Schlag mir ein paar Wege vor, den Fehler zu beheben. Behebe ihn mit dem Ansatz, der die Ursache angeht, nicht nur das Symptom. Sag Claude, ob der Fehler immer oder nur manchmal auftritt, und wie man ihn nachstellt. Erst finden, dann Vorschläge, dann in kleinen, geprüften Schritten umbauen. Prompts Finde veraltete API-Aufrufe in unserem Projekt. Schlag vor, wie wir utils.js modernisieren können. Bau es um, aber das Verhalten muss gleich bleiben. Lass danach die Tests für den umgebauten Code laufen. Claude schaut sich deine bestehenden Tests an und übernimmt Stil und Framework. Prompts Finde Funktionen in NotificationsService.swift, die nicht getestet sind. Schreib Tests dafür. Ergänze Grenzfälle: leere Eingaben, sehr große Werte, Netzwerkfehler. Lass die neuen Tests laufen und behebe, was fehlschlägt. Prompts F"
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten",
"id": "pruefen",
"title": "Gib Claude eine Prüfung mit",
"keywords": "prüfung test verifizieren belege nachweis /goal /code-review /verify stop hook fertig selbst prüfen review spec",
"text": "Claude hört auf, wenn die Arbeit fertig aussieht . Kann es nicht nachprüfen, ob sie fertig ist , wirst du selbst zur Testabteilung. Gib Claude etwas, das mit bestanden oder fehlgeschlagen antwortet. Dann schließt Claude die Schleife selbst: ändern, prüfen, Fehler lesen, verbessern, erneut prüfen. Und du musst nicht danebensitzen. 🧪 Tests Eine Testdatei oder die ganze Test-Suite. 🏗️ Build & Typecheck Der Exit-Code sagt eindeutig: geht oder geht nicht. 🧹 Linter Stil- und Fehlerprüfung auf Knopfdruck. 🔁 Vergleichsskript Ausgabe gegen eine erwartete Datei prüfen. 📸 Screenshot Bei Oberflächen: Screenshot neben dem Mockup. 📋 Spezifikation Eine SPEC.md , gegen die geprüft wird. Für die meisten Aufgaben reicht die Bitte im Prompt. Je unbeaufsichtigter Claude arbeitet, desto weiter rechts lohnt es sich. Variante Wann sinnvoll Im Prompt Funktioniert sofort für jede Aufgabe, ohne Einrichtung. Claude entscheidet selbst, wann es zufrieden ist. /goal Z. B. /goal alle Tests in tests/auth sind grün und der Linter meldet nichts . Wichtig bei langen Läufen, bei denen Claude sonst mit einem Zwischenstand aufhören könnte. /code-review Ein neuer Subagent prüft deine Änderungen. Er hat das Gespräch nie gesehen und lässt sich nicht von der Begründung beeinflussen, die zum Code geführt hat. Stop-Hook Ein Skript, das bei jedem Versuch aufzuhören läuft und Claude zurückschickt, solange es fehlschlägt. Wie man Hooks baut, kommt in Kapitel 5 . 📌 Merke: Belege verlangen „Alle Tests bestanden“ sagt wenig."
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten · Gib Claude eine Prüfung mit",
"id": "pruefen",
"title": "Wie streng soll die Prüfung sein?",
"keywords": "",
"text": "Für die meisten Aufgaben reicht die Bitte im Prompt. Je unbeaufsichtigter Claude arbeitet, desto weiter rechts lohnt es sich. Variante Wann sinnvoll Im Prompt Funktioniert sofort für jede Aufgabe, ohne Einrichtung. Claude entscheidet selbst, wann es zufrieden ist. /goal Z. B. /goal alle Tests in tests/auth sind grün und der Linter meldet nichts . Wichtig bei langen Läufen, bei denen Claude sonst mit einem Zwischenstand aufhören könnte. /code-review Ein neuer Subagent prüft deine Änderungen. Er hat das Gespräch nie gesehen und lässt sich nicht von der Begründung beeinflussen, die zum Code gefüh"
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten · Gib Claude eine Prüfung mit",
"id": "pruefen",
"title": "Gegen deine Spezifikation prüfen lassen",
"keywords": "",
"text": "Prompt Lass einen Subagenten den Rate-Limiter-Diff gegen SPEC.md prüfen: Ist jede Anforderung umgesetzt, haben die genannten Grenzfälle Tests? Melde nur Lücken, die die Korrektheit betreffen, und lass Stilfragen weg. ⚠️ „Stil weglassen“ nicht vergessen Ein Prüfer, der Probleme finden soll, findet immer etwas. Wer jeden Befund umsetzt, landet bei unnötigen Abstraktionen und Tests für Fälle, die nie eintreten. 💡 /verify Wenn Claude fertig ist, startet /verify die App, schaut sich das Ergebnis an und findet so Probleme, die Tests und Typecheck übersehen. 📖 Original: Geben Sie Claude eine Prüfung "
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten",
"id": "regeln",
"title": "Bitte oder Regel? Zwei Arten von Anweisungen",
"keywords": "deterministisch nicht deterministisch regel richtlinie claude.md hook deny regel durchsetzen immer nie wichtig important",
"text": "Manches darfst du Claude überlassen, manches muss jedes Mal so passieren. Dafür gibt es zwei verschiedene Werkzeuge. 🧠 Bitte (Claude entscheidet) Dein Prompt, die CLAUDE.md , ein Skill. Claude liest es und folgt dem fast immer, aber es gibt keine Garantie. Es darf entscheiden, dass eine Richtlinie hier nicht passt. für Richtlinien mit Ausnahmen ⚙️ Regel (Claude Code setzt durch) Ein Hook, eine Verbotsregel ( deny ), eine verwaltete Einstellung. Claude Code wendet sie jedes Mal an, egal was das Modell denkt. für „immer“ und „nie“ Claude entscheidet Claude Code setzt durch Was zu tun ist Prompt, CLAUDE.md , Skills Hooks, Skills, die nur du startest Worauf es zugreift der Prüfer im Auto-Modus deny -Regeln, Sandbox Wann es fertig ist Bitte um Belege, /goal , /code-review Tests, Stop-Hook, CI Wie viel es ausgibt Effort-Stufe Turn- oder Budget-Limit 🧭 Beispiel „Bevorzuge benannte Exporte“ ist eine Vorliebe mit vielen Ausnahmen: gehört in die CLAUDE.md . „Lies niemals .env “ darf keine Ausnahme haben: gehört in eine deny -Regel. „Nach jeder Änderung Formatierer laufen lassen“: gehört in einen Hook. 💡 Das Warnsignal Wenn du eine Zeile in der CLAUDE.md immer lauter formulierst („WICHTIG!“, „IMMER!“) und Claude sie trotzdem übersieht, gehört sie in einen Hook. Und umgekehrt: Hooks für reine Vorlieben kannst du löschen und Claude entscheiden lassen. Die CLAUDE.md lernst du in Kapitel 3 kennen, Berechtigungsregeln und Sandbox in Kapitel 4 , Hooks und Skills in Kapitel 5 . 📖 Original: Det"
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten",
"id": "steuern",
"title": "Die Sitzung steuern",
"keywords": "steuern esc stoppen rewind zurückspulen /rewind /undo /clear korrigieren zwei korrekturen /btw /rename resume continue nachricht einreihen umlenken",
"text": "Keine Einstellung ersetzt es, die erste Minute zuzuschauen und einzugreifen, sobald Claude in die falsche Richtung läuft. ✋ Esc Stoppt Claude mitten in der Arbeit. Alles bis dahin bleibt erhalten, du kannst direkt umlenken. ⏪ /rewind oder Esc Esc Spult Code, Gespräch oder beides zu einem früheren Prompt zurück. Alias: /undo . 🧽 /clear Frischer Start ohne den bisherigen Verlauf. Das alte Gespräch bleibt über /resume erreichbar. Die drei wichtigsten Griffe Jede Korrektur bleibt im Verlauf. Nach zwei Fehlversuchen liest Claude ständig mit, was alles nicht geklappt hat. Wenn du dasselbe zweimal korrigiert hast und es immer noch nicht stimmt, fügt eine dritte Korrektur vor allem weiteren Ballast hinzu. Ein frischer Start mit einem Prompt, der das Gelernte gleich einbaut, klappt fast immer besser. Die Zwei-Korrekturen-Regel Option Was sie tut Restore code and conversation Code und Gespräch zurück auf diesen Punkt Restore conversation Nur das Gespräch zurück, der Code bleibt wie er ist Restore code Nur die Dateiänderungen zurück, das Gespräch bleibt Summarize from here Alles ab hier zu einer Zusammenfassung verdichten, schafft Platz Summarize up to here Alles vor diesem Punkt verdichten, Späteres bleibt unverändert 💡 Mutig ausprobieren Weil Zurückspulen so einfach ist, kannst du zuerst den mutigeren Ansatz probieren lassen. Klappt er nicht, spulst du zurück und nimmst den sicheren Weg. ⚠️ Checkpoints ersetzen kein Git Zurückgespult werden nur Dateien, die Claude mit seinen eigenen B"
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten · Die Sitzung steuern",
"id": "steuern",
"title": "Die drei wichtigsten Griffe",
"keywords": "",
"text": "✋ Esc Stoppt Claude mitten in der Arbeit. Alles bis dahin bleibt erhalten, du kannst direkt umlenken. ⏪ /rewind oder Esc Esc Spult Code, Gespräch oder beides zu einem früheren Prompt zurück. Alias: /undo . 🧽 /clear Frischer Start ohne den bisherigen Verlauf. Das alte Gespräch bleibt über /resume erreichbar."
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten · Die Sitzung steuern",
"id": "steuern",
"title": "Die Zwei-Korrekturen-Regel",
"keywords": "",
"text": "Jede Korrektur bleibt im Verlauf. Nach zwei Fehlversuchen liest Claude ständig mit, was alles nicht geklappt hat. Wenn du dasselbe zweimal korrigiert hast und es immer noch nicht stimmt, fügt eine dritte Korrektur vor allem weiteren Ballast hinzu. Ein frischer Start mit einem Prompt, der das Gelernte gleich einbaut, klappt fast immer besser."
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten · Die Sitzung steuern",
"id": "steuern",
"title": "Das Rewind-Menü",
"keywords": "",
"text": "Option Was sie tut Restore code and conversation Code und Gespräch zurück auf diesen Punkt Restore conversation Nur das Gespräch zurück, der Code bleibt wie er ist Restore code Nur die Dateiänderungen zurück, das Gespräch bleibt Summarize from here Alles ab hier zu einer Zusammenfassung verdichten, schafft Platz Summarize up to here Alles vor diesem Punkt verdichten, Späteres bleibt unverändert 💡 Mutig ausprobieren Weil Zurückspulen so einfach ist, kannst du zuerst den mutigeren Ansatz probieren lassen. Klappt er nicht, spulst du zurück und nimmst den sicheren Weg. ⚠️ Checkpoints ersetzen kein"
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten · Die Sitzung steuern",
"id": "steuern",
"title": "Kleine Helfer",
"keywords": "",
"text": "Befehl Wofür /btw Eine kurze Zwischenfrage stellen, ohne dass sie im Verlauf landet /rename name Der Sitzung einen Namen geben, z. B. /rename oauth-umbau claude --resume name Eine benannte Sitzung später wieder aufnehmen, samt Checkpoints claude --continue Die letzte Sitzung im Ordner fortsetzen Tippen während Claude arbeitet Deine Nachricht wird eingereiht und nach dem aktuellen Schritt gelesen 📖 Original: Steuern Sie die Sitzung ↗ 📖 Original: Checkpointing ↗"
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten",
"id": "effort",
"title": "Effort und Modell: wie viel Denken soll es sein?",
"keywords": "effort anstrengung denken nachdenken /effort low medium high xhigh max ultrathink modell /model opus sonnet haiku fable",
"text": "Die Effort-Stufe ist der wichtigste Regler dafür, wie gründlich Claude nachdenkt. Sie ersetzt fast alles, was man früher mit Zauberformeln im Prompt versucht hat. ⭐ Die aktuellen Modelle starten auf medium . Stufe Wann sinnvoll low Schnelles Hin und Her, bei dem du jedes Ergebnis ohnehin anschaust: Brainstorming, erster Entwurf, Umbenennung über ein paar Dateien. medium Standard. Passt für alltägliche Arbeit mit klarem Umfang, z. B. eine neue Funktion bauen. high / xhigh Wenn es auf leicht übersehene Fälle ankommt: Fehler in fremdem Code, wackelige Tests, eine Schemaänderung, bei der jede Stelle gefunden werden muss. max Schwere Probleme, die Claude ohne dich durcharbeiten soll, etwa die Suche nach einer Sicherheitslücke. Bei normalen Aufgaben denkt es dann eher zu viel und kostet mehr, ohne besser zu sein. Weg Wirkung /effort Öffnet einen Schieberegler. Enter speichert als Standard, s gilt nur für diese Sitzung. /effort high Stellt die Stufe direkt ein. claude --effort low Stufe für eine einzelne Sitzung beim Start. ultrathink im Prompt Nur für diese eine Nachricht tiefer nachdenken, ohne die Einstellung zu ändern. Im Terminal erscheint das Wort in Regenbogenfarben. So stellst du es ein 🎼 Opus Standardmodell auf den meisten Plänen. Erledigt die meisten Programmieraufgaben sehr gut. 🎵 Sonnet Günstiger für alltägliche Arbeit. 🍃 Haiku Klein und schnell. Gut für Helfer (Subagenten) mit einfachen Aufgaben. Wechseln mit /model . Dort kannst du mit den Pfeiltasten links/rechts auch"
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten · Effort und Modell: wie viel Denken soll es sein?",
"id": "effort",
"title": "So stellst du es ein",
"keywords": "",
"text": "Weg Wirkung /effort Öffnet einen Schieberegler. Enter speichert als Standard, s gilt nur für diese Sitzung. /effort high Stellt die Stufe direkt ein. claude --effort low Stufe für eine einzelne Sitzung beim Start. ultrathink im Prompt Nur für diese eine Nachricht tiefer nachdenken, ohne die Einstellung zu ändern. Im Terminal erscheint das Wort in Regenbogenfarben."
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten · Effort und Modell: wie viel Denken soll es sein?",
"id": "effort",
"title": "Und welches Modell?",
"keywords": "",
"text": "🎼 Opus Standardmodell auf den meisten Plänen. Erledigt die meisten Programmieraufgaben sehr gut. 🎵 Sonnet Günstiger für alltägliche Arbeit. 🍃 Haiku Klein und schnell. Gut für Helfer (Subagenten) mit einfachen Aufgaben. Wechseln mit /model . Dort kannst du mit den Pfeiltasten links/rechts auch gleich den Effort anpassen. 📖 Original: Effort-Stufe anpassen ↗"
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten",
"id": "modus-wahl",
"title": "Den passenden Berechtigungsmodus wählen",
"keywords": "berechtigungsmodus wählen manual auto bypasspermissions accept edits rückfragen genehmigen klassifikator /fewer-permission-prompts",
"text": "Die Modi kennst du aus Kapitel 1. Hier geht es darum, welcher für deine Arbeitsweise passt. ✋ Manual Du genehmigst jede Änderung selbst. Sicher, aber nach der zehnten Frage klickst du ohne zu lesen, und ohne dich geht nichts weiter. gut zum Lernen 🤖 Auto Standard. Claude arbeitet durch, ein separater Prüfer stoppt Riskantes: z. B. curl | bash , Produktions-Deployments, Force-Push über fremde Arbeit, sensible Daten nach außen. der gute Mittelweg ⚡ bypassPermissions Genehmigt alles, was keine Verbotsregel abdeckt. Nur in einem Wegwerf-Container sinnvoll. mit Vorsicht ℹ️ Wenn der Auto-Modus blockiert Du bekommst einen Hinweis, und die Aktion steht unter Recently blocked in /permissions . Dort kannst du sie freigeben. Nach drei Blockaden hintereinander (oder zwanzig insgesamt) pausiert der Auto-Modus und fragt wieder dich. ⚠️ Gesagt ist nicht gesichert „Pushe nicht, bevor ich es geprüft habe“ im Gespräch nimmt der Prüfer ernst. Aber der Satz kann beim Zusammenfassen des Gesprächs verloren gehen. Was wirklich wichtig ist, gehört in eine feste Regel (Kapitel 4). 💡 Zu viele Rückfragen? /fewer-permission-prompts durchsucht deine letzten Sitzungen nach häufigen, nur lesenden Befehlen und schlägt vor, sie dauerhaft zu erlauben. 📖 Original: Berechtigungsmodus ändern ↗"
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten",
"id": "kosten",
"title": "Kosten und Kontext im Blick behalten",
"keywords": "kosten token verbrauch /usage /clear /compact kontext cache subagenten sparen günstig",
"text": "Jede Anfrage schickt das ganze bisherige Gespräch mit. Eine Sitzung, die drei fremde Aufgaben angesammelt hat, bezahlt bei der vierten alle drei mit. 📊 /usage Erste Anlaufstelle. Zeigt, wohin dein Verbrauch geht, aufgeschlüsselt nach Skills, Subagenten, Plugins und MCP-Servern, und warnt vor teuren Mustern. 🧽 /clear zwischen Aufgaben Kostet nichts und die nächste Aufgabe zahlt nicht für den alten Verlauf. /clear oauth-umbau benennt dabei die alte Sitzung. 🗜️ /compact mit Fokus Z. B. /compact behalte die API-Änderungen und die Testbefehle . Achtung: Das Zusammenfassen liest selbst das ganze Gespräch und ist eine große Anfrage. 👥 Subagenten kosten mit Jeder Helfer schickt eigene Anfragen, die zu deiner Nutzung zählen. Er bringt Parallelität und frischen Blick, aber keine klügere Antwort. ℹ️ Der Cache Bereits gesendete Teile des Gesprächs werden zwischengespeichert und sind dann günstiger. Bei einem Abo hält dieser Cache etwa eine Stunde. Nach einer längeren Pause ist eine neue Sitzung daher oft günstiger als weiterzumachen. Kontextfenster, CLAUDE.md und das Gedächtnis vertiefen wir in Kapitel 3 , Subagenten in Kapitel 6 . 📖 Original: Kosten und Kontext gering halten ↗"
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten",
"id": "allein",
"title": "Claude allein arbeiten lassen",
"keywords": "unbeaufsichtigt allein nachts hintergrund fünf fragen max-turns budget worktree parallel claude -p skript",
"text": "Solange du zuschaust, fängst du Fehler nach ein, zwei Nachrichten ab. Bei einem Lauf über Nacht sagt es Claude niemand. Bevor du eine Aufgabe unbeaufsichtigt laufen lässt, geh diese fünf Fragen durch: Weiß es, wie „fertig“ aussieht? Ein Ziel, eine Spezifikationsdatei oder ein roter Test, der grün werden muss. Kann es seine Arbeit selbst prüfen? Test-Suite, Stop-Hook oder ein Review-Schritt. Was darf es anfassen? Berechtigungsregeln, Sandbox, ein eigener Worktree, nur ein bestimmter Branch. Was stoppt es? Ein Limit für Durchgänge ( --max-turns ) oder Kosten ( --max-budget-usd ). Wer gibt das Ergebnis frei? Ein Pull Request oder eine Zusammenfassung, und dann ein Mensch, der Merge oder Deployment genehmigt. 💡 Klein anfangen Lass einen neuen Ablauf zuerst mit drei Dateien laufen, schau, was schiefgeht, verbessere den Prompt, und erst dann den Rest. Und beobachte die ersten Läufe von allem Neuen, bevor du ihm blind vertraust. Skripte mit claude -p , geplante Aufgaben und /loop sind Thema in Kapitel 7 . Parallele Sitzungen mit Worktrees in Kapitel 6 . 📖 Original: Claude ohne dich arbeiten lassen ↗"
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten",
"id": "fehler",
"title": "Typische Stolperfallen",
"keywords": "fehler stolperfallen anti pattern küchenspüle sitzung zu lange claude.md überladen vertrauen ohne prüfen endlos erkunden",
"text": "Diese Muster kosten am meisten Zeit. Zum Glück ist die Lösung jeweils einfach. 🍲 Die Allzweck-Sitzung Problem: Du fängst mit einer Aufgabe an, fragst zwischendurch etwas ganz anderes und kehrst dann zurück. Der Kontext ist voll mit Fremdem. Lösung: /clear zwischen Aufgaben, die nichts miteinander zu tun haben. Für kurze Zwischenfragen /btw . 🔁 Immer wieder korrigieren Problem: Claude liegt daneben, du korrigierst, es liegt wieder daneben, du korrigierst wieder. Lösung: Nach zwei erfolglosen Korrekturen /clear und ein neuer, besserer Prompt mit dem, was du gelernt hast. 📚 Die überladene CLAUDE.md Problem: Die Datei ist so lang, dass wichtige Zeilen untergehen. Vieles darin könnte Claude ohnehin aus dem Code lesen. Lösung: Nur aufschreiben, was Claude nicht selbst findet. Test: „Könnte es das im Code finden, und würde es nachsehen?“ Wenn ja, raus damit. Mehr in Kapitel 3. 🙏 Vertrauen ohne Prüfung Problem: Claude sagt „fertig“, du übernimmst, und später fällt auf, dass ein Grenzfall fehlt. Lösung: Immer eine Prüfung mitgeben und Belege verlangen. Wenn du es nicht prüfen kannst, liefere es nicht aus. 🕳️ Endloses Erkunden Problem: „Untersuch mal“ ohne Grenzen. Claude liest Hunderte Dateien und füllt den Kontext. Lösung: Untersuchung eng fassen („nur src/auth“) oder einem Subagenten geben, der nur eine Zusammenfassung zurückmeldet. 📣 Regeln mit Großbuchstaben Problem: „WICHTIG: NIEMALS …“ in der CLAUDE.md , und es passiert trotzdem. Lösung: Was nie passieren darf, gehört in eine de"
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten",
"id": "faq",
"title": "Häufige Fragen",
"keywords": "fragen faq englisch deutsch prompt länge plan modus immer effort kosten",
"text": "Muss ich auf Englisch prompten, damit es gut klappt? Nein. Deutsch funktioniert genauso gut. Wichtig ist, dass der Prompt konkret ist, nicht die Sprache. Wie lang sollte ein Prompt sein? So lang wie nötig, so kurz wie möglich. Ein Satz mit Ort, Symptom und Ziel ist oft besser als ein Absatz voller Dinge, die Claude im Code ohnehin findet. Sollte ich immer den Plan-Modus nutzen? Nein. Er lohnt sich bei größeren oder unklaren Aufgaben. Bei kleinen, klaren Änderungen kostet er nur Zeit. Bringt „denk ganz gründlich nach“ etwas? Kaum. Das ist normaler Text. Wirklich mehr Denken bekommst du über /effort oder einmalig mit ultrathink im Prompt. Verliere ich etwas mit /clear ? Nein. Das alte Gespräch bleibt gespeichert und ist über /resume erreichbar. Nur die neue Aufgabe startet ohne den alten Ballast. Ist höherer Effort immer besser? Nein. Er kostet mehr Zeit und Token. Bei alltäglichen Aufgaben ist das Ergebnis oft nicht besser als mit medium , bei max neigt Claude sogar zum Überdenken."
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten",
"id": "quiz-sec",
"title": "Quiz: Was hast du behalten?",
"keywords": "quiz test fragen prüfen",
"text": "12 Fragen. Nach jeder Antwort siehst du die Erklärung."
},
{
"page": "kapitel-2",
"url": "kapitel-2.html",
"chapter": "Kapitel 2 · Richtig arbeiten",
"id": "karten",
"title": "Merkkarten",
"keywords": "merkkarten karteikarten lernkarten flashcards wiederholen",
"text": "Begriff ansehen, kurz überlegen, Karte umdrehen. Pfeiltasten blättern, Leertaste dreht um."
}
];
