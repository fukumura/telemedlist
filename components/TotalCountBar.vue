<template>
  <v-container fluid>
    <v-toolbar-title>導入数 （{{ importData.totalCount }}件） 最終更新日: {{ importData.updateDate }} </v-toolbar-title>
  </v-container>
</template>
<script>
import importData from '@/data/import_data.json'

export default {
  data () {
    return {
      searchQuery: '',
      importData
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
