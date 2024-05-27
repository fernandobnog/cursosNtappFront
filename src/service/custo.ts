import axios from 'axios'
import { Custo } from '../types/custo'

export const custoService = {
  inserir: async (custo: Custo): Promise<Custo> => {
    const response = await axios.post('/custo', custo)
    return response.data as Custo
  },

  listar: async (): Promise<Custo[]> => {
    const response = await axios.get('/custo')
    return response.data as Custo[]
  },

  obterPorId: async (id: number): Promise<Custo> => {
    const response = await axios.get(`/custo/${id}`)
    return response.data as Custo
  },

  atualizar: async (custo: Custo): Promise<Custo> => {
    const response = await axios.put('/custo', custo)
    return response.data as Custo
  },

  remover: async (id: number): Promise<void> => {
    await axios.delete(`/custo/${id}`)
  },
}
