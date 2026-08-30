# Prag Reise v2.7 – automatischer Zwei-iPhone-Sync

## Upload zu GitHub Pages

1. `index.html` und `prag-icon.png` im Repository ersetzen/hochladen.
2. GitHub Pages öffnen und einmal `?v=27` anhängen.
3. In der App unter **Einstellungen → Automatischer Sync** auf **Verbindung testen** drücken.
4. Auf dem iPhone der Schwester dieselbe GitHub-Pages-Adresse öffnen. Der gemeinsame Fortschritt wird automatisch geladen.

## Verhalten

- Jede relevante Änderung wird sofort lokal gespeichert und kurz danach zu Supabase synchronisiert.
- Beim Öffnen, Neuladen/Pull-to-refresh und beim Zurückkehren zur App wird der neueste Stand geladen.
- Solange die Seite offen ist, wird ungefähr alle 12 Sekunden geprüft.
- Ohne Internet funktioniert die App lokal weiter.
- Erscheinungsbild bleibt pro iPhone lokal und wird nicht zwischen den Geräten erzwungen.
- Manueller Sync-Link/JSON bleibt nur als Notfall-Fallback erhalten.
