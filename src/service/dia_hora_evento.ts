import axios from 'axios'
import { DiaHoraEvento } from '../types/dia_hora_evento'

export const diaHoraEventoService = {
  inserir: async (diaHoraEvento: DiaHoraEvento): Promise<DiaHoraEvento> => {
    const response = await axios.post('/diahoraevento', diaHoraEvento)
    return response.data as DiaHoraEvento
  },

  listar: async (): Promise<DiaHoraEvento[]> => {
    const response = await axios.get('/diahoraevento')
    return response.data as DiaHoraEvento[]
  },

  obterPorId: async (id: number): Promise<DiaHoraEvento> => {
    const response = await axios.get(`/diahoraevento/${id}`)
    return response.data as DiaHoraEvento
  },

  atualizar: async (diaHoraEvento: DiaHoraEvento): Promise<DiaHoraEvento> => {
    const response = await axios.put('/diahoraevento', diaHoraEvento)
    return response.data as DiaHoraEvento
  },

  remover: async (id: number): Promise<void> => {
    await axios.delete(`/diahoraevento/${id}`)
  },
}
