<template>
  <v-container fluid>
    <line-chart :chart-data="chartData" :options="chartOptions" />
  </v-container>
</template>

<script>
import colors from 'vuetify/es5/util/colors'
import prefs from '@/data/prefs.json'

export default {
  data () {
    return {
      chartDataValues: [],
      chartColors: [
        colors.red.lighten1,
        colors.blue.lighten1,
        colors.yellow.lighten1,
        colors.green.lighten1
      ],
      chartLabels: ['red', 'blue', 'yellow', 'green'],
      chartOptions: {
        maintainAspectRatio: false,
        animation: {
          duration: 1500,
          easing: 'easeInOutCubic'
        }
      },
      prefs
    }
  },
  computed: {
    chartData () {
      return {
        datasets: [
          {
            data: this.chartDataValues,
            backgroundColor: this.chartColors
          }
        ],
        labels: this.chartLabels
      }
    }
  },
  methods: {
    randomizeData () {
      const data = []
      for (let i = 0; i < this.chartLabels.length; i++) {
        data.push(Math.floor(Math.random() * 100))
      }
      this.chartDataValues = data
    }
  }
}
</script>
