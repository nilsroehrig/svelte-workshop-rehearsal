<script>
  import EstimationCreation from "./lib/pages/EstimationCreation.svelte";
  import EstimationList from "./lib/pages/EstimationList.svelte";
  import Menu from "./lib/pages/Menu.svelte";

  let currentView = "menu";
  let estimations = [];

  function setPage({ detail }) {
    switch (detail.page) {
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

  function addEstimation({ detail }) {
    estimations = [...estimations, detail.estimation];
    setPage({ detail: { page: "menu" } });
  }
</script>

<main>
  {#if currentView === "create_estimation"}
    <EstimationCreation
      on:navigation:goto={setPage}
      on:estimation:create={addEstimation}
    />
  {:else if currentView === "show_estimations"}
    <EstimationList {estimations} on:navigation:goto={setPage} />
  {:else}
    <Menu on:navigation:goto={setPage} />
  {/if}
</main>
