import { defineStore } from 'pinia';
import { ConteudoProgramatico } from '../types/conteudo_programatico';
import { conteudoProgramaticoService } from '../service/conteudo_programatico';

export const conteudoProgramaticoStore = defineStore('idconteudoprogramatico', {
  state: () => ({
    conteudoProgramatico: {} as ConteudoProgramatico,
    conteudoProgramaticoLista: [] as ConteudoProgramatico[],
  }),

  actions: {
    setConteudoProgramatico(conteudoProgramatico: ConteudoProgramatico) {
      this.conteudoProgramatico = conteudoProgramatico;
    },

    setConteudoProgramaticoLista(conteudoProgramaticoLista: ConteudoProgramatico[]) {
      this.conteudoProgramaticoLista = conteudoProgramaticoLista;
    },

    async inserir(conteudoProgramatico: ConteudoProgramatico) {
      try {
        const res = await conteudoProgramaticoService.inserir(conteudoProgramatico);
        this.setConteudoProgramatico(res);
      } catch (error) {
        console.error("Erro ao inserir conteúdo programático:", error);
      }
    },

    async listar() {
      try {
        const res = await conteudoProgramaticoService.listar();
        this.setConteudoProgramaticoLista(res);
      } catch (error) {
        console.error("Erro ao listar conteúdos programáticos:", error);
      }
    },

    async obterPorId(id: number) {
      try {
        const res = await conteudoProgramaticoService.obterPorId(id);
        this.setConteudoProgramatico(res);
      } catch (error) {
        console.error("Erro ao obter conteúdo programático por ID:", error);
      }
    },

    async atualizar(conteudoProgramatico: ConteudoProgramatico) {
      try {
        const res = await conteudoProgramaticoService.atualizar(conteudoProgramatico);
        this.setConteudoProgramatico(res);
      } catch (error) {
        console.error("Erro ao atualizar conteúdo programático:", error);
      }
    },

    async remover(id: number) {
      try {
        await conteudoProgramaticoService.remover(id);
      } catch (error) {
        console.error("Erro ao remover conteúdo programático:", error);
      }
    },

    conteudoProgramatico_clear() {
      this.conteudoProgramatico = {} as ConteudoProgramatico;
    },

    conteudoProgramatico_lista_clear() {
      this.conteudoProgramaticoLista = [];
    },

  }
});
