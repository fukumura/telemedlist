<template>
  <v-card>
    <v-card-title>
      <v-select
        v-model="searchQuery"
        :items="addressList"
        label="エリア"
        solo
      />
    </v-card-title>
    <v-data-table
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
            <td>
              {{ item.address1 }}
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
        {
           text: 'エリア',
           sortable: true,
           value: 'address1'
        },
        { text: '', value: 'data-table-expand' }
      ],
      itemsPerPage: 50,
      pref: [],
      addressList: []
    }
  },
  computed: {
    icon () {
      return 'mdi-checkbox-blank-outline'
    }
  },
  mounted () {
    this.clinics()
  },
  methods: {
    async clinics () {
      const _clinics = await import(`~/data/pref/${this.$route.params.id}_clinics.json`)
      const clinics = []
      const _addressListHash = {}
      const prefName = prefs[Number(this.$route.params.id) - 1].name
      Object.keys(_clinics).forEach(function (key) {
        if (!_clinics[key].address1) {
          return
        }
        const _address = _clinics[key].address1
        const address = _address.replace(prefName, '')
        _clinics[key].address1 = address
        _addressListHash[address] = true
        clinics.push(_clinics[key])
      })
      const _addressList = []
      Object.keys(_addressListHash).forEach(function (key) {
        _addressList.push(key)
      })
      this.addressList = _addressList
      this.pref = clinics
    }
  }
}
</script>
