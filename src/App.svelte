<script>
  import EstimationList from "./lib/pages/EstimationList.svelte";
  import Menu from "./lib/pages/Menu.svelte";

  let currentView = "menu";
  let estimations = [];

  $: newEstimation =
    currentView === "create_estimation"
      ? newEstimation
      : { title: "", description: "" };

  function gotoMenu() {
    currentView = "menu";
  }

  function submitEstimation() {
    estimations = [...estimations, { ...newEstimation }];
    gotoMenu();
  }

  function setPage({ detail }) {
    switch (detail?.page) {
      case "create_estimation":
        currentView = "create_estimation";
        break;
      case "show_estimations":
        currentView = "show_estimations";
        break;
      case "menu":
      default:
        currentView = "menu";
    }
  }
</script>

<main>
  {#if currentView === "create_estimation"}
    <h1>Schätzung erstellen</h1>
    <form on:submit|preventDefault={submitEstimation}>
      <label for="title">Titel</label>
      <input type="text" id="title" bind:value={newEstimation.title} />

      <br />

      <label for="description">Beschreibung</label>
      <textarea id="description" bind:value={newEstimation.description} />

      <br />

      <button type="button" on:click={gotoMenu}>Zurück</button>
      <button type="submit">Speichern</button>
    </form>
  {:else if currentView === "show_estimations"}
    <EstimationList {estimations} on:navigation:goto={setPage} />
  {:else}
    <Menu on:navigation:goto={setPage} />
  {/if}
</main>
