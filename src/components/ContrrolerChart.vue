<template>
  <div class="container-chart">
    <chart v-if="loaded" :chartData="chartdata" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//import { fakeData } from "../moke/fakeData";
import { GitHubTopLanguages } from "../repository/github_search";
import Chart from "./LineChart.vue";

@Component({
  components: {
    Chart,
  },
})
export default class Char extends Vue {
  private gitHubTopLanguages = new GitHubTopLanguages();
  private chartdata = {};
  private loaded = false;
  async getChartData() {
    this.loaded = false;
    try {
      const res = await this.gitHubTopLanguages.getRepositories();
      this.chartdata = res;
      this.loaded = true;
      console.log(this.chartdata);
    } catch (e) {
      console.error(e);
    }
  }
  mounted() {
    this.getChartData();
  }
}
</script>
