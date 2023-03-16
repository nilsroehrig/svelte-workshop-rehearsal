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
