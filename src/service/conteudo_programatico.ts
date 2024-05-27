import axios from 'axios'
import { ConteudoProgramatico } from '../types/conteudo_programatico'

export const conteudoProgramaticoService = {
  inserir: async (conteudoProgramatico: ConteudoProgramatico): Promise<ConteudoProgramatico> => {
    const response = await axios.post('/conteudoprogramatico', conteudoProgramatico)
    return response.data as ConteudoProgramatico
  },

  listar: async (): Promise<ConteudoProgramatico[]> => {
    const response = await axios.get('/conteudoprogramatico')
    return response.data as ConteudoProgramatico[]
  },

  obterPorId: async (id: number): Promise<ConteudoProgramatico> => {
    const response = await axios.get(`/conteudoprogramatico/${id}`)
    return response.data as ConteudoProgramatico
  },

  atualizar: async (conteudoProgramatico: ConteudoProgramatico): Promise<ConteudoProgramatico> => {
    const response = await axios.put('/conteudoprogramatico', conteudoProgramatico)
    return response.data as ConteudoProgramatico
  },

  remover: async (id: number): Promise<void> => {
    await axios.delete(`/conteudoprogramatico/${id}`)
  },
}
