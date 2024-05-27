import axios from 'axios'
import { Endereco } from '../types/endereco'

export const enderecoService = {
  inserir: async (endereco: Endereco): Promise<Endereco> => {
    const response = await axios.post('/endereco', endereco)
    return response.data as Endereco
  },

  listar: async (): Promise<Endereco[]> => {
    const response = await axios.get('/endereco')
    return response.data as Endereco[]
  },

  obterPorId: async (id: number): Promise<Endereco> => {
    const response = await axios.get(`/endereco/${id}`)
    return response.data as Endereco
  },

  atualizar: async (endereco: Endereco): Promise<Endereco> => {
    const response = await axios.put('/endereco', endereco)
    return response.data as Endereco
  },

  remover: async (id: number): Promise<void> => {
    await axios.delete(`/endereco/${id}`)
  },
}
