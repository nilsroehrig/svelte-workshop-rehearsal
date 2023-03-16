<script>
  import EstimationCreation from "./lib/pages/EstimationCreation.svelte";
  import EstimationList from "./lib/pages/EstimationList.svelte";
  import Menu from "./lib/pages/Menu.svelte";
  import StoryCreation from "./lib/pages/StoryCreation.svelte";

  let currentView = "menu";
  let viewArgs = {};

  function setPage({ detail }) {
    currentView = detail?.page;
    viewArgs = detail?.params;
  }
</script>

<main class="container">
  {#if currentView === "create_estimation"}
    <EstimationCreation on:navigation:goto={setPage} />
  {:else if currentView === "show_estimations"}
    <EstimationList on:navigation:goto={setPage} />
  {:else if currentView === "create_stories"}
    <StoryCreation on:navigation:goto={setPage} id={viewArgs?.id} />
  {:else}
    <Menu on:navigation:goto={setPage} />
  {/if}
</main>
