<template>
  <div id="app">
    <div class="container-chart">
      <chart></chart>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Chart from "./components/LineChart.vue";

@Component({
  components: {
    Chart,
  },
})
export default class App extends Vue {}
</script>

<style>
#app,
body,
html {
  height: 100%;
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.container-chart {
  width: 100%;
}
</style>
