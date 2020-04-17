<script>
import { HorizontalBar } from 'vue-chartjs'
import prefs from '@/data/prefs.json'

export default {
  extends: HorizontalBar,
  data () {
    return {
      prefs
    }
  },
  computed: {
    sortedPref () {
      return prefs.slice().sort((a, b) => {
        if (a.count > b.count) {
          return -1
        }
        if (a.count < b.count) {
          return 1
        }
        return 0
      })
    },
    prefsName () {
      return this.sortedPref.map(pref => pref.name)
    },
    prefsCount () {
      return this.sortedPref.map(pref => pref.count)
    }
  },
  mounted () {
    this.renderChart(
      {
        labels: this.prefsName,
        datasets: [
          {
            label: 'オンライン診療対応医療機関',
            backgroundColor: 'green',
            data: this.prefsCount
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false
      }
    )
  }
}
</script>
