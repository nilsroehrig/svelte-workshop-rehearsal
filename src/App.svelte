<script>
  let currentView = "menu";

  function gotoEstimationCreation() {
    currentView = "create_estimation";
  }

  function gotoMenu() {
    currentView = "menu"
  }
</script>

<main>
  {#if currentView === "create_estimation"}
    <h1>Schätzung erstellen</h1>
    <button on:click={gotoMenu}>Zurück</button>
  {:else}
    <h1>Svestimator</h1>
    <ul>
      <li><button on:click={gotoEstimationCreation}>Neue Schätzung erstellen</button></li>
      <li><button>Vorherige Schätzungen betrachten</button></li>
    </ul>
  {/if}
</main>
