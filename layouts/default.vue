<template>
  <v-app light>
    <v-toolbar prominent app :clipped-left="clipped">
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <div class="titlePage"></div>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer temporary :right="right" v-model="rightDrawer" dark fixed>
      <v-btn dark icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>close</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile router :to="item.to" :key="i" v-for="(item, i) in items" exact>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer app>
      <span>Mitocondria</span>
    </v-footer>
  </v-app>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Mitocondria',
        items: [
          { title: 'Ejecutivas de Cuentas', to: '/' },
          { title: 'FrontEnd', to: '/frontend' },
          { title: 'Business', to: '/business' },
          { title: 'Dirección Creativa', to: '/creativa' }
        ],
        personas: []
      }
    },
    methods: {
      cargarPersonas: function () {
        axios.get('/mitocondrianos.json').then((response) => {
          this.personas = response.data
        }, (err) => {
          console.log(err)
        })
      }
    },
    mounted: function () {
      this.cargarPersonas()
    }
  }
</script>
