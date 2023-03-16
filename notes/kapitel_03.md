# Kapitel 03

1. Erzeuge neues Verzeichnis `src/lib/stores`
2. Erzeuge neue Datei `estimations.js`
3. Importiere `writable`
4. Erzeuge Konstante `STORAGE_KEY = "svestimator:estimations"`
5. Erzeuge Funktion `createEstimationStore` mit Argument `{useLocalStorage = true}`
   - Erzeuge Variable `initialValues = []`
   - Erzeuge Writable mit Argument `initialValues`
   - Erzeuge und gebe Objekt-Literal zurück
     - Setze `subscribe`-Methode auf `store.subscribe`
     - Erzeuge `add`-Methode mit Argument `estimation`
       - Rufe `store.update` mit Anonymer Funktion als Argument auf
         - Erzeuge Variable `newValue = [...estimations, estimation]`
         - Gebe `newValue` zurück
6. Erzeuge Funktion `getInitialValue` mit Argument `useLocalStorage`
   - Falls `useLocalStorage` falsy ist, gebe leeres Array zurück
   - Lese Item `STORAGE_KEY` aus localStorage in Variable `storageItem`
   - Falls `storageItem === null` ist, gebe leeres Array zurück
   - Versuche `storageItem` als JSON zu parsen
     - Falls erfolgreich, gebe Ergebnis zurück
     - Falls ein Fehler auftritt, logge und gebe leeres Array zurück
7. Füge via `createEstimationStore` den Kontext-Eintrag `estimations` in `main.js` zum Komponenetenrendering hinzu
8. In `App.svelte`, lösche Variable `estimations`
9. Entferne Funktion und Event-Handler `addEstimation` von `EstimationCreation`-Komponente
10. Enferne Prop `estimation` von EstimationLis`-Komponente
11. In `EstimationCreation.svelte`, füge Prop `estimations` mit Vorgabewert `getContext('estimations')` hinzu
12. Ändere `submitEstimation`
    - Nutze `estimations.add` zum Hinzufügen der Estimation
    - Ersetze dipatchtes Event durch `navigation:goto` mit Argument `{ page: 'menu' }`
13. In `EstimationList.svelte`, initialisiere Prop `estimations` mit `getContext('estimations')`
14. Präfixe `estimations` im `{#each}`-Block mit `$` um über Store-Inhalt zu iterieren
15. In `estimations.js`, aktualisiere Store-Objekt wie folgt:
    - `add`-Methode:
      - Erweitere neue Schätzung in `newValue` um 
        - `id = crypto.randomUUID()`
        - `created = new Date()`
    - Erstelle `remove`-Methode mit `id` als Parameter
      - Aktualisiere Store mit `newValue` = gefilterten Schätzungen nach ID
      - Speichere Aktualisierung im LocalStorage
16. Erweitere `try`-Block in `getInitialValue`:
    - Mappe Estimations nach dem Parsen auf neue Objekte:
      - `id: crypto.randomUUID()`,
      - `created: created ? new Date(created) : null`
      - `...rest`
    - Speichere gemappte Estimations im LocalStorage
    - Gib gemappte Estimations zurück
