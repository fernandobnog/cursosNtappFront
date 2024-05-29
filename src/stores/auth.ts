import { defineStore } from 'pinia';
import { killToken, saveToken, isLogged, saveUser } from '../common/authHandler';
import { authService } from '../service/auth';
import CryptoJS from 'crypto-js';
import { AuthenticationRequest, User, UserCache } from '../types/auth';

export const authStore = defineStore('idauthstore', {
  state: () => ({
    user: {} as User,
    authRequest: {} as AuthenticationRequest,
    token: "" as string,
    isAuthenticated: false as boolean,
    urlRedirect: "" as string,
    userCache: {} as UserCache,
  }),

  actions: {
    setUser(user: User) {
      this.user = user;
    },

    async login(authRequest: AuthenticationRequest) {
      const jwt = await authService.login(authRequest);

      if (jwt) {
        saveToken(jwt);

        if (isLogged()) {
          this.isAuthenticated = true;
          this.userCache.email = authRequest.username;
          saveUser(this.userCache);
        }
      }
    },

    criptografarSenha(senha: string) {
      const key = CryptoJS.enc.Latin1.parse('463sfev4l6k43gli34l34hl3jy45623mu9k455465ghj634k');
      const iv = CryptoJS.enc.Latin1.parse('463sfev4l6k43gli34l34hl3jy45623mu9k455465ghj634k');
      const encrypted = CryptoJS.AES.encrypt(senha, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.ZeroPadding });
      return senha = encrypted.toString();
    },

    logout() {
      this.user = {} as User;
      this.userCache = {} as UserCache;
      this.authRequest = {} as AuthenticationRequest;
      this.token = "" as string;
      killToken();
    },

    isAuthenticated_state_clear() {
      this.isAuthenticated = false;
    },

    user_state_clear() {
      this.user = {} as User;
    },

    token_state_clear() {
      this.token = "";
    },

    urlRedirect_state_clear() {
      this.urlRedirect = "";
    },

    userInfo() {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      return user as UserCache;
    },

    async userRetorno_state_clear(): Promise<void> {
      return new Promise((resolve, reject) => {
        try {
          this.userCache = {} as UserCache;
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
  }
})
