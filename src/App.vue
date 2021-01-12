<template>
  <div id="app">
    <div class="container-chart">
      <ContrrolerChart/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContrrolerChart from "./components/ContrrolerChart.vue";

@Component({
  components: {
    ContrrolerChart,
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
