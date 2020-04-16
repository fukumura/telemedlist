<script>
import { HorizontalBar } from 'vue-chartjs'
import prefs from '@/data/prefs.json'

export default {
  extends: HorizontalBar,
  data () {
    return {
      prefs,
      prefsName: [],
      prefsCount: []
    }
  },
  mounted () {
    this.setData()
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
  },
  methods: {
    setData () {
      const prefsName = []
      const prefsCount = []
      Object.keys(prefs).forEach(function (key) {
        prefsName.push(prefs[key].name)
        prefsCount.push(prefs[key].count)
      })
      this.prefsName = prefsName
      this.prefsCount = prefsCount
    }
  }
}
</script>
