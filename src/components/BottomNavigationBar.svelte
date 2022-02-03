<script>
  import TabBar from "@smui/tab-bar";
  import Tab, { Icon } from "@smui/tab";
  export let tabs = [];
  export let active = tabs[0];
</script>

<footer on:click>
  <TabBar {tabs} let:tab key={(tab) => (tab = tab.title)} bind:active>
    <Tab {tab} indicatorSpanOnlyContent={true}>
      <Icon class="material-icons">{tab.icon}</Icon>
    </Tab>
  </TabBar>
</footer>

<style>
  footer {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>
