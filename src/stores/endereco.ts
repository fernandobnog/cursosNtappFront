import { defineStore } from 'pinia';
import { Endereco } from '../types/endereco';
import { enderecoService } from '../service/endereco';

export const enderecoStore = defineStore('idendereco', {
  state: () => ({
    endereco: {} as Endereco,
    enderecoLista: [] as Endereco[],
  }),

  actions: {
    setEndereco(endereco: Endereco) {
      this.endereco = endereco;
    },

    setEnderecoLista(enderecoLista: Endereco[]) {
      this.enderecoLista = enderecoLista;
    },

    async inserir(endereco: Endereco) {
      try {
        const res = await enderecoService.inserir(endereco);
        this.setEndereco(res);
      } catch (error) {
        console.error("Erro ao inserir endereço:", error);
      }
    },

    async listar() {
      try {
        const res = await enderecoService.listar();
        this.setEnderecoLista(res);
      } catch (error) {
        console.error("Erro ao listar endereços:", error);
      }
    },

    async obterPorId(id: number) {
      try {
        const res = await enderecoService.obterPorId(id);
        this.setEndereco(res);
      } catch (error) {
        console.error("Erro ao obter endereço por ID:", error);
      }
    },

    async atualizar(endereco: Endereco) {
      try {
        const res = await enderecoService.atualizar(endereco);
        this.setEndereco(res);
      } catch (error) {
        console.error("Erro ao atualizar endereço:", error);
      }
    },

    async remover(id: number) {
      try {
        await enderecoService.remover(id);
      } catch (error) {
        console.error("Erro ao remover endereço:", error);
      }
    },

    endereco_clear() {
      this.endereco = {} as Endereco;
    },

    endereco_lista_clear() {
      this.enderecoLista = [];
    },
  }
});
