<script>
  import IconButton from "@smui/icon-button";
  export let name = "";
</script>

<div>
  <div class="flex">
    <IconButton class="material-icons">chevron_left</IconButton>
    <span>{name}</span>
    <IconButton class="material-icons">chevron_right</IconButton>
  </div>
  <div>
    <IconButton class="material-icons">casino</IconButton>
  </div>
</div>

<style>
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
