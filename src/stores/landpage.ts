import { defineStore } from 'pinia';
import { Landpage } from '../types/landpage';
import { landpageService } from '../service/landpage';

export const landpageStore = defineStore('idlandpage', {
  state: () => ({
    landpage: {} as Landpage,
    landpageLista: [] as Landpage[],
  }),

  actions: {
    setLandpage(landpage: Landpage) {
      this.landpage = landpage;
    },

    setLandpageLista(landpageLista: Landpage[]) {
      this.landpageLista = landpageLista;
    },

    async inserir(landpage: Landpage) {
      try {
        const res = await landpageService.inserir(landpage);
        this.setLandpage(res);
      } catch (error) {
        console.error("Erro ao inserir landpage:", error);
      }
    },

    async listar() {
      try {
        const res = await landpageService.listar();
        this.setLandpageLista(res);
      } catch (error) {
        console.error("Erro ao listar landpages:", error);
      }
    },

    async obterPorId(id: number) {
      try {
        const res = await landpageService.obterPorId(id);
        this.setLandpage(res);
      } catch (error) {
        console.error("Erro ao obter landpage por ID:", error);
      }
    },

    async atualizar(landpage: Landpage) {
      try {
        const res = await landpageService.atualizar(landpage);
        this.setLandpage(res);
      } catch (error) {
        console.error("Erro ao atualizar landpage:", error);
      }
    },

    async remover(id: number) {
      try {
        await landpageService.remover(id);
      } catch (error) {
        console.error("Erro ao remover landpage:", error);
      }
    },

    landpage_clear() {
      this.landpage = {} as Landpage;
    },

    landpage_lista_clear() {
      this.landpageLista = [];
    },
  }
});
