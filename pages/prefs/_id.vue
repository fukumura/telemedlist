<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <h1 class="pa-2 ma-2 light-green lighten-4 title font-regular tile">
        <span>{{ prefName }}のオンライン診療</span>
      </h1>
      </v-h1>
      <v-card>
        <Pref />
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import prefs from '@/data/prefs.json'
import Pref from '~/components/Pref.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pref
  },
  mixins: [Meta],
  data () {
    return {
      Pref,
      prefId: this.$route.params.id,
      prefName: prefs[Number(this.$route.params.id) - 1].name
    }
  },
  head () {
    return {
      title: this.prefName + 'のオンライン診療医療機関',
      meta: [
        { hid: 'og:url', name: 'og:url', content: process.env.baseUrl + '/prefs/' + this.prefId },
        { hid: 'description', name: 'description', content: this.prefName + 'のオンライン診療の初診解禁で初診・再診OKの病院・クリニックを検索できます。オンライン診療実施医療機関リストの公開データを元に日々更新しているサイトです。' },
        { hid: 'og:title', name: 'og:title', content: this.prefName + 'のオンライン診療検索。' },
        { hid: 'og:description', name: 'og:description', content: this.prefName + 'のオンライン診療の初診解禁で初診・再診OKの病院・クリニックを検索できます。' }
      ]
    }
  }
}
</script>
