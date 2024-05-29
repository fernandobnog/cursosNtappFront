import { defineStore } from 'pinia';
import { Custo } from '../types/custo';
import { custoService } from '../service/custo';

export const custoStore = defineStore('idcusto', {
  state: () => ({
    custo: {} as Custo,
    custoLista: [] as Custo[],
  }),

  actions: {
    setCusto(custo: Custo) {
      this.custo = custo;
    },

    setCustoLista(custoLista: Custo[]) {
      this.custoLista = custoLista;
    },

    async inserir(custo: Custo) {
      try {
        const res = await custoService.inserir(custo);
        this.setCusto(res);
      } catch (error) {
        console.error("Erro ao inserir custo:", error);
      }
    },

    async listar() {
      try {
        const res = await custoService.listar();
        this.setCustoLista(res);
      } catch (error) {
        console.error("Erro ao listar custos:", error);
      }
    },

    async obterPorId(id: number) {
      try {
        const res = await custoService.obterPorId(id);
        this.setCusto(res);
      } catch (error) {
        console.error("Erro ao obter custo por ID:", error);
      }
    },

    async atualizar(custo: Custo) {
      try {
        const res = await custoService.atualizar(custo);
        this.setCusto(res);
      } catch (error) {
        console.error("Erro ao atualizar custo:", error);
      }
    },

    async remover(id: number) {
      try {
        await custoService.remover(id);
      } catch (error) {
        console.error("Erro ao remover custo:", error);
      }
    },

    custo_clear() {
      this.custo = {} as Custo;
    },

    custo_lista_clear() {
      this.custoLista = [];
    },
  }
});
