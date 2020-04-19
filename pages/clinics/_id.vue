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
export default {
  components: {
    Clinic
  }
}
</script>
