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
      <v-card>
        <Clinic />
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Clinic from '~/components/Clinic.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Clinic
  },
  mixins: [Meta],
  data () {
    return {
      prefId: this.$route.params.prefId,
      clinicId: this.$route.params.id,
      clinicName: 'クリニック名称'
    }
  },
  head () {
    return {
      title: this.clinicName + 'のオンライン診療医療機関',
      meta: [
        { hid: 'og:url', name: 'og:url', content: process.env.baseUrl + '/clinics/' + this.clinicId },
        { hid: 'description', name: 'description', content: this.clinicName + 'のオンライン診療の初診解禁で初診・再診OKの病院・クリニックを検索できます。オンライン診療実施医療機関リストの公開データを元に日々更新しているサイトです。' },
        { hid: 'og:title', name: 'og:title', content: this.clinicName + 'のオンライン診療検索。' },
        { hid: 'og:description', name: 'og:description', content: this.clinicName + 'のオンライン診療の初診解禁で初診・再診OKの病院・クリニックを検索できます。' }
      ]
    }
  }
}
</script>
