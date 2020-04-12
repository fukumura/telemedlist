<template>
  <v-card>
    <section class="container">
      <p>{{ message }}</p>
      <v-text-field
        v-model="zipcode"
        placeholder="郵便番号を入力"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      />

      <input v-model="zipcode" type="text" placeholder="郵便番号を入力">
      <button @click="searchAddressInfo">
        住所自動入力
      </button>
      <p>
        <nuxt-link :to="{ name: 'prefs-id', params: { id: addressData.prefcode } }">
          {{ addressData.address1 }}
        </nuxt-link>
      </p>
    </section>
  </v-card>
</template>
<script>
import axiosJsonpAdapter from 'axios-jsonp'

export default {
  data () {
    return {
      zipcode: '',
      addressData: {},
      message: ''
    }
  },
  methods: {
    async searchAddressInfo () {
      const reg = /^\d{7}$/
      if (!reg.test(this.zipcode)) { return }

      const url = 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=' + this.zipcode
      const res = await this.$axios.$get(url, {
        adapter: axiosJsonpAdapter,
        params: {
          zipcode: this.zipcode
        }
      })
      if (res.status !== 200) { return }
      if (res.results == null) {
        this.message = 'no data'
        return
      }
      console.log(res.results[0])
      res.results[0].prefcode = res.results[0].prefcode.padStart(2, '0')
      this.addressData = res.results[0]
    }
  }
}
</script>
