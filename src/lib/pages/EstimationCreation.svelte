<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let estimation = { title: "", description: "" };

  function submitEstimation() {
    dispatch("estimation:create", { estimation });
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
