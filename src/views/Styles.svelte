<script>
  import Button, { Icon, Label } from "@smui/button";
  import Tag from "../components/Tag.svelte";
  import StyleSelector from "../components/StyleSelector.svelte";

  let tags = [];
  let view = "categories";

  function addTag(tag) {
    tags.push(tag);
  }

  function removeTag(tag) {
    tags = tags.filter((value) => value !== tag);
  }
</script>

<main>
  {#if view === "categories"}
    <div class="categories" on:click={() => (view = "styles")}>
      <Button variant="outlined"><Label>Casual</Label></Button>
      <Button variant="outlined"><Label>Chill</Label></Button>
      <Button variant="outlined"><Label>Sporty</Label></Button>
      <Button variant="outlined"><Label>Trendy</Label></Button>
      <Button variant="outlined"><Label>Party</Label></Button>
      <Button variant="outlined"><Label>Professional</Label></Button>
      <Button variant="unelevated">
        <Icon class="material-icons">star</Icon>
        <Label>Favourites</Label>
      </Button>
    </div>
  {:else if view === "styles"}
    <div class="style">
      <StyleSelector name="Top" />
      <StyleSelector name="Bottom" />
      <StyleSelector name="Shoes" />
      <div class="tag-list">
        <Tag
          on:enable={() => addTag("casual")}
          on:disable={() => removeTag("casual")}>Casual</Tag
        >
        <Tag
          on:enable={() => addTag("chill")}
          on:disable={() => removeTag("chill")}>Chill</Tag
        >
        <Tag
          on:enable={() => addTag("sporty")}
          on:disable={() => removeTag("sporty")}>Sporty</Tag
        >
        <Tag
          on:enable={() => addTag("trendy")}
          on:disable={() => removeTag("trendy")}>Trendy</Tag
        >
        <Tag
          on:enable={() => addTag("party")}
          on:disable={() => removeTag("party")}>Party</Tag
        >
        <Tag
          on:enable={() => addTag("professional")}
          on:disable={() => removeTag("professional")}>Professional</Tag
        >
      </div>
      <div class="buttons">
        <Button>
          <Icon class="material-icons">casino</Icon>
          <Label>All</Label>
        </Button>
        <Button variant="unelevated">
          <Icon class="material-icons">star</Icon>
          <Label>Add to favourites</Label>
        </Button>
      </div>
    </div>
  {:else}
    <p>
      Error: <span style="font-family: monospace;">view</span> has unsupported value!
    </p>
  {/if}
</main>

<style>
  main {
    height: 100%;
    padding: 0 1em;
  }

  .tag-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.2em;
    padding: 1em 0;
    background-color: white;
  }

  .categories {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .style {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
</style>
