<script>
  import EstimationCreation from "./lib/pages/EstimationCreation.svelte";
  import EstimationList from "./lib/pages/EstimationList.svelte";
  import Menu from "./lib/pages/Menu.svelte";

  let currentView = "menu";

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
</script>

<main>
  {#if currentView === "create_estimation"}
    <EstimationCreation on:navigation:goto={setPage} />
  {:else if currentView === "show_estimations"}
    <EstimationList on:navigation:goto={setPage} />
  {:else}
    <Menu on:navigation:goto={setPage} />
  {/if}
</main>
