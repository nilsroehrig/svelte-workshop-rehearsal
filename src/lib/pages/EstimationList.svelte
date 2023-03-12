<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let estimations = [];

  function gotoMenu() {
    dispatch("navigation:goto", { page: "menu" });
  }
</script>

<h1>Vorherige Schätzungen</h1>

{#each estimations as estimation (estimation.title)}
  <article>
    <header><h2>{estimation.title}</h2></header>
    <p>{estimation.description}</p>
  </article>
{:else}
  <p>Bislang wurde noch nichts geschätzt.</p>
{/each}

<button type="button" on:click={gotoMenu}>Zurück</button>
