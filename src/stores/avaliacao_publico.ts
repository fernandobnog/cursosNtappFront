import { defineStore } from 'pinia';
import { AvaliacaoPublico } from '../types/avaliacao_publico';
import { avaliacaoPublicoService } from '../service/avaliacao_publico';

export const authStore = defineStore('idavaliacaopublico', {
  state: () => ({
    avaliacaoPublico: {} as AvaliacaoPublico,
    avaliacaoPublicoLista: [] as AvaliacaoPublico[],
  }),

  actions: {
    setAvaliacaoPublico(avaliacaoPublico: AvaliacaoPublico) {
      this.avaliacaoPublico = avaliacaoPublico;
    },

    setAvaliacaoPublicoLista(avaliacaoPublicoLista: AvaliacaoPublico[]) {
      this.avaliacaoPublicoLista = avaliacaoPublicoLista;
    },

    async inserir(avaliacaoPublico: AvaliacaoPublico) {
      try {
        const res = await avaliacaoPublicoService.inserir(avaliacaoPublico);
        this.setAvaliacaoPublico(res);
      } catch (error) {
        console.error("Erro ao inserir avaliação:", error);
      }
    },

    async listar() {
      try {
        const res = await avaliacaoPublicoService.listar();
        this.setAvaliacaoPublicoLista(res);
      } catch (error) {
        console.error("Erro ao listar avaliações:", error);
      }
    },

    async obterPorId(id: number) {
      try {
        const res = await avaliacaoPublicoService.obterPorId(id);
        this.setAvaliacaoPublico(res);
      } catch (error) {
        console.error("Erro ao obter avaliação por ID:", error);
      }
    },

    async atualizar(avaliacaoPublico: AvaliacaoPublico) {
      try {
        const res = await avaliacaoPublicoService.atualizar(avaliacaoPublico);
        this.setAvaliacaoPublico(res);
      } catch (error) {
        console.error("Erro ao atualizar avaliação:", error);
      }
    },

    async remover(id: number) {
      try {
        await avaliacaoPublicoService.remover(id);
      } catch (error) {
        console.error("Erro ao remover avaliação:", error);
      }
    },

    avaliacao_publico_clear() {
      this.avaliacaoPublico = {} as AvaliacaoPublico;
    },

    avaliacao_publico_lista_clear() {
      this.avaliacaoPublicoLista = [];
    },

  }
})
