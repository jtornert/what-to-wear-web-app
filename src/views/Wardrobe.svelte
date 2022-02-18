<script>
  import { onMount } from "svelte";
  import { fly, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";

  import Dialog from "@smui/dialog";
  import Button, { Icon, Label } from "@smui/button";
  import Snackbar from "@smui/snackbar";
  import IconButton from "@smui/icon-button";

  import Tag from "../components/Tag.svelte";

  let images = [];
  let form = null;
  let preview = null;
  let snackbar = null;

  let open = false;
  let view = "wardrobe";
  let file;
  let filters = [];
  $: tags = JSON.stringify(filters);
  let displayedClothes = [];
  let action = "add";

  onMount(async () => {
    const res = await fetch("http://localhost:8081/images");
    images = await res.json();
    displayedClothes = [...images];
  });

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
    filters = filters;
    renderList();
  }

  function removeFilter(tag) {
    filters = filters.filter((value) => value !== tag);
    renderList();
  }

  function previewImg() {
    const files = file[0];

    if (files) {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", function () {
        preview = this.result;
      });
      fileReader.readAsDataURL(files);
    }
  }

  async function upload() {
    const data = new FormData(form);

    const json = await fetch("http://localhost:8081/images", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.log(err));

    if (json.success) {
      const res = await fetch("http://localhost:8081/images");
      images = await res.json();
      displayedClothes = [...images];
      filters = [];
      renderList();
      view = "wardrobe";
      snackbar.open();
    }
  }

  function addPhoto() {
    action = "add";
    open = true;
  }

  function selectFilters() {
    action = "filters";
    open = true;
  }
</script>

<main>
  <Snackbar bind:this={snackbar}>
    <Label>Item added to wardrobe!</Label>
  </Snackbar>

  <Dialog bind:open>
    {#if action === "add"}
      <Button on:click={() => (open = false)}>
        <Icon class="material-icons">add_a_photo</Icon>
        <Label>Take a photo</Label>
      </Button>
      <Button
        on:click={() => {
          open = false;
          view = "gallery";
        }}
      >
        <Icon class="material-icons">collections</Icon>
        <Label>From gallery</Label>
      </Button>
    {:else if action === "filters"}
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
    {/if}
  </Dialog>

  {#if view === "wardrobe"}
    <ul class="image-list">
      {#each displayedClothes as image, i (image.image)}
        <img
          src={image.image}
          alt="clothes"
          in:fly={{ x: -100, duration: 300 }}
          out:scale={{ duration: 200 }}
          animate:flip={{ easing: quintOut, duration: 350 }}
        />
      {/each}
    </ul>

    <div class="actions">
      <Button variant="unelevated" on:click={selectFilters}>
        <Label>Filter by tags</Label>
      </Button>
      <div class="flex-row">
        <IconButton class="material-icons" disabled>star</IconButton>
        <IconButton class="material-icons" disabled>delete</IconButton>
        <IconButton class="material-icons" disabled>edit</IconButton>
        <IconButton class="material-icons" on:click={addPhoto}>add</IconButton>
      </div>
    </div>
  {:else if view === "gallery"}
    <form
      bind:this={form}
      on:submit|preventDefault={upload}
      in:fly={{ y: 1000, duration: 1000 }}
    >
      <input type="text" name="tags" bind:value={tags} hidden />
      <label for="photo" class="file-selector">
        <div class="preview">
          {#if preview}
            <img src={preview} alt="" class="img" />
            <span class="icon"
              ><Icon class="material-icons icon">collections</Icon></span
            >
          {:else}
            Select a photo
          {/if}
        </div>
      </label>
      <input
        type="file"
        name="photo"
        accept="image/*"
        id="photo"
        bind:files={file}
        on:change={previewImg}
      />
      <div class="tag-list-add">
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
        <span
          style="font-family: 'Roboto';display: inline-flex;align-items: center;cursor: pointer;color: rgb(98, 0, 238);position: inherit;"
        >
          <Icon class="material-icons">add</Icon>
          <Label>Add tag</Label>
        </span>
      </div>
      <Button type="submit" variant="unelevated" style="margin-bottom: 1em;"
        >Add to wardrobe</Button
      >
    </form>
  {/if}
</main>

<style>
  main {
    padding: 0 1em;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    isolation: isolate;
  }

  span {
    position: fixed;
    bottom: 5em;
    right: 1em;
  }

  .tag-list {
    position: sticky;
    top: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.2em;
    padding: 1em 0;
    background-color: white;
  }

  .tag-list-add {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.2em;
    padding: 1em 0;
    background-color: white;
  }

  .image-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(5em, 1fr));
    grid-template-rows: repeat(auto-fill, 7em);
    place-items: center;
    margin: 0;
    padding: 0;
    width: 100%;
    flex: 1;
    z-index: -1;
  }

  img {
    width: 4em;
    height: min-content;
  }

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    row-gap: 2em;
  }

  input[type="file"] {
    display: none;
  }

  .file-selector {
    margin-top: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    position: relative;
    cursor: pointer;
    background-color: gainsboro;
    border-radius: 0.25em;
  }

  .preview {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    place-items: center;
  }

  .preview img {
    max-width: 90%;
    max-height: 90%;
    width: auto;
    height: min-content;
    border-radius: 0.25em;
  }

  .icon {
    position: absolute;
    display: grid;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    place-items: center;
    opacity: 0.5;
    color: white;
  }

  .actions {
    display: flex;
    flex-direction: column;
  }

  .flex-row {
    display: flex;
    justify-content: space-between;
  }
</style>
