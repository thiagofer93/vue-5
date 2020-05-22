<template>
  <div>
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5">
            <strong>Contatos</strong>
          </p>
        </div>
        <div class="level-item">
          <p class="subtitle is-5" :data-test="total">({{contacts.length}})</p>
        </div>
      </div>
      <div class="level-right">
        <p class="level-item">
          <router-link
            class="button is-info"
            data-test="novo-contato"
            :to="{name: 'Create'}"
          >Adicionar Contato</router-link>
        </p>
      </div>
    </nav>
    <div v-if="contacts.length">
      <article v-for="contact in contacts" :key="contact.id" class="media">
        <div class="media-content">
          <strong>{{contact.nome}}</strong>
          <br />
          {{contact.email}}
        </div>
        <div class="media-right buttons are-small">
          <router-link
            class="button"
            data-test="editar"
            :to="{name:'Edit', params: {contato_id : contact.id}}"
          >Editar</router-link>
          <a class="button is-danger" data-test="apagar" @click="takeOut(contact)">Apagar</a>
        </div>
      </article>
    </div>
    <div v-else data-test="sem-contatos" class="has-text-centered">
      <p>
        <img src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png" />
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("contact", { contacts: "getAll" }),
    total() {
      if (this.contacts) {
        return `total-${this.contacts.length}`;
      }
      return 0;
    }
  },
  methods: {
    ...mapActions("contact", ["remove"]),
    takeOut(contact) {
      this.remove(contact);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>