<template>
  <v-layout
    column
    justify-center
    align-left
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <About />
      <v-spacer /><br>
      <Menseki />
      <v-spacer /><br>
    </v-flex>
  </v-layout>
</template>

<script>
import About from '~/components/About.vue'
import Menseki from '~/components/Menseki.vue'

export default {
  head () {
    return {
      title: 'オンライン診療検索とは',
      meta: [
        { hid: 'description', name: 'description', content: 'オンライン診療の初診解禁で初診・再診OKの病院・クリニックを検索できます。オンライン診療実施医療機関リストの公開データを元に日々更新しているサイトです。' }
      ]
    }
  },
  components: {
    About,
    Menseki
  }
}
</script>
