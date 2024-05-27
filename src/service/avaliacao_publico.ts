import axios from 'axios'
import { AvaliacaoPublico } from '../types/avaliacao_publico'

export const avaliacaoPublicoService = {
  inserir: async (avaliacaoPublico: AvaliacaoPublico): Promise<AvaliacaoPublico> => {
    const response = await axios.post('/avaliacaopublico', avaliacaoPublico)
    return response.data as AvaliacaoPublico
  },

  listar: async (): Promise<AvaliacaoPublico[]> => {
    const response = await axios.get('/avaliacaopublico')
    return response.data as AvaliacaoPublico[]
  },

  obterPorId: async (id: number): Promise<AvaliacaoPublico> => {
    const response = await axios.get(`/avaliacaopublico/${id}`)
    return response.data as AvaliacaoPublico
  },

  atualizar: async (avaliacaoPublico: AvaliacaoPublico): Promise<AvaliacaoPublico> => {
    const response = await axios.put('/avaliacaopublico', avaliacaoPublico)
    return response.data as AvaliacaoPublico
  },

  remover: async (id: number): Promise<void> => {
    await axios.delete(`/avaliacaopublico/${id}`)
  },
}
