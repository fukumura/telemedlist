<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items_up"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item
          v-for="(item, index) in prefs"
          :key="index"
          :to="item.to"
          router
          exact
          dense
        >
          <v-list-item-content>
            <nuxt-link :to="{ name: 'prefs-id', params: { id: item.id } }">
              {{ item.name }}
            </nuxt-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item
          v-for="(item, i) in items_down"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <br>
      <br>
      <br>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>Copyright © 2020- telemdlist.com</span>
    </v-footer>
  </v-app>
</template>

<script>
import prefs from '@/data/prefs.json'

export default {
  components: {
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items_up: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-chart-gantt',
          title: 'Chart',
          to: '/bars'
        }
      ],
     items_down: [
        {
          icon: 'mdi-chart-bubble',
          title: '当サイトについて',
          to: '/about'
        }
      ],
      prefs,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'オンライン診療医療機関検索'
    }
  }
}
</script>
