# Prag Reise v1.1 – Button-Fix

Diese Version behebt einen Fehler, bei dem Safari-Aktionen abbrechen konnten, wenn localStorage in einer Vorschau/Privat-/Dateiumgebung blockiert war. Außerdem werden alte PWA-Dateien durch Cache-Busting ersetzt.

# Prag Reise – GitHub Pages

## Dateien hochladen
Alle Dateien aus diesem Ordner **gemeinsam** in das Root-Verzeichnis deines GitHub-Repositories hochladen. Es sind absichtlich keine Unterordner nötig.

1. GitHub Repository öffnen
2. **Add file → Upload files**
3. Alle Dateien markieren und hochladen
4. **Settings → Pages**
5. Source: **Deploy from a branch**
6. Branch **main**, Ordner **/(root)**
7. Speichern und kurz warten

Auf dem iPhone danach die GitHub-Pages-Adresse in Safari öffnen → **Teilen → Zum Home-Bildschirm**.

## Enthalten
- kompletter Reiseplan 30.08.–03.09.2026
- Fortschritt über localStorage
- Parkplatzentscheidung Zličín 2 / Zličín 1 / anderer Parkplatz
- tatsächlichen Stellplatz, Notizen, Foto und Position speichern
- Ticket-Wallet inkl. 24h-Ablauf und 60-Sekunden-Timer
- Google Maps + Apple Karten + PID-Live-Link
- optionale Zweige Kampa / Lucerna / Kafka / Vyšehrad / Idiom
- Standortdistanz bei geöffneter App
- PWA/offline Grunddaten
- Dark / Light / System
- Ortsgeschichten und Wikipedia-Bilder, sofern online abrufbar
- N26/Mastercard-Hinweis + EUR-Näherung

## Wichtige technische Grenze
Eine statische GitHub-PWA kann auf iOS **nicht zuverlässig dauerhaft im Hintergrund den Standort überwachen** oder fremde Webseiten wie die Prager Parkplatzseite kontinuierlich auslesen. Deshalb gibt es Live-Links, Geolocation bei geöffneter App und In-App-Hinweise.

## Aktuell geprüfte Fakten (Stand 30.08.2026)
- PID-Apppreise: 30 Min 36 CZK, 90 Min 46 CZK, 24h 140 CZK, 72h 340 CZK pro Vollzahler.
- mobile Tickets: 60 Sekunden Schutzfrist.
- P+R Zličín 2: 66 Plätze; Zličín 1: 88 Plätze; 50 CZK erste 24h + 10 CZK je weitere angefangene Stunde.
- Hotel: Krakovská 10; Check-in laut Booking 15:00–23:30, Check-out 08:00–10:00. Buchungsbestätigung hat Vorrang.
- N26: Mastercard-Wechselkurs bei Fremdwährungs-Kartenzahlung; laut N26 keine eigene Auslandszahlungsgebühr.

### Offizielle Links
- PID: https://pid.cz/en/tickets-and-fare/
- PID Lítačka: https://pidlitacka.cz/en
- Parken: https://parking.praha.eu/en/parking-options-in-prague/pr-park-ride/
- Hotel: https://wenceslas.cz/en/uvod
- Mastercard: https://www.mastercard.com/de/de/personal/get-support/currency-exchange-rate-converter.html
