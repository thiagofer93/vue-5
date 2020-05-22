<template>
  <div>
    <form @submit.prevent="save">
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <p class="subtitle is-5">
              <strong>{{subtitle}}</strong>
            </p>
          </div>
        </div>
        <div class="level-right">
          <p class="level-item">
            <router-link class="button" to="/">Voltar</router-link>
          </p>
          <p class="level-item">
            <button class="button is-info" :data-test="datatest" @click="save">Salvar</button>
          </p>
        </div>
      </nav>
      <div class="field">
        <label class="label">Nome</label>
        <div class="control has-icons-left">
          <input
            class="input"
            v-model="nome"
            type="text"
            placeholder="Digite aqui"
            data-test="nome"
            required
          />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left">
          <input
            class="input"
            v-model="email"
            type="email"
            placeholder="exemplo@com.br"
            data-test="email"
            required
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return { contact: {}, nome: "", email: "" };
  },
  props: {
    contato_id: String
  },
  computed: {
    ...mapGetters("contact", ["getById"]),
    subtitle: function() {
      return this.contact && Object.keys(this.contact).length > 0
        ? this.contact.nome
        : "Novo Contato";
    },
    datatest: function() {
      return this.contact && Object.keys(this.contact).length > 0
        ? "salvar"
        : "criar";
    }
  },
  methods: {
    ...mapActions("contact", ["add", "update"]),
    populate() {
      const contact = this.getById(this.contato_id);
      this.contact = contact || {};

      if (this.contato_id && !contact) {
        this.$router.push({ name: "NotFound" });
      } else {
        this.nome = this.contact.nome;
        this.email = this.contact.email;
      }
    },
    save() {
      if (this.nome && this.email && this.email.includes("@")) {
        this.contact.nome = this.nome;
        this.contact.email = this.email;

        if (this.contact.id) {
          this.update(this.contact);
        } else {
          this.add(this.contact);
        }
        this.$router.push("/");
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.populate());
  }
};
</script>

<style lang="scss" scoped>
</style>