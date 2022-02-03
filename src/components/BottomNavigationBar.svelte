<script>
  export let tabs = [];
</script>

<footer>
  {#each tabs as tab}
    <button on:click={tab.action}>
      {tab.title}
    </button>
  {/each}
</footer>

<style>
  footer {
    display: flex;
    justify-content: space-between;
    padding: 0.5em 1em;
  }
</style>
