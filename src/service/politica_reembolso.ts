import axios from 'axios'
import { PoliticaReembolso } from '../types/politica_reembolso'

export const PoliticaReembolsoService = {
  inserir: async (politicaReembolso: PoliticaReembolso): Promise<PoliticaReembolso> => {
    const response = await axios.post('/politicareembolso', politicaReembolso)
    return response.data as PoliticaReembolso
  },

  listar: async (): Promise<PoliticaReembolso[]> => {
    const response = await axios.get('/politicareembolso')
    return response.data as PoliticaReembolso[]
  },

  obterPorId: async (id: number): Promise<PoliticaReembolso> => {
    const response = await axios.get(`/politicareembolso/${id}`)
    return response.data as PoliticaReembolso
  },

  atualizar: async (politicaReembolso: PoliticaReembolso): Promise<PoliticaReembolso> => {
    const response = await axios.put('/politicareembolso', politicaReembolso)
    return response.data as PoliticaReembolso
  },

  remover: async (id: number): Promise<void> => {
    await axios.delete(`/politicareembolso/${id}`)
  },
}
