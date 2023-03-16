<script>
  import { createEventDispatcher, getContext } from "svelte";

  const dispatch = createEventDispatcher();

  export let estimations = getContext("estimations");
  export let id;

  $: estimation = $estimations.find(({ id: eid }) => eid === id);
  $: if (estimation) {
    estimation.stories = estimation.stories ?? [];
  }

  function gotoMenu() {
    dispatch("navigation:goto", { page: "menu" });
  }
</script>

<h1>Stories Erstellen</h1>

<article>
  <header><strong>{estimation.title}</strong></header>
  <p>Bislang hat diese Schätzung noch keine Stories.</p>
</article>

<details>
    <summary>Beschreibung</summary>
    <p>{estimation.description}</p>
</details>

<button on:click={gotoMenu}>Zurück</button>

<style>
    h1 {
        margin: 2rem 0;
        text-align: center;
    }

    article p {
        margin: 0;
    }
</style>