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
    <v-data-table v-if="!pref" item-key="name" class="elevation-1" loading loading-text="Loading... Please wait" />
    <v-data-table
      v-else
      :headers="headers"
      :items="pref"
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
              <a
                :href="item.url"
                target="_blank"
              >{{ item.name }}
              </a>
            </td>
            <td>
              {{ item.mdepart1 }} {{ item.mdepart2 }} {{ item.mdepart3 }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      searchQuery: '',
      expanded: [],
      singleExpand: false,
      headers: [
        {
          text: '医療機関名',
          align: 'start',
          sortable: true,
          value: 'name'
        },
        {
           text: '診療科',
           sortable: true,
           value: 'mdepart1'
        },
        { text: '', value: 'data-table-expand' }
      ],
      itemsPerPage: 50,
      pref: [],
      prefName: ''
    }
  },
  mounted () {
    this.clinics()
  },
  methods: {
    async clinics () {
      const _clinics = await import(`~/data/pref/${this.$route.params.id}_clinics.json`)
      const clinics = []
      Object.keys(_clinics).forEach(function (key) {
        clinics.push(_clinics[key])
      })
      this.pref = clinics
    }
  }
}
</script>
