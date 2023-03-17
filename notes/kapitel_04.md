# Kapitel 04

1. Installiere `@picocss/pico`
2. Importiere `@picocss/pico` in `main.js`
3. Entferne `:root`, `min-width` und `min-height` aus app.css
4. In `App.svelte`, füge `container`-Klasse zu `<main>` hinzu
5. In `Menu.svelte`, füge `<style>`-Block hinzu
   - `h1` zentriert mit 2rem y-Abstand
   - `ul` zentriert ohne Innenabstand und max. 640 Breite
   - `li` ohne Listen-Stil
6. In `EstimationCreation.svelte`, füge `<style>`-Block hinzu
   - `h1` zentriert mit 2rem y-Abstand
   - `form` zentriert und max. 640 Breite
7. In `EstimationCreation.svelte`, füge `<style>`-Block hinzu
   - `h1` zentriert mit 2rem y-Abstand
   - `h2` ohne Abstand und Größe 1rem
8. Neues Verzeichnis `src/lib/components/icons` anlegen
9. Neue Datei `Trash.svelte` anlegen und mit unten stehendem Inhalt füllen
10. `Trash.svelte` in `EstimationList.svelte` importieren
11. `Löschen` im Lösch-Button durch `<Trash />` ersetzen
12. Verschiebe Lösch-Button in den Card-Header
13. Füge Klasse `delete-button` zu Lösch-Button hinzu
    - Nutze unten stehende Styles
14. Füge Styles für `<header>` als flex-container mit y-zentrierung und space-between hinzu
15. Erstelle neue Datei `src/lib/components/Button.svelte`
16. Erstelle Prop `variant` mit Vorgabewert `default`
17. Erstelle Reactive Statement für `unstyled = variant === 'unstyled'`
18. Erstelle `<button>` mit Klick-Forwarding, `class:unstyled` Direktive und `{...$restProps}` spreading
19. Verschiebe `.delete-button` styles aus `EstimationList.svelte` in `Button.svelte`
20. Benenne `.delete-button` um in `.unstyled`
21. Importiere `Button`-Komponente in `EstimationList.svelte`
22. Ersetze Lösch-Button mit passender Verwendung von `<Button>` und Variante `unstyled`
23. Erweitere die `add`-Methode in `estimations.js`
    - Verschiebe die Erzeugung des neuen Schätzungs-Objekts aus `update` direkt unter `add`
    - Füge das neue Objekt innerhalb von `update` dem Store hinzu
    - Gib das Als Rückgabewert von `add` zurück
24. In `EstimationCreation.svelte`, 
    - erweitere Vorgabewert von `estimation` um `status: 'created'`
    - in `submitEstimation` 
      - speichere das Ergebnis von `estimations.add` in `addedEstimation`
      - ersetze navigation-argumente durch `{ page: "create_stories", params: { id: addedEstimation.id }}`
    - Benenne Button `Speichern` in `Weiter` um
25. Erstelle neue Datei `src/lib/pages/StoryCreation.svelte`
    - Importiere `getContext` und `createEventDispatcher`
    - Erstelle Prop `estimations` mit Schätzungs-Kontext als Vorgabewert 
    - Erstelle Prop `id`
    - Erstelle reaktives Statement mit `estimation = estimations.find(byId)`
    - Erstelle reaktives Statement mit `if(estimation) estimation.stories = estimation.stories ?? []`
    - Erstelle Funktion `gotoMenu`
    - Erstelle Überschrift `Stories erstellen`
    - Erstelle Card mit 
      - `estimation.title` als Header
      - `<p>Bislang hat diese Schätzung noch keine Stories.</p>` als Body
    - Erstelle Accordion mit `Beschreibung` als `<summary>` und `estimation.description` als Content
    - Erstelle Zurück-Button mit `gotoMenu`
    - Erstele styles für Überschrift und 0-margin für `article > p`
26. In `App.svelte`
    - Importiere `StoryCreation.svelte`
    - Erstelle Variable `viewArgs = {}`
    - Ersetze `switch`-Block in `setPage` mit
      - `currentView = detail?.page`
      - `viewArgs = detail?.params`
    - Füge Zweig füe `create_stories` hinzu
      - `<StoryCreation on:navigation:goto={setPage} id={viewArgs?.id} />`
27. Erstelle neue Datei `src/lib/components/icons/Plus.svelte` mit unten angezeigtem Inhalt
28. Füge `<Button>` in Variante `unstyled` mit `<Plus>` zum Card-Header hinzu
29. Mache `<header>` zu `flex` mit `space-between` und `center` 
30. Füge XMark-Icon hinzu mit unten stehendem Inhalt
31. Erstelle neue Variable `storyForm` in `StoryCreation` mit `{open: false, text: ""}`
32. Verknüpfe Klick auf Plus-Button mit `storyForm.open`-Toggle
33. Zeige `<XMark>` wenn `storyForm.open` sonst `<Plus>`
34. Zeige Formular, wenn `storyForm.open`, mit
    - `on:submit|preventDefault`
    - `input` mit max 60Z, required, placeholder=Storytext... und gebunden an `storyForm.text`
    - `button` type submit mit `Erstellen`
35. Füge Formular-Style hinzu: grid 4fr 1fr, gap .5
36. Füge `inputRef: null` zu `storyForm` hinzu
37. Erstelle Funktion `focusAction(node){node.focus()}`
38. Ergänze `<input>`-Attribute
    - `use:focusAction`
    - `bind:this={storyForm.inputRef}`
39. Erweitere Estimation-Store um `update`-Methode mit unten stehendem Inhalt
40. Erweitere `StoryCreation` um `addStory`-Funktion die `estimation.stories` um Story-Objekt mit random UUID und `storyForm.text` erweitert und store updated.
41. Verknüpfe `addStory` mit `on:submit`
42. Wrappe Fallback Text mit `div.stories`
43. Füge `{#each}`-Block zur Iteration über Stories hinzu
    - Packe `div.story` mit `story.text` in `each`-Zweig
    - Packe Fallback Text in den `else`-Zweig
    - Füge Klasse `.fallback-text` an Fallback text an
44. Füge Stylesheet wie unten angegeben hinzu
45. Füge `finishEstimationPreparation`-Funktion hinzu
    - Aktualisiere Estimation mit dem Status `prepared`
    - Navigiere zu Seite `estimate` mit Estimation ID als Argument
46. Erstelle Weiter-Button und verknüpfe mit `finishEstimationPreparation`
46. Füge `Estimate`-Page wie unten angegeben hinzu
47. Füge Zweig für Estimate analog zu StoryCreation in `App.svelte` hinzu


## Trash Icon

```html
<script>
  export let title = "Löschen";
  export let width = 24;
  export let height = 24;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  {width}
  {height}
>
  <title>{title}</title>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
  />
</svg>
```

## Delete-Button-Klasse

```css
.delete-button {
  border: none;
  background: transparent;
  width: auto;
  padding: 0;
  margin: 0;
}
```

## Plus Icon

```html
<script>
  export let title = "Neu";
  export let width = 24;
  export let height = 24;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  {width}
  {height}
>
  <title>{title}</title>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M12 4.5v15m7.5-7.5h-15"
  />
</svg>
```

## X-Mark Icon

```html
<script>
  export let title = "Schließen";
  export let width = 24;
  export let height = 24;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  {width}
  {height}
>
  <title>{title}</title>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M6 18L18 6M6 6l12 12"
  />
</svg>
```

## Update-Methode

```js
update(estimationToUpdate) {
  store.update((estimations) => {
    const mappedEstimations = estimations.map((estimation) =>
      estimation.id === estimationToUpdate.id
        ? estimationToUpdate
        : estimation
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mappedEstimations));
    return mappedEstimations;
  });
}
```

## Stories-Stylesheet

```css
.stories {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
  }

  .story {
    padding: 1rem;
    background-color: rgba(0,0,0,0.2);
    border-radius:var(--border-radius, 0.25);
    overflow: hidden;
  }

  .fallback-text {
    margin: 0;
    grid-column: 1 / -1;
    text-align: center;
  }
```

## Estimate Page

```html
<script>
  import { createEventDispatcher, getContext } from "svelte";

  const dispatch = createEventDispatcher();
  const sizes = [1, 2, 3, 5, 8, 13];

  export let estimations = getContext("estimations");
  export let id;

  $: estimation = $estimations.find(({ id: eid }) => eid === id);
  $: stories = estimation.stories;
</script>

<h1>Schätzung Durchführen</h1>

<div class="estimate">
  <div class="stories">
    {#each stories as story (story.id)}
      <div class="story">{story.text}</div>
    {/each}
  </div>
  <div class="sizes">
    {#each sizes as size}
      <div class="size">
        <strong>{size}</strong>
      </div>
    {/each}
  </div>
</div>

<style>
  .estimate {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 1rem;
  }

  .stories {
    display: grid;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius, .25rem);
    align-items: center;
    justify-content: center;
    grid-template-areas: "x";
  }

  .story {
    padding: 1rem;
    background-color: #0e1419;
    border-radius: var(--border-radius, 0.25);
    overflow: hidden;
    box-shadow: 0 0 5px 0 black;
    max-width: calc(200px - 2rem);
    top: 1rem;
    left: 1rem;
    grid-area: x;
  }

  .sizes {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
  }

  .size {
    min-height: 200px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius, .25rem);
    padding: .5rem;
  }
</style>
```