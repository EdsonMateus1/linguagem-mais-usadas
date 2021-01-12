<script lang="ts">
import { HorizontalBar } from "vue-chartjs";
import { Component, Vue } from "vue-property-decorator";
import { fakeData } from "../moke/fakeData";
import { GitHubTopLanguages } from "../repository/github_search";

@Component({
  extends: HorizontalBar,
})
export default class Char extends Vue {
  private gitHubTopLanguages = new GitHubTopLanguages();
  renderChart: any;
  // private dataChart = {
  //   labels: [""],
  //   datasets: [],
  // };
  // async createChart() {
  //   this.dataChart.datasets = await this.gitHubTopLanguages.getRepositories();
  //   this.renderChart(this.dataChart);
  // }

  async mounted() {
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true,
      },
    };

    // this.createChart();
    this.renderChart(fakeData, options);
  }
}
</script>

<style></style>
