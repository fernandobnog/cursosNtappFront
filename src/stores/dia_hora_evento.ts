import { defineStore } from 'pinia';
import { DiaHoraEvento } from '../types/dia_hora_evento';
import { diaHoraEventoService } from '../service/dia_hora_evento';

export const diaHoraEventoStore = defineStore('iddiahoraevento', {
  state: () => ({
    diaHoraEvento: {} as DiaHoraEvento,
    diaHoraEventoLista: [] as DiaHoraEvento[],
  }),

  actions: {
    setDiaHoraEvento(diaHoraEvento: DiaHoraEvento) {
      this.diaHoraEvento = diaHoraEvento;
    },

    setDiaHoraEventoLista(diaHoraEventoLista: DiaHoraEvento[]) {
      this.diaHoraEventoLista = diaHoraEventoLista;
    },

    async inserir(diaHoraEvento: DiaHoraEvento) {
      try {
        const res = await diaHoraEventoService.inserir(diaHoraEvento);
        this.setDiaHoraEvento(res);
      } catch (error) {
        console.error("Erro ao inserir dia/hora do evento:", error);
      }
    },

    async listar() {
      try {
        const res = await diaHoraEventoService.listar();
        this.setDiaHoraEventoLista(res);
      } catch (error) {
        console.error("Erro ao listar dia/hora dos eventos:", error);
      }
    },

    async obterPorId(id: number) {
      try {
        const res = await diaHoraEventoService.obterPorId(id);
        this.setDiaHoraEvento(res);
      } catch (error) {
        console.error("Erro ao obter dia/hora do evento por ID:", error);
      }
    },

    async atualizar(diaHoraEvento: DiaHoraEvento) {
      try {
        const res = await diaHoraEventoService.atualizar(diaHoraEvento);
        this.setDiaHoraEvento(res);
      } catch (error) {
        console.error("Erro ao atualizar dia/hora do evento:", error);
      }
    },

    async remover(id: number) {
      try {
        await diaHoraEventoService.remover(id);
      } catch (error) {
        console.error("Erro ao remover dia/hora do evento:", error);
      }
    },

    diaHoraEvento_clear() {
      this.diaHoraEvento = {} as DiaHoraEvento;
    },

    diaHoraEvento_lista_clear() {
      this.diaHoraEventoLista = [];
    },
  }
});
