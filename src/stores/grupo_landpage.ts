import { defineStore } from 'pinia';
import { GrupoLandpage } from '../types/grupo_landpage';
import { grupoLandpageService } from '../service/grupo_landpage';

export const grupoLandpageStore = defineStore('idgrupolandpage', {
  state: () => ({
    grupoLandpage: {} as GrupoLandpage,
    grupoLandpageLista: [] as GrupoLandpage[],
  }),

  actions: {
    setGrupoLandpage(grupoLandpage: GrupoLandpage) {
      this.grupoLandpage = grupoLandpage;
    },

    setGrupoLandpageLista(grupoLandpageLista: GrupoLandpage[]) {
      this.grupoLandpageLista = grupoLandpageLista;
    },

    async inserir(grupoLandpage: GrupoLandpage) {
      try {
        const res = await grupoLandpageService.inserir(grupoLandpage);
        this.setGrupoLandpage(res);
      } catch (error) {
        console.error("Erro ao inserir grupo de landpage:", error);
      }
    },

    async listar() {
      try {
        const res = await grupoLandpageService.listar();
        this.setGrupoLandpageLista(res);
      } catch (error) {
        console.error("Erro ao listar grupos de landpage:", error);
      }
    },

    async obterPorId(id: number) {
      try {
        const res = await grupoLandpageService.obterPorId(id);
        this.setGrupoLandpage(res);
      } catch (error) {
        console.error("Erro ao obter grupo de landpage por ID:", error);
      }
    },

    async atualizar(grupoLandpage: GrupoLandpage) {
      try {
        const res = await grupoLandpageService.atualizar(grupoLandpage);
        this.setGrupoLandpage(res);
      } catch (error) {
        console.error("Erro ao atualizar grupo de landpage:", error);
      }
    },

    async remover(id: number) {
      try {
        await grupoLandpageService.remover(id);
      } catch (error) {
        console.error("Erro ao remover grupo de landpage:", error);
      }
    },

    grupoLandpage_clear() {
      this.grupoLandpage = {} as GrupoLandpage;
    },

    grupoLandpage_lista_clear() {
      this.grupoLandpageLista = [];
    },
  }
});
