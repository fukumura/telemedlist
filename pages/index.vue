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
      <br>
      <v-card>
        <TotalCountBar />
      </v-card>
      <br>
      <v-card>
        <Search />
      </v-card>
      <br>
      <v-card>
        <About />
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import About from '@/components/About.vue'
import TotalCountBar from '@/components/TotalCountBar.vue'
import Search from '@/components/Search.vue'

export default {
  components: {
    About,
    TotalCountBar,
    Search
  }
}
</script>
