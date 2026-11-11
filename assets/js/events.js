/*
 * Jahresprogramm – alle Veranstaltungen des Vereins.
 *
 * Neue Veranstaltung hinzufügen: einen Block { ... } kopieren, anpassen, speichern.
 * Die Seite «Aktivitäten» sortiert automatisch und zeigt kommende Anlässe oben,
 * vergangene im Archiv.
 *
 *   start / ende : "JJJJ-MM-TTTHH:MM" (ende ist freiwillig)
 *   bilder       : Dateinamen aus assets/img/ (freiwillig)
 */
window.EVENTS = [
  {
    titel: "5. Jassturnier Türlersee",
    start: "2026-06-19T18:00",
    ort: "Campingplatz Restaurant Türlersee",
    kurz: "Schieber - Einzelwertung\nTeampartner werden ausgelost",
    text: "Kosten: 20.- (Vereinsmitglieder Gratis)\n\nEs gibt viele Preise zu gewinnen.\nDer Jasskönig erhält den legendären Türlersee Jasskönig Wanderpokal.\n\nAnmeldeschluss ist der 07.06.2026",
    bilder: ["event-jasskoenig.jpg", "event-jass-flyer-2026.jpg"]
  },
  {
    titel: "Mitgliederversammlung 2026",
    start: "2026-07-10T18:00", ende: "2026-07-10T21:00",
    ort: "Camping Türlersee, Türlen 1, 8915 Hausen am Albis",
    kurz: "Zur Mitgliederversammlung 2026 vom Freitag 10. Juli 2026 in der Schüür am Türlersee laden wir alle Mitglieder ganz herzlich ein.\nTüröffnung 18:00.\nDie Versammlung beginnt um 18.30 Uhr; anschliessend wird das Abendessen serviert.\nDurch die Versammlung führt unser Präsident Thomas Nyffenegger.",
    bilder: ["event-mv-2026.jpg"]
  },
  {
    titel: "Schüür Fäscht Türlersee",
    start: "2026-07-11T18:00", ende: "2026-07-11T23:50",
    ort: "Camping Türlersee, Türlen 1, 8915 Hausen am Albis",
    bilder: ["event-schuurfascht.jpg"]
  },
  {
    titel: "Kids - Mission Türlersee",
    start: "2026-07-18T13:30", ende: "2026-07-18T15:30",
    ort: "Camping Türlersee, Türlen 1, 8915 Hausen am Albis",
    kurz: "Detektiv Mission - Für Kinder 4 bis 14 Jahre",
    bilder: ["event-kids-mission.jpg"]
  },
  {
    titel: "Bingo",
    start: "2026-08-22T19:00", ende: "2026-08-22T21:00",
    ort: "Camping Türlersee, Türlen 1, 8915 Hausen am Albis",
    kurz: "Türlersee Bingo - Im Restaurant nur bei schönem Wetter.\nCHF 2.- pro Karte. Geschenkkörbe zu gewinnen.",
    bilder: ["event-bingo.jpg"]
  },
  {
    titel: "Seeputzete",
    start: "2026-10-03T09:00", ende: "2026-10-03T11:00",
    ort: "Camping Türlersee, Türlen 1, 8915 Hausen am Albis",
    bilder: ["event-seeputzete-2026.jpg"]
  },
  {
    titel: "4. Jassturnier Türlersee",
    start: "2025-05-23T18:30",
    ort: "Campingplatz Restaurant Türlersee",
    kurz: "Schieber - Einzelwertung\nTeampartner werden ausgelost",
    text: "Kosten: 20.- (Vereinsmitglieder Gratis)\n\nEs gibt viele Preise zu gewinnen.\nDer Jasskönig erhält den legendären Türlersee Jasskönig Wanderpokal.\n\nAnmeldeschluss ist der 11.05.2025",
    bilder: ["event-jasskoenig.jpg", "event-jass-flyer-2025.jpg"]
  },
  {
    titel: "Mitgliederversammlung 2025",
    start: "2025-07-11T18:30", ende: "2025-07-11T21:00",
    ort: "Camping Türlersee, Türlen 1, 8915 Hausen am Albis",
    kurz: "Zur Mitgliederversammlung 2025 vom Freitag 11. Juli 2025 in der Event Location am Türlersee laden wir alle Mitglieder ganz herzlich ein.\nTüröffnung 18:00.\nDie Versammlung beginnt um 18.30 Uhr; anschliessend wird das Abendessen serviert.\nDurch die Versammlung führt unser Präsident Thomas Nyffenegger.",
    bilder: ["event-mv.jpg"]
  },
  {
    titel: "3. Jassturnier Türlersee",
    start: "2024-05-16T18:00",
    ort: "Campingplatz Restaurant Türlersee",
    kurz: "Schieber - Einzelwertung\nTeampartner werden ausgelost",
    text: "Kosten: 20.- (Vereinsmitglieder Gratis)\n\nEs gibt viele Preise zu gewinnen.\nDer Jasskönig erhält den legendären Türlersee Jasskönig Wanderpokal.\n\nAnmeldeschluss ist der 30.04.2024",
    bilder: ["event-jasskoenig.jpg"]
  },
  {
    titel: "Beach Party",
    start: "2024-06-15T14:00", ende: "2024-06-15T23:50",
    ort: "Türlen, 8915 Hausen am Albis",
    kurz: "Drinks & Musik ab 14:00\nApéro: 17:00\nEssen 18:00\nLive Musik 19:00 - 24:00 von den Lucky Boys\nFür die Kinder gibt es eine Hüpfburg und Schminken",
    bilder: ["event-beachparty.jpg"]
  },
  {
    titel: "Seeputzete",
    start: "2024-10-05T09:00", ende: "2024-10-05T12:00",
    ort: "Türlen 1, 8915 Hausen am Albis",
    kurz: "Zusammen mit dem Fischer Verein putzen wir auf und neben dem See.\nAls Belohnung gibt es Wurst & Dessert.",
    bilder: ["event-seeputzete-2024.jpg"]
  },
  {
    titel: "Mitgliederversammlung 2024",
    start: "2024-11-15T18:30", ende: "2024-11-15T21:00",
    ort: "Event & Werken, Türlen 8, 8915 Hausen am Albis",
    kurz: "Zur Mitgliederversammlung 2024 vom Freitag 15. November 2024 in der Event Location am Türlersee laden wir alle Mitglieder ganz herzlich ein.\nDie Versammlung beginnt um 18.30 Uhr; anschliessend wird das Abendessen serviert.\nDurch die Versammlung führt unser Präsident Thomas Nyffenegger.",
    bilder: ["event-mv.jpg"]
  },
  {
    titel: "2. Jassturnier Türlersee",
    start: "2023-05-24T18:00",
    ort: "Campingplatz Restaurant Türlersee",
    kurz: "Schieber - Einzelwertung\nTeampartner werden ausgelost",
    text: "Kosten: 20.- (Vereinsmitglieder Gratis)\n\nEs gibt viele Preise zu gewinnen.\nDer Jasskönig erhält den legendären Türlersee Jasskönig Wanderpokal.",
    bilder: ["event-jasskoenig.jpg"]
  },
  {
    titel: "Mitgliederversammlung 2023",
    start: "2023-11-17T18:30",
    ort: "Event & Werken, Türlen 8, 8915 Hausen am Albis",
    kurz: "Zur Mitgliederversammlung 2023 vom Freitag 17. November 2023 in der Event Location am Türlersee laden wir alle Mitglieder ganz herzlich ein.\nDie Versammlung beginnt um 18.30 Uhr; anschliessend wird das Abendessen serviert.\nDurch die Versammlung führt unser Präsident Thomas Nyffenegger."
  },
  {
    titel: "Jassturnier Türlersee",
    start: "2022-05-18T18:00",
    ort: "Campingplatz Restaurant Türlersee",
    kurz: "Schieber - Einzelwertung\nTeampartner werden ausgelost",
    text: "Kosten: 20.- (Vereinsmitglieder Gratis)\n\nEs gibt viele Preise zu gewinnen.\nDer Jasskönig erhält den legendären Türlersee Jasskönig Wanderpokal.",
    bilder: ["event-jasskoenig.jpg"]
  },
  {
    titel: "Mitgliederversammlung 2022",
    start: "2022-11-18T18:30",
    ort: "Restaurant Löwen, Albisstrasse 2, 8915 Hausen am Albis",
    kurz: "Zur Mitgliederversammlung 2022 vom Freitag 18. November 2022 im Restaurant Löwen, Hausen am Albis laden wir alle Mitglieder ganz herzlich ein.\nDie Versammlung beginnt um 18.30 Uhr; anschliessend wird das Abendessen serviert.\nDurch die Versammlung führt unser Präsident Thomas Nyffenegger."
  }
];
