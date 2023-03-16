<script>
  import { createEventDispatcher, getContext } from "svelte";

  const dispatch = createEventDispatcher();
  
  export let estimations = getContext("estimations");

  let estimation = { title: "", description: "" };

  function submitEstimation() {
    estimations.add(estimation);
    dispatch("navigation:goto", { page: "menu" });
  }

  function gotoMenu() {
    dispatch("navigation:goto", { page: "menu" });
  }
</script>

<h1>Schätzung erstellen</h1>
<form on:submit|preventDefault={submitEstimation}>
  <label for="title">Titel</label>
  <input type="text" id="title" bind:value={estimation.title} required />

  <br />

  <label for="description">Beschreibung</label>
  <textarea id="description" bind:value={estimation.description} required />

  <br />

  <button type="button" on:click={gotoMenu}>Zurück</button>
  <button type="submit">Speichern</button>
</form>

<style>
  h1 {
    margin: 2rem 0;
    text-align: center;
  }

  form {
    max-width: 640px;
    margin: 0 auto;
  }
</style>
