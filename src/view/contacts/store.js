import { uuid } from "vue-uuid";

export default {
  namespaced: true,
  state: {
    contacts: [],
  },
  mutations: {
    add(state, contact) {
      state.contacts.push(contact);
    },
    update(state, { index, contact }) {
      state.contacts[index] = contact;
    },
    remove(state, index) {
      state.contacts.splice(index, 1);
    },
  },
  actions: {
    add({ commit }, contact) {
      contact.id = uuid.v1();
      commit("add", contact);
    },
    update({ state, commit, getters }, contact) {
      var c = getters.getById(contact.id);
      commit("update", { index: state.contacts.indexOf(c), contact });
    },
    remove({ state, commit }, contact) {
      commit("remove", state.contacts.indexOf(contact));
    },
  },
  getters: {
    getAll(state) {
      return state.contacts;
    },
    getById: (state) => (id) => {
      return state.contacts.find((contact) => contact.id == id);
    },
  },
};
