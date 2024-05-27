import axios from 'axios'
import { GrupoLandpage } from '../types/grupo_landpage'

export const grupoLandpageService = {
  inserir: async (grupoLandpage: GrupoLandpage): Promise<GrupoLandpage> => {
    const response = await axios.post('/grupolandpage', grupoLandpage)
    return response.data as GrupoLandpage
  },

  listar: async (): Promise<GrupoLandpage[]> => {
    const response = await axios.get('/grupolandpage')
    return response.data as GrupoLandpage[]
  },

  obterPorId: async (id: number): Promise<GrupoLandpage> => {
    const response = await axios.get(`/grupolandpage/${id}`)
    return response.data as GrupoLandpage
  },

  atualizar: async (grupoLandpage: GrupoLandpage): Promise<GrupoLandpage> => {
    const response = await axios.put('/grupolandpage', grupoLandpage)
    return response.data as GrupoLandpage
  },

  remover: async (id: number): Promise<void> => {
    await axios.delete(`/grupolandpage/${id}`)
  },
}
