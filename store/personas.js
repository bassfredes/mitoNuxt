import axios from 'axios'

export const state = () => ({
  lista: {
    business: {
      integrantes: [],
      nombre: ''
    },
    creativa: {
      integrantes: [],
      nombre: ''
    },
    ejecutivasDeCuentas: {
      integrantes: [],
      nombre: ''
    },
    frontend: {
      integrantes: [],
      nombre: ''
    }
  }
})

export const api = axios.create({
  baseURL: '/static'
})

export const mutations = {
  setLista (state, lista) {
    state.lista = lista
  }
}

export const actions = {
  cargarLista (state) {
    axios.get('/mitocondrianos.json').then(response => {
      state.commit('setLista', response.data)
    })
  }
}
