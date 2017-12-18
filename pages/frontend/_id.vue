<template>
  <v-layout row detalle>
    <v-flex xs12 sm6 offset-sm3>
      <v-card color="white" v-if="persona">
        <v-list-tile-avatar :size="160">
          <img v-bind:src="persona.fotografia">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{persona.nombre}} {{persona.apellido}}</v-list-tile-title>
          <v-list-tile-sub-title v-html="persona.email"></v-list-tile-sub-title>
          <v-list-tile-sub-title v-html="persona.empresa"></v-list-tile-sub-title>
          <v-list-tile-sub-title v-html="persona.direccion"></v-list-tile-sub-title>
          <v-list-tile-sub-title v-html="persona.edad"></v-list-tile-sub-title>
          <v-list-tile-sub-title class="wrap" v-html="persona.bio"></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    persona: function () {
      return this.$store.state.personas.lista.frontend.integrantes[this.$route.params.id]
    }
  },
  head () {
    return {
      title: this.$store.state.personas.lista.frontend.nombre
    }
  },
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>
