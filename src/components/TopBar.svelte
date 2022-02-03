<script>
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  export let title = "What-to-wear";
</script>

<header>
  <TopAppBar variant="fixed">
    <Row>
      <Section>
        <Title>{title}</Title>
      </Section>
    </Row>
  </TopAppBar>
</header>

<style>
  header {
    padding-bottom: 56px;
  }
</style>
