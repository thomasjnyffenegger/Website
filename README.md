# Website Camping- und Naturfreunde Türlersee

Statische Website des Vereins (reines HTML, CSS und JavaScript – kein Build nötig).

## Aufbau

| Datei | Inhalt |
| --- | --- |
| `index.html` | Startseite |
| `verein.html` | Geschichte, Zweck, Vorstand, Mitglieder, Anmeldung |
| `aktivitaten.html` | Jahresprogramm (wird aus `assets/js/events.js` erzeugt) |
| `tuerlersee.html` | Links rund um den Türlersee |
| `impressum.html`, `datenschutz.html` | Rechtliches |
| `assets/` | Bilder, Schriften, Stylesheet, Skripte |

## Häufige Änderungen

- **Neue Veranstaltung:** in `assets/js/events.js` einen Block kopieren und anpassen.
  Kommende Anlässe erscheinen automatisch oben, vergangene im Archiv.
- **Anmeldeformular:** in `assets/js/main.js` bei `ANMELDUNG_EMAIL` die Empfänger-Adresse eintragen.
- **Vorstand / Mitgliederzahl:** direkt in `verein.html`.

## Veröffentlichen mit GitHub Pages

Auf GitHub unter *Settings → Pages* bei «Build and deployment» die Quelle
*Deploy from a branch* wählen, Branch und Ordner `/ (root)` auswählen und speichern.

## Lokal ansehen

```
python3 -m http.server 8000
```

und dann <http://localhost:8000> öffnen.
