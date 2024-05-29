import { defineStore } from 'pinia';
import { Cliente } from '../types/cliente';
import { clienteService } from '../service/cliente';

export const clienteStore = defineStore('idcliente', {
  state: () => ({
    cliente: {} as Cliente,
    clienteLista: [] as Cliente[],
  }),

  actions: {
    setCliente(cliente: Cliente) {
      this.cliente = cliente;
    },

    setClienteLista(clienteLista: Cliente[]) {
      this.clienteLista = clienteLista;
    },

    async inserir(cliente: Cliente) {
      try {
        const res = await clienteService.inserir(cliente);
        this.setCliente(res);
      } catch (error) {
        console.error("Erro ao inserir cliente:", error);
      }
    },

    async listar() {
      try {
        const res = await clienteService.listar();
        this.setClienteLista(res);
      } catch (error) {
        console.error("Erro ao listar clientes:", error);
      }
    },

    async obterPorId(id: number) {
      try {
        const res = await clienteService.obterPorId(id);
        this.setCliente(res);
      } catch (error) {
        console.error("Erro ao obter cliente por ID:", error);
      }
    },

    async atualizar(cliente: Cliente) {
      try {
        const res = await clienteService.atualizar(cliente);
        this.setCliente(res);
      } catch (error) {
        console.error("Erro ao atualizar cliente:", error);
      }
    },

    async remover(id: number) {
      try {
        await clienteService.remover(id);
      } catch (error) {
        console.error("Erro ao remover cliente:", error);
      }
    },

    cliente_clear() {
      this.cliente = {} as Cliente;
    },

    cliente_lista_clear() {
      this.clienteLista = [];
    },

  }
});
