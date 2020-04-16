import Vue from 'vue'
import { HorizontalBar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

Vue.component('horizontal-bar', {
  extends: HorizontalBar,
  mixins: [reactiveProp],
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
})
