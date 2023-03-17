<script>
  import { createEventDispatcher, getContext } from "svelte";

  const dispatch = createEventDispatcher();
  const sizes = [1, 2, 3, 5, 8, 13].reverse();

  export let estimations = getContext("estimations");
  export let id;

  $: estimation = $estimations.find(({ id: eid }) => eid === id);
  $: stories = estimation.stories;
</script>

<h1>Schätzung Durchführen</h1>

<div class="estimate">
  <div class="stories">
    {#each stories as story (story.id)}
      <div class="story">{story.text}</div>
    {/each}
  </div>
  <div class="sizes">
    {#each sizes as size}
      <div class="size">
        <strong>{size}</strong>
      </div>
    {/each}
  </div>
</div>

<style>
  .estimate {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 1rem;
  }

  .stories {
    display: grid;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius, .25rem);
    align-items: center;
    justify-content: center;
    grid-template-areas: "x";
  }

  .story {
    padding: 1rem;
    background-color: #0e1419;
    border-radius: var(--border-radius, 0.25);
    overflow: hidden;
    box-shadow: 0 0 5px 0 black;
    max-width: calc(200px - 2rem);
    top: 1rem;
    left: 1rem;
    grid-area: x;
  }

  .sizes {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
  }

  .size {
    min-height: 200px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius, .25rem);
    padding: .5rem;
  }
</style>
