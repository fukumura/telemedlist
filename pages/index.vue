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
        <About />
      </v-card>
      <br>
      <v-card>
        <PrefsIndex />
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import About from '~/components/About.vue'
import PrefsIndex from '~/components/PrefsIndex.vue'

export default {
  components: {
    About,
    PrefsIndex
  }
}
</script>
