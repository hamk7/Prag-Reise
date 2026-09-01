# Prag Reise v3.0 – Neuer Dienstag

Diese Version ersetzt den Dienstag vollständig durch den neuen Ablauf vom 01.09.2026.

## Wichtig
- Das gespeicherte Hotel bleibt korrekt: **Wenceslas Hotel & Apartments, Krakovská 1338/10, 110 00 Nové Město**.
- Dienstag enthält jetzt 42 Schritte vom Hotel/PAUL über Lennon-Mauer, Karlsbrücke, Josefov, Altstadt und Hotelpause bis zur Abendrunde in der Neustadt.
- Klementinum ist nur als Hof-/Durchgangsstopp geplant; keine Führung, Barockbibliothek oder Astronomischer Turm.
- Google Maps nutzt für alle neuen Dienstagspunkte einen eigenen präzisen Suchwert (`mapsQuery`) mit Name und möglichst genauer Adresse, statt sich nur auf ungefähre GPS-Koordinaten zu verlassen.
- Jeder Dienstagspunkt hat eine gut lesbare **„📝 Vor Ort“**-Notiz und bei Sehenswürdigkeiten einen ausführlichen Abschnitt **„📖 Geschichte & Umgebung“**.
- Die festen Planzeiten beginnen Dienstag bei 11:30. Mit **„🕒 Planzeiten ab jetzt rechnen“** kann die App die folgenden Zeiten anhand der realen Startzeit neu schätzen.
- Der bestehende Supabase-Sync, Tickets, Parkplatz, Standort, Gebete und übrigen Tage bleiben erhalten.

## Upload bei GitHub
1. Im Repository die bisherige `index.html` durch die neue `index.html` ersetzen.
2. `prag-icon.png` muss nur hochgeladen werden, wenn es noch nicht vorhanden ist.
3. GitHub Pages kurz deployen lassen.
4. Danach die Seite einmal mit `?v=30` öffnen.
5. Oben muss **v3.0 · neuer Dienstag** stehen.

## Hinweis zum Fortschritt
Die neuen Dienstagspunkte verwenden neue IDs. Dadurch werden erledigte Punkte aus dem alten Dienstag nicht versehentlich auf den neuen Ablauf übertragen. Die übrigen Tage und der gemeinsame Cloud-Sync bleiben erhalten.
