import axios from 'axios'
import { setHeaderAuth } from '../common/authHandler'

export const authService = {
  login: async (user: IAuth) => {
    return await axios.post('/login', user, setHeaderAuth());
  },
}