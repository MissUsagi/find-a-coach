import { createStore } from 'vuex'
import coachesModule from './modules/coaches/index.js'

const store = createStore({
  modules: {
    coaches: coachesModule, //namespace coaches index
  }
});

export default store;
