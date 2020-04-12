<template>
  <v-card>
    <v-card-title>
      <v-spacer />
      <v-text-field
        v-model="searchQuery"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      />
    </v-card-title>
    <v-data-table v-if="!prefs" item-key="name" class="elevation-1" loading loading-text="Loading... Please wait" />
    <v-data-table
      v-else
      :headers="headers"
      :items="prefs"
      :search="searchQuery"
      :items-per-page="itemsPerPage"
    >
      <template v-slot:body="{ items }">
        <tbody>
          <tr
            v-for="(item, i) in items"
            :key="i"
            class="pointer"
          >
            <td>
              <nuxt-link :to="{ name: 'prefs-id', params: { id: item.id } }">
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
import prefs from '@/data/prefs.json'

export default {
  data () {
    return {
      searchQuery: '',
      prefs,
      headers: [
        {
          text: '都道府県',
          align: 'start',
          sortable: false,
          value: 'name'
        }
      ],
      itemsPerPage: 50
    }
  }
}
</script>
