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