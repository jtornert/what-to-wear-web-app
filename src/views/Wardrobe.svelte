<script>
  import Fab, { Icon } from "@smui/fab";
  import Dialog from "@smui/dialog";
  import Button, { Label } from "@smui/button";

  const images = [
    "./img/bottom-1.png",
    "./img/bottom-2.png",
    "./img/bottom-3.png",
    "./img/shoes-1.png",
    "./img/top-1.png",
    "./img/top-2.png",
    "./img/top-3.png",
    "./img/top-4.png",
    "./img/top-5.png",
    "./img/top-6.png",
    "./img/top-7.png",
    "./img/top-8.png",
    "./img/top-9.png",
    "./img/bottom-1.png",
    "./img/bottom-2.png",
    "./img/bottom-3.png",
    "./img/shoes-1.png",
    "./img/top-1.png",
    "./img/top-2.png",
    "./img/top-3.png",
    "./img/top-4.png",
    "./img/top-5.png",
    "./img/top-6.png",
    "./img/top-7.png",
    "./img/top-8.png",
    "./img/top-9.png",
    "./img/bottom-1.png",
    "./img/bottom-2.png",
    "./img/bottom-3.png",
    "./img/shoes-1.png",
    "./img/top-1.png",
    "./img/top-2.png",
    "./img/top-3.png",
    "./img/top-4.png",
    "./img/top-5.png",
    "./img/top-6.png",
    "./img/top-7.png",
    "./img/top-8.png",
    "./img/top-9.png",
    "./img/bottom-1.png",
    "./img/bottom-2.png",
    "./img/bottom-3.png",
    "./img/shoes-1.png",
    "./img/top-1.png",
    "./img/top-2.png",
    "./img/top-3.png",
    "./img/top-4.png",
    "./img/top-5.png",
    "./img/top-6.png",
    "./img/top-7.png",
    "./img/top-8.png",
    "./img/top-9.png",
  ];

  let open = false;
</script>

<main>
  <Dialog bind:open>
    <Button on:click={() => (open = false)}>
      <Icon class="material-icons">add_a_photo</Icon>
      <Label>Take a photo</Label>
    </Button>
    <Button on:click={() => (open = false)}>
      <Icon class="material-icons">collections</Icon>
      <Label>From gallery</Label>
    </Button>
  </Dialog>
  <span on:click={() => (open = true)}>
    <Fab>
      <Icon class="material-icons">add</Icon>
    </Fab>
  </span>

  <ul class="image-list">
    {#each images as image}
      <img src={image} alt="clothes" />
    {/each}
  </ul>
</main>

<style>
  main {
    padding: 1em;
    position: relative;
    height: auto;
  }

  span {
    position: fixed;
    bottom: 5em;
    right: 1em;
  }

  .image-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  img {
    width: 4em;
    height: min-content;
  }
</style>
