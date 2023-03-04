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