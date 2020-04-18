<template>
  <v-card
    max-width="375"
    class="mx-auto"
  >
    <h1 class="pa-2 ma-2 light-green lighten-4 title font-regular tile">
      <span>{{ clinicName }}のオンライン診療</span>
    </h1>

    <v-list one-line>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{ clinicName }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list two-line>
      <v-list-item @click="">
        <v-list-item-action />
        <v-list-item-content>
          <v-list-item-title>{{ clinicAddress1}} {{ clinicAddress2 }}</v-list-item-title>
          <v-list-item-subtitle>住所</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset />

      <v-list-item @click="">
        <v-list-item-action />
        <v-list-item-content>
          <v-list-item-title>(650) 555-1234</v-list-item-title>
          <v-list-item-subtitle>電話番号</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider inset />
      <v-list-item @click="">
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>1400 Main Street</v-list-item-title>
          <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
import firebase from '@/plugins/firebase'
const db = firebase.firestore()
export default {
  data () {
    return {
      clinicName: '',
      clinicUrl: '',
      clinicTel: ''
    }
  },
  computed: {
  },
  created () {
    this.getClinic()
  },
  methods: {
    async getClinic () {
      const clinics = await db.collection('clinics')
                     .where('id', '==', '1')
                     .get()
      clinics.forEach((doc) => {
        console.log(doc.data().name)
        this.clinicName = doc.data().name
      })
    }
  }
}
</script>
