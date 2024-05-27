import axios from 'axios'
import { setHeaderAuth } from '../common/authHandler'
import { AuthenticationRequest, User } from '../types/auth'

export const authService = {

  login: async (authenticationRequest: AuthenticationRequest): Promise<string> => {
    return axios.post('/login', authenticationRequest, setHeaderAuth())
      .then(response => {
        return response.data as string
      })
  },

  registrar: async (user: User): Promise<string> => {
    return axios.post('/login', user, setHeaderAuth())
      .then(response => {
        return response.data as string
      })
  },
}