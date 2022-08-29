import Vuex from 'vuex'
import common from './modules/common'
export const store = () => {
  return new Vuex.Store({
    modules: {
      common,
    },
  })
}
