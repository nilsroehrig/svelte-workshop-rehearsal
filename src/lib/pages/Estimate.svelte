<script>
  import { createEventDispatcher, getContext } from "svelte";

  const dispatch = createEventDispatcher();
  const sizes = [3, 5, 8, 13, 21].reverse();

  export let estimations = getContext("estimations");
  export let id;

  $: estimation = $estimations.find(({ id: eid }) => eid === id);
  $: unestimatedStories = estimation.stories.filter(
    (story) => story.size === undefined
  );

  function doDrop(size, dataTransfer) {
    const id = dataTransfer.getData("text/plain");
    estimation.stories = estimation.stories.map(story => {
      if (story.id === id) {
        console.log("happened")
        story.size = size
      }

      return story;
    })
  }
</script>

<h1>Schätzung Durchführen</h1>

<div class="estimate">
  <div class="stories">
    {#each unestimatedStories as story (story.id)}
      <div
        class="story"
        draggable="true"
        on:dragstart={(event) =>
          event.dataTransfer.setData("text/plain", story.id)}
      >
        {story.text}
      </div>
    {/each}
  </div>
  <div class="sizes">
    {#each sizes as size}
      {@const estimatedStories = estimation.stories.filter(
        (story) => story.size === size
      )}
      <div
        class="size"
        on:dragenter|preventDefault
        on:dragover|preventDefault
        on:drop={({ dataTransfer }) => doDrop(size, dataTransfer)}
      >
        <strong>{size}</strong>
        {#each estimatedStories as story (story.id)}
          <div
            class="story"
            draggable="true"
            on:dragstart={(event) =>
              event.dataTransfer.setData("text/plain", story.id)}
          >
            {story.text}
          </div>
        {/each}
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
    border-radius: var(--border-radius, 0.25rem);
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
    border-radius: var(--border-radius, 0.25rem);
    padding: 0.5rem;
  }
</style>
