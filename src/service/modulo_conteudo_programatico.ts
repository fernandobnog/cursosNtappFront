import axios from 'axios'
import { ModuloConteudoProgramatico } from '../types/modulo_conteudo_programatico'

export const moduloConteudoProgramaticoService = {
  inserir: async (moduloConteudoProgramatico: ModuloConteudoProgramatico): Promise<ModuloConteudoProgramatico> => {
    const response = await axios.post('/moduloconteudoprogramatico', moduloConteudoProgramatico)
    return response.data as ModuloConteudoProgramatico
  },

  listar: async (): Promise<ModuloConteudoProgramatico[]> => {
    const response = await axios.get('/moduloconteudoprogramatico')
    return response.data as ModuloConteudoProgramatico[]
  },

  obterPorId: async (id: number): Promise<ModuloConteudoProgramatico> => {
    const response = await axios.get(`/moduloconteudoprogramatico/${id}`)
    return response.data as ModuloConteudoProgramatico
  },

  atualizar: async (moduloConteudoProgramatico: ModuloConteudoProgramatico): Promise<ModuloConteudoProgramatico> => {
    const response = await axios.put('/moduloconteudoprogramatico', moduloConteudoProgramatico)
    return response.data as ModuloConteudoProgramatico
  },

  remover: async (id: number): Promise<void> => {
    await axios.delete(`/moduloconteudoprogramatico/${id}`)
  },
}
