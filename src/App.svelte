<script>
  import TopBar from "./components/TopBar.svelte";
  import BottomNavigationBar from "./components/BottomNavigationBar.svelte";
  import Wardrobe from "./views/Wardrobe.svelte";
  import Styles from "./views/Styles.svelte";
  import Services from "./views/Services.svelte";
  import Trends from "./views/Trends.svelte";

  const views = {
    wardrobe: {
      title: "Wardrobe",
      topBarTitle: "Your wardrobe",
      icon: "checkroom",
    },
    styles: { title: "Styles", topBarTitle: "Your styles", icon: "star" },
    services: {
      title: "Services",
      topBarTitle: "Services",
      icon: "shopping_cart",
    },
    trends: { title: "Trends", topBarTitle: "Trends", icon: "show_chart" },
  };

  const navigationTabs = [
    {
      title: views.wardrobe.title,
      icon: views.wardrobe.icon,
      topBarTitle: views.wardrobe.topBarTitle,
    },
    {
      title: views.styles.title,
      icon: views.styles.icon,
      topBarTitle: views.styles.topBarTitle,
    },
    {
      title: views.services.title,
      icon: views.services.icon,
      topBarTitle: views.services.topBarTitle,
    },
    {
      title: views.trends.title,
      icon: views.trends.icon,
      topBarTitle: views.trends.topBarTitle,
    },
  ];

  let currentView = navigationTabs[0];
  let topBarTitle = views.wardrobe.topBarTitle;

  function changeView(view) {
    topBarTitle = view.topBarTitle;
    currentView = view;
  }
</script>

<div class="main">
  <TopBar title={topBarTitle} />

  <div class="view">
    {#if currentView.title === views.wardrobe.title}
      <Wardrobe />
    {:else if currentView.title === views.styles.title}
      <Styles />
    {:else if currentView.title === views.services.title}
      <Services />
    {:else if currentView.title === views.trends.title}
      <Trends />
    {/if}
  </div>

  <BottomNavigationBar
    tabs={navigationTabs}
    bind:active={currentView}
    on:click={() => changeView(currentView)}
  />
</div>

<style>
  .main {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .view {
    flex: 1;
    overflow-y: scroll;
  }
</style>
