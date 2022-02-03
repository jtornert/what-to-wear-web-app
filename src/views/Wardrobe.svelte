<script>
  import Fab, { Icon } from "@smui/fab";
  import Dialog from "@smui/dialog";
  import Button, { Label } from "@smui/button";
  import Tag from "../components/Tag.svelte";

  const images = [
    { image: "./img/bottom-1.png", tags: ["chill", "casual"] },
    { image: "./img/bottom-2.png", tags: ["professional", "party"] },
    { image: "./img/bottom-3.png", tags: ["casual", "trendy"] },
    { image: "./img/shoes-1.png", tags: ["trendy", "party"] },
    { image: "./img/top-1.png", tags: ["casual"] },
    { image: "./img/top-2.png", tags: ["professional", "trendy"] },
    { image: "./img/top-3.png", tags: ["casual", "professional"] },
    { image: "./img/top-4.png", tags: ["professional"] },
    { image: "./img/top-5.png", tags: ["chill", "trendy"] },
    { image: "./img/top-6.png", tags: ["chill"] },
    { image: "./img/top-7.png", tags: ["casual", "professional", "party"] },
    { image: "./img/top-8.png", tags: ["casual", "party"] },
    { image: "./img/top-9.png", tags: ["chill", "casual", "sporty"] },
  ];

  let open = false;
  let filters = [];
  let displayedClothes = [...images];

  function renderList() {
    if (filters.length === 0) {
      displayedClothes = images;
      return;
    }

    displayedClothes = [];
    for (const filter of filters) {
      for (const image of images) {
        if (image.tags.includes(filter) && !displayedClothes.includes(image)) {
          displayedClothes.push(image);
        }
      }
    }
  }

  function addFilter(tag) {
    filters.push(tag);
    renderList();
  }

  function removeFilter(tag) {
    filters = filters.filter((value) => value !== tag);
    renderList();
  }
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
    <Fab color="primary">
      <Icon class="material-icons">add</Icon>
    </Fab>
  </span>

  <div class="tag-list">
    <Tag
      on:enable={() => addFilter("casual")}
      on:disable={() => removeFilter("casual")}>Casual</Tag
    >
    <Tag
      on:enable={() => addFilter("chill")}
      on:disable={() => removeFilter("chill")}>Chill</Tag
    >
    <Tag
      on:enable={() => addFilter("sporty")}
      on:disable={() => removeFilter("sporty")}>Sporty</Tag
    >
    <Tag
      on:enable={() => addFilter("trendy")}
      on:disable={() => removeFilter("trendy")}>Trendy</Tag
    >
    <Tag
      on:enable={() => addFilter("party")}
      on:disable={() => removeFilter("party")}>Party</Tag
    >
    <Tag
      on:enable={() => addFilter("professional")}
      on:disable={() => removeFilter("professional")}>Professional</Tag
    >
  </div>
  <ul class="image-list">
    {#each displayedClothes as image}
      <img src={image.image} alt="clothes" />
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

  .tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.2em;
    padding-bottom: 1em;
    margin-bottom: 1em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .image-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(4em, 1fr));
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
