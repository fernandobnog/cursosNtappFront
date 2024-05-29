import { defineStore } from 'pinia';
import { Instrutor } from '../types/instrutor';
import { instrutorService } from '../service/instrutor';

export const instrutorStore = defineStore('idinstrutor', {
  state: () => ({
    instrutor: {} as Instrutor,
    instrutorLista: [] as Instrutor[],
  }),

  actions: {
    setInstrutor(instrutor: Instrutor) {
      this.instrutor = instrutor;
    },

    setInstrutorLista(instrutorLista: Instrutor[]) {
      this.instrutorLista = instrutorLista;
    },

    async inserir(instrutor: Instrutor) {
      try {
        const res = await instrutorService.inserir(instrutor);
        this.setInstrutor(res);
      } catch (error) {
        console.error("Erro ao inserir instrutor:", error);
      }
    },

    async listar() {
      try {
        const res = await instrutorService.listar();
        this.setInstrutorLista(res);
      } catch (error) {
        console.error("Erro ao listar instrutores:", error);
      }
    },

    async obterPorId(id: number) {
      try {
        const res = await instrutorService.obterPorId(id);
        this.setInstrutor(res);
      } catch (error) {
        console.error("Erro ao obter instrutor por ID:", error);
      }
    },

    async atualizar(instrutor: Instrutor) {
      try {
        const res = await instrutorService.atualizar(instrutor);
        this.setInstrutor(res);
      } catch (error) {
        console.error("Erro ao atualizar instrutor:", error);
      }
    },

    async remover(id: number) {
      try {
        await instrutorService.remover(id);
      } catch (error) {
        console.error("Erro ao remover instrutor:", error);
      }
    },

    instrutor_clear() {
      this.instrutor = {} as Instrutor;
    },

    instrutor_lista_clear() {
      this.instrutorLista = [];
    },
  }
});
