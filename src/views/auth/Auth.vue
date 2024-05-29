<script lang="ts">
import { mapState, mapActions } from "pinia";
import { defineComponent } from "vue";
import { isLogged } from "../../common/authHandler";

import { authStore } from "../../stores/auth";
import { killToken } from "../../common/authHandler";
import { AuthenticationRequest } from "../../types/auth";

export default defineComponent({
  name: "AuthView",

  data: () => ({
    usuario: {} as AuthenticationRequest,
    loginDelay: false,
  }),

  computed: {
    ...mapState(authStore, [
      "isAuthenticated",
      "user",
      "token",
    ]),
  },

  methods: {
    ...mapActions(authStore, [
      "login",
      "logout",
      "setUser",
      "isAuthenticated_state_clear",
      "user_state_clear",
    ]),

    async signIn() {
      this.loginDelay = true;
      const user = Object.assign({}, this.usuario)
      await this.login(user)

      if (!this.isAuthenticated) {
        this.$toast.add({
          severity: "error",
          summary: "Login Inválido",
          detail: "Erro no usuário ou senha",
          life: 2000,
        });
      }
      if (isLogged()) {
        await this.$router.push("/");
        this.user_state_clear();
        this.usuario = {} as AuthenticationRequest;
      }
      this.isAuthenticated_state_clear();
      this.loginDelay = false;
    }
  },

  mounted() {
    killToken();
  }
});
</script>

<template>
  <div class="col-12 md:col-6 mx-auto px-2">
    <div>
      <form>
        <div class="flex flex-column align-items-center">

          <div class="col-12 md:col-6 mt-8">
            <img alt="logo" src="/logoParaLogin.png" class="w-full">
          </div>

          <div class="col-12 md:col-6">
            <label class="placeholder">Usuário</label>
            <div class="p-inputgroup">
              <InputText v-model="usuario.username" class="w-full" placeholder="Usuário" data-test="usuario.userName" />
            </div>
          </div>

          <div class="col-12 md:col-6">
            <label class="placeholder">Senha</label>
            <div class="p-inputgroup">
              <Password :feedback="false" class="w-full" placeholder="Senha" v-model="usuario.password" toggleMask
                v-on:keyup.enter="signIn()" data-test="usuario.userPassword" />
            </div>
          </div>
          <div class="col-12 md:col-6">
            <ProgressBar v-show="loginDelay" class="mb-4" mode="indeterminate" style="height: 6px"></ProgressBar>
          </div>
          <div class="col-12 md:col-6">
            <Button label="Login" @click="signIn()" data-test="botao.entrar" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.p-password {
  input {
    width: 100% !important;
  }
}
</style>