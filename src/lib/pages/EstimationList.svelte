<script>
  import { createEventDispatcher, getContext } from "svelte";
  import Button from "../components/Button.svelte";
  import Trash from "../components/icons/Trash.svelte";

  const dispatch = createEventDispatcher();

  export let estimations = getContext("estimations");

  function gotoMenu() {
    dispatch("navigation:goto", { page: "menu" });
  }
</script>

<h1>Vorherige Schätzungen</h1>

{#each $estimations as estimation (estimation.id)}
  {@const dateAsString = estimation.created
    ? estimation.created.toLocaleDateString()
    : "unbekannt"}
  <article>
    <header>
      <h2>{estimation.title}</h2>
      <Button
        variant="unstyled"
        on:click={() => estimations.remove(estimation.id)}
      >
        <Trash />
      </Button>
    </header>
    <p>Erstellt: {dateAsString} | Status: {estimation.status}</p>
    <p>{estimation.description}</p>

    {#if estimation.stories && estimation.stories.length > 0}
      <div class="stories">
        {#each estimation.stories as story}
          <div class="story">
            <p>{story.text}</p>
            <strong>{story.size}</strong>
          </div>
        {/each}
      </div>
    {/if}
  </article>
{:else}
  <p>Bislang wurde noch nichts geschätzt.</p>
{/each}

<button type="button" on:click={gotoMenu}>Zurück</button>

<style>
  h1 {
    margin: 2rem 0;
    text-align: center;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    margin: 0;
    font-size: 1rem;
  }

  .stories {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }

  .story {
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: var(--border-radius, 0.25);
    overflow: hidden;
  }
</style>
