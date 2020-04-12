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
        <PrefsIndex />
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import PrefsIndex from '~/components/PrefsIndex.vue'

export default {
  head () {
    return {
      title: 'オンライン診療医療機関検索',
      meta: [
        { hid: 'description', name: 'description', content: 'オンライン診療の初診解禁で初診・再診OKの病院・クリニックを検索できます。オンライン診療実施医療機関リストの公開データを元に日々更新しているサイトです。' }
      ]
    }
  },
  components: {
    PrefsIndex
  }
}
</script>
