import axios from 'axios'
import { Cliente } from '../types/cliente'

export const clienteService = {
  inserir: async (cliente: Cliente): Promise<Cliente> => {
    const response = await axios.post('/cliente', cliente)
    return response.data as Cliente
  },

  listar: async (): Promise<Cliente[]> => {
    const response = await axios.get('/cliente')
    return response.data as Cliente[]
  },

  obterPorId: async (id: number): Promise<Cliente> => {
    const response = await axios.get(`/cliente/${id}`)
    return response.data as Cliente
  },

  atualizar: async (cliente: Cliente): Promise<Cliente> => {
    const response = await axios.put('/cliente', cliente)
    return response.data as Cliente
  },

  remover: async (id: number): Promise<void> => {
    await axios.delete(`/cliente/${id}`)
  },
}
