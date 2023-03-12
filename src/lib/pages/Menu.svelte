<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function gotoEstimationCreation() {
    dispatch("navigation:goto", { page: "create_estimation" });
  }

  function gotoEstimationList() {
    dispatch("navigation:goto", { page: "show_estimations" });
  }
</script>

<h1>Svestimator</h1>
<ul>
  <li>
    <button on:click={gotoEstimationCreation}>Neue Schätzung erstellen</button>
  </li>
  <li>
    <button on:click={gotoEstimationList}
      >Vorherige Schätzungen betrachten</button
    >
  </li>
</ul>
