<template>
  <v-container fluid>
    <v-data-iterator
      :items="prefs"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          class="mb-1"
          color="light-green lighten-4"
          flat
        >
          <v-toolbar-title>
            導入数 （{{ importData.totalCount.toLocaleString() }}件）
            最終更新日: {{ importData.updateDate }}
          </v-toolbar-title>
          <template>
            <v-spacer />
            <v-btn-toggle
              v-model="sortDesc"
              mandatory
            >
              <v-btn
                :value="false"
                middle
                depressed
                color="green"
              >
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn
                :value="true"
                middle
                depressed
                color="green"
              >
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="6"
            xs="4"
            sm="4"
            md="3"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                <nuxt-link :to="{ name: 'prefs-id', params: { id: item.id } }">
                  {{ item.name }}
                </nuxt-link>
              </v-card-title>
              <v-divider />
              <v-list dense>
                <v-list-item>
                  <v-list-item-content class="display-3 font-weight-black">
                    {{ item.count }}
                  </v-list-item-content>件
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>
<script>
import prefs from '@/data/prefs.json'
import importData from '@/data/import_data.json'

export default {
  data () {
    return {
      searchQuery: '',
      importData,
      prefs,
      headers: [
        {
          text: '都道府県',
          align: 'start',
          sortable: false,
          value: 'name'
        }
      ],
      itemsPerPage: 50,
      itemsPerPageArray: [4, 8, 12],
      search: '',
      filter: {},
      sortBy: 'count',
      sortDesc: true,
      page: 1
    }
  },
  computed: {
    numberOfPages () {
      return Math.ceil(this.items.length / this.itemsPerPage)
    },
    filteredKeys () {
      return this.keys.filter(key => key !== `Name`)
    }
  },
  methods: {
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) { this.page += 1 }
    },
    formerPage () {
      if (this.page - 1 >= 1) { this.page -= 1 }
    },
    updateItemsPerPage (number) {
      this.itemsPerPage = number
    }
  }
}
</script>
