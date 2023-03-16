<script>
  export let variant = "default";

  $: unstyled = variant === "unstyled";
</script>

<button on:click class:unstyled {...$$restProps}>
  <slot />
</button>

<style>
  .unstyled {
    border: none;
    background: transparent;
    width: auto;
    padding: 0;
    margin: 0;
  }
</style>
