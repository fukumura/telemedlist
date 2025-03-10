<template>
  <v-container fluid>
    <v-toolbar
      class="mb-1"
      color="light-green lighten-4"
      flat
    >
      <v-toolbar-title>
        検索ヒット数 （<b>
          {{ hitCount.toLocaleString() }}
        </b>件）
      </v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-card-title>
        <v-spacer />
        <v-text-field
          v-model="searchQuery"
          append-icon="mdi-magnify"
          label="クリニックを探す"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table v-if="!clinics" item-key="name" class="elevation-1" loading loading-text="Loading... Please wait" />
      <v-data-table
        v-else
        :headers="headers"
        :items="clinics"
        :itemsPerPage="50"
      >
        <template v-slot:body="{ items }">
          <tbody>
            <tr
              v-for="(item, i) in items"
              :key="i"
              class="pointer"
            >
              <td>
                <nuxt-link :to="{ name: 'clinics-id', params: { id: item.id } }">
                  <v-list-item-title>{{ item.name }} / {{ item.mdepart }} / {{ item.address }}</v-list-item-title>
                </nuxt-link>
              </td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>
<script>
import searchClient from '@/plugins/algolia'
const index = searchClient.initIndex('clinics')

export default {
  data () {
    return {
      searchQuery: '',
      hitCount: 0,
      clinics: [],
      headers: [
        {
          text: 'クリニック名',
          align: 'start',
          sortable: false,
          value: 'name'
        }
      ],
      itemsPerPage: 50
    }
  },
  watch: {
    searchQuery () {
      this.searchClinic()
    }
  },
  async asyncData () {
    const searchResult = await index.search({ searchQuery: '' })
    return {
      clinics: searchResult.hits
    }
  },
  methods: {
    async searchClinic () {
      const searchResult = await index.search(this.searchQuery)
      this.clinics = searchResult.hits
      this.hitCount = searchResult.hits.length
    }
  }
}
</script>
