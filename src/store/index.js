import Vue from "vue";
import Vuex from "vuex";
import Persistence from "vuex-persist";
import ContactStore from "@/view/contacts/store.js";

Vue.use(Vuex);

const local = new Persistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: {
    contact: ContactStore,
  },
  plugins: [local.plugin],
});
