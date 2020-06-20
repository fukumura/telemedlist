<template>
  <div style="width:500px; height: 500px;">
    <GmapMap
      :center="center"
      :zoom="zoom"
      map-type-id="terrain"
      style="width: 100%; height: 100%"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>
<script>
export default {
  props: {
    address: {
      type: String
    }
  },
  data () {
    return {
      // TODO: 該当座標が取れるまで非表示にしたいがとりあえず東京で出してから上書き
      center: { lat: 35.681236, lng: 139.767125 },
      markers: [],
      zoom: 18
    }
  },
  created () {
    this.getMapInfo()
  },
  methods: {
    getMapInfo () {
      // NOTE: そのまま処理するとpropsで渡ってくる前に処理が走ってしまうので50ms待たせてる
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.setMapInfo())
        }, 50)
      })
    },
    async setMapInfo () {
      const mapEndpoint = 'https://maps.googleapis.com/maps/api/geocode/json'
      const response = await this.$axios.$get(mapEndpoint, {
        params: {
          address: this.address,
          components: 'country:JP',
          key: process.env.GOOGLE_API_KEY
        }
      })
        .catch((error) => {
          console.log('response error', error)
          return false
        })
      if (response.status !== 'ZERO_RESULTS') {
        this.center = {
          lat: response.results[0].geometry.location.lat,
          lng: response.results[0].geometry.location.lng
        }
        this.markers = [
          { position: this.center, title: 'test' }
        ]
      } else {
        console.log('no result address: ' + this.address)
      }
    }
  }
}
</script>
