<script>
  import { createEventDispatcher } from "svelte";
  export let selected = false;
  let dispatch = createEventDispatcher();

  function clickHandler() {
    selected = !selected;
    selected ? dispatch("enable") : dispatch("disable");
  }
</script>

<span class:selected on:click={clickHandler}><slot /></span>

<style>
  span {
    font-family: sans-serif;
    padding: 0.2em 0.75em;
    border-radius: 9999px;
    letter-spacing: 0.05em;
    color: rgb(98, 0, 238);
    outline: 2px solid rgb(98, 0, 238);
    outline-offset: -2px;
    cursor: pointer;
    user-select: none;
  }

  .selected {
    background-color: rgb(98, 0, 238);
    color: whitesmoke;
  }
</style>
