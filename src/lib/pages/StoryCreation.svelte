<script>
  import { createEventDispatcher, getContext } from "svelte";
  import Button from "../components/Button.svelte";
  import Plus from "../components/icons/Plus.svelte";
  import XMark from "../components/icons/XMark.svelte";

  const dispatch = createEventDispatcher();

  export let estimations = getContext("estimations");
  export let id;

  let story = {
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
        text: story.text,
      },
    ];

    estimations.update(estimation);
  }
</script>

<h1>Stories Erstellen</h1>

<article>
  <header>
    <strong>{estimation.title}</strong>
    <Button variant="unstyled" on:click={() => (story.open = !story.open)}>
      {#if story.open}
        <XMark />
      {:else}
        <Plus />
      {/if}
    </Button>
  </header>

  {#if story.open}
    <form on:submit|preventDefault={addStory}>
      <input
        type="text"
        maxlength="60"
        required
        placeholder="Storytext..."
        use:focusAction
        bind:value={story.text}
        bind:this={story.inputRef}
      />
      <button type="submit">Erstellen</button>
    </form>
  {/if}

  <p>Bislang hat diese Schätzung noch keine Stories.</p>
</article>

<details>
  <summary>Beschreibung</summary>
  <p>{estimation.description}</p>
</details>

<button on:click={gotoMenu}>Zurück</button>

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

  article > p {
    margin: 0;
  }

  form {
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 0.5rem;
  }
</style>
