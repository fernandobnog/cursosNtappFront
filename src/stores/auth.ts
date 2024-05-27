import { defineStore } from 'pinia';
import { killToken, saveToken, isLogged, saveUser } from '../common/authHandler';
import { authService } from '../service/auth';
import { IAuth, IAuthCache } from '../types/auth';
import CryptoJS from 'crypto-js';

export const authStore = defineStore('idauthstore', {
  state: () => ({
    user: {} as IAuth,
    token: "" as string,
    isAuthenticated: false as boolean,
    urlRedirect: "" as string,
    userCache: {} as IAuthCache,
  }),

  actions: {
    setUser(user: IAuth) {
      this.user = user;
    },

    async login(user: IAuth) {
      const res = await authService.login(user) as { status: number, data: { jwtToken: string, user: IAuthCache } };
      if (res.status == 200) {
        saveToken(res.data.jwtToken);

        if (isLogged()) {
          this.isAuthenticated = true;
          this.userCache = res.data.user;
          saveUser(this.userCache);
        }
      }
    },

    criptografarSenha(senha: string) {
      const key = CryptoJS.enc.Latin1.parse('8u9u3f2noocn1832');
      const iv = CryptoJS.enc.Latin1.parse('8u9u3f2noocn1832');
      const encrypted = CryptoJS.AES.encrypt(senha, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.ZeroPadding });
      return senha = encrypted.toString();
    },

    logout() {
      this.user = {} as IAuth;
      killToken();
    },

    isAuthenticated_state_clear() {
      this.isAuthenticated = false;
    },

    user_state_clear() {
      this.user = {} as IAuth;
    },

    token_state_clear() {
      this.token = "";
    },

    urlRedirect_state_clear() {
      this.urlRedirect = "";
    },

    userInfo() {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      return user as IAuthCache;
    },

    async userRetorno_state_clear(): Promise<void> {
      return new Promise((resolve, reject) => {
        try {
          this.userCache = {} as IAuthCache;
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
  }
})
