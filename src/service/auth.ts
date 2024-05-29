import axios from 'axios'
import { setHeaderAuth } from '../common/authHandler'
import { AuthenticationRequest, User } from '../types/auth'

export const authService = {

  login: async (authenticationRequest: AuthenticationRequest): Promise<string> => {
    try {
      const response = await axios.post('/login', authenticationRequest, setHeaderAuth());
      return response.data as string;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error.response?.status;
      } else {
        throw error;
      }
    }
  },

  registrar: async (user: User): Promise<string> => {
    try {
      const response = await axios.post('/registrar', user, setHeaderAuth());
      return response.data as string;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error.response?.status;
      } else {
        throw error;
      }
    }
  }

}