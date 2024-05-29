import { defineStore } from 'pinia';
import { ModuloConteudoProgramatico } from '../types/modulo_conteudo_programatico';
import { moduloConteudoProgramaticoService } from '../service/modulo_conteudo_programatico';

export const moduloConteudoProgramaticoStore = defineStore('idmoduloconteudoprogramatico', {
  state: () => ({
    moduloConteudoProgramatico: {} as ModuloConteudoProgramatico,
    moduloConteudoProgramaticoLista: [] as ModuloConteudoProgramatico[],
  }),

  actions: {
    setModuloConteudoProgramatico(moduloConteudoProgramatico: ModuloConteudoProgramatico) {
      this.moduloConteudoProgramatico = moduloConteudoProgramatico;
    },

    setModuloConteudoProgramaticoLista(moduloConteudoProgramaticoLista: ModuloConteudoProgramatico[]) {
      this.moduloConteudoProgramaticoLista = moduloConteudoProgramaticoLista;
    },

    async inserir(moduloConteudoProgramatico: ModuloConteudoProgramatico) {
      try {
        const res = await moduloConteudoProgramaticoService.inserir(moduloConteudoProgramatico);
        this.setModuloConteudoProgramatico(res);
      } catch (error) {
        console.error("Erro ao inserir módulo de conteúdo programático:", error);
      }
    },

    async listar() {
      try {
        const res = await moduloConteudoProgramaticoService.listar();
        this.setModuloConteudoProgramaticoLista(res);
      } catch (error) {
        console.error("Erro ao listar módulos de conteúdo programático:", error);
      }
    },

    async obterPorId(id: number) {
      try {
        const res = await moduloConteudoProgramaticoService.obterPorId(id);
        this.setModuloConteudoProgramatico(res);
      } catch (error) {
        console.error("Erro ao obter módulo de conteúdo programático por ID:", error);
      }
    },

    async atualizar(moduloConteudoProgramatico: ModuloConteudoProgramatico) {
      try {
        const res = await moduloConteudoProgramaticoService.atualizar(moduloConteudoProgramatico);
        this.setModuloConteudoProgramatico(res);
      } catch (error) {
        console.error("Erro ao atualizar módulo de conteúdo programático:", error);
      }
    },

    async remover(id: number) {
      try {
        await moduloConteudoProgramaticoService.remover(id);
      } catch (error) {
        console.error("Erro ao remover módulo de conteúdo programático:", error);
      }
    },

    moduloConteudoProgramatico_clear() {
      this.moduloConteudoProgramatico = {} as ModuloConteudoProgramatico;
    },

    moduloConteudoProgramatico_lista_clear() {
      this.moduloConteudoProgramaticoLista = [];
    },
  }
});
