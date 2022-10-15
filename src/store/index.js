import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';;

const store = createStore({
  modules: {
    coaches: coachesModule, //namespace coaches index
    requests: requestsModule
  },
  state() {
    return {
      userId: 'c3' //kto używa appki
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;
