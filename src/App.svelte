<script>
  import TopBar from "./components/TopBar.svelte";
  import BottomNavigationBar from "./components/BottomNavigationBar.svelte";
  import Wardrobe from "./views/Wardrobe.svelte";
  import Styles from "./views/Styles.svelte";
  import Services from "./views/Services.svelte";
  import Trends from "./views/Trends.svelte";

  const navigationTabs = [
    { title: "Wardrobe", action: () => changeView(views.wardrobe) },
    { title: "Styles", action: () => changeView(views.styles) },
    { title: "Services", action: () => changeView(views.services) },
    { title: "Trends", action: () => changeView(views.trends) },
  ];

  const views = {
    wardrobe: { title: "Wardrobe", topBarTitle: "Your wardrobe" },
    styles: { title: "Styles", topBarTitle: "Your styles" },
    services: { title: "Services", topBarTitle: "Services" },
    trends: { title: "Trends", topBarTitle: "Trends" },
  };

  let currentView = views.wardrobe;
  let topBarTitle = views.wardrobe.topBarTitle;

  function changeView(view) {
    topBarTitle = view.topBarTitle;
    currentView = view;
  }
</script>

<div class="main">
  <TopBar title={topBarTitle} />

  <div class="view">
    {#if currentView === views.wardrobe}
      <Wardrobe />
    {:else if currentView === views.styles}
      <Styles />
    {:else if currentView === views.services}
      <Services />
    {:else if currentView === views.trends}
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
