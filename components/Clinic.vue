<template>
  <v-card
    class="mx-auto"
  >
    <p class="pl-2 pt-2">
      <a href="/">Top</a>
    </p>
    <h1 class="pa-2 ma-2 light-green lighten-4 title font-regular tile">
      <span>{{ clinic.name }}</span>
    </h1>
    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-medical-bag
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-subtitle>診療科</v-list-item-subtitle>
          <v-list-item-title>{{ clinic.mdepart1 }} {{ clinic.mdepart2 }} {{ clinic.mdepart3 }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-subtitle>住所</v-list-item-subtitle>
          <v-list-item-title>{{ clinic.address1 }}{{ clinic.address2 }}</v-list-item-title>
          <v-list-item-subtitle>地図</v-list-item-subtitle>
          <Map :address="`${clinic.address1} ${clinic.address2}`" />
        </v-list-item-content>
      </v-list-item>

      <v-divider inset />

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-phone-hangup
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-subtitle>電話番号</v-list-item-subtitle>
          <v-list-item-title><a v-if="clinic.tel" :href="`tel:${clinic.tel}`">{{ clinic.tel }}</a></v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset />

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-home-variant
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-subtitle>ホームページ</v-list-item-subtitle>
          <v-list-item-title><a :href="clinic.url" target="_blank" rel="noopener">{{ clinic.url }}</a></v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset />

      <v-list-item>
        <v-list-item-action />
        <v-list-item-content>
          <v-list-item-subtitle>オンライン初診保険対応</v-list-item-subtitle>
          <v-list-item-title v-if="clinic.firstvisit">
            ○
          </v-list-item-title>
          <v-list-item-title v-else>
            要問合せ
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset />
      <v-list-item>
        <v-list-item-action />
        <v-list-item-content>
          <v-list-item-subtitle>オンライン再診（保険診療）</v-list-item-subtitle>
          <v-list-item-title v-if="clinic.rediagnosis">
            ○
          </v-list-item-title>
          <v-list-item-title v-else>
            ー
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset />
      <v-list-item v-if="clinic.doctors">
        <v-list-item-action />
        <v-list-item-content>
          <v-list-item-subtitle>担当医</v-list-item-subtitle>
          <v-list-item-title>
            {{ clinic.doctors }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset />
      <v-list-item>
        <v-list-item-action />
        <v-list-item-content>
          <v-list-item-subtitle>オンライン診療についての情報</v-list-item-subtitle>
          <v-list-item-title><a :href="clinic.otherinfo" target="_blank" rel="noopener">{{ clinic.otherinfo }}</a></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
import Map from '@/components/Map.vue'
import Meta from '~/assets/mixins/meta'
// import firebase from '@/plugins/firebase'
// const db = firebase.firestore()
export default {
  components: {
    Map
  },
  mixins: [Meta],
  data () {
    return {
      clinic: ''
    }
  },
  computed: {
  },
  created () {
    this.getClinic()
  },
  methods: {
    async getClinic () {
      const clinic = await import(`~/data/clinics/${this.$route.params.id}.json`)
      // const clinics = await db.collection('clinics')
      //                .where('id', '==', '1')
      //                .get()
      // clinics.forEach((doc) => {
      //   console.log(doc.data().name)
      //   this.name = doc.data().name
      // })
      this.clinic = clinic
    }
  },
  head () {
    return {
      title: this.clinic.name + '(' + this.clinic.mdepart1 + ',' + this.clinic.address1 + ')のオンライン診療情報',
      meta: [
        { hid: 'description', name: 'description', content: this.clinic.name + '(' + this.clinic.mdepart1 + ',' + this.clinic.address1 + this.clinic.mdepart1 + this.clinic.address2 + ')のページです。telemedlist.comはオンライン診療(遠隔診療)の病院・クリニックを検索できます。' },
        { hid: 'og:url', name: 'og:url', content: process.env.baseUrl + '/clinics/' + this.clinic.id },
        { hid: 'og:title', name: 'og:title', content: this.clinic.name + '(' + this.clinic.mdepart1 + ',' + this.clinic.address1 + ')のオンライン診療情報' },
        { hid: 'og:description', name: 'og:description', content: this.clinic.name + '(' + this.clinic.mdepart1 + ',' + this.clinic.address1 + this.clinic.mdepart1 + this.clinic.address2 + ')のページです。' }
      ],
      link: [
        { rel: 'canonical', href: process.env.baseUrl + '/clinics/' + this.clinic.id }
      ]
    }
  }
}
</script>
