<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card color="white" v-if="personas.lista">
        <v-list three-line>
          <template v-for="persona in personas.lista.ejecutivasDeCuentas.integrantes">
            <v-list-tile avatar v-bind:key="persona.id" @click="goToRoute(persona.id)">
              <v-list-tile-avatar :size="80">
                <img v-bind:src="persona.fotografia">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{persona.nombre}} {{persona.apellido}}</v-list-tile-title>
                <v-list-tile-sub-title v-html="persona.email"></v-list-tile-sub-title>
                <v-list-tile-sub-title v-html="persona.empresa"></v-list-tile-sub-title>
                <v-list-tile-sub-title v-html="persona.direccion"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        personas: this.$store.state.personas
      }
    },
    head () {
      return {
        title: this.$store.state.personas.lista.ejecutivasDeCuentas.nombre
      }
    },
    methods: {
      goToRoute (personaId) {
        this.$router.push({ path: `/ejecutivas/${personaId}` }) // -> /user/123
      }
    }
  }
</script>
