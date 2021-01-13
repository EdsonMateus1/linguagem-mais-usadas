<script>
import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: ["chartData"],
  async mounted() {
    this.renderChart(this.chartData, {
      responsive: true,
      maintainAspectRatio: false,
    });
  },
};
</script>
