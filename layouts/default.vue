<template>
  <v-app light>
    <v-toolbar prominent app :clipped-left="clipped">
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <div class="titlePage">{{subtitle}}</div>
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
            <v-list-tile-title v-on:click="changeTitle" v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer app>
      <img src="/mito.png" alt="Mitocondria" class="mb-1" />
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      this.$store.dispatch('personas/cargarLista')
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Mitocondria',
        subtitle: 'Inicio',
        items: [
          { title: 'Ejecutivas de Cuentas', id: 'ejecutivas_de_cuentas', to: '/ejecutivas' },
          { title: 'FrontEnd', id: 'frontend', to: '/frontend' },
          { title: 'Business', id: 'business', to: '/business' },
          { title: 'Dirección Creativa', id: 'creativa', to: '/creativa' }
        ]
      }
    },
    methods: {
      changeTitle: function (event) {
        this.subtitle = event.target.innerText
      }
    }
  }
</script>
