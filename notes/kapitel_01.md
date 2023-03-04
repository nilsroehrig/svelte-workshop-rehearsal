# Kapitel 01

1. Überschrift in Svestimator ändern
2. Ungeordnete Liste mit zwei Buttons erzeugen
   - Neue Schätzung erstellen
   - Vorherige Schätzungen betrachten
3. Script-Block erzeugen
4. Variable `currentView` mit Startwert `menu` erzeugen
5. Funktion `gotoEstimationCreation` erzeugen
   - Variable `currentView` auf Wert `create_estimation` setzen
6. `{#if}`-Block erzeugen
   - Verzweigung für `create_estimation` erstellen
   - Überschrift im Block auf `Schätzung erstellen` setzen
   - Button mit Label `Zurück` erstellen
7. `{:else}`-Block mit Liste aus 2. füllen
8. Funktion `gotoMenu` erzeugen
   - Variable `currentView` auf Wert `menu` setzen
9. Klick auf Button `Neue Schätzung erstellen` mit `gotoEstimationCreation` verknüpfen
10. Klick auf Button `Zurück` mit `gotoMenu` verknüpfen
11. Formular in `create_estimation` erstellen
    - Label + Text-Input + br für Titel
    - Label + TextArea + br für Beschreibung
    - Button `Zurück` mit `type=button` versehen und in Formular verschieben
    - Neuen Button `Speichern` mit `type=submit` erstellen
12. Variable `estimations` als leeres Array hinzufügen
13. Variable `newEstimation` als Objekt-Literal `{title: "", description: ""}` hinzufügen
14. Attribute des Estimation-Objekts an die beiden Formularfelder binden
15. Funktion `submitEstimation` erzeugen
    - `newEstimation` klonen und in `estimations` speichern 
    - `gotoMenu` aufrufen
16. Submit des Fromulars mit `submitEstimation` verknüpfen
17. Variable `newEstimation` reaktiv zurücksetzen, wenn der `currentView` ist nicht `create_estimation`
    - `newEstimation = currentView === "create_estimation" ? newEstimation : {title: "", description: ""}` 