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
    - Dispatche Event `navigation:goto` mit `page`-Property auf Wert `show_estimations`
16. Ersetze Inhalte des `show_estimations`-Zweigs in der `App.svelte` durch `EstimationList`-Komponente
17. Verknüpfe `setPage` mit `navigation:goto`-Event an der `EstimationList`-Komponente
18. Besetze Prop `estimations` mit dem Wert des Estimation-Arrays