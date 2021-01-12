<template>
  <div id="app">
   <chart></chart>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
import Chart from "./components/LineChart.vue"
import { GitHubTopLanguages } from "./repository/github_search";

@Component({
  components: {
    Chart
  }
})
export default class App extends Vue {
  private gitHubTopLanguages = new GitHubTopLanguages();

  mounted() {
    this.gitHubTopLanguages.getRepositories(); 
  }

}
</script>

<style>

</style>
