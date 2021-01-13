<template>
  <div id="app">
    <ContrrolerChart />
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
</style>
