<script>
  import { createEventDispatcher, getContext } from "svelte";
  import Button from "../components/Button.svelte";
  import Plus from "../components/icons/Plus.svelte";
  import XMark from "../components/icons/XMark.svelte";

  const dispatch = createEventDispatcher();

  export let estimations = getContext("estimations");
  export let id;

  let storyForm = {
    open: false,
    text: "",
    inputRef: null,
  };

  $: estimation = $estimations.find(({ id: eid }) => eid === id);

  $: if (estimation) {
    estimation.stories = estimation?.stories ?? [];
  }

  function gotoMenu() {
    dispatch("navigation:goto", { page: "menu" });
  }

  function focusAction(node) {
    node.focus();
  }

  function addStory() {
    estimation.stories = [
      ...estimation.stories,
      {
        id: crypto.randomUUID(),
        text: storyForm.text,
      },
    ];

    estimations.update(estimation);
  }

  function finishEstimationPreparation() {
    estimations.update({ ...estimation, status: "prepared" });
    dispatch("navigation:goto", {
      page: "estimate",
      params: { id: estimation.id },
    });
  }
</script>

<h1>Stories Erstellen</h1>

<article>
  <header>
    <strong>{estimation.title}</strong>
    <Button
      variant="unstyled"
      on:click={() => (storyForm.open = !storyForm.open)}
    >
      {#if storyForm.open}
        <XMark />
      {:else}
        <Plus />
      {/if}
    </Button>
  </header>

  {#if storyForm.open}
    <form on:submit|preventDefault={addStory}>
      <input
        type="text"
        maxlength="60"
        required
        placeholder="Storytext..."
        use:focusAction
        bind:value={storyForm.text}
        bind:this={storyForm.inputRef}
      />
      <button type="submit">Erstellen</button>
    </form>
  {/if}

  <div class="stories">
    {#each estimation.stories as story (story.id)}
      <div class="story">{story.text}</div>
    {:else}
      <p class="fallback-text">
        Bislang hat diese Schätzung noch keine Stories.
      </p>
    {/each}
  </div>
</article>

<details>
  <summary>Beschreibung</summary>
  <p>{estimation.description}</p>
</details>

<button on:click={gotoMenu}>Zurück</button>
<button on:click={finishEstimationPreparation}>Weiter</button>

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

  form {
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 0.5rem;
  }

  .stories {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
  }

  .story {
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: var(--border-radius, 0.25);
    overflow: hidden;
  }

  .fallback-text {
    margin: 0;
    grid-column: 1 / -1;
    text-align: center;
  }
</style>
