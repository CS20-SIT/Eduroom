import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENTRYPOINT_URL,
  withCredentials: true,
  baseURL: 'http://localhost'
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (!error.response) {
      console.log('Please check your internet connection.')
      error.response = { data: {} }
      error.response.data = { success: 'false', error: 'Server Error' }
      return Promise.reject(error)
    }

    return Promise.reject(error)
  }
)

export default instance
