<template>
  <v-card>
    <v-list>
      <v-subheader>都道府県</v-subheader>
      <v-list-item v-for="(item, index) in prefs" :key="index" link>
        <v-list-item-content>
          <nuxt-link :to="{ name: 'prefs-id', params: { id: item.id } }">
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </nuxt-link>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import prefs from '@/data/prefs.json'

export default {
  data () {
    return {
      search: '',
      headers: [
        {
          text: '都道府県',
          align: 'start',
          sortable: false,
          value: 'name'
        }
      ],
      prefs
    }
  }
}
</script>
