# Kapitel 02

1. Verzeichnis `src/lib/pages` erstellen
2. Datei `Menu.svelte` im neuen Verzeichnis erstellen
3. Kopiere Inhalt des `{:else}`-Zweigs des aktuellen Views in die neue Datei
4. Erstelle Event-Dispatcher in neuer Datei
5. Erstelle Funktion `gotoEstimationCreation` in neuer Datei
   - Dispatche Event `navigation:goto` mit `page`-Property auf Wert `create_estimation`
6. Erstelle Funktion `gotoEstimationList` in neuer Datei
   - Dispatche Event `navigation:goto` mit `page`-Property auf Wert `show_estimations`
7. Ersetze Inhalt des `{:else}`-Zweigs des aktuellen Views in `App.svelte` durch `Menu`-Komponente
8. Erstelle Funktion `setPage` in `App.svelte` die Event-Detail als Argument nimmt
9. Verknüpfe `setPage` mit `navigation:goto`-Event an der `Menu`-Komponente
10. Erstelle `switch` über die bekannten views in `setPage`
11. Erstelle neue Datei `src/lib/pages/EstimationList.svelte`
12. Kopiere Inhalte des `show_estimations`-Zweigs in der `App.svelte` in die neue Datei
13. Erstelle Prop `estimations` in neuer Datei
14. Erstelle Event-Dispatcher in neuer Datei
15. Erstelle Funktion `gotoMenu` in neuer Datei
    - Dispatche Event `navigation:goto` mit `page`-Property auf Wert `menu`
16. Ersetze Inhalte des `show_estimations`-Zweigs in der `App.svelte` durch `EstimationList`-Komponente
17. Verknüpfe `setPage` mit `navigation:goto`-Event an der `EstimationList`-Komponente
18. Besetze Prop `estimations` mit dem Wert des Estimation-Arrays
19. Erstelle neue Datei `src/lib/pages/EstimationCreation.svelte`
20. Kopiere Inhalte des `create_estimation`-Zweigs in der `App.svelte` in die neue Datei
21. Erstelle State-Variable `estimation` mit Wert `{ title: "", description: "" }`
22. Ersetze Vorkommen von `newEstimation` durch `estimation`
23. Erstelle Event-Dispatcher
24. Erstelle Funktion `submitEstimation`
    - Dispatche Event `estimation:create` mit dem `estimation`-Property auf Wert der State-Variable `estimation`
25. Erstelle Funktion `gotoMenu`
    - Dispatche Event `navigation:goto` mit `page`-Property auf Wert `menu`
26. Füge `required`-Attribut zu `input` und `textarea` hinzu.
27. Ersetze Inhalte des `create_estimation`-Zweigs in der `App.svelte` durch `EstimationCreation`-Komponente
28. Erstelle Funktion `addEstimation` die Event-Detail als Argument nimmt
    - Streue bisherige Schätzungen und die neue Schätzung aus dem Event in `estimations`-Array
    - Rufe `setPage` mit Wert `{detail: { page: 'menu'}}` auf
29. Lösche Funktionen `submitNavigation` und `gotoMenu`
30. Lösche Ausdruck `newEstimation`
31. Verknüpfe `setPage` mit `navigation:goto`-Event an der `EstimationCreation`-Komponente
31. Verknüpfe `addEstimation` mit `estimation:create`-Event an der `EstimationCreation`-Komponente