<template>
  <v-container fluid>
    <chart-component :height="1000" />
  </v-container>
</template>

<script>
import Vue from 'vue'
import HBChart from '~/components/HBChart'
export default {
}

Vue.component('chart-component', HBChart)
</script>
