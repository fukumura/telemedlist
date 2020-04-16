<template>
  <v-container fluid>
    <chart-component :height="500" />
  </v-container>
</template>

<script>
import Vue from 'vue'
import HBChart from '~/components/HBChart'
export default {
}

Vue.component('chart-component', HBChart)
</script>
