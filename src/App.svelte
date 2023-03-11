<script>
  let currentView = "menu";
  let estimations = [];

  $: newEstimation =
    currentView === "create_estimation"
      ? newEstimation
      : { title: "", description: "" };

  function gotoEstimationCreation() {
    currentView = "create_estimation";
  }

  function gotoMenu() {
    currentView = "menu";
  }

  function gotoEstimationList() {
    currentView = "show_estimations";
  }

  function submitEstimation() {
    estimations = [...estimations, { ...newEstimation }];
    gotoMenu();
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
  {:else}
    <h1>Svestimator</h1>
    <ul>
      <li>
        <button on:click={gotoEstimationCreation}
          >Neue Schätzung erstellen</button
        >
      </li>
      <li>
        <button on:click={gotoEstimationList}
          >Vorherige Schätzungen betrachten</button
        >
      </li>
    </ul>
  {/if}
</main>
