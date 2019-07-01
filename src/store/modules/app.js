const app = {
  state: {
    menuActive: false,
  },
  mutations: {
    SET_MENU_ACTIVE: (state, active) => {
      state.menuActive = active
    }
  },
  actions: {
    setMenuStatus({commit}, status) {
      commit('SET_MENU_ACTIVE', status)
    }
  }
}

export default app
