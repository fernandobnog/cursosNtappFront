import { defineStore } from 'pinia';
import { PoliticaReembolso } from '../types/politica_reembolso';
import { PoliticaReembolsoService } from '../service/politica_reembolso';

export const politicaReembolsoStore = defineStore('idpoliticareembolso', {
  state: () => ({
    politicaReembolso: {} as PoliticaReembolso,
    politicaReembolsoLista: [] as PoliticaReembolso[],
  }),

  actions: {
    setPoliticaReembolso(politicaReembolso: PoliticaReembolso) {
      this.politicaReembolso = politicaReembolso;
    },

    setPoliticaReembolsoLista(politicaReembolsoLista: PoliticaReembolso[]) {
      this.politicaReembolsoLista = politicaReembolsoLista;
    },

    async inserir(politicaReembolso: PoliticaReembolso) {
      try {
        const res = await PoliticaReembolsoService.inserir(politicaReembolso);
        this.setPoliticaReembolso(res);
      } catch (error) {
        console.error("Erro ao inserir política de reembolso:", error);
      }
    },

    async listar() {
      try {
        const res = await PoliticaReembolsoService.listar();
        this.setPoliticaReembolsoLista(res);
      } catch (error) {
        console.error("Erro ao listar políticas de reembolso:", error);
      }
    },

    async obterPorId(id: number) {
      try {
        const res = await PoliticaReembolsoService.obterPorId(id);
        this.setPoliticaReembolso(res);
      } catch (error) {
        console.error("Erro ao obter política de reembolso por ID:", error);
      }
    },

    async atualizar(politicaReembolso: PoliticaReembolso) {
      try {
        const res = await PoliticaReembolsoService.atualizar(politicaReembolso);
        this.setPoliticaReembolso(res);
      } catch (error) {
        console.error("Erro ao atualizar política de reembolso:", error);
      }
    },

    async remover(id: number) {
      try {
        await PoliticaReembolsoService.remover(id);
      } catch (error) {
        console.error("Erro ao remover política de reembolso:", error);
      }
    },

    politicaReembolso_clear() {
      this.politicaReembolso = {} as PoliticaReembolso;
    },

    politicaReembolso_lista_clear() {
      this.politicaReembolsoLista = [];
    },
  }
});
