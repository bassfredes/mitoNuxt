export const state = () => ({
  lista: []
})

export const mutations = {
  add (persona) {
    state.lista.push({ persona })
  },
  remove (persona, { personas }) {
    state.lista.splice(state.lista.indexOf(personas), 1)
  }
}
