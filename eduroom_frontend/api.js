import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
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
