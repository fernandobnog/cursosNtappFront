import axios from 'axios'
import { Landpage } from '../types/landpage'

export const landpageService = {
  inserir: async (landpage: Landpage): Promise<Landpage> => {
    const response = await axios.post('/landpage', landpage)
    return response.data as Landpage
  },

  listar: async (): Promise<Landpage[]> => {
    const response = await axios.get('/landpage')
    return response.data as Landpage[]
  },

  obterPorId: async (id: number): Promise<Landpage> => {
    const response = await axios.get(`/landpage/${id}`)
    return response.data as Landpage
  },

  atualizar: async (landpage: Landpage): Promise<Landpage> => {
    const response = await axios.put('/landpage', landpage)
    return response.data as Landpage
  },

  remover: async (id: number): Promise<void> => {
    await axios.delete(`/landpage/${id}`)
  },
}
