import axios from 'axios'
import { Instrutor } from '../types/instrutor'

export const instrutorService = {
  inserir: async (instrutor: Instrutor): Promise<Instrutor> => {
    const response = await axios.post('/instrutor', instrutor)
    return response.data as Instrutor
  },

  listar: async (): Promise<Instrutor[]> => {
    const response = await axios.get('/instrutor')
    return response.data as Instrutor[]
  },

  obterPorId: async (id: number): Promise<Instrutor> => {
    const response = await axios.get(`/instrutor/${id}`)
    return response.data as Instrutor
  },

  atualizar: async (instrutor: Instrutor): Promise<Instrutor> => {
    const response = await axios.put('/instrutor', instrutor)
    return response.data as Instrutor
  },

  remover: async (id: number): Promise<void> => {
    await axios.delete(`/instrutor/${id}`)
  },
}
