<script>
  import TopBar from "./components/TopBar.svelte";
  import BottomNavigationBar from "./components/BottomNavigationBar.svelte";
  import Wardrobe from "./views/Wardrobe.svelte";
  import Styles from "./views/Styles.svelte";
  import Services from "./views/Services.svelte";
  import Trends from "./views/Trends.svelte";

  const navigationTabs = [
    { title: "Wardrobe", action: () => (currentView = "wardrobe") },
    { title: "Styles", action: () => (currentView = "styles") },
    { title: "Services", action: () => (currentView = "services") },
    { title: "Trends", action: () => (currentView = "trends") },
  ];

  let currentView = "wardrobe";
</script>

<div class="main">
  <TopBar />

  <div class="view">
    {#if currentView === "wardrobe"}
      <Wardrobe />
    {:else if currentView === "styles"}
      <Styles />
    {:else if currentView === "services"}
      <Services />
    {:else if currentView === "trends"}
      <Trends />
    {/if}
  </div>

  <BottomNavigationBar tabs={navigationTabs} />
</div>

<style>
  .main {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .view {
    flex: 1;
  }
</style>
